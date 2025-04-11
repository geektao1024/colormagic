/**
 * 实现 Nuxt Sitemap 模块的动态 URL 端点
 * 该接口将被 nuxt.config.ts 中配置的 dynamicUrlsApiEndpoint 调用
 */
export default defineEventHandler(async (event) => {
  // 调用我们的自定义 sitemap URL 生成器 API
  const urls = await $fetch('/api/sitemap-urls')
  
  // 处理URL：移除任何可能的localhost引用
  const processedUrls = urls.map(url => {
    // 确保URL不包含localhost
    if (typeof url.loc === 'string' && url.loc.includes('localhost')) {
      url.loc = url.loc.replace(/http:\/\/localhost:\d+/g, 'https://colormagic.club')
    }
    return url
  })
  
  return processedUrls
}) 