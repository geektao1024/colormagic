import type { CountPaletteDto } from '../../../dtos/palette.dto';

/** @description cache this endpoint so it only updates every 5 minutes */
export default defineCachedEventHandler(async (): Promise<CountPaletteDto> => {
  try {
    // Check if modules.palette is properly initialized
    if (!modules?.palette) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Server initialization error: Palette service not ready'
      });
    }

    const now = new Date();
    const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);

    const response = await modules.palette.service.count(twentyFourHoursAgo);

    return {
      count: response
    };
  } catch (error: any) {
    console.error('Error getting palette count:', error);
    
    // Return appropriate error response based on error type
    if (error.statusCode) {
      // If it's already a H3 error, re-throw it
      throw error;
    } else if (error.message?.includes('connection')) {
      // Database connection errors
      throw createError({
        statusCode: 503,
        statusMessage: 'Service temporarily unavailable. Please try again later.'
      });
    } else {
      // General server errors
      throw createError({
        statusCode: 500,
        statusMessage: 'Failed to get palette count. Please try again later.'
      });
    }
  }
}, { maxAge: 60 * 5 });
