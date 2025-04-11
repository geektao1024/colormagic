import { defineNuxtRouteMiddleware, navigateTo, useRuntimeConfig } from '#app'

/**
 * 全局中间件，用于处理页面路由映射问题，确保正确加载layers下的页面实现
 */
export default defineNuxtRouteMiddleware((to, from) => {
  // 获取当前环境
  const config = useRuntimeConfig()
  const isDev = config.public.nodeEnv === 'development'
  const path = to.path
  
  // 开发环境输出路由信息，帮助调试
  if (isDev) {
    console.log(`[Route Debug] Navigating to: ${path}`)
  }
  
  // 处理特定页面的路由映射
  if (path.includes('/palette/explore') || 
      path.includes('/palette/liked') ||
      (path.match(/\/palette\/[^\/]+$/) && !path.includes('/explore') && !path.includes('/liked'))) {
    
    // 确保路由能正确映射到layers/palette/pages/下的页面实现
    // 这些页面在layers/palette/pages/palette/目录下
    if (isDev) {
      console.log(`[Route Debug] Using layers implementation for: ${path}`)
    }
    
    // 这里我们不需要重定向，因为Nuxt会找到正确的页面
    // 但我们使用这个中间件来确保路由被正确处理
    return
  }
  
  // 对于其他路径，我们使用默认的页面实现
  return
}) 