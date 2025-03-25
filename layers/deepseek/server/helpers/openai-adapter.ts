import OpenAI from 'openai';
import deepseekConfig from '../deepseek.config';

// 创建一个OpenAI兼容的客户端
export const createDeepseekClient = () => {
  return new OpenAI({
    baseURL: deepseekConfig.apiBase,
    apiKey: deepseekConfig.apiKey
  });
}; 