import type { PaletteDto } from '../dtos/palette.dto';
import type { PaletteEntity, PaletteLikeEntity } from '../entities/palette.entity';
import { arrangeColors } from '../../utils/color-arrange.util';
import paletteConfig from '../palette.config';
import { getAllPaletteFilters } from '../../utils/palette-filters.util';
import type { PaletteLikeDto } from '../dtos/palette-like.dto';

export function mapPaletteEntityToDto(entity: PaletteEntity, likedPaletteIds?: string[]): PaletteDto {
  return {
    id: entity._id.toHexString(),
    colors: arrangeColors(entity.colors, {
      brightness: 0,
      saturation: 0,
      warmth: 0
    }),
    tags: entity.tags ?? [],
    /** @description required because older names could be inappropriate */
    text: new Date(entity.createdAt).getTime() > paletteConfig.aiNamesStartDateMs
      ? entity.text
      : 'Cool Palette',
    likesCount: entity.likesCount ?? 0,
    isLiked: likedPaletteIds?.includes(entity._id.toHexString())
  };
}

export function mapPaletteLikeEntityToDto(entity: PaletteLikeEntity): PaletteLikeDto {
  return {
    id: entity._id.toHexString(),
    userId: entity.userId.toHexString(),
    paletteId: entity.paletteId.toHexString()
  };
}

export function mapCreatePalettePrompt(prompt: string): string {
  let value = '你是专业的调色板设计师。请根据关键词生成一个由5个颜色组成的和谐、美观的调色板。\n\n';
  value += '要求：\n';
  value += '1. 生成5个不同但和谐的颜色\n';
  value += '2. 颜色应当与输入的关键词在语义上相关\n';
  value += '3. 不同关键词必须生成不同的调色板\n';
  value += '4. 避免相近的色调，保持一定的色彩多样性\n';
  value += '5. 为调色板创建一个名称，格式为：[name:名称]\n';
  value += '6. 创建最多10个标签用于筛选，包括每种颜色的标签，格式为：[tags:标签1,标签2,标签3]\n';
  value += '7. 标签中不要包含"palette"一词\n\n';
  
  value += '输出格式示例：\n';
  value += '#1e507b #4f6187 #8587a3 #f1b341 #d63f2e [name:Sunset Horizon] [tags:red,blue,orange,warm,sunset,horizon,evening,dramatic,colorful]\n\n';
  
  value += `可用的标签示例：${getAllPaletteFilters().map(color => color.id).join(', ')}\n\n`;
  value += '仅输出5个十六进制颜色代码、名称和标签，不要有任何其他解释或描述。\n\n';
  value += `为以下关键词创建调色板：${prompt}`;

  return value;
}

export function mapTagsPrompt(colors: string[]): string {
  let value = 'Create up to 10 tags we can use for filtering, including a tag for each color and format like this: [tags:beach,sand,blue,warm,dark] etc.';
  /** @description use the filter color tags so it knows some good examples */
  value += `Here's some example tags: ${getAllPaletteFilters().map(color => color.id).join(',')}`;
  value += 'Never include "palette" as a tag.';
  value += `Return ONLY the tags. Create the tags for this palette: "${colors.join(',')}"`;

  return value;
}
