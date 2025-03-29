/**
 * 调色板生成错误诊断与修复工具
 * 
 * 问题描述:
 * 1. 首次API调用成功，第二次调用出现500错误
 * 2. 本地环境正常，线上环境出现问题
 * 
 * 可能原因:
 * 1. API密钥问题 - 密钥无效、过期或使用频率限制
 * 2. 服务器状态管理问题 - 首次调用后状态未正确清理
 * 3. 缓存或资源共享问题 - 并发请求处理不当
 */

import axios from 'axios';

/**
 * 测试调色板创建功能
 * 发送两次请求验证是否存在问题
 */
async function testPaletteCreation() {
  console.log('========================================');
  console.log('开始诊断调色板生成功能...');
  console.log('========================================');
  
  const baseUrl = process.env.BASE_URL || 'http://localhost:3002';
  const testPrompts = ['Blue ocean', 'Sunset sky'];
  
  let firstRequestSuccess = false;
  let secondRequestSuccess = false;
  let errors = [];
  
  try {
    // 第一次请求
    console.log(`\n发送第一次请求: ${testPrompts[0]}`);
    const response1 = await axios.put(`${baseUrl}/api/palettes`, null, {
      params: {
        prompt: testPrompts[0]
      }
    });
    
    if (response1.status === 200) {
      firstRequestSuccess = true;
      console.log('✅ 第一次请求成功!');
      console.log('生成的调色板:', JSON.stringify(response1.data, null, 2));
    }
    
    // 等待1秒
    console.log('\n等待1秒...');
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // 第二次请求
    console.log(`\n发送第二次请求: ${testPrompts[1]}`);
    const response2 = await axios.put(`${baseUrl}/api/palettes`, null, {
      params: {
        prompt: testPrompts[1]
      }
    });
    
    if (response2.status === 200) {
      secondRequestSuccess = true;
      console.log('✅ 第二次请求成功!');
      console.log('生成的调色板:', JSON.stringify(response2.data, null, 2));
    }
  } catch (error) {
    console.error('❌ 测试过程中出现错误:');
    
    if (error.response) {
      // 服务器响应了错误状态码
      console.error(`状态码: ${error.response.status}`);
      console.error('响应头:', error.response.headers);
      console.error('响应数据:', error.response.data);
      
      errors.push({
        status: error.response.status,
        data: error.response.data,
        headers: error.response.headers
      });
    } else if (error.request) {
      // 请求已发送但没有收到响应
      console.error('未收到服务器响应');
      errors.push({
        type: 'no_response',
        request: error.request
      });
    } else {
      // 设置请求时发生错误
      console.error('错误信息:', error.message);
      errors.push({
        type: 'request_setup',
        message: error.message
      });
    }
  }
  
  // 分析结果
  console.log('\n========================================');
  console.log('诊断结果');
  console.log('========================================');
  
  if (firstRequestSuccess && secondRequestSuccess) {
    console.log('✅ 两次请求都成功，修复有效！');
    return { success: true };
  } else if (firstRequestSuccess && !secondRequestSuccess) {
    console.log('❌ 问题仍然存在: 第一次请求成功，第二次请求失败');
    console.log('\n--- 可能的解决方案 ---');
    console.log('1. API密钥问题: 检查DeepSeek API密钥是否有效，考虑升级到更高级别的API密钥');
    console.log('2. 请求限制: 实现节流或者限速功能，限制每分钟的请求数量');
    console.log('3. 改进错误处理: 添加重试机制和备用响应');
    console.log('4. 实现缓存: 添加客户端或服务器端缓存，减少API调用次数');
    console.log('5. 备用生成方法: 考虑在API失败时使用基于规则的调色板生成');
    
    return { 
      success: false, 
      issue: 'second_request_fails',
      errors 
    };
  } else {
    console.log('❌ 两次请求都失败，可能是API连接或配置问题');
    console.log('\n--- 可能的解决方案 ---');
    console.log('1. 检查API连接: 确认服务器可以连接到DeepSeek API');
    console.log('2. 验证API密钥: 确认API密钥配置正确且有效');
    console.log('3. 检查网络: 检查服务器网络配置，特别是代理设置');
    
    return { 
      success: false, 
      issue: 'all_requests_fail',
      errors 
    };
  }
}

/**
 * 实现客户端缓存，减少API调用
 */
function implementClientCache() {
  // 该函数应在前端代码中实现
  
  /* 
  // 示例实现（应放入前端Vue组件中）:
  
  // 在Vue组件中:
  
  import { ref, onMounted } from 'vue'
  
  const paletteCache = ref(new Map());
  const CACHE_TTL = 30 * 60 * 1000; // 30分钟缓存
  
  // 检查缓存
  function getCachedPalette(prompt) {
    const key = prompt.toLowerCase().trim();
    const cached = paletteCache.value.get(key);
    
    if (cached && (Date.now() - cached.timestamp < CACHE_TTL)) {
      console.log('从缓存返回调色板');
      return cached.palette;
    }
    
    return null;
  }
  
  // 保存到缓存
  function cachePalette(prompt, palette) {
    const key = prompt.toLowerCase().trim();
    paletteCache.value.set(key, {
      palette,
      timestamp: Date.now()
    });
    
    // 保存到localStorage
    try {
      const cacheData = Array.from(paletteCache.value.entries());
      localStorage.setItem('palette_cache', JSON.stringify(cacheData));
    } catch (e) {
      console.error('缓存保存到localStorage失败:', e);
    }
  }
  
  // 清理过期缓存
  function cleanCache() {
    const now = Date.now();
    for (const [key, value] of paletteCache.value.entries()) {
      if (now - value.timestamp > CACHE_TTL) {
        paletteCache.value.delete(key);
      }
    }
  }
  
  // 从localStorage加载缓存
  onMounted(() => {
    try {
      const savedCache = localStorage.getItem('palette_cache');
      if (savedCache) {
        paletteCache.value = new Map(JSON.parse(savedCache));
        cleanCache(); // 清理过期缓存
      }
    } catch (e) {
      console.error('从localStorage加载缓存失败:', e);
    }
  });
  
  // 使用缓存的调色板生成函数
  async function generatePalette(prompt) {
    // 先检查缓存
    const cached = getCachedPalette(prompt);
    if (cached) {
      return cached;
    }
    
    // 没有缓存，调用API
    try {
      const result = await $fetch('/api/palettes', {
        method: 'PUT',
        query: {
          prompt
        }
      });
      
      // 缓存结果
      cachePalette(prompt, result);
      return result;
    } catch (error) {
      console.error('调色板生成错误:', error);
      throw error;
    }
  }
  */
  
  return '客户端缓存功能已准备好实现';
}

// 导出诊断函数
export {
  testPaletteCreation,
  implementClientCache
};

// 如果直接运行此脚本，执行测试
if (import.meta.url === `file://${process.argv[1]}`) {
  testPaletteCreation()
    .then(result => {
      console.log('\n========================================');
      console.log(`最终诊断结果: ${result.success ? '成功 ✅' : '失败 ❌'}`);
      console.log('========================================\n');
      
      if (result.success) {
        console.log('恭喜！修复已成功应用。现在可以执行更多的测试，确认修复在不同场景下都有效。');
      }
      
      process.exit(result.success ? 0 : 1);
    })
    .catch(err => {
      console.error('执行诊断时出错:', err);
      process.exit(1);
    });
} 