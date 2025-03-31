import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async (event) => {
  // 基本网站URL
  const siteUrl = 'https://colormagic.club'
  
  // 创建sitemap流
  const sitemap = new SitemapStream({
    hostname: siteUrl
  })

  // 添加主要路由
  const routes = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/palette-generator', changefreq: 'weekly', priority: 0.8 },
    { url: '/random-color', changefreq: 'weekly', priority: 0.8 },
    { url: '/image-color-picker', changefreq: 'weekly', priority: 0.8 },
    { url: '/contrast-checker', changefreq: 'weekly', priority: 0.8 },
    { url: '/explore', changefreq: 'daily', priority: 0.9 },
    { url: '/privacy', changefreq: 'monthly', priority: 0.3 },
    { url: '/terms', changefreq: 'monthly', priority: 0.3 }
  ]

  // 添加国际化路由（日语和意大利语版本）
  const i18nRoutes = []
  const locales = ['ja', 'it']
  
  for (const locale of locales) {
    for (const route of routes) {
      i18nRoutes.push({
        url: `/${locale}${route.url}`,
        changefreq: route.changefreq,
        priority: route.priority
      })
    }
  }

  // 合并所有路由
  const allRoutes = [...routes, ...i18nRoutes]

  // 将所有路由写入sitemap
  for (const route of allRoutes) {
    sitemap.write(route)
  }

  sitemap.end()

  // 将流转换为响应
  return streamToPromise(sitemap)
    .then(data => {
      // 设置响应头
      setResponseHeader(event, 'Content-Type', 'application/xml')
      // 返回XML数据
      return data.toString()
    })
}) 