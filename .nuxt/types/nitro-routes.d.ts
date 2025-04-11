// Generated by nitro
import type { Serialize, Simplify } from 'nitropack'
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/api/sitemap-urls': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/sitemap-urls.get').default>>>>
    }
    '/api/auth/google/login': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../layers/auth/server/api/auth/google/login').default>>>>
    }
    '/api/google/auth/get-url': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../layers/google/server/api/google/auth/get-url').default>>>>
    }
    '/api/og': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../layers/og/server/api/og/index.get').default>>>>
    }
    '/api/og/tag': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../layers/og/server/api/og/tag/index.get').default>>>>
    }
    '/api/og/thumbnail': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../layers/og/server/api/og/thumbnail/index.get').default>>>>
    }
    '/api/palettes/:id/clone': {
      'put': Simplify<Serialize<Awaited<ReturnType<typeof import('../../layers/palette/server/api/palettes/[id]/clone.put').default>>>>
    }
    '/api/palettes/:id': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../layers/palette/server/api/palettes/[id]/index.get').default>>>>
    }
    '/api/palettes/:id/like': {
      'delete': Simplify<Serialize<Awaited<ReturnType<typeof import('../../layers/palette/server/api/palettes/[id]/like/index.delete').default>>>>
      'put': Simplify<Serialize<Awaited<ReturnType<typeof import('../../layers/palette/server/api/palettes/[id]/like/index.put').default>>>>
    }
    '/api/palettes/count': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../layers/palette/server/api/palettes/count/index.get').default>>>>
    }
    '/api/palettes': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../layers/palette/server/api/palettes/index.get').default>>>>
      'put': Simplify<Serialize<Awaited<ReturnType<typeof import('../../layers/palette/server/api/palettes/index.put').default>>>>
    }
    '/api/palettes/liked': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../layers/palette/server/api/palettes/liked/index.get').default>>>>
    }
    '/api/user/get': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../layers/user/server/api/user/get.get').default>>>>
    }
    '/__sitemap-urls': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/routes/__sitemap-urls.get').default>>>>
    }
    '/sitemap.xml': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/routes/sitemap.xml').default>>>> | Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxtjs/sitemap/dist/runtime/server/routes/sitemap.xml').default>>>>
    }
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>>>
    }
    '/api/_nuxt_icon/:collection': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/icon/dist/runtime/server/api').default>>>>
    }
    '/__site-config__/debug.json': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt-site-config/dist/runtime/server/routes/__site-config__/debug').default>>>>
    }
    '/sitemap_index.xml': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxtjs/sitemap/dist/runtime/server/routes/sitemap_index.xml').default>>>>
    }
    '/__sitemap__/**:sitemap': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxtjs/sitemap/dist/runtime/server/routes/sitemap/[sitemap].xml').default>>>>
    }
    '/__sitemap__/debug.json': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxtjs/sitemap/dist/runtime/server/routes/__sitemap__/debug').default>>>>
    }
    '/__sitemap__/style.xsl': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxtjs/sitemap/dist/runtime/server/routes/sitemap.xsl').default>>>>
    }
  }
}
export {}