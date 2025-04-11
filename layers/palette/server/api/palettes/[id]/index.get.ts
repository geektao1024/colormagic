import type { PaletteDto } from '../../../dtos/palette.dto';
import { getInitPromise, initStatus, InitStatus } from '~/layers/setup/server/utils/setup.util';

// 不再使用缓存处理器，改为普通的event handler
export default defineEventHandler(async (event): Promise<PaletteDto> => {
  console.log(`[palette/id] Request received: ${new Date().toISOString()}, URL: ${event.node.req.url}`);
  
  try {
    // 等待初始化完成
    if (initStatus !== InitStatus.COMPLETED) {
      console.log(`[palette/id] Server initialization not completed (current status: ${initStatus}), waiting...`);
      try {
        await getInitPromise();
        console.log(`[palette/id] Server initialization completed, proceeding with request`);
      } catch (initError) {
        console.error(`[palette/id] Server initialization failed: ${initError.message}`);
        throw createError({
          statusCode: 503,
          statusMessage: 'Server still initializing. Please try again later.'
        });
      }
    }
    
    // 详细检查modules对象
    if (!modules) {
      console.error('[palette/id] Fatal error: modules object is undefined even after initialization');
      throw createError({
        statusCode: 500,
        statusMessage: 'Server initialization error: Modules not initialized'
      });
    }
    
    // 检查palette模块及相关服务
    if (!modules.palette || !modules.palette.validation) {
      console.error('[palette/id] Fatal error: modules.palette or validation service is undefined');
      throw createError({
        statusCode: 500,
        statusMessage: 'Server initialization error: Palette module not fully initialized'
      });
    }
    
    const params = await modules.palette.validation.getInputParams(event);
    
    let userId: string | undefined;

    /** @description if they are authed we should add userId so we can link their likes */
    try {
      if (!modules.auth || !modules.auth.service) {
        console.warn('[palette/id] Auth module not available, skipping user authentication');
      } else {
        const auth = await modules.auth.service.verify(event);
        userId = auth.userId;
        console.log(`[palette/id] User authenticated, userId: ${userId}`);
      }
    } catch (authError) {
      console.log('[palette/id] Authentication failed or not provided, proceeding as anonymous user');
    }

    if (!modules.palette.service || typeof modules.palette.service.getById !== 'function') {
      console.error('[palette/id] Fatal error: modules.palette.service or getById method is undefined');
      throw createError({
        statusCode: 500,
        statusMessage: 'Server initialization error: Palette service not fully initialized'
      });
    }

    console.log(`[palette/id] Getting palette by id: ${params.id}, userId: ${userId || 'anonymous'}`);
    const response = await modules.palette.service.getById(params.id, userId);
    console.log(`[palette/id] Retrieved palette successfully, id: ${response.id}`);

    // 设置基本的缓存头
    setResponseHeader(event, 'Cache-Control', 'public, max-age=3600'); // 1小时缓存
  
    return response;
  } catch (error: any) {
    // 详细的错误日志
    console.error('[palette/id] Error details:', {
      message: error.message,
      stack: error.stack,
      name: error.name,
      code: error.code,
      statusCode: error.statusCode,
      requestPath: event.path,
      requestMethod: event.method,
      timestamp: new Date().toISOString()
    });
    
    // 返回适当的错误响应
    if (error.statusCode) {
      // 如果是已经格式化的H3错误，直接重新抛出
      console.error(`[palette/id] Re-throwing H3 error with statusCode: ${error.statusCode}`);
      throw error;
    } else if (error.message?.includes('connection')) {
      // 数据库连接错误
      console.error('[palette/id] Database connection error detected');
      throw createError({
        statusCode: 503,
        statusMessage: 'Service temporarily unavailable. Please try again later.'
      });
    } else {
      // 一般服务器错误
      console.error('[palette/id] General server error');
      throw createError({
        statusCode: 500,
        statusMessage: 'Failed to get palette. Please try again later.'
      });
    }
  }
});
