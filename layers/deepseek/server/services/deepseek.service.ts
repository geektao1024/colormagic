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
    try {
      console.log('[DeepSeek] 调用API，消息:', JSON.stringify(messages, null, 2));
      
      // 使用OpenAI SDK调用DeepSeek-V3模型
      const entity = await this.client.chat.completions.create({
        model: 'deepseek-chat',
        temperature: 0.7,
        max_tokens: 200,
        messages: messages as any
      });
      
      console.log('[DeepSeek] API响应:', JSON.stringify(entity, null, 2));

      const results = entity.choices
        .map(choice => choice.message.content)
        .filter((content): content is string => content !== null);
      
      console.log('[DeepSeek] 处理后结果:', results);
      return results;
    } catch (error) {
      console.error('[DeepSeek] API调用错误:', error);
      
      // 回退方案：如果DeepSeek API失败，返回一个简单的响应
      if (messages[0]?.content && typeof messages[0].content === 'string') {
        const prompt = messages[0].content;
        if (prompt.includes('red')) {
          return ['#FF5733 #C70039 #900C3F #581845 #FFC300 [name:Red Elegance] [tags:red,crimson,maroon,dark,vibrant]'];
        } else if (prompt.includes('blue')) {
          return ['#1A5276 #2874A6 #3498DB #85C1E9 #D6EAF8 [name:Ocean Blues] [tags:blue,navy,sky,azure,water]'];
        } else if (prompt.includes('green')) {
          return ['#0B5345 #117A65 #16A085 #73C6B6 #D1F2EB [name:Forest Green] [tags:green,emerald,mint,jade,nature]'];
        } else {
          // 默认的多彩调色板
          return ['#E74C3C #8E44AD #3498DB #16A085 #F39C12 [name:Colorful Harmony] [tags:vibrant,colorful,bright,diverse,modern]'];
        }
      }
      
      throw error; // 重新抛出错误，让上层处理
    }
  }
  
  public async getByMessagesWithReasoner(messages: Message[]): Promise<string[]> {
    try {
      // 使用OpenAI SDK调用DeepSeek-R1推理模型
      const entity = await this.client.chat.completions.create({
        model: 'deepseek-reasoner',
        temperature: 0.3, // 推理模型通常使用较低的温度
        max_tokens: 500, // 推理可能需要更长的回答
        messages: messages as any
      });

      return entity.choices
        .map(choice => choice.message.content)
        .filter((content): content is string => content !== null);
    } catch (error) {
      console.error('[DeepSeek] Reasoner API调用错误:', error);
      
      // 在失败时返回一个简单的回退响应
      if (messages[0]?.content && typeof messages[0].content === 'string') {
        return ['[tags:colorful,modern,diverse,bright,creative]'];
      }
      
      throw error;
    }
  }
} 