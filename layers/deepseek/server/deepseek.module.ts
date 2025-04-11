import type { Logger } from 'pino';
import { DeepseekService } from './services/deepseek.service';

export interface DeepseekModule {
  service: DeepseekService
}

/**
 * - loaded from main server initializer util in `~/server/utils/setup.util.ts`
 * - can be used in api globally eg. `modules.deepseek.service.getByMessages()`
 */

export function getDeepseekModule(logger: Logger): DeepseekModule {
  logger.info('initializing deepseek module with DeepSeek-V3 model');

  const service = new DeepseekService();

  return {
    service
  };
} 