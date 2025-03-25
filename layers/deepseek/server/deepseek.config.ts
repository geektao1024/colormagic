interface DeepseekConfig {
  apiKey: string;
  apiBase: string;
}

const deepseekConfig: DeepseekConfig = {
  get apiKey() {
    return useRuntimeConfig().deepseek?.apiKey as string || '';
  },
  apiBase: 'https://api.deepseek.com'
};

export default deepseekConfig; 