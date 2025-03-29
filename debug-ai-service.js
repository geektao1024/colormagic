import OpenAI from 'openai';

// 模拟DeepSeekService
class DeepseekService {
  constructor() {
    this.client = new OpenAI({
      baseURL: 'https://api.deepseek.com',
      apiKey: 'sk-2dbf60c0b3a642419775574b92a96455',
      timeout: 60000,
      maxRetries: 3
    });
  }
  
  async getModeration(input) {
    // 简单模拟
    return { results: [{ flagged: false }] };
  }
  
  async getByMessages(messages) {
    console.log('DeepseekService.getByMessages called with:', messages);
    return ['#3498DB #2ECC71 #E74C3C #F39C12 #9B59B6 [name:Simulated Palette] [tags:debug,test,development]'];
  }
}

// 模拟AIService
class AIService {
  constructor(deepseekService) {
    this.deepseekService = deepseekService;
    console.log('AIService constructor called with deepseekService:', !!deepseekService);
  }
  
  async getByPrompt(prompt) {
    console.log('AIService.getByPrompt called with prompt:', prompt.substring(0, 50) + '...');
    
    const moderations = await this.deepseekService.getModeration(prompt);
    if (moderations.results[0].flagged) {
      throw new Error('Prompt was flagged.');
    }
    
    return await this.deepseekService.getByMessages([{
      content: prompt,
      role: 'user'
    }]);
  }
}

// 模拟PaletteService
class PaletteService {
  constructor(aiService) {
    this.aiService = aiService;
    console.log('PaletteService constructor called with aiService:', !!aiService);
    console.log('AIService methods:', Object.getOwnPropertyNames(Object.getPrototypeOf(this.aiService)));
  }
  
  async getByString(input) {
    try {
      console.log('PaletteService.getByString called with input:', input);
      
      // 模拟调用AIService
      return await this.safeCallAiService(`Generate a palette for: ${input}`);
    } catch (error) {
      console.error('Error in getByString:', error);
      return { error: error.message };
    }
  }
  
  async safeCallAiService(prompt) {
    try {
      console.log('safeCallAiService called with prompt:', prompt.substring(0, 50) + '...');
      
      // 检查aiService实例
      console.log('AIService instance:', this.aiService);
      console.log('AIService methods:', Object.getOwnPropertyNames(Object.getPrototypeOf(this.aiService)));
      
      // 直接调用getByPrompt方法
      return await this.aiService.getByPrompt(prompt);
    } catch (error) {
      console.error('Error calling AI service:', error);
      return ['#3498DB #2ECC71 #E74C3C #F39C12 #9B59B6 [name:Debug Error] [tags:error,debug,fallback]'];
    }
  }
}

// 测试函数
async function testDependencyInjection() {
  console.log('-------- Testing Dependency Injection --------');
  
  // 创建服务实例
  const deepseekService = new DeepseekService();
  const aiService = new AIService(deepseekService);
  const paletteService = new PaletteService(aiService);
  
  // 测试调用
  console.log('\n-------- Testing Service Calls --------');
  try {
    const result = await paletteService.getByString('forest');
    console.log('Result:', result);
  } catch (error) {
    console.error('Test failed:', error);
  }
}

// 执行测试
testDependencyInjection().catch(console.error); 