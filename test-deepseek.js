// 使用ESM格式
import OpenAI from 'openai';

async function testDeepseek(keyword = 'sunset') {
  try {
    console.log(`Starting DeepSeek API test with keyword: ${keyword}...`);
    
    // 直接使用OpenAI SDK创建客户端
    const client = new OpenAI({
      baseURL: 'https://api.deepseek.com',
      apiKey: 'sk-2dbf60c0b3a642419775574b92a96455', // 使用默认API密钥
      timeout: 60000, // 设置较长的超时时间 (60秒)
      maxRetries: 3    // 设置最大重试次数
    });
    
    const prompt = '你是专业的调色板设计师。请根据关键词生成一个由5个颜色组成的和谐、美观的调色板。\n\n' +
      '要求：\n' +
      '1. 生成5个不同但和谐的颜色\n' +
      '2. 颜色应当与输入的关键词在语义上相关\n' +
      '3. 不同关键词必须生成不同的调色板\n' +
      '4. 避免相近的色调，保持一定的色彩多样性\n' +
      '5. 为调色板创建一个名称，格式为：[name:名称]\n' +
      '6. 创建最多10个标签用于筛选，包括每种颜色的标签，格式为：[tags:标签1,标签2,标签3]\n' +
      '7. 标签中不要包含"palette"一词\n\n' +
      '输出格式示例：\n' +
      '#1e507b #4f6187 #8587a3 #f1b341 #d63f2e [name:Sunset Horizon] [tags:red,blue,orange,warm,sunset,horizon,evening,dramatic,colorful]\n\n' +
      '仅输出5个十六进制颜色代码、名称和标签，不要有任何其他解释或描述。\n\n' +
      `为以下关键词创建调色板：${keyword}`;
    
    console.log('Sending request to DeepSeek API...');
    
    try {
      const response = await client.chat.completions.create({
        model: 'deepseek-chat',
        temperature: 0.8,
        max_tokens: 500,
        top_p: 0.95,
        messages: [
          {
            role: 'system',
            content: '你是一个专业的调色板生成助手。针对用户的关键词，你将生成5个和谐但各不相同的颜色，并为调色板命名及添加恰当的标签。'
          },
          {
            role: 'user',
            content: prompt
          }
        ]
      });
      
      console.log('API Response:', JSON.stringify(response, null, 2));
      
      // 提取颜色
      const content = response.choices[0].message.content;
      console.log('Generated content:', content);
      
      // 提取颜色
      const hexPattern = /#?[0-9a-fA-F]{6}\b/g;
      const hexMatches = content.match(hexPattern) || [];
      const colors = hexMatches.map(hex => hex.startsWith('#') ? hex : `#${hex}`);
      
      console.log('Extracted colors:', colors);
      
      // 提取名称
      const nameMatch = content.match(/\[name:(.*?)\]/);
      const name = nameMatch && nameMatch[1] ? nameMatch[1].trim() : 'Unnamed Palette';
      
      console.log('Extracted name:', name);
      
      // 提取标签
      const tagsMatch = content.match(/\[tags:(.*?)\]/);
      const tags = tagsMatch && tagsMatch[1] 
        ? tagsMatch[1].toLowerCase().split(',').map(tag => tag.trim()) 
        : [];
      
      console.log('Extracted tags:', tags);
    } catch (apiError) {
      console.error('Error calling DeepSeek API:', apiError);
    }
    
  } catch (error) {
    console.error('General error:', error);
  }
}

// 立即执行测试
testDeepseek('forest'); 