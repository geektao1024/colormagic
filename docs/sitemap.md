# ColorMagic 网站 Sitemap 配置文档

## 概述

本文档介绍了 ColorMagic 网站的 Sitemap XML 配置，包括静态页面和动态生成的 URL。Sitemap 有助于搜索引擎更好地爬取和索引网站内容，提高网站在搜索结果中的可见性。

## 配置详情

### 安装依赖

我们使用 `@nuxtjs/sitemap` 模块来生成和管理 sitemap：

```bash
npm install @nuxtjs/sitemap
```

### Nuxt 配置

在 `nuxt.config.ts` 文件中添加 sitemap 模块配置：

```typescript
export default defineNuxtConfig({
  // 其他配置...
  
  modules: [
    // 其他模块...
    '@nuxtjs/sitemap'
  ],
  
  sitemap: {
    siteUrl: 'https://colormagic.club',
    autoLastmod: true,
    xslColumns: [
      { label: '优先级', width: '90%' },
      { label: '更改频率', width: '130%' }
    ],
    defaults: {
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date()
    },
    dynamicUrlsApiEndpoint: '/__sitemap-urls',
    exclude: [
      '/login',
      '/app/**'
    ],
    urls: [
      {
        loc: '/',
        changefreq: 'daily',
        priority: 1
      },
      // 其他静态 URL...
    ],
    i18n: {
      locales: ['en', 'ja', 'it'],
      defaultLocale: 'en'
    }
  }
})
```

### 配置说明

- **siteUrl**: 网站的基本 URL，所有站点地图条目都将使用此基本 URL
- **autoLastmod**: 自动为 URL 添加 lastmod 时间戳
- **xslColumns**: 自定义 XML 样式表的列
- **defaults**: 默认的 URL 参数 (优先级、更新频率等)
- **dynamicUrlsApiEndpoint**: 用于获取动态 URL 的 API 端点
- **exclude**: 要从站点地图中排除的 URL 模式
- **urls**: 静态定义的 URL 列表
- **i18n**: 国际化配置，与 Nuxt i18n 模块集成

## 动态 URL 生成

对于动态内容（如用户生成的调色板），我们实现了两个服务器端点：

1. `server/api/sitemap-urls.get.ts` - 主要的动态 URL 生成器
2. `server/routes/__sitemap-urls.get.ts` - 连接到 sitemap 模块的路由处理器

### 动态 URL 示例

```typescript
// server/api/sitemap-urls.get.ts
export default defineEventHandler(async () => {
  // 这里可以添加从数据库或其他动态源获取 URL 的逻辑
  // 例如从 MongoDB 数据库中获取所有颜色主题或保存的调色板
  
  const dynamicUrls = [
    {
      loc: '/palette/summer-vibes',
      lastmod: new Date(),
      changefreq: 'monthly',
      priority: 0.8
    },
    // 更多动态 URL...
  ]
  
  // 处理国际化
  const localizedUrls = dynamicUrls.flatMap(url => {
    return locales
      .filter(locale => locale !== defaultLocale)
      .map(locale => ({
        ...url,
        loc: `/${locale}${url.loc}`
      }))
  })
  
  return [...dynamicUrls, ...localizedUrls]
})
```

## 如何使用

### 访问 Sitemap

Sitemap 可通过以下 URL 访问：

- 主 Sitemap: `https://colormagic.club/sitemap.xml`
- 按语言的 Sitemap: `https://colormagic.club/sitemap_en.xml`、`https://colormagic.club/sitemap_ja.xml` 等

### 向搜索引擎提交

1. 在 Google Search Console 中提交 sitemap.xml URL
2. 在 Bing Webmaster Tools 中提交 sitemap.xml URL
3. 在 robots.txt 文件中添加 Sitemap 引用（已自动处理）

## 最佳实践

1. 定期更新 sitemap 中的动态内容
2. 确保所有重要页面都包含在 sitemap 中
3. 排除不应被索引的页面（如登录页面）
4. 为频繁更新的页面设置较高的优先级和更改频率
5. 确保为所有支持的语言正确生成本地化 URL

## 调试

可以通过访问 `/sitemap.xml` 和 `/__sitemap-urls` 端点来检查生成的 sitemap 内容。

## 维护

随着网站内容的变化，可能需要更新：

1. 静态 URL 列表
2. 动态 URL 生成逻辑
3. 优先级和更改频率设置

请确保在添加新的主要页面或内容类型时更新 sitemap 配置。 