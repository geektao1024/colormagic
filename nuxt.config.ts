export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/img/icon.svg' },
        { rel: 'apple-touch-icon', href: '/img/apple-touch-icon.png' },
        { rel: 'manifest', href: '/manifest.webmanifest' }
      ],
      meta: [
        { name: 'robots', content: 'index, follow' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'googlebot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
        { name: 'bingbot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
        { property: 'og:site_name', content: 'ColorMagic' }
      ]
    }
  },
  css: [
    '@/assets/css/global.css'
  ],
  colorMode: {
    preference: 'light'
  },
  extends: [
    '@nuxt/ui-pro'
  ],
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/ui',
    '@nuxtjs/plausible',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap'
  ],
  tailwindcss: {
    viewer: false
  },
  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700, 800, 900]
    },
    display: 'swap'
  },
  typescript: {
    strict: false,
    typeCheck: false,
    shim: false
  },
  runtimeConfig: {
    nodeEnv: process.env.NODE_ENV,
    logLevel: process.env.LOG_LEVEL ?? 'debug',
    rateLimit: {
      maxRequests: 100,
      intervalSeconds: 86400 // 24小时
    },
    public: {
      nodeEnv: process.env.NODE_ENV,
      siteUrl: process.env.SITE_URL ?? 'http://localhost:3000',
      apiUrl: process.env.SITE_URL !== undefined
        ? `${process.env.SITE_URL}/api`
        : 'http://localhost:3000/api'
    }
  },
  routeRules: {
    /** @description add cache time for images to make pagespeed insights happy */
    '/_nuxt/**': { headers: { 'cache-control': 'max-age=31536000' } },
    '/img/**': { headers: { 'cache-control': 'max-age=31536000' } },
    '/palette/explore': { headers: { 'cache-control': 'max-age=0' } },
    '/palette/explore/*': { headers: { 'cache-control': 'max-age=0' } },
    '/palette/*': { headers: { 'cache-control': 'max-age=2592000' } },
    
    // SEO 相关的路由规则
    '/sitemap.xml': { 
      headers: { 
        'cache-control': 'max-age=3600',
        'content-type': 'application/xml'
      } 
    },
    '/sitemap-index.xml': { 
      headers: { 
        'cache-control': 'max-age=3600',
        'content-type': 'application/xml'
      } 
    },
    '/i18n-sitemap.xml': { 
      headers: { 
        'cache-control': 'max-age=3600',
        'content-type': 'application/xml'
      } 
    },
    '/robots.txt': { 
      headers: { 
        'cache-control': 'max-age=86400',
        'content-type': 'text/plain'
      } 
    }
  },
  compatibilityDate: '2024-09-23',
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    baseUrl: process.env.SITE_URL ?? 'http://localhost:3000',
    detectBrowserLanguage: false,
    locales: [
      {
        code: 'en',
        language: 'en-US',
        name: 'English',
        flag: '🇬🇧'
      },
      {
        code: 'ja',
        language: 'ja-JP',
        name: 'Japanese',
        flag: '🇯🇵'
      },
      {
        code: 'it',
        language: 'it-IT',
        name: 'Italian',
        flag: '🇮🇹'
      }
    ]
  },
  plausible: {
    domain: 'colormagic.club',
    apiHost: 'https://plausible.io',
    trackLocalhost: false,
    autoPageviews: true,
    autoOutboundTracking: true
  },
  // @ts-ignore - Type for sitemap module
  sitemap: {
    sitemapName: 'sitemap.xml',
    siteUrl: process.env.SITE_URL || 'https://colormagic.club',
    autoI18n: true,
    excludeRules: [
      '/login',
      '/admin/**'
    ],
    defaults: {
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date()
    },
    strictNuxtContentPaths: true,
  }
});
