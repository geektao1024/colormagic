import type { CountPaletteDto } from '../../../dtos/palette.dto';
import { getInitPromise, initStatus, InitStatus } from '~/layers/setup/server/utils/setup.util';

// 不再使用缓存处理器，改为普通的event handler
export default defineEventHandler(async (event): Promise<CountPaletteDto> => {
  // 添加更详细的请求日志
  console.log(`[palette/count] Request received: ${new Date().toISOString()}, URL: ${event.node.req.url}`);
  
  try {
    // 等待初始化完成
    if (initStatus !== InitStatus.COMPLETED) {
      console.log(`[palette/count] Server initialization not completed (current status: ${initStatus}), waiting...`);
      try {
        await getInitPromise();
        console.log(`[palette/count] Server initialization completed, proceeding with request`);
      } catch (initError) {
        console.error(`[palette/count] Server initialization failed: ${initError.message}`);
        throw createError({
          statusCode: 503,
          statusMessage: 'Server still initializing. Please try again later.'
        });
      }
    }
    
    // 额外安全检查
    console.log('[palette/count] Performing safety checks after initialization');
    
    // 更详细的模块初始化检查
    if (!modules) {
      console.error('[palette/count] Fatal error: modules object is undefined even after initialization');
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

    // 设置基本的缓存头
    setResponseHeader(event, 'Cache-Control', 'public, max-age=300'); // 5分钟缓存
    
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
});
