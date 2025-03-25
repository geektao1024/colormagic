import type OpenAI from 'openai';
import { createDeepseekClient } from '../helpers/openai-adapter';
import { type Message } from '../helpers/deepseek.helper';

export class DeepseekService {
  private readonly client: OpenAI;

  constructor() {
    this.client = createDeepseekClient();
  }

  public async getModeration(input: string): Promise<{ results: [{ flagged: boolean }] }> {
    // DeepSeek可能没有单独的审核API，可以用内容过滤作为替代
    // 这里是模拟OpenAI的审核API的简单实现
    const sensitiveWords = ['hack', 'illegal', 'porn', 'violent', 'terrorism'];
    const flagged = sensitiveWords.some(word => input.toLowerCase().includes(word));
    
    return {
      results: [{
        flagged
      }]
    };
  }

  public async getByMessages(messages: Message[]): Promise<string[]> {
    // 使用OpenAI SDK调用DeepSeek-V3模型
    const entity = await this.client.chat.completions.create({
      model: 'deepseek-chat',
      temperature: 0.7,
      max_tokens: 200,
      messages
    });

    return entity.choices
      .map(choice => choice.message.content)
      .filter((content): content is string => content !== null);
  }
  
  public async getByMessagesWithReasoner(messages: Message[]): Promise<string[]> {
    // 使用OpenAI SDK调用DeepSeek-R1推理模型
    const entity = await this.client.chat.completions.create({
      model: 'deepseek-reasoner',
      temperature: 0.3, // 推理模型通常使用较低的温度
      max_tokens: 500, // 推理可能需要更长的回答
      messages
    });

    return entity.choices
      .map(choice => choice.message.content)
      .filter((content): content is string => content !== null);
  }
} 