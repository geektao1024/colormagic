import { SitemapStream, streamToPromise } from 'sitemap'
import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  // 获取配置
  const config = useRuntimeConfig()
  const baseUrl = 'https://colormagic.club'
  
  // 创建 sitemap stream
  const sitemap = new SitemapStream({
    hostname: baseUrl
  })

  // 静态页面
  const staticPages = [
    { url: '/', lastmod: new Date().toISOString(), changefreq: 'daily', priority: 1.0 },
    { url: '/image-color-picker', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
    { url: '/random-color', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
    { url: '/palette-generator', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
    { url: '/contrast-checker', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
    { url: '/explore', lastmod: new Date().toISOString(), changefreq: 'daily', priority: 0.9 },
    { url: '/api', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.6 },
    { url: '/privacy', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.5 },
    { url: '/terms', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.5 },
    { url: '/app', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
    { url: '/app/contrast-checker', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.7 },
    { url: '/app/explore', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.7 },
    { url: '/app/image-color-picker', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.7 },
    { url: '/app/palette', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.7 },
    { url: '/app/random-color', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.7 },
  ]

  for (const page of staticPages) {
    sitemap.write(page)
  }

  // 如果有动态内容，可以在这里添加
  // 例如来自数据库的内容，或基于内容系统的内容

  sitemap.end()

  return streamToPromise(sitemap)
    .then(data => {
      event.node.res.setHeader('Content-Type', 'application/xml')
      event.node.res.end(data.toString())
    })
}) 