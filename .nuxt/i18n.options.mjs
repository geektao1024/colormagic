
// @ts-nocheck


export const localeCodes =  [
  "en",
  "ja",
  "it"
]

export const localeLoaders = {
  "en": [],
  "ja": [],
  "it": []
}

export const vueI18nConfigs = [
  () => import("../i18n.config.ts?hash=bffaebcb&config=1" /* webpackChunkName: "i18n_config_bffaebcb" */)
]

export const nuxtI18nOptions = {
  "experimental": {
    "localeDetector": "",
    "switchLocalePathLinkSSR": false,
    "autoImportTranslationFunctions": false
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false
  },
  "compilation": {
    "jit": true,
    "strictMessage": true,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "",
  "locales": [
    {
      "code": "en",
      "language": "en-US",
      "name": "English",
      "flag": "🇬🇧"
    },
    {
      "code": "ja",
      "language": "ja-JP",
      "name": "Japanese",
      "flag": "🇯🇵"
    },
    {
      "code": "it",
      "language": "it-IT",
      "name": "Italian",
      "flag": "🇮🇹"
    }
  ],
  "defaultLocale": "en",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "prefix_except_default",
  "lazy": false,
  "langDir": null,
  "detectBrowserLanguage": false,
  "differentDomains": false,
  "baseUrl": "https://colormagic.club",
  "dynamicRouteParams": false,
  "customRoutes": "page",
  "pages": {},
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false,
  "multiDomainLocales": false,
  "i18nModules": []
}

export const normalizedLocales = [
  {
    "code": "en",
    "language": "en-US",
    "name": "English",
    "flag": "🇬🇧",
    "files": []
  },
  {
    "code": "ja",
    "language": "ja-JP",
    "name": "Japanese",
    "flag": "🇯🇵",
    "files": []
  },
  {
    "code": "it",
    "language": "it-IT",
    "name": "Italian",
    "flag": "🇮🇹",
    "files": []
  }
]

export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false

export const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18n"
export const DEFAULT_COOKIE_KEY = "i18n_redirected"
export const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp"
