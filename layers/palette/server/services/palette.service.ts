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
      console.log('[PaletteService] 接收到调色板生成请求，关键词:', input);
      
      // 直接根据关键词生成不同的调色板，避免依赖AI服务
      const defaultPalette = this.generateKeywordBasedPalette(input);
      
      // 存入数据库
      const entity = await this.repository.create({
        colors: defaultPalette.colors,
        text: defaultPalette.name,
        tags: defaultPalette.tags,
        createdAt: new Date()
      });

      return mapPaletteEntityToDto(entity);
    } catch (error) {
      console.error('创建调色板时出错:', error);
      
      // 创建一个基于输入的默认调色板
      const defaultColors = ['#3498db', '#2ecc71', '#e74c3c', '#f39c12', '#9b59b6'] as [string, string, string, string, string];
      const defaultName = input ? `${input.charAt(0).toUpperCase() + input.slice(1)} Palette` : 'Cool Palette';
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
   * 根据关键词直接生成调色板，避免依赖不稳定的AI服务
   */
  private generateKeywordBasedPalette(keyword: string): { colors: [string, string, string, string, string], name: string, tags: string[] } {
    const keywordLower = keyword.toLowerCase().trim();
    
    // 为不同关键词提供预定义的调色板
    if (keywordLower.includes('red') || keywordLower.includes('红')) {
      return {
        colors: ['#FF5733', '#C70039', '#900C3F', '#581845', '#FFC300'],
        name: 'Red Elegance',
        tags: ['red', 'crimson', 'maroon', 'dark', 'vibrant']
      };
    } else if (keywordLower.includes('blue') || keywordLower.includes('蓝')) {
      return {
        colors: ['#1A5276', '#2874A6', '#3498DB', '#85C1E9', '#D6EAF8'],
        name: 'Ocean Blues',
        tags: ['blue', 'navy', 'sky', 'azure', 'water']
      };
    } else if (keywordLower.includes('green') || keywordLower.includes('绿')) {
      return {
        colors: ['#0B5345', '#117A65', '#16A085', '#73C6B6', '#D1F2EB'],
        name: 'Forest Green',
        tags: ['green', 'emerald', 'mint', 'jade', 'nature']
      };
    } else if (keywordLower.includes('yellow') || keywordLower.includes('黄') || keywordLower.includes('sunflower')) {
      return {
        colors: ['#F1C40F', '#F39C12', '#D35400', '#1E8449', '#117A65'],
        name: 'Sunflower Fields',
        tags: ['yellow', 'gold', 'warm', 'sunflower', 'autumn']
      };
    } else if (keywordLower.includes('purple') || keywordLower.includes('紫')) {
      return {
        colors: ['#5B2C6F', '#7D3C98', '#A569BD', '#D2B4DE', '#F4ECF7'],
        name: 'Purple Royalty',
        tags: ['purple', 'violet', 'lavender', 'royal', 'elegant']
      };
    } else if (keywordLower.includes('pink') || keywordLower.includes('粉')) {
      return {
        colors: ['#E91E63', '#F06292', '#F8BBD0', '#FF80AB', '#AD1457'],
        name: 'Pink Passion',
        tags: ['pink', 'rose', 'fuschia', 'feminine', 'vibrant']
      };
    } else if (keywordLower.includes('beach') || keywordLower.includes('ocean') || keywordLower.includes('海')) {
      return {
        colors: ['#1A5276', '#2E86C1', '#85C1E9', '#F0B27A', '#E67E22'],
        name: 'Beach Sunset',
        tags: ['beach', 'ocean', 'sunset', 'water', 'sand']
      };
    } else if (keywordLower.includes('forest') || keywordLower.includes('森林')) {
      return {
        colors: ['#145A32', '#196F3D', '#1E8449', '#52BE80', '#ABEBC6'],
        name: 'Forest Depths',
        tags: ['forest', 'green', 'nature', 'trees', 'calm']
      };
    } else if (keywordLower.includes('sunset') || keywordLower.includes('夕阳')) {
      return {
        colors: ['#1D4350', '#E67E22', '#E74C3C', '#6C3483', '#2C3E50'],
        name: 'Evening Sunset',
        tags: ['sunset', 'dusk', 'evening', 'warm', 'dramatic']
      };
    } else if (keywordLower.includes('spring') || keywordLower.includes('春')) {
      return {
        colors: ['#27AE60', '#2ECC71', '#F1C40F', '#F39C12', '#ECF0F1'],
        name: 'Spring Bloom',
        tags: ['spring', 'fresh', 'bloom', 'bright', 'nature']
      };
    } else if (keywordLower.includes('autumn') || keywordLower.includes('秋')) {
      return {
        colors: ['#A04000', '#D35400', '#E67E22', '#F39C12', '#F1C40F'],
        name: 'Autumn Leaves',
        tags: ['autumn', 'fall', 'leaves', 'warm', 'cozy']
      };
    } else if (keywordLower.includes('winter') || keywordLower.includes('冬')) {
      return {
        colors: ['#7FB3D5', '#D0D3D4', '#EAEDED', '#2874A6', '#1A5276'],
        name: 'Winter Frost',
        tags: ['winter', 'cold', 'snow', 'frost', 'icy']
      };
    } else if (keywordLower.includes('pastel') || keywordLower.includes('柔和')) {
      return {
        colors: ['#AED6F1', '#A3E4D7', '#F9E79F', '#F5B7B1', '#D7BDE2'],
        name: 'Pastel Dreams',
        tags: ['pastel', 'soft', 'gentle', 'light', 'dreamy']
      };
    } else if (keywordLower.includes('neon') || keywordLower.includes('霓虹')) {
      return {
        colors: ['#FE4365', '#FC9D9A', '#F9CDAD', '#C8C8A9', '#83AF9B'],
        name: 'Neon Lights',
        tags: ['neon', 'bright', 'vibrant', 'glow', 'vivid']
      };
    } else {
      // 为了确保不同的关键词生成不同的默认调色板，根据关键词的哈希值生成不同的调色板
      const hash = Array.from(keywordLower).reduce((acc, char) => acc + char.charCodeAt(0), 0) % 10;
      
      // 根据哈希值选择不同的默认调色板
      const palettes = [
        {
          colors: ['#3498DB', '#2ECC71', '#E74C3C', '#F39C12', '#9B59B6'],
          name: 'Classic Harmony',
          tags: ['classic', 'balanced', 'colorful', 'vibrant', 'clean']
        },
        {
          colors: ['#E74C3C', '#8E44AD', '#3498DB', '#16A085', '#F39C12'],
          name: 'Vibrant Mix',
          tags: ['vibrant', 'colorful', 'bright', 'diverse', 'modern']
        },
        {
          colors: ['#2C3E50', '#E74C3C', '#ECF0F1', '#3498DB', '#2980B9'],
          name: 'Bold Statement',
          tags: ['bold', 'strong', 'contrast', 'modern', 'clean']
        },
        {
          colors: ['#1ABC9C', '#2ECC71', '#3498DB', '#9B59B6', '#34495E'],
          name: 'Cool Spectrum',
          tags: ['cool', 'spectrum', 'balanced', 'professional', 'clean']
        },
        {
          colors: ['#F1C40F', '#E67E22', '#E74C3C', '#8E44AD', '#2980B9'],
          name: 'Warm Accent',
          tags: ['warm', 'accent', 'colorful', 'bright', 'cheerful']
        },
        {
          colors: ['#16A085', '#27AE60', '#2980B9', '#8E44AD', '#2C3E50'],
          name: 'Deep Tones',
          tags: ['deep', 'rich', 'saturated', 'professional', 'elegant']
        },
        {
          colors: ['#2ECC71', '#3498DB', '#E74C3C', '#F1C40F', '#9B59B6'],
          name: 'Primary Plus',
          tags: ['primary', 'basic', 'versatile', 'bright', 'clean']
        },
        {
          colors: ['#C0392B', '#E74C3C', '#D35400', '#E67E22', '#F39C12'],
          name: 'Fire Tones',
          tags: ['fire', 'warm', 'orange', 'red', 'hot']
        },
        {
          colors: ['#1B2631', '#17202A', '#1C2833', '#212F3D', '#283747'],
          name: 'Dark Elegance',
          tags: ['dark', 'elegant', 'sophisticated', 'minimal', 'night']
        },
        {
          colors: ['#EAECEE', '#D5D8DC', '#ABB2B9', '#808B96', '#566573'],
          name: 'Grayscale Gradient',
          tags: ['gray', 'neutral', 'minimal', 'clean', 'elegant']
        }
      ];
      
      // 自定义名称
      const selectedPalette = {...palettes[hash]};
      if (keywordLower) {
        selectedPalette.name = `${keyword.charAt(0).toUpperCase() + keyword.slice(1)} Palette`;
        selectedPalette.tags = [...selectedPalette.tags, keyword.toLowerCase()];
      }
      
      return selectedPalette as { colors: [string, string, string, string, string], name: string, tags: string[] };
    }
  }

  /**
   * 安全调用AI服务的方法，带错误处理和回退机制
   */
  private async safeCallAiService(prompt: string): Promise<string[]> {
    try {
      console.log('[Palette] 调用AI服务，提示词:', prompt.substring(0, 50) + '...');
      console.log('[Palette] AIService实例:', Object.keys(this.aiService));
      console.log('[Palette] AIService方法:', Object.getOwnPropertyNames(Object.getPrototypeOf(this.aiService)));
      
      // 直接调用getByPrompt方法
      console.log('[Palette] 尝试调用AIService.getByPrompt...');
      return await this.aiService.getByPrompt(prompt);
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
    console.log('[Palette] 创建备用调色板，使用关键词生成策略，提示词:', prompt);
    
    // 使用我们的关键词生成函数
    const palette = this.generateKeywordBasedPalette(prompt);
    
    return {
      colors: palette.colors,
      text: palette.name,
      tags: palette.tags,
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
