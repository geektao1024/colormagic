/**
 * 修复 AIService 方法不存在问题
 * 
 * 问题描述:
 * 1. 生产环境中调用 this.aiService.getByPrompt 方法报错：this.aiService.getByPrompt is not a function
 * 2. 导致 /api/palettes/count 和 /api/palettes?prompt=xxx 等接口返回500错误
 * 
 * 根本原因:
 * 在 PaletteService 中调用 aiService.getByPrompt 方法，但服务的方法名可能不匹配
 */

import axios from 'axios';

/**
 * 诊断API调用错误
 */
async function diagnoseApiErrors() {
  console.log('========================================');
  console.log('开始诊断生产环境API错误...');
  console.log('========================================');
  
  const baseUrl = process.env.BASE_URL || 'https://colormagic.club';
  const endpoints = [
    { method: 'GET', url: '/api/palettes/count' },
    { method: 'PUT', url: '/api/palettes?prompt=Beach', params: {} }
  ];
  
  for (const endpoint of endpoints) {
    try {
      console.log(`\n测试 ${endpoint.method} ${endpoint.url}`);
      
      let response;
      if (endpoint.method === 'GET') {
        response = await axios.get(`${baseUrl}${endpoint.url}`);
      } else {
        response = await axios.put(`${baseUrl}${endpoint.url}`, null, {
          params: endpoint.params
        });
      }
      
      console.log(`✅ 请求成功: ${response.status}`);
      console.log('响应数据:', JSON.stringify(response.data, null, 2));
    } catch (error) {
      console.error(`❌ 请求失败: ${endpoint.method} ${endpoint.url}`);
      
      if (error.response) {
        // 服务器响应了错误状态码
        console.error(`状态码: ${error.response.status}`);
        console.error('响应数据:', error.response.data);
      } else if (error.request) {
        // 请求已发送但没有收到响应
        console.error('未收到服务器响应');
      } else {
        // 设置请求时发生错误
        console.error('错误信息:', error.message);
      }
    }
  }
  
  console.log('\n========================================');
  console.log('修复建议');
  console.log('========================================');
  console.log('1. 检查 PaletteService 中 aiService 依赖注入是否正确');
  console.log('2. 确认 AIService 中是否存在 getByPrompt 方法');
  console.log('3. 临时解决方案: 在 PaletteService 中添加兼容逻辑，检测方法是否存在');
}

/**
 * 创建修复代码
 */
function generateFix() {
  const paletteServiceFix = `
// 在 PaletteService 中添加以下修复代码

/**
 * 安全调用AI服务的方法，带错误处理和回退机制
 */
private async safeCallAiService(prompt: string): Promise<string[]> {
  try {
    // 检查方法是否存在
    if (typeof this.aiService.getByPrompt === 'function') {
      return await this.aiService.getByPrompt(prompt);
    } else if (typeof this.aiService.getByString === 'function') {
      // 尝试备用方法名
      return await this.aiService.getByString(prompt);
    } else {
      // 如果两个方法都不存在，使用备用响应
      console.error('AI服务没有可用的方法来处理提示');
      return ['#3498DB #2ECC71 #E74C3C #F39C12 #9B59B6 [name:Fallback Palette] [tags:fallback,error,backup]'];
    }
  } catch (error) {
    console.error('调用AI服务时出错:', error);
    // 返回备用响应
    return ['#3498DB #2ECC71 #E74C3C #F39C12 #9B59B6 [name:Error Palette] [tags:error,fallback,system]'];
  }
}

// 然后在 getPaletteByPrompt 方法中替换
// const response = await this.aiService.getByPrompt(promptTemplate);
// 为:
// const response = await this.safeCallAiService(promptTemplate);
`;

  const countApiFixCode = `
// 在 layers/palette/server/api/palettes/count/index.get.ts 文件中添加错误处理

export default defineCachedEventHandler(async (): Promise<CountPaletteDto> => {
  try {
    const now = new Date();
    const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);

    const response = await modules.palette.service.count(twentyFourHoursAgo);

    return {
      count: response
    };
  } catch (error) {
    console.error('获取调色板数量时出错:', error);
    // 返回一个默认值，避免500错误
    return {
      count: 0
    };
  }
}, { maxAge: 60 * 5 });
`;

  console.log('\n========================================');
  console.log('修复代码示例');
  console.log('========================================');
  console.log('# PaletteService 修复:');
  console.log(paletteServiceFix);
  console.log('\n# Count API 修复:');
  console.log(countApiFixCode);
}

// 导出诊断函数
export {
  diagnoseApiErrors,
  generateFix
};

// 如果直接运行此脚本，执行诊断
if (import.meta.url === `file://${process.argv[1]}`) {
  diagnoseApiErrors()
    .then(() => {
      generateFix();
      console.log('\n修复代码已生成。请根据实际情况进行调整和部署。');
    })
    .catch(err => {
      console.error('执行诊断时出错:', err);
      process.exit(1);
    });
} 