import type { Logger } from 'pino';
import { AIService } from './services/ai.service';
import type { DeepseekService } from '~/layers/deepseek/server/services/deepseek.service';

export interface AIModule {
  service: AIService
}

/**
 * - loaded from main server initializer util in `~/server/utils/initialize-server.ts`
 * - can be used in api globally eg. `modules.notification.service.getById()`
 */

export function getAIModule(
  logger: Logger,
  deepseekService: DeepseekService
): AIModule {
  logger.info('initializing ai module');

  const service = new AIService(deepseekService);

  return {
    service
  };
}
