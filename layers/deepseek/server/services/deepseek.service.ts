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
      
      // 提取用户提示词用于日志记录
      const userPrompt = messages[0]?.content || '';
      console.log('[DeepSeek] 调用API，用户提示词:', userPrompt.substring(0, 50) + '...');
      
      // 添加系统消息以增强指令遵循
      const enhancedMessages = [
        {
          role: 'system',
          content: '你是一个专业的调色板生成助手。针对用户的关键词，你将生成5个和谐但各不相同的颜色，并为调色板命名及添加恰当的标签。'
        },
        ...messages
      ];
      
      // 使用OpenAI SDK调用DeepSeek-V3模型
      const entity = await this.client.chat.completions.create({
        model: 'deepseek-chat',
        temperature: 0.8, // 增加温度以提高多样性
        max_tokens: 500, // 增加token上限以确保获得完整回复
        top_p: 0.95, // 增加采样多样性
        messages: enhancedMessages as any
      });
      
      console.log('[DeepSeek] API原始响应:', JSON.stringify(entity.choices, null, 2));

      const results = entity.choices
        .map(choice => choice.message.content)
        .filter((content): content is string => content !== null);
      
      // 额外检查和处理结果
      let processedResults = [...results];
      
      // 检查是否包含预期格式的颜色码
      const containsHexCodes = results.some(result => /#[0-9a-fA-F]{6}/.test(result));
      
      if (!containsHexCodes || results.length === 0) {
        console.warn('[DeepSeek] 响应中未找到有效的颜色编码，使用基于关键词的默认响应');
        // 使用关键词生成默认响应
        if (messages[0]?.content && typeof messages[0].content === 'string') {
          processedResults = [this.getDefaultResponseByKeyword(messages[0].content)];
        } else {
          processedResults = ['#3498DB #2ECC71 #E74C3C #F39C12 #9B59B6 [name:Default Palette] [tags:default,basic,simple,colorful,clean]'];
        }
      }
      
      // 存入缓存
      apiCache.set(cacheKey, {
        result: processedResults,
        timestamp: Date.now()
      });
      
      // 清理过期缓存
      this.cleanCache();
      
      console.log('[DeepSeek] 处理后结果:', processedResults);
      return processedResults;
    } catch (error) {
      console.error('[DeepSeek] API调用错误:', error);
      
      // 尝试从缓存中获取
      const cacheKey = this.getCacheKey(messages);
      const cachedItem = apiCache.get(cacheKey);
      
      if (cachedItem) {
        console.log('[DeepSeek] 错误恢复：使用缓存结果');
        return cachedItem.result;
      }
      
      // 使用关键词生成默认响应
      if (messages[0]?.content && typeof messages[0].content === 'string') {
        return [this.getDefaultResponseByKeyword(messages[0].content)];
      }
      
      // 回退方案：使用通用默认响应
      return ['#3498DB #2ECC71 #E74C3C #F39C12 #9B59B6 [name:Default Palette] [tags:default,basic,simple,colorful,clean]'];
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
  
  // 基于关键词生成默认响应
  private getDefaultResponseByKeyword(keyword: string): string {
    const keywordLower = keyword.toLowerCase().trim();
    
    // 根据提示关键词返回不同的默认调色板
    if (keywordLower.includes('red') || keywordLower.includes('红')) {
      return '#FF5733 #C70039 #900C3F #581845 #FFC300 [name:Red Elegance] [tags:red,crimson,maroon,dark,vibrant]';
    } else if (keywordLower.includes('blue') || keywordLower.includes('蓝')) {
      return '#1A5276 #2874A6 #3498DB #85C1E9 #D6EAF8 [name:Ocean Blues] [tags:blue,navy,sky,azure,water]';
    } else if (keywordLower.includes('green') || keywordLower.includes('绿')) {
      return '#0B5345 #117A65 #16A085 #73C6B6 #D1F2EB [name:Forest Green] [tags:green,emerald,mint,jade,nature]';
    } else if (keywordLower.includes('yellow') || keywordLower.includes('黄') || keywordLower.includes('sunflower')) {
      return '#F1C40F #F39C12 #D35400 #1E8449 #117A65 [name:Sunflower Fields] [tags:yellow,gold,warm,sunflower,autumn]';
    } else if (keywordLower.includes('purple') || keywordLower.includes('紫')) {
      return '#5B2C6F #7D3C98 #A569BD #D2B4DE #F4ECF7 [name:Purple Royalty] [tags:purple,violet,lavender,royal,elegant]';
    } else if (keywordLower.includes('pink') || keywordLower.includes('粉')) {
      return '#E91E63 #F06292 #F8BBD0 #FF80AB #AD1457 [name:Pink Passion] [tags:pink,rose,fuschia,feminine,vibrant]';
    } else if (keywordLower.includes('beach') || keywordLower.includes('ocean') || keywordLower.includes('海')) {
      return '#1A5276 #2E86C1 #85C1E9 #F0B27A #E67E22 [name:Beach Sunset] [tags:beach,ocean,sunset,water,sand]';
    } else if (keywordLower.includes('forest') || keywordLower.includes('森林')) {
      return '#145A32 #196F3D #1E8449 #52BE80 #ABEBC6 [name:Forest Depths] [tags:forest,green,nature,trees,calm]';
    } else if (keywordLower.includes('sunset') || keywordLower.includes('夕阳')) {
      return '#1D4350 #E67E22 #E74C3C #6C3483 #2C3E50 [name:Evening Sunset] [tags:sunset,dusk,evening,warm,dramatic]';
    } else if (keywordLower.includes('spring') || keywordLower.includes('春')) {
      return '#27AE60 #2ECC71 #F1C40F #F39C12 #ECF0F1 [name:Spring Bloom] [tags:spring,fresh,bloom,bright,nature]';
    } else if (keywordLower.includes('autumn') || keywordLower.includes('秋')) {
      return '#A04000 #D35400 #E67E22 #F39C12 #F1C40F [name:Autumn Leaves] [tags:autumn,fall,leaves,warm,cozy]';
    } else if (keywordLower.includes('winter') || keywordLower.includes('冬')) {
      return '#7FB3D5 #D0D3D4 #EAEDED #2874A6 #1A5276 [name:Winter Frost] [tags:winter,cold,snow,frost,icy]';
    } else if (keywordLower.includes('pastel') || keywordLower.includes('柔和')) {
      return '#AED6F1 #A3E4D7 #F9E79F #F5B7B1 #D7BDE2 [name:Pastel Dreams] [tags:pastel,soft,gentle,light,dreamy]';
    } else if (keywordLower.includes('neon') || keywordLower.includes('霓虹')) {
      return '#FE4365 #FC9D9A #F9CDAD #C8C8A9 #83AF9B [name:Neon Lights] [tags:neon,bright,vibrant,glow,vivid]';
    } else {
      // 为了确保不同的关键词生成不同的默认调色板，根据关键词的第一个字符生成变化
      const hash = Array.from(keywordLower).reduce((acc, char) => acc + char.charCodeAt(0), 0) % 10;
      
      // 根据哈希值选择不同的默认调色板
      const palettes = [
        '#3498DB #2ECC71 #E74C3C #F39C12 #9B59B6 [name:Classic Harmony] [tags:classic,balanced,colorful,vibrant,clean]',
        '#E74C3C #8E44AD #3498DB #16A085 #F39C12 [name:Vibrant Mix] [tags:vibrant,colorful,bright,diverse,modern]',
        '#2C3E50 #E74C3C #ECF0F1 #3498DB #2980B9 [name:Bold Statement] [tags:bold,strong,contrast,modern,clean]',
        '#1ABC9C #2ECC71 #3498DB #9B59B6 #34495E [name:Cool Spectrum] [tags:cool,spectrum,balanced,professional,clean]',
        '#F1C40F #E67E22 #E74C3C #8E44AD #2980B9 [name:Warm Accent] [tags:warm,accent,colorful,bright,cheerful]',
        '#16A085 #27AE60 #2980B9 #8E44AD #2C3E50 [name:Deep Tones] [tags:deep,rich,saturated,professional,elegant]',
        '#2ECC71 #3498DB #E74C3C #F1C40F #9B59B6 [name:Primary Plus] [tags:primary,basic,versatile,bright,clean]',
        '#C0392B #E74C3C #D35400 #E67E22 #F39C12 [name:Fire Tones] [tags:fire,warm,orange,red,hot]',
        '#1B2631 #17202A #1C2833 #212F3D #283747 [name:Dark Elegance] [tags:dark,elegant,sophisticated,minimal,night]',
        '#EAECEE #D5D8DC #ABB2B9 #808B96 #566573 [name:Grayscale Gradient] [tags:gray,neutral,minimal,clean,elegant]'
      ];
      
      return palettes[hash];
    }
  }
  
  // 获取默认响应 - 保留原来的方法以向后兼容
  private getDefaultResponse(messages: Message[]): string[] {
    if (messages[0]?.content && typeof messages[0].content === 'string') {
      const userKeyword = messages[0].content;
      return [this.getDefaultResponseByKeyword(userKeyword)];
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