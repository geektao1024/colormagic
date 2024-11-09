import { MongoClient } from 'mongodb';
import type { Logger } from 'pino';
import mongoConfig from './mongo.config';

export function getMongoModule(logger: Logger): MongoClient {
  logger.info('initializing mongo module with url:', mongoConfig.url);

  return new MongoClient(mongoConfig.url, {
    ignoreUndefined: true,
    retryWrites: true,
    w: 'majority',
    maxPoolSize: 10,
    minPoolSize: 5,
    connectTimeoutMS: 5000,
    socketTimeoutMS: 45000
  });
}
