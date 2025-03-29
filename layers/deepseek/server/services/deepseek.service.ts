import type OpenAI from 'openai';
import { createDeepseekClient } from '../helpers/openai-adapter';
import { type Message } from '../helpers/deepseek.helper';

// 简单的服务端缓存，避免重复调用API
const apiCache = new Map<string, {
  result: string[];
  timestamp: number;
}>();
const CACHE_TTL = 30 * 60 * 1000; // 30分钟缓存
let apiCallCount = 0;
let lastApiCallTime = 0;
const API_CALL_LIMIT_PER_MINUTE = 10; // 每分钟最大调用次数
const RATE_LIMIT_WINDOW = 60 * 1000; // 速率限制窗口 (1分钟)

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
  
  // 检查API调用速率限制
  private checkRateLimit(): boolean {
    const now = Date.now();
    
    // 重置计数器
    if (now - lastApiCallTime > RATE_LIMIT_WINDOW) {
      apiCallCount = 0;
      lastApiCallTime = now;
      return false; // 未达到限制
    }
    
    // 检查是否超过限制
    return apiCallCount >= API_CALL_LIMIT_PER_MINUTE;
  }
  
  // 获取缓存键
  private getCacheKey(messages: Message[]): string {
    return JSON.stringify(messages);
  }

  public async getByMessages(messages: Message[]): Promise<string[]> {
    try {
      // 检查速率限制
      if (this.checkRateLimit()) {
        console.warn('[DeepSeek] API调用已达到速率限制，使用缓存或默认响应');
        // 尝试从缓存中获取
        const cacheKey = this.getCacheKey(messages);
        const cachedItem = apiCache.get(cacheKey);
        
        if (cachedItem && (Date.now() - cachedItem.timestamp < CACHE_TTL)) {
          console.log('[DeepSeek] 使用缓存结果');
          return cachedItem.result;
        }
        
        // 无缓存，返回基于prompt的默认响应
        return this.getDefaultResponse(messages);
      }
      
      // 增加API调用计数
      apiCallCount++;
      lastApiCallTime = Date.now();
      
      // 检查缓存
      const cacheKey = this.getCacheKey(messages);
      const cachedItem = apiCache.get(cacheKey);
      
      if (cachedItem && (Date.now() - cachedItem.timestamp < CACHE_TTL)) {
        console.log('[DeepSeek] 从缓存返回结果');
        return cachedItem.result;
      }
      
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
      
      // 存入缓存
      apiCache.set(cacheKey, {
        result: results,
        timestamp: Date.now()
      });
      
      // 清理过期缓存
      this.cleanCache();
      
      console.log('[DeepSeek] 处理后结果:', results);
      return results;
    } catch (error) {
      console.error('[DeepSeek] API调用错误:', error);
      
      // 尝试从缓存中获取
      const cacheKey = this.getCacheKey(messages);
      const cachedItem = apiCache.get(cacheKey);
      
      if (cachedItem) {
        console.log('[DeepSeek] 错误恢复：使用缓存结果');
        return cachedItem.result;
      }
      
      // 回退方案：无缓存时返回默认响应
      return this.getDefaultResponse(messages);
    }
  }
  
  // 清理过期缓存
  private cleanCache(): void {
    const now = Date.now();
    for (const [key, value] of apiCache.entries()) {
      if (now - value.timestamp > CACHE_TTL) {
        apiCache.delete(key);
      }
    }
  }
  
  // 获取默认响应
  private getDefaultResponse(messages: Message[]): string[] {
    if (messages[0]?.content && typeof messages[0].content === 'string') {
      const prompt = messages[0].content.toLowerCase();
      
      // 根据提示关键词返回不同的默认调色板
      if (prompt.includes('red')) {
        return ['#FF5733 #C70039 #900C3F #581845 #FFC300 [name:Red Elegance] [tags:red,crimson,maroon,dark,vibrant]'];
      } else if (prompt.includes('blue')) {
        return ['#1A5276 #2874A6 #3498DB #85C1E9 #D6EAF8 [name:Ocean Blues] [tags:blue,navy,sky,azure,water]'];
      } else if (prompt.includes('green')) {
        return ['#0B5345 #117A65 #16A085 #73C6B6 #D1F2EB [name:Forest Green] [tags:green,emerald,mint,jade,nature]'];
      } else if (prompt.includes('yellow') || prompt.includes('sunflower')) {
        return ['#F1C40F #F39C12 #D35400 #1E8449 #117A65 [name:Sunflower Fields] [tags:yellow,gold,warm,sunflower,autumn]'];
      } else if (prompt.includes('purple')) {
        return ['#5B2C6F #7D3C98 #A569BD #D2B4DE #F4ECF7 [name:Purple Royalty] [tags:purple,violet,lavender,royal,elegant]'];
      } else if (prompt.includes('pink')) {
        return ['#E91E63 #F06292 #F8BBD0 #FF80AB #AD1457 [name:Pink Passion] [tags:pink,rose,fuschia,feminine,vibrant]'];
      } else if (prompt.includes('beach') || prompt.includes('ocean')) {
        return ['#1A5276 #2E86C1 #85C1E9 #F0B27A #E67E22 [name:Beach Sunset] [tags:beach,ocean,sunset,water,sand]'];
      } else {
        // 默认的多彩调色板
        return ['#E74C3C #8E44AD #3498DB #16A085 #F39C12 [name:Colorful Harmony] [tags:vibrant,colorful,bright,diverse,modern]'];
      }
    }
    
    // 无法解析提示时的默认调色板
    return ['#3498DB #2ECC71 #E74C3C #F39C12 #9B59B6 [name:Default Palette] [tags:default,basic,simple,colorful,clean]']; 
  }
  
  public async getByMessagesWithReasoner(messages: Message[]): Promise<string[]> {
    try {
      // 检查缓存
      const cacheKey = 'reasoner_' + this.getCacheKey(messages);
      const cachedItem = apiCache.get(cacheKey);
      
      if (cachedItem && (Date.now() - cachedItem.timestamp < CACHE_TTL)) {
        console.log('[DeepSeek] 从缓存返回Reasoner结果');
        return cachedItem.result;
      }
      
      // 检查速率限制
      if (this.checkRateLimit()) {
        console.warn('[DeepSeek] Reasoner API调用已达到速率限制');
        return ['[tags:colorful,modern,diverse,bright,creative]'];
      }
      
      // 增加API调用计数
      apiCallCount++;
      lastApiCallTime = Date.now();
      
      // 使用OpenAI SDK调用DeepSeek-R1推理模型
      const entity = await this.client.chat.completions.create({
        model: 'deepseek-reasoner',
        temperature: 0.3, // 推理模型通常使用较低的温度
        max_tokens: 500, // 推理可能需要更长的回答
        messages: messages as any
      });

      const results = entity.choices
        .map(choice => choice.message.content)
        .filter((content): content is string => content !== null);
        
      // 存入缓存
      apiCache.set(cacheKey, {
        result: results,
        timestamp: Date.now()
      });
      
      return results;
    } catch (error) {
      console.error('[DeepSeek] Reasoner API调用错误:', error);
      
      // 在失败时返回一个简单的回退响应
      if (messages[0]?.content && typeof messages[0].content === 'string') {
        return ['[tags:colorful,modern,diverse,bright,creative]'];
      }
      
      // 不重新抛出错误，而是返回默认值
      return ['[tags:colorful,modern,diverse,bright,creative]'];
    }
  }
} 