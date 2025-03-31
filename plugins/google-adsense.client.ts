// Google AdSense 插件
export default defineNuxtPlugin((nuxtApp) => {
  // 仅在客户端执行
  if (process.client) {
    // 将 AdSense 脚本添加到文档头部
    const script = document.createElement('script')
    script.async = true
    script.crossOrigin = 'anonymous'
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6152848695010247'
    document.head.appendChild(script)
    
    // 页面加载完成后初始化 AdSense
    nuxtApp.hooks.hook('app:mounted', () => {
      // 初始化 AdSense 脚本
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
      } catch (error) {
        console.error('AdSense 初始化失败:', error)
      }
    })
  }
})

// 为 window 添加 adsbygoogle 定义
declare global {
  interface Window {
    adsbygoogle: any[]
  }
} 