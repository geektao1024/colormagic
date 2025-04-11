// Google Analytics 插件
export default defineNuxtPlugin((nuxtApp) => {
  // 仅在客户端执行
  if (process.client) {
    // 将GA4脚本添加到文档头部
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-KC9B04Y02P'
    document.head.appendChild(script)
    
    // 初始化Google Analytics
    window.dataLayer = window.dataLayer || []
    function gtag(...args: any[]) {
      window.dataLayer.push(args)
    }
    
    // 定义全局gtag函数
    window.gtag = gtag
    
    // 基本配置
    gtag('js', new Date())
    gtag('config', 'G-KC9B04Y02P', {
      send_page_view: true,
      cookie_domain: 'colormagic.club'
    })
    
    // 路由变化时发送页面浏览事件
    nuxtApp.hooks.hook('page:finish', () => {
      gtag('event', 'page_view')
    })
  }
})

// 为window添加dataLayer和gtag定义
declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
} 