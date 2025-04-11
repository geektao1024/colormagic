import { MongoClient } from 'mongodb';
import type { Logger } from 'pino';
import mongoConfig from './mongo.config';

/**
 * Creates and returns a MongoDB client with optimized connection settings.
 * Increased timeout values for better handling of serverless environment connection delays.
 */
export function getMongoModule(logger: Logger): MongoClient {
  logger.info('initializing mongo module with url:', mongoConfig.url);

  return new MongoClient(mongoConfig.url, {
    ignoreUndefined: true,
    retryWrites: true,
    w: 'majority',
    // Increased pool size for better connection handling
    maxPoolSize: 10,
    minPoolSize: 5,
    // Extended timeout values for serverless environments
    connectTimeoutMS: 50000,  // 30 seconds for connection establishment
    socketTimeoutMS: 80000,   // 60 seconds for socket operations
    // Additional retry settings
    serverSelectionTimeoutMS: 50000, // 30 seconds for server selection
    heartbeatFrequencyMS: 30000      // 10 seconds between heartbeats
  });
}
