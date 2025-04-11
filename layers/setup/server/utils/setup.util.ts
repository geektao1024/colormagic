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
  logger.info('Starting server initialization process...');

  try {
    // 初始化MongoDB连接
    logger.info('Initializing MongoDB connection module');
    const mongodb = getMongoModule(logger);

    logger.info('Connecting to configured MongoDB with retry mechanism');
    const connected = await connectWithRetry(mongodb, logger);
    
    if (!connected) {
      logger.error('Failed to connect to MongoDB, initialization aborted');
      return;
    }
    
    logger.info('MongoDB connection successful, getting database instance');
    const db = mongodb.db();
    if (!db) {
      logger.error('Failed to get database instance from MongoDB connection');
      return;
    }

    // 初始化各个模块
    logger.info('Starting modules initialization and dependency resolution');
    
    logger.info('Initializing DeepSeek module');
    const deepseek = getDeepseekModule(logger);
    
    logger.info('Initializing AI module');
    const ai = getAIModule(logger, deepseek.service);
    
    logger.info('Initializing Palette module');
    const palette = getPaletteModule(db, logger, ai.service);
    
    logger.info('Initializing OG module');
    const og = getOgModule(logger, palette.service);
    
    logger.info('Initializing User module');
    const user = getUserModule(db, logger);
    
    logger.info('Initializing Google module');
    const google = getGoogleModule(logger);
    
    logger.info('Initializing Auth module');
    const auth = getAuthModule(logger, user.service, google.service);

    // 运行模块的setup方法
    logger.info('Running palette module setup');
    try {
      await palette.setup();
      logger.info('Palette module setup completed successfully');
    } catch (setupError) {
      logger.error({ err: setupError }, 'Palette module setup failed, but continuing with initialization');
    }

    // 验证所有关键模块是否可用
    const moduleValidation = {
      ai: !!ai && !!ai.service,
      palette: !!palette && !!palette.service,
      auth: !!auth && !!auth.service
    };
    
    logger.info('Module validation check results:', moduleValidation);
    
    if (!moduleValidation.ai || !moduleValidation.palette || !moduleValidation.auth) {
      logger.warn('Some critical modules failed validation, but continuing with available modules');
    }

    // 设置全局modules对象
    logger.info('Setting global modules object with initialized services');
    modules = {
      ai,
      logger,
      palette,
      og,
      auth,
      user,
      google
    };
    
    logger.info('Server initialization completed successfully');
  } catch (error) {
    logger.error({ 
      err: error,
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString()
    }, 'Server initialization failed');
  }
}
