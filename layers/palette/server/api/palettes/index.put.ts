import type { PaletteDto } from '../../dtos/palette.dto';

export default defineEventHandler(async (event): Promise<PaletteDto> => {
  try {
    // Check if modules.palette is properly initialized
    if (!modules?.palette) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Server initialization error: Palette service not ready'
      });
    }

    // Validate request input
    const body = await modules.palette.validation.getCreateInputQuery(event);
    
    // Ensure prompt exists
    if (!body.prompt) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing prompt parameter'
      });
    }

    // Create palette
    const response = await modules.palette.service.create(body.prompt);
    return response;
  } catch (error: any) {
    console.error('Error generating palette:', error);
    
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
        statusMessage: 'Failed to generate palette. Please try again later.'
      });
    }
  }
});
