import type { PaletteDto } from '../../dtos/palette.dto';

export default defineEventHandler(async (event): Promise<PaletteDto> => {
  console.log(`[palette/index.put] Request received: ${new Date().toISOString()}, URL: ${event.node.req.url}`);
  
  try {
    // 详细检查modules对象
    if (!modules) {
      console.error('[palette/index.put] Fatal error: modules object is undefined');
      throw createError({
        statusCode: 500,
        statusMessage: 'Server initialization error: Modules not initialized'
      });
    }
    
    // 检查palette模块
    if (!modules.palette) {
      console.error('[palette/index.put] Fatal error: modules.palette is undefined');
      throw createError({
        statusCode: 500,
        statusMessage: 'Server initialization error: Palette service not ready'
      });
    }
    
    // 检查validation服务
    if (!modules.palette.validation) {
      console.error('[palette/index.put] Fatal error: modules.palette.validation is undefined');
      throw createError({
        statusCode: 500, 
        statusMessage: 'Server initialization error: Palette validation service not ready'
      });
    }

    // 确保getCreateInputQuery方法存在
    if (typeof modules.palette.validation.getCreateInputQuery !== 'function') {
      console.error('[palette/index.put] Fatal error: modules.palette.validation.getCreateInputQuery is not a function');
      throw createError({
        statusCode: 500,
        statusMessage: 'Server initialization error: Palette validation method not available'
      });
    }

    // Validate request input
    console.log('[palette/index.put] Validating request input');
    const body = await modules.palette.validation.getCreateInputQuery(event);
    
    // Ensure prompt exists
    if (!body.prompt) {
      console.error('[palette/index.put] Error: Missing prompt parameter');
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing prompt parameter'
      });
    }
    
    console.log(`[palette/index.put] Processing prompt: "${body.prompt}"`);
    
    // 检查service是否存在
    if (!modules.palette.service) {
      console.error('[palette/index.put] Fatal error: modules.palette.service is undefined');
      throw createError({
        statusCode: 500,
        statusMessage: 'Server initialization error: Palette service not initialized'
      });
    }
    
    // 确保create方法存在
    if (typeof modules.palette.service.create !== 'function') {
      console.error('[palette/index.put] Fatal error: modules.palette.service.create is not a function');
      throw createError({
        statusCode: 500,
        statusMessage: 'Server initialization error: Palette create method not available'
      });
    }

    // Create palette
    const startTime = Date.now();
    console.log(`[palette/index.put] Calling palette.service.create with prompt: "${body.prompt}"`);
    const response = await modules.palette.service.create(body.prompt);
    console.log(`[palette/index.put] Palette created successfully in ${Date.now() - startTime}ms, ID: ${response.id}`);
    
    return response;
  } catch (error: any) {
    console.error('[palette/index.put] Error generating palette:', error);
    console.error('[palette/index.put] Error stack:', error.stack);
    
    // Return appropriate error response based on error type
    if (error.statusCode) {
      // If it's already a H3 error, re-throw it
      console.error(`[palette/index.put] Rethrowing HTTP error with status ${error.statusCode}: ${error.statusMessage}`);
      throw error;
    } else if (error.message?.includes('connection')) {
      // Database connection errors
      console.error('[palette/index.put] Database connection error:', error.message);
      throw createError({
        statusCode: 503,
        statusMessage: 'Service temporarily unavailable. Please try again later.'
      });
    } else {
      // General server errors
      console.error('[palette/index.put] Unhandled server error:', error.message);
      throw createError({
        statusCode: 500,
        statusMessage: 'Failed to generate palette. Please try again later.'
      });
    }
  }
});
