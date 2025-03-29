import { defineEventHandler } from 'h3'

export default defineEventHandler((event) => {
  const path = event.node.req.url || ''
  
  // 处理 Google Search Console 验证文件
  if (path.includes('google') && path.endsWith('.html')) {
    const fileName = path.split('/').pop() || ''
    
    // 这里可以根据文件名返回不同的验证内容
    // 替换 VERIFICATION_CODE 为您的 Google 验证代码
    if (fileName === 'googleXXXXXXXXXXXXXXXX.html') {
      event.node.res.setHeader('Content-Type', 'text/html')
      return 'google-site-verification: googleXXXXXXXXXXXXXXXX.html'
    }
  }
  
  // 如果不是验证文件，返回 404
  event.node.res.statusCode = 404
  return 'Not Found'
}) 