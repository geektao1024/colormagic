import type { DeepseekService } from '~/layers/deepseek/server/services/deepseek.service';

export class AIService {
  constructor(
    private readonly deepseekService: DeepseekService
  ) {}

  public async getByPrompt(prompt: string): Promise<string[]> {
    try {
      console.log('[AIService] 处理提示词:', prompt);
      
      const moderations = await this.deepseekService.getModeration(prompt);

      if (moderations.results[0].flagged) {
        throw createError({ statusCode: 403, statusMessage: 'Prompt was flagged.' });
      }

      const response = await this.deepseekService.getByMessages([{
        content: prompt,
        role: 'user'
      }]);
      
      console.log('[AIService] DeepSeek返回结果:', response);
      
      return response;
    } catch (error) {
      console.error('[AIService] 调用DeepSeek服务出错:', error);
      throw error; // 重新抛出以便上层服务可以处理
    }
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
