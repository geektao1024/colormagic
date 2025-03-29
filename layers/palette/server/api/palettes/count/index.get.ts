import type { CountPaletteDto } from '../../../dtos/palette.dto';

/** @description cache this endpoint so it only updates every 5 minutes */
export default defineCachedEventHandler(async (): Promise<CountPaletteDto> => {
  try {
    // 调用count方法不传递参数
    const response = await modules.palette.service.count();

    return {
      count: response
    };
  } catch (error) {
    console.error('获取调色板数量时出错:', error);
    // 返回一个默认值，避免500错误
    return {
      count: 0
    };
  }
}, { maxAge: 60 * 5 });
