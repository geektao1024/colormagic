import type { DeepseekService } from '~/layers/deepseek/server/services/deepseek.service';

export class AIService {
  constructor(
    private readonly deepseekService: DeepseekService
  ) {}

  public async getByPrompt(prompt: string): Promise<string[]> {
    const moderations = await this.deepseekService.getModeration(prompt);

    if (moderations.results[0].flagged) {
      throw createError({ statusCode: 403, statusMessage: 'Prompt was flagged.' });
    }

    return await this.deepseekService.getByMessages([{
      content: prompt,
      role: 'user'
    }]);
  }

  /**
   * 使用DeepSeek-R1推理模型处理需要更高逻辑推理能力的请求
   */
  public async getByPromptWithReasoner(prompt: string): Promise<string[]> {
    const moderations = await this.deepseekService.getModeration(prompt);

    if (moderations.results[0].flagged) {
      throw createError({ statusCode: 403, statusMessage: 'Prompt was flagged.' });
    }

    return await this.deepseekService.getByMessagesWithReasoner([{
      content: prompt,
      role: 'user'
    }]);
  }
}
