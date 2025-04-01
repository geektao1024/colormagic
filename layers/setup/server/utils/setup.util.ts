import type { Logger } from 'pino';
import { getAIModule, type AIModule } from '~/layers/ai/server/ai.module';
import { getAuthModule, type AuthModule } from '~/layers/auth/server/auth.module';
import { getDeepseekModule } from '~/layers/deepseek/server/deepseek.module';
import { getGoogleModule, type GoogleModule } from '~/layers/google/server/google.module';
import { getLoggerModule } from '~/layers/log/server/logger.module';
import { getMongoModule } from '~/layers/mongo/server/mongo.module';
import { getOgModule, type OgModule } from '~/layers/og/server/og.module';
import { getPaletteModule, type PaletteModule } from '~/layers/palette/server/palette.module';
import { getUserModule, type UserModule } from '~/layers/user/server/user.module';

interface Modules {
  ai: AIModule
  logger: Logger
  palette: PaletteModule
  og: OgModule
  auth: AuthModule
  user: UserModule
  google: GoogleModule
}

export let modules: Modules;

/**
 * Attempts to connect to MongoDB with a retry mechanism
 * @param mongodb MongoDB client
 * @param logger Logger instance
 * @returns True if connection successful, false otherwise
 */
async function connectWithRetry(mongodb: any, logger: Logger): Promise<boolean> {
  const MAX_RETRIES = 3;
  const RETRY_DELAY_MS = 2000;
  
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      logger.info(`MongoDB connection attempt ${attempt}/${MAX_RETRIES}`);
      await mongodb.connect();
      logger.info('MongoDB connection successful');
      return true;
    } catch (error) {
      if (attempt < MAX_RETRIES) {
        logger.warn(`MongoDB connection failed, retrying in ${RETRY_DELAY_MS/1000}s (${attempt}/${MAX_RETRIES})`, error);
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY_MS));
      } else {
        logger.error('MongoDB connection failed after maximum retries', error);
        return false;
      }
    }
  }
  
  return false;
}

export async function setup(): Promise<void> {
  const logger = getLoggerModule();

  try {
    const mongodb = getMongoModule(logger);

    logger.info('connecting to configured mongodb');
    const connected = await connectWithRetry(mongodb, logger);
    
    if (!connected) {
      logger.error('Failed to connect to MongoDB, initialization aborted');
      return;
    }

    const db = mongodb.db();

    logger.info('initializing modules and resolving dependencies');
    const deepseek = getDeepseekModule(logger);
    const ai = getAIModule(logger, deepseek.service);
    const palette = getPaletteModule(db, logger, ai.service);
    const og = getOgModule(logger, palette.service);
    const user = getUserModule(db, logger);
    const google = getGoogleModule(logger);
    const auth = getAuthModule(logger, user.service, google.service);

    await palette.setup();

    modules = {
      ai,
      logger,
      palette,
      og,
      auth,
      user,
      google
    };
  } catch (error) {
    logger.error({ err: error }, 'initializing setup failed');
  }
}
