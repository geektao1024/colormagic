import OpenAI from 'openai';
import deepseekConfig from '../deepseek.config';

// 创建一个OpenAI兼容的客户端
export const createDeepseekClient = () => {
  try {
    console.log('[DeepSeek] 初始化客户端，baseURL:', deepseekConfig.apiBase);
    console.log('[DeepSeek] API密钥前6位:', deepseekConfig.apiKey.substring(0, 6) + '***');
    
    return new OpenAI({
      baseURL: deepseekConfig.apiBase,
      apiKey: deepseekConfig.apiKey,
      timeout: 60000, // 设置较长的超时时间 (60秒)
      maxRetries: 3    // 设置最大重试次数
    });
  } catch (error) {
    console.error('[DeepSeek] 创建客户端时出错:', error);
    throw error;
  }
}; 