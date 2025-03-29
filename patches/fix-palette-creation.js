/**
 * 调色板生成错误修复工具
 * 
 * 问题：
 * 1. DeepSeek API调用第二次失败，返回500错误
 * 2. 可能的原因：
 *   a. API密钥问题 - 达到令牌限制或免费额度
 *   b. 服务器端状态管理问题
 *   c. 缓存或资源共享问题
 * 
 * 本文件用于测试和修复调色板生成功能
 */

// 模拟修复算法
async function testPaletteCreation() {
  try {
    // 1. 发送第一个请求 (正常工作)
    console.log('发送第一个请求...');
    const firstResponse = await fetch('/api/palettes?prompt=Test1', {
      method: 'PUT'
    });
    const firstResult = await firstResponse.json();
    console.log('第一个请求结果:', firstResult);
    
    // 2. 发送第二个请求 (通常失败)
    console.log('发送第二个请求...');
    const secondResponse = await fetch('/api/palettes?prompt=Test2', {
      method: 'PUT'
    });
    
    if (!secondResponse.ok) {
      console.error('第二个请求失败:', secondResponse.status, secondResponse.statusText);
      document.getElementById('status').textContent = '发现问题: DeepSeek API第二次调用失败';
      
      // 解决方案建议
      document.getElementById('solution').innerHTML = `
        <h3>可能的解决方案:</h3>
        <ol>
          <li>升级DeepSeek API密钥或增加使用额度</li>
          <li>实现请求节流和队列机制</li>
          <li>增强客户端错误处理，添加重试机制</li>
          <li>在服务器端添加内存缓存机制，减少API调用</li>
          <li>考虑使用替代的调色板生成方法</li>
        </ol>
      `;
    } else {
      const secondResult = await secondResponse.json();
      console.log('第二个请求成功:', secondResult);
      document.getElementById('status').textContent = '测试通过: 两次请求都成功';
    }
  } catch (error) {
    console.error('测试过程中出错:', error);
    document.getElementById('status').textContent = '测试过程中出错: ' + error.message;
  }
}

// 修复方案：实现客户端缓存
function implementClientCache() {
  // 这是一个客户端修复示例，用localStorage存储最近的调色板请求
  const cacheKey = 'palette_cache';
  const cacheTTL = 30 * 60 * 1000; // 30分钟缓存
  
  // 拦截所有调色板请求
  const originalFetch = window.fetch;
  window.fetch = async function(url, options) {
    if (url.includes('/api/palettes') && options?.method === 'PUT') {
      // 提取prompt参数
      const promptMatch = url.match(/prompt=([^&]+)/);
      if (promptMatch) {
        const prompt = decodeURIComponent(promptMatch[1]);
        
        // 检查缓存
        const cacheData = localStorage.getItem(cacheKey);
        if (cacheData) {
          const cache = JSON.parse(cacheData);
          // 查找匹配的缓存项
          const cacheItem = cache.find(item => 
            item.prompt === prompt && 
            (Date.now() - item.timestamp) < cacheTTL
          );
          
          if (cacheItem) {
            console.log('从缓存中获取调色板:', prompt);
            return new Response(JSON.stringify(cacheItem.response), {
              status: 200,
              headers: { 'Content-Type': 'application/json' }
            });
          }
        }
      }
      
      // 没有缓存，执行实际请求
      const response = await originalFetch(url, options);
      
      // 如果请求成功，存储到缓存
      if (response.ok && promptMatch) {
        const prompt = decodeURIComponent(promptMatch[1]);
        const responseClone = response.clone();
        const responseData = await responseClone.json();
        
        // 更新缓存
        let cache = [];
        const cacheData = localStorage.getItem(cacheKey);
        if (cacheData) {
          cache = JSON.parse(cacheData);
          // 删除过期项
          cache = cache.filter(item => (Date.now() - item.timestamp) < cacheTTL);
        }
        
        // 添加新项
        cache.push({
          prompt,
          response: responseData,
          timestamp: Date.now()
        });
        
        // 限制缓存大小
        if (cache.length > 10) {
          cache = cache.slice(-10);
        }
        
        localStorage.setItem(cacheKey, JSON.stringify(cache));
      }
      
      return response;
    }
    
    // 默认行为
    return originalFetch(url, options);
  };
  
  console.log('已实现客户端缓存修复');
  return '客户端缓存修复已应用';
}

// 导出修复函数，方便调用
window.fixPaletteCreation = {
  test: testPaletteCreation,
  applyClientCache: implementClientCache
}; 