// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type IsAny<T> = 0 extends 1 & T ? true : false
type InjectionType<A extends Plugin> = IsAny<A> extends true ? unknown : A extends Plugin<infer T> ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/revive-payload.client.js").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/head/runtime/plugins/unhead.js").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/pages/runtime/plugins/router.js").default> &
  InjectionType<typeof import("../../node_modules/nuxt-site-config/dist/runtime/app/plugins/0.siteConfig.js").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/navigation-repaint.client.js").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/check-outdated-build.client.js").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/revive-payload.server.js").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/chunk-reload.client.js").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/pages/runtime/plugins/prefetch.client.js").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/pages/runtime/plugins/check-if-page-unused.js").default> &
  InjectionType<typeof import("../../node_modules/@nuxt/devtools/dist/runtime/plugins/devtools.server.js").default> &
  InjectionType<typeof import("../../node_modules/@nuxt/devtools/dist/runtime/plugins/devtools.client.js").default> &
  InjectionType<typeof import("../../node_modules/nuxt-site-config/dist/runtime/app/plugins/i18n.js").default> &
  InjectionType<typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/plugins/switch-locale-path-ssr.js").default> &
  InjectionType<typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/plugins/i18n.js").default> &
  InjectionType<typeof import("../../node_modules/@nuxtjs/plausible/dist/runtime/plugin.client.js").default> &
  InjectionType<typeof import("../../node_modules/@nuxt/ui/dist/runtime/plugins/slideovers.js").default> &
  InjectionType<typeof import("../../node_modules/@nuxt/ui/dist/runtime/plugins/modals.js").default> &
  InjectionType<typeof import("../../node_modules/@nuxt/ui/dist/runtime/plugins/colors.js").default> &
  InjectionType<typeof import("../../node_modules/@nuxtjs/color-mode/dist/runtime/plugin.server.js").default> &
  InjectionType<typeof import("../../node_modules/@nuxtjs/color-mode/dist/runtime/plugin.client.js").default> &
  InjectionType<typeof import("../../node_modules/@nuxt/icon/dist/runtime/plugin.js").default> &
  InjectionType<typeof import("../../node_modules/@nuxt/ui-pro/modules/pro/runtime/plugins/scrollbars.client").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/dev-server-logs.js").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/check-if-layout-used.js").default> &
  InjectionType<typeof import("../../node_modules/@nuxt/ui-pro/plugins/presets").default> &
  InjectionType<typeof import("../../node_modules/@nuxt/ui-pro/plugins/variables").default> &
  InjectionType<typeof import("../../plugins/baidu-analytics.client").default> &
  InjectionType<typeof import("../../plugins/google-adsense.client").default> &
  InjectionType<typeof import("../../plugins/google-analytics.client").default> &
  InjectionType<typeof import("../../plugins/vue-query").default> &
  InjectionType<typeof import("../../node_modules/@nuxtjs/plausible/dist/runtime/plugin-auto-pageviews.client.js").default> &
  InjectionType<typeof import("../../node_modules/@nuxtjs/plausible/dist/runtime/plugin-auto-outbound-tracking.client.js").default>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }

  interface NuxtAppLiterals {
    pluginName: 'nuxt:revive-payload:client' | 'nuxt:head' | 'nuxt:router' | 'nuxt-site-config:init' | 'nuxt:revive-payload:server' | 'nuxt:chunk-reload' | 'nuxt:global-components' | 'nuxt:prefetch' | 'nuxt:checkIfPageUnused' | 'nuxt-site-config:i18n' | 'i18n:plugin:switch-locale-path-ssr' | 'i18n:plugin' | 'plausible' | '@nuxt/icon' | 'nuxt:checkIfLayoutUsed' | 'plausible:auto-pageviews' | 'plausible:auto-outbound-tracking'
  }
}

declare module 'vue' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }
