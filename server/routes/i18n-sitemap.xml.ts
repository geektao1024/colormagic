import { SitemapStream, streamToPromise } from 'sitemap'
import { defineEventHandler } from 'h3'

interface LocaleInfo {
  code: string;
  language: string;
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const baseUrl = config.public.siteUrl || 'https://colormagic.club'
  
  // 创建 sitemap stream
  const sitemap = new SitemapStream({
    hostname: baseUrl,
    xmlns: {
      // 添加 xhtml 命名空间，用于多语言标签
      xhtml: true,
      // 添加必需的默认值
      news: false,
      video: false,
      image: false
    }
  })

  // 从 i18n 配置获取所有支持的语言
  const defaultLocales: LocaleInfo[] = [
    { code: 'en', language: 'en-US' },
    { code: 'ja', language: 'ja-JP' },
    { code: 'it', language: 'it-IT' }
  ];
  
  const defaultLocale = 'en'
  const locales: LocaleInfo[] = Array.isArray(config.public?.i18n?.locales) 
    ? config.public.i18n.locales 
    : defaultLocales;
  
  // 主要路由列表
  const routes = [
    { path: '/', changefreq: 'daily', priority: 1.0 },
    { path: '/image-color-picker', changefreq: 'weekly', priority: 0.8 },
    { path: '/random-color', changefreq: 'weekly', priority: 0.8 },
    { path: '/palette-generator', changefreq: 'weekly', priority: 0.8 },
    { path: '/contrast-checker', changefreq: 'weekly', priority: 0.8 },
    { path: '/explore', changefreq: 'daily', priority: 0.9 },
    { path: '/api', changefreq: 'monthly', priority: 0.6 },
    { path: '/privacy', changefreq: 'monthly', priority: 0.5 },
    { path: '/terms', changefreq: 'monthly', priority: 0.5 },
    { path: '/app', changefreq: 'weekly', priority: 0.8 },
    { path: '/app/contrast-checker', changefreq: 'weekly', priority: 0.7 },
    { path: '/app/explore', changefreq: 'weekly', priority: 0.7 },
    { path: '/app/image-color-picker', changefreq: 'weekly', priority: 0.7 },
    { path: '/app/palette', changefreq: 'weekly', priority: 0.7 },
    { path: '/app/random-color', changefreq: 'weekly', priority: 0.7 },
  ]
  
  // 为每个路由生成多语言版本
  for (const route of routes) {
    // 每个路由生成所有语言版本的links
    const links = locales.map(locale => {
      // 对于默认语言，URL不添加语言前缀
      const path = locale.code === defaultLocale ? route.path : `/${locale.code}${route.path}`
      return {
        lang: locale.language,
        url: `${baseUrl}${path}`
      }
    })
    
    // 为每种语言添加带有所有语言链接的URL
    for (const locale of locales) {
      const isDefault = locale.code === defaultLocale
      const path = isDefault ? route.path : `/${locale.code}${route.path}`
      
      sitemap.write({
        url: path,
        changefreq: route.changefreq,
        priority: route.priority,
        lastmod: new Date().toISOString(),
        links
      })
    }
  }
  
  sitemap.end()
  
  return streamToPromise(sitemap)
    .then(data => {
      event.node.res.setHeader('Content-Type', 'application/xml')
      event.node.res.end(data.toString())
    })
}) 