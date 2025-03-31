// 百度统计插件
export default defineNuxtPlugin((nuxtApp) => {
  // 仅在客户端执行
  if (process.client) {
    // 初始化百度统计
    window._hmt = window._hmt || []
    
    // 动态添加百度统计脚本
    const hm = document.createElement('script')
    hm.src = 'https://hm.baidu.com/hm.js?d5da5a74022e35b496ba4bafbc9b5bd5'
    const s = document.getElementsByTagName('script')[0]
    s.parentNode?.insertBefore(hm, s)
    
    // 路由变化时发送页面浏览事件
    nuxtApp.hooks.hook('page:finish', () => {
      window._hmt.push(['_trackPageview', window.location.pathname + window.location.search])
    })
  }
})

// 为window添加_hmt定义
declare global {
  interface Window {
    _hmt: any[]
  }
} 