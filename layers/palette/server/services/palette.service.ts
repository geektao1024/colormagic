import { ObjectId, type Filter, type Sort } from 'mongodb';
import type { ListPaletteDto, ListPaletteInputDto, PaletteDto } from '../dtos/palette.dto';
import { mapCreatePalettePrompt, mapPaletteEntityToDto, mapTagsPrompt } from '../helpers/palette.helper';
import type { PaletteRepository } from '../repositories/palette.repository';
import type { ListPaletteOutput } from '../types/pagination.type';
import type { PaletteEntity } from '../entities/palette.entity';
import { PaletteSortBy } from '../../types';
import type { PaletteLikeService } from './palette-like.service';
import type { AIService } from '~/layers/ai/server/services/ai.service';
import { arrangeColors } from '../../utils/color-arrange.util';
import { Database } from '../../database/database';
import type { Palette } from '../entities/palette.entity';

export type ListPaletteFilter = Pick<ListPaletteInputDto, 'sortBy'> & {
  tags?: string[]
  userId?: string
  limit?: number;
  cursor?: string;
};

export interface PaletteInput {
  prompt: string;
  userId?: string | null;
}

// 简单的缓存机制，避免重复调用API
const apiCache = new Map<string, {
  result: PaletteEntity;
  timestamp: number;
}>();
const CACHE_TTL = 30 * 60 * 1000; // 30分钟缓存

export class PaletteService {
  constructor(
    private readonly repository: PaletteRepository,
    private readonly paletteLikeService: PaletteLikeService,
    private readonly aiService: AIService
  ) {}

  public getById(id: string) {
    return this.repository.findById(id);
  }

  public async list(filter: ListPaletteFilter): Promise<ListPaletteOutput<PaletteDto>> {
    const query: Filter<PaletteEntity> = {};

    if (filter.tags && filter.tags.length > 0) {
      query.tags = { $in: filter.tags };
    }

    if (filter.userId) {
      query.userId = new ObjectId(filter.userId);
    }

    let sort: Sort = {};
    if (filter.sortBy) {
      switch (filter.sortBy) {
        case PaletteSortBy.NEW:
          sort = { createdAt: -1 };
          break;
        case PaletteSortBy.LIKES:
          sort = { likesCount: -1 };
          break;
        case PaletteSortBy.TRENDING:
          sort = { likesCount: -1, createdAt: -1 };
          break;
      }
    } else {
      sort = { createdAt: -1 };
    }

    const entities = await this.repository.find(query, sort);
    const dtos = entities.map((entity) => mapPaletteEntityToDto(entity));

    return {
      items: dtos,
      count: dtos.length
    };
  }

  public async count(): Promise<number> {
    return this.repository.count();
  }

  // 获取调色板
  public async getByString(input: string): Promise<PaletteDto> {
    try {
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

      // 确保至少有5种颜色
      if (colorsNew.length < 5) {
        // 添加默认颜色以确保有5种颜色
        const defaultColors = ['#3498db', '#2ecc71', '#e74c3c', '#f39c12', '#9b59b6'];
        while (colorsNew.length < 5) {
          colorsNew.push(defaultColors[colorsNew.length % defaultColors.length]);
        }
      }

      const entity = await this.repository.create({
        colors: [colorsNew[0], colorsNew[1], colorsNew[2], colorsNew[3], colorsNew[4]],
        text: name,
        tags,
        createdAt: new Date()
      });

      return mapPaletteEntityToDto(entity);
    } catch (error) {
      console.error('创建调色板时出错:', error);
      
      // 创建一个基于输入的默认调色板
      const defaultColors = ['#3498db', '#2ecc71', '#e74c3c', '#f39c12', '#9b59b6'] as [string, string, string, string, string];
      const defaultName = input ? `${input} Palette` : 'Cool Palette';
      const defaultTags = input ? [input.toLowerCase()] : ['cool'];
      
      const entity = await this.repository.create({
        colors: defaultColors,
        text: defaultName,
        tags: defaultTags,
        createdAt: new Date()
      });
      
      return mapPaletteEntityToDto(entity);
    }
  }

  /**
   * 安全调用AI服务的方法，带错误处理和回退机制
   */
  private async safeCallAiService(prompt: string): Promise<string[]> {
    try {
      // 检查方法是否存在
      if (typeof this.aiService.getByPrompt === 'function') {
        return await this.aiService.getByPrompt(prompt);
      } else if (typeof this.aiService.getByString === 'function') {
        // 尝试备用方法名
        return await this.aiService.getByString(prompt);
      } else {
        // 如果两个方法都不存在，使用备用响应
        console.error('[Palette] AI服务没有可用的方法来处理提示');
        return ['#3498DB #2ECC71 #E74C3C #F39C12 #9B59B6 [name:Fallback Palette] [tags:fallback,error,backup]'];
      }
    } catch (error) {
      console.error('[Palette] 调用AI服务时出错:', error);
      // 返回备用响应
      return ['#3498DB #2ECC71 #E74C3C #F39C12 #9B59B6 [name:Error Palette] [tags:error,fallback,system]'];
    }
  }

  /**
   * 根据提示词获取调色板
   * @private
   */
  private async getPaletteByPrompt(prompt: string): Promise<PaletteEntity> {
    // 检查缓存
    const cacheKey = prompt.toLowerCase();
    const cachedItem = apiCache.get(cacheKey);
    
    if (cachedItem && (Date.now() - cachedItem.timestamp < CACHE_TTL)) {
      console.log('[Palette] 从缓存返回调色板');
      return cachedItem.result;
    }

    const promptTemplate = mapCreatePalettePrompt(prompt);
    // 使用安全调用方法替代直接调用
    const response = await this.safeCallAiService(promptTemplate);

    const colors = [];
    if (response[0] !== undefined) {
      const colorText = `#${response[0]}`;
      colors.push(...(colorText.match(/#[0-9a-fA-F]{6}/g) ?? []));
    }

    const name = response[0]?.match(/\[name:(.*?)\]/)?.[1] ?? 'Cool Palette';
    const tags = response[0]?.match(/\[tags:(.*?)\]/)?.[1]?.toLowerCase().split(',') ?? [];

    /** @description arrange the colors in order */
    const colorsNew = arrangeColors([...new Set(colors)], {
      brightness: 0,
      saturation: 0,
      warmth: 0
    });
    
    // 确保至少有5种颜色
    if (colorsNew.length < 5) {
      // 添加默认颜色
      const defaultColors = ['#3498db', '#2ecc71', '#e74c3c', '#f39c12', '#9b59b6'];
      while (colorsNew.length < 5) {
        colorsNew.push(defaultColors[colorsNew.length % defaultColors.length]);
      }
    }

    const palette = {
      colors: [colorsNew[0], colorsNew[1], colorsNew[2], colorsNew[3], colorsNew[4]],
      text: name,
      tags,
      createdAt: new Date()
    } as PaletteEntity;
    
    // 存入缓存
    apiCache.set(cacheKey, {
      result: palette,
      timestamp: Date.now()
    });
    
    return palette;
  }

  public async create(input: PaletteInput): Promise<PaletteDto> {
    try {
      let palette: PaletteEntity;
      
      // 跟踪API调用失败尝试
      let retryCount = 0;
      const maxRetries = 2;
      
      try {
        palette = await this.getPaletteByPrompt(input.prompt);
      } catch (initialError) {
        console.error(`[Palette] 初始调色板生成失败:`, initialError);
        
        // 如果初始尝试失败，开始重试
        let success = false;
        
        while (!success && retryCount < maxRetries) {
          console.log(`[Palette] 正在重试... (${retryCount + 1}/${maxRetries})`);
          
          // 等待短暂时间再重试
          await new Promise(resolve => setTimeout(resolve, 1000 * (retryCount + 1)));
          
          // 使用轻微修改的提示词重试
          let modifiedPrompt = input.prompt;
          if (retryCount > 0) {
            modifiedPrompt = `${input.prompt} in ${['vibrant', 'bright', 'colorful', 'modern', 'aesthetic'][retryCount % 5]} style`;
          }
          
          try {
            palette = await this.getPaletteByPrompt(modifiedPrompt);
            success = true;
          } catch (retryError) {
            console.error(`[Palette] 重试时出错:`, retryError);
            retryCount++;
          }
        }
        
        // 如果所有重试都失败，生成备用调色板
        if (!success) {
          console.log('[Palette] 所有重试都失败，生成备用调色板');
          palette = this.createFallbackPalette(input.prompt);
        }
      }
      
      // 保存到数据库
      let entity;
      if ('userId' in input && input.userId) {
        entity = await this.repository.create({
          ...palette,
          userId: new ObjectId(input.userId)
        });
      } else {
        entity = await this.repository.create(palette);
      }
      
      return mapPaletteEntityToDto(entity);
    } catch (error) {
      console.error('[Palette] 创建调色板时出错:', error);
      
      // 创建备用调色板
      const fallbackPalette = this.createFallbackPalette(input.prompt);
      
      // 保存到数据库
      let entity;
      if ('userId' in input && input.userId) {
        entity = await this.repository.create({
          ...fallbackPalette,
          userId: new ObjectId(input.userId)
        });
      } else {
        entity = await this.repository.create(fallbackPalette);
      }
      
      return mapPaletteEntityToDto(entity);
    }
  }
  
  /**
   * 创建备用调色板
   */
  private createFallbackPalette(prompt: string): PaletteEntity {
    console.log('[Palette] 创建备用调色板，提示词:', prompt);
    
    // 根据提示词中的关键字生成合适的调色板
    const promptLower = prompt.toLowerCase();
    let colors: [string, string, string, string, string];
    let name = '备用调色板';
    let tags: string[] = ['生成失败', '备用', 'fallback'];
    
    if (promptLower.includes('red') || promptLower.includes('红')) {
      colors = ['#FF5733', '#C70039', '#900C3F', '#581845', '#FFC300'];
      name = '红色系调色板';
      tags = ['红色', '暖色', '热情', 'vibrant', 'warm'];
    } else if (promptLower.includes('blue') || promptLower.includes('蓝')) {
      colors = ['#1A5276', '#2874A6', '#3498DB', '#85C1E9', '#D6EAF8'];
      name = '蓝色系调色板';
      tags = ['蓝色', '冷色', '平静', 'cool', 'calm'];
    } else if (promptLower.includes('green') || promptLower.includes('绿')) {
      colors = ['#0B5345', '#117A65', '#16A085', '#73C6B6', '#D1F2EB'];
      name = '绿色系调色板';
      tags = ['绿色', '自然', '清新', 'nature', 'fresh'];
    } else if (promptLower.includes('yellow') || promptLower.includes('黄') || promptLower.includes('sunflower')) {
      colors = ['#F1C40F', '#F39C12', '#D35400', '#1E8449', '#117A65'];
      name = '向日葵调色板';
      tags = ['黄色', '阳光', '明亮', 'sunflower', 'bright'];
    } else if (promptLower.includes('purple') || promptLower.includes('紫')) {
      colors = ['#5B2C6F', '#7D3C98', '#A569BD', '#D2B4DE', '#F4ECF7'];
      name = '紫色系调色板';
      tags = ['紫色', '高贵', '神秘', 'royal', 'elegant'];
    } else if (promptLower.includes('pink') || promptLower.includes('粉')) {
      colors = ['#E91E63', '#F06292', '#F8BBD0', '#FF80AB', '#AD1457'];
      name = '粉色系调色板';
      tags = ['粉色', '温柔', '柔美', 'pink', 'gentle'];
    } else if (promptLower.includes('beach') || promptLower.includes('ocean') || promptLower.includes('海')) {
      colors = ['#1A5276', '#2E86C1', '#85C1E9', '#F0B27A', '#E67E22'];
      name = '海滩日落调色板';
      tags = ['海滩', '海洋', '日落', 'beach', 'sunset'];
    } else {
      // 默认的多彩调色板
      colors = ['#E74C3C', '#8E44AD', '#3498DB', '#16A085', '#F39C12'];
      name = '多彩调色板';
      tags = ['多彩', '明亮', '现代', 'colorful', 'vibrant'];
    }
    
    return {
      colors,
      text: name,
      tags,
      createdAt: new Date()
    } as PaletteEntity;
  }

  public async getCountByTag(tag?: string): Promise<number> {
    const query: Filter<PaletteEntity> = {};

    if (tag) {
      query.tags = { $in: [tag.toLowerCase()] };
    }

    return this.repository.count(query);
  }

  /**
   * 获取标签
   */
  public async getTags(input?: string): Promise<string[]> {
    if (!input) {
      try {
        return (await this.repository.findTags())
          .filter((tag) => tag)
          .flat()
          .slice(0, 30);
      } catch (error) {
        console.error('[Palette] 获取所有标签时出错:', error);
        return [];
      }
    }

    try {
      const prompt = mapTagsPrompt(input);
      // 使用安全调用方法
      const response = await this.safeCallAiService(prompt);

      return response[0]
        .split(',')
        .map((tag) => tag.trim().replace(/["'`]/g, ''))
        .filter((tag) => tag);
    } catch (error) {
      console.error('[Palette] 获取标签时出错:', error);
      return input ? [input.toLowerCase()] : [];
    }
  }
}
