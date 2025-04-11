import type { CountPaletteDto } from '../../../dtos/palette.dto';

/** @description cache this endpoint so it only updates every 5 minutes */
export default defineCachedEventHandler(async (event): Promise<CountPaletteDto> => {
  // 添加更详细的请求日志
  console.log(`[palette/count] Request received: ${new Date().toISOString()}`);
  
  try {
    // 更详细的模块初始化检查
    if (!modules) {
      console.error('[palette/count] Fatal error: modules object is undefined');
      throw createError({
        statusCode: 500,
        statusMessage: 'Server initialization error: Modules not initialized'
      });
    }
    
    if (!modules.palette) {
      console.error('[palette/count] Fatal error: modules.palette is undefined');
      throw createError({
        statusCode: 500,
        statusMessage: 'Server initialization error: Palette module not initialized'
      });
    }
    
    if (!modules.palette.service) {
      console.error('[palette/count] Fatal error: modules.palette.service is undefined');
      throw createError({
        statusCode: 500,
        statusMessage: 'Server initialization error: Palette service not available'
      });
    }

    if (typeof modules.palette.service.count !== 'function') {
      console.error('[palette/count] Fatal error: modules.palette.service.count is not a function');
      throw createError({
        statusCode: 500,
        statusMessage: 'Server initialization error: Palette service is malformed'
      });
    }

    console.log('[palette/count] Modules check passed, proceeding with count operation');
    
    const now = new Date();
    const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);

    console.log(`[palette/count] Calling service.count with date: ${twentyFourHoursAgo.toISOString()}`);
    const response = await modules.palette.service.count(twentyFourHoursAgo);
    console.log(`[palette/count] Count operation successful, result: ${response}`);

    return {
      count: response
    };
  } catch (error: any) {
    // 更详细的错误日志
    console.error('[palette/count] Error details:', {
      message: error.message,
      stack: error.stack,
      name: error.name,
      code: error.code,
      statusCode: error.statusCode,
      requestPath: event.path,
      requestMethod: event.method,
      timestamp: new Date().toISOString()
    });
    
    // Return appropriate error response based on error type
    if (error.statusCode) {
      // If it's already a H3 error, re-throw it
      console.error(`[palette/count] Re-throwing H3 error with statusCode: ${error.statusCode}`);
      throw error;
    } else if (error.message?.includes('connection')) {
      // Database connection errors
      console.error('[palette/count] Database connection error detected');
      throw createError({
        statusCode: 503,
        statusMessage: 'Service temporarily unavailable. Please try again later.'
      });
    } else {
      // General server errors
      console.error('[palette/count] General server error');
      throw createError({
        statusCode: 500,
        statusMessage: 'Failed to get palette count. Please try again later.'
      });
    }
  }
}, { maxAge: 60 * 5 });
