/**
 * 动态生成 sitemap URL 的服务器路由
 * 这可以从数据库或其他动态源获取 URL
 */

// 定义 sitemap URL 的接口
interface SitemapUrl {
  loc: string;
  lastmod?: Date;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export default defineEventHandler(async (event) => {
  // 获取基础URL，始终使用生产环境URL
  const baseUrl = 'https://colormagic.club';
  
  // 这里可以添加从数据库或其他动态源获取 URL 的逻辑
  // 例如从 MongoDB 数据库中获取所有颜色主题或保存的调色板
  
  // 示例：模拟一些动态生成的 URL - 确保只包含路径部分，不包含域名
  const dynamicUrls: SitemapUrl[] = [
    // 示例：假设有一些动态生成的调色板页面
    {
      loc: '/palette/summer-vibes',
      lastmod: new Date(),
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: '/palette/ocean-breeze',
      lastmod: new Date(),
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: '/palette/forest-dream',
      lastmod: new Date(),
      changefreq: 'monthly',
      priority: 0.8
    }
    // 实际应用中，这些应该从数据库中动态获取
  ]

  // 为多语言网站添加语言特定版本的 URL
  const locales = ['en', 'ja', 'it']
  const defaultLocale = 'en'
  
  // 为除默认语言以外的所有语言创建本地化版本的 URL
  const localizedUrls = dynamicUrls.flatMap(url => {
    return locales
      .filter(locale => locale !== defaultLocale)
      .map(locale => ({
        ...url,
        loc: `/${locale}${url.loc}`
      }))
  })
  
  // 合并默认 URL 和本地化 URL，确保没有localhost
  return [...dynamicUrls, ...localizedUrls]
}) 