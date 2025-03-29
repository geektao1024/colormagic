import { defineEventHandler } from 'h3'

export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  const baseUrl = config.public.siteUrl || 'https://colormagic.club'
  
  // 为爬虫设置规则，同时指向 sitemap 文件
  const robotsTxt = `
User-agent: *
Allow: /

# 禁止爬取的目录
Disallow: /admin/
Disallow: /login/

# 引用 Sitemap 文件
Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/sitemap-index.xml

# 搜索引擎抓取延迟（秒）
Crawl-delay: 10
`

  event.node.res.setHeader('Content-Type', 'text/plain')
  return robotsTxt.trim()
}) 