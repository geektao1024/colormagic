import type { PaletteDto } from '../../dtos/palette.dto';

export default defineEventHandler(async (event): Promise<PaletteDto> => {
  const query = await modules.palette.validation.getCreateInputQuery(event);
  
  // 使用适配的输入格式
  const response = await modules.palette.service.create({ 
    prompt: query.prompt
  });

  return response;
});
