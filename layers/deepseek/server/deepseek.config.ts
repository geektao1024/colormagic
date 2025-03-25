interface DeepseekConfig {
  apiKey: string;
  apiBase: string;
}

const getApiKey = () => {
  try {
    const config = useRuntimeConfig();
    let key = '';
    
    if (config && typeof config === 'object' && 'deepseek' in config) {
      // @ts-ignore - 运行时配置结构可能会有变化
      key = config.deepseek?.apiKey || '';
    }
    
    if (!key && process.env && process.env.DEEPSEEK_API_KEY) {
      key = process.env.DEEPSEEK_API_KEY;
    }
    
    if (!key) {
      key = 'sk-2dbf60c0b3a642419775574b92a96455';
    }
    
    console.log('[DeepSeek] API密钥是否存在:', !!key);
    return key;
  } catch (error) {
    console.error('[DeepSeek] 获取API密钥时出错:', error);
    return 'sk-2dbf60c0b3a642419775574b92a96455';
  }
};

const deepseekConfig: DeepseekConfig = {
  apiKey: getApiKey(),
  apiBase: 'https://api.deepseek.com'
};

export default deepseekConfig; 