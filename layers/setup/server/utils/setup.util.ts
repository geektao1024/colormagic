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

// 初始化状态枚举
export enum InitStatus {
  NOT_STARTED = 'not_started',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  FAILED = 'failed'
}

// 全局模块
export let modules: Modules;

// 初始化状态跟踪
export let initStatus: InitStatus = InitStatus.NOT_STARTED;
export let initStartTime: number = 0;
export let initEndTime: number = 0;
export let lastInitError: Error | null = null;

// 队列用于等待初始化完成的Promise
let initPromise: Promise<void> | null = null;
let initResolve: (() => void) | null = null;
let initReject: ((error: Error) => void) | null = null;

/**
 * 获取初始化Promise，可用于等待初始化完成
 * @returns Promise that resolves when initialization is complete
 */
export function getInitPromise(): Promise<void> {
  if (!initPromise) {
    initPromise = new Promise((resolve, reject) => {
      initResolve = resolve;
      initReject = reject;
      
      // 如果已经完成初始化，立即解析Promise
      if (initStatus === InitStatus.COMPLETED) {
        resolve();
      } else if (initStatus === InitStatus.FAILED && lastInitError) {
        reject(lastInitError);
      }
    });
  }
  return initPromise;
}

/**
 * 重置初始化状态（仅用于测试或特殊情况）
 */
export function resetInitStatus(): void {
  initStatus = InitStatus.NOT_STARTED;
  initStartTime = 0;
  initEndTime = 0;
  lastInitError = null;
  initPromise = null;
  initResolve = null;
  initReject = null;
  modules = undefined as any;
}

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
  // 防止重复初始化
  if (initStatus === InitStatus.IN_PROGRESS) {
    console.log(`[setup] Setup already in progress (started ${Date.now() - initStartTime}ms ago), returning`);
    return;
  }
  
  if (initStatus === InitStatus.COMPLETED) {
    console.log(`[setup] Setup already completed (${Date.now() - initEndTime}ms ago), returning`);
    return;
  }
  
  // 更新初始化状态
  initStatus = InitStatus.IN_PROGRESS;
  initStartTime = Date.now();
  
  const logger = getLoggerModule();
  logger.info(`Starting server initialization process at ${new Date().toISOString()}`);

  try {
    // 初始化MongoDB连接
    logger.info('Initializing MongoDB connection module');
    const mongodb = getMongoModule(logger);

    logger.info('Connecting to configured MongoDB with retry mechanism');
    const connected = await connectWithRetry(mongodb, logger);
    
    if (!connected) {
      const error = new Error('Failed to connect to MongoDB, initialization aborted');
      logger.error(error);
      initStatus = InitStatus.FAILED;
      lastInitError = error;
      if (initReject) initReject(error);
      return;
    }
    
    logger.info('MongoDB connection successful, getting database instance');
    const db = mongodb.db();
    if (!db) {
      const error = new Error('Failed to get database instance from MongoDB connection');
      logger.error(error);
      initStatus = InitStatus.FAILED;
      lastInitError = error;
      if (initReject) initReject(error);
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
    
    // 重要：确保所有模块都完整初始化后才设置全局对象
    const tempModules = {
      ai,
      logger,
      palette,
      og,
      auth,
      user,
      google
    };
    
    // 进行最终验证
    if (!tempModules.palette || !tempModules.palette.service) {
      const error = new Error('Critical module "palette" failed initialization');
      logger.error(error);
      initStatus = InitStatus.FAILED;
      lastInitError = error;
      if (initReject) initReject(error);
      return;
    }
    
    // 一次性原子化设置modules对象，确保它要么完全设置，要么完全不设置
    modules = tempModules;
    
    initStatus = InitStatus.COMPLETED;
    initEndTime = Date.now();
    
    logger.info(`Server initialization completed successfully in ${initEndTime - initStartTime}ms`);
    
    // 解析等待初始化的Promise
    if (initResolve) initResolve();
  } catch (error) {
    const errorObj = error instanceof Error ? error : new Error('Unknown initialization error');
    
    logger.error({ 
      err: error,
      message: errorObj.message,
      stack: errorObj.stack,
      timestamp: new Date().toISOString()
    }, 'Server initialization failed');
    
    initStatus = InitStatus.FAILED;
    lastInitError = errorObj;
    
    // 拒绝等待初始化的Promise
    if (initReject) initReject(errorObj);
  }
}
