import { ObjectId, type Filter, type Sort } from 'mongodb';
import type { ListPaletteDto, ListPaletteInputDto, PaletteDto } from '../dtos/palette.dto';
import { mapCreatePalettePrompt, mapPaletteEntityToDto, mapTagsPrompt } from '../helpers/palette.helper';
import type { PaletteRepository } from '../repositories/palette.repository';
import { arrangeColors } from '../../utils/color-arrange.util';
import type { PaletteEntity } from '../entities/palette.entity';
import { PaletteSortBy } from '../../types';
import type { PaletteLikeService } from './palette-like.service';
import type { AIService } from '~/layers/ai/server/services/ai.service';

export type ListPaletteFilter = Pick<ListPaletteInputDto, 'sortBy'> & {
  tags?: string[]
  userId?: string
};

export class PaletteService {
  constructor(
    private readonly repository: PaletteRepository,
    private readonly aiService: AIService,
    private readonly likeService: PaletteLikeService
  ) {}

  public async list(page: number, size: number, filter: ListPaletteFilter): Promise<ListPaletteDto> {
    const colFilter: Filter<PaletteEntity> = {};
    let sort: Sort = { createdAt: -1 };

    if (filter.tags !== undefined) {
      colFilter.tags = {
        $all: filter.tags
      };
    }

    if (filter.sortBy === PaletteSortBy.POPULAR) {
      sort = { likesCount: -1 };
    }

    const [entities, count] = await Promise.all([
      this.repository.list(page, size, colFilter, sort),
      this.repository.count(colFilter)
    ]);

    /** @description link likes to palettes */
    let likedPaletteIds: string[] = [];
    if (filter.userId !== undefined) {
      const paletteIds = entities.map(v => v._id.toHexString());
      const likes = await this.likeService.listByPaletteIds(filter.userId, paletteIds);
      likedPaletteIds = likes.map(v => v.paletteId);
    }

    return {
      items: entities.map(entity => mapPaletteEntityToDto(entity, likedPaletteIds)),
      count
    };
  }

  public async listLiked(userId: string, page: number, size: number): Promise<ListPaletteDto> {
    const likes = await this.likeService.listByUserId(userId, page, size);
    const likedPaletteIds = likes.map(v => v.paletteId);

    const colFilter: Filter<PaletteEntity> = {
      _id: {
        $in: likes.map(v => new ObjectId(v.paletteId))
      }
    };

    const [entities, count] = await Promise.all([
      this.repository.list(0, size, colFilter, { createdAt: -1 }),
      this.repository.count(colFilter)
    ]);

    return {
      items: entities.map(entity => mapPaletteEntityToDto(entity, likedPaletteIds)),
      count
    };
  }

  public async getById(id: string, userId?: string): Promise<PaletteDto> {
    const entity = await this.repository.getById(id);
    if (entity === null) {
      throw createError({ statusCode: 404 });
    }

    /** @description link like to palettes */
    let likedPaletteIds: string[] = [];
    if (userId !== undefined) {
      const likes = await this.likeService.listByPaletteIds(userId, [entity._id.toHexString()]);
      likedPaletteIds = likes.map(v => v.paletteId);
    }

    return mapPaletteEntityToDto(entity, likedPaletteIds);
  }

  public async cloneById(id: string, colors: string[]): Promise<PaletteDto> {
    const found = await this.getById(id);
    const prompt = mapTagsPrompt(colors);
    const response = await this.aiService.getByPrompt(prompt);
    const tags = response[0].match(/\[tags:(.*?)\]/)?.[1]?.toLowerCase().split(',') ?? [];

    const entity = await this.repository.create({
      colors: [colors[0], colors[1], colors[2], colors[3], colors[4]],
      text: found.text,
      tags,
      createdAt: new Date()
    });

    return mapPaletteEntityToDto(entity);
  }

  public async create(input: string): Promise<PaletteDto> {
    const prompt = mapCreatePalettePrompt(input);
    const response = await this.aiService.getByPrompt(prompt);

    const colors = [];
    if (response[0] !== undefined) {
      const colorText = `#${response[0]}`;
      colors.push(...(colorText.match(/#[0-9a-fA-F]{6}/g) ?? []));
    }

    const name = response[0].match(/\[name:(.*?)\]/)?.[1] ?? 'Cool Palette';
    const tags = response[0].match(/\[tags:(.*?)\]/)?.[1]?.toLowerCase().split(',') ?? [];

    /** @description arrange the colors in order */
    const colorsNew = arrangeColors([...new Set(colors)], {
      brightness: 0,
      saturation: 0,
      warmth: 0
    });

    const entity = await this.repository.create({
      colors: [colorsNew[0], colorsNew[1], colorsNew[2], colorsNew[3], colorsNew[4]],
      text: name,
      tags,
      createdAt: new Date()
    });

    return mapPaletteEntityToDto(entity);
  }

  public async count(from?: Date): Promise<number> {
    console.log(`[palette.service] Count called with from date: ${from?.toISOString() || 'undefined'}`);
    
    try {
      // 构建查询过滤器
      const filter: Filter<PaletteEntity> = {};

      if (from !== undefined) {
        filter.createdAt = {
          $gte: from
        };
        console.log(`[palette.service] Filtering by createdAt >= ${from.toISOString()}`);
      }

      // 检查repository是否可用
      if (!this.repository) {
        console.error('[palette.service] Repository is undefined in count method');
        throw new Error('Repository not initialized');
      }

      // 检查count方法是否存在
      if (typeof this.repository.count !== 'function') {
        console.error('[palette.service] repository.count is not a function');
        throw new Error('Repository missing count method');
      }

      console.log(`[palette.service] Calling repository.count with filter: ${JSON.stringify(filter)}`);
      const result = await this.repository.count(filter);
      console.log(`[palette.service] Count result: ${result}`);
      
      return result;
    } catch (error: any) {
      console.error('[palette.service] Error in count method:', {
        message: error.message,
        stack: error.stack,
        name: error.name,
        timestamp: new Date().toISOString()
      });
      throw error;
    }
  }

  public async likeById(userId: string, id: string): Promise<void> {
    const found = await this.likeService.getByPaletteId(userId, id);
    if (found !== null) {
      throw createError({
        statusCode: 409,
        statusMessage: 'Already liked.'
      });
    }

    await Promise.all([
      this.likeService.create(userId, id),
      this.repository.updateLikesCount(id, 1)
    ]);
  }

  public async deleteLikeById(userId: string, id: string): Promise<void> {
    const found = await this.likeService.getByPaletteId(userId, id);
    if (found?.userId !== userId) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Unauthorized.'
      });
    }

    await Promise.all([
      this.likeService.delete(found.id),
      this.repository.updateLikesCount(id, -1)
    ]);
  }
}
