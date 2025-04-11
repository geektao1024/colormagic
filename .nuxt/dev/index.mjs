import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { Server } from 'node:http';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { mkdirSync } from 'node:fs';
import { parentPort, threadId } from 'node:worker_threads';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, fetchWithEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, createError, setResponseHeader, send, getResponseStatus, setResponseStatus, setResponseHeaders, getRequestIP, setCookie, getCookie, getHeader, getQuery as getQuery$1, readBody, getRouterParams, getRequestHeaders, getRequestHost, getRequestProtocol, getRequestURL, setHeader, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler, getRouterParam, getResponseStatusText } from 'file:///Users/geektao/000-web-ai/colormagic/node_modules/h3/dist/index.mjs';
import { SitemapStream, streamToPromise } from 'file:///Users/geektao/000-web-ai/colormagic/node_modules/sitemap/dist/index.js';
import { getRequestDependencies, getPreloadLinks, getPrefetchLinks, createRenderer } from 'file:///Users/geektao/000-web-ai/colormagic/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { stringify, uneval } from 'file:///Users/geektao/000-web-ai/colormagic/node_modules/devalue/index.js';
import destr from 'file:///Users/geektao/000-web-ai/colormagic/node_modules/destr/dist/index.mjs';
import { renderToString } from 'file:///Users/geektao/000-web-ai/colormagic/node_modules/vue/server-renderer/index.mjs';
import { propsToString, renderSSRHead } from 'file:///Users/geektao/000-web-ai/colormagic/node_modules/@unhead/ssr/dist/index.mjs';
import { createServerHead as createServerHead$1, CapoPlugin } from 'file:///Users/geektao/000-web-ai/colormagic/node_modules/unhead/dist/index.mjs';
import { isVNode, toValue, unref, version } from 'file:///Users/geektao/000-web-ai/colormagic/node_modules/vue/index.mjs';
import { defineHeadPlugin } from 'file:///Users/geektao/000-web-ai/colormagic/node_modules/@unhead/shared/dist/index.mjs';
import defu, { defuFn, defu as defu$1, createDefu } from 'file:///Users/geektao/000-web-ai/colormagic/node_modules/defu/dist/defu.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/geektao/000-web-ai/colormagic/node_modules/radix3/dist/index.mjs';
import { consola, createConsola } from 'file:///Users/geektao/000-web-ai/colormagic/node_modules/consola/dist/index.mjs';
import { klona } from 'file:///Users/geektao/000-web-ai/colormagic/node_modules/klona/dist/index.mjs';
import { snakeCase } from 'file:///Users/geektao/000-web-ai/colormagic/node_modules/scule/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file:///Users/geektao/000-web-ai/colormagic/node_modules/ofetch/dist/node.mjs';
import { createCall, createFetch } from 'file:///Users/geektao/000-web-ai/colormagic/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file:///Users/geektao/000-web-ai/colormagic/node_modules/hookable/dist/index.mjs';
import { hash } from 'file:///Users/geektao/000-web-ai/colormagic/node_modules/ohash/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///Users/geektao/000-web-ai/colormagic/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/geektao/000-web-ai/colormagic/node_modules/unstorage/drivers/fs.mjs';
import { AsyncLocalStorage } from 'node:async_hooks';
import { getContext } from 'file:///Users/geektao/000-web-ai/colormagic/node_modules/unctx/dist/index.mjs';
import { captureRawStackTrace, parseRawStackTrace } from 'file:///Users/geektao/000-web-ai/colormagic/node_modules/errx/dist/index.js';
import devalue from 'file:///Users/geektao/000-web-ai/colormagic/node_modules/@nuxt/devalue/dist/devalue.mjs';
import { pino } from 'file:///Users/geektao/000-web-ai/colormagic/node_modules/pino/pino.js';
import jwt from 'file:///Users/geektao/000-web-ai/colormagic/node_modules/jsonwebtoken/index.js';
import { addDays } from 'file:///Users/geektao/000-web-ai/colormagic/node_modules/date-fns/index.js';
import OpenAI from 'file:///Users/geektao/000-web-ai/colormagic/node_modules/openai/index.mjs';
import { OAuth2Client } from 'file:///Users/geektao/000-web-ai/colormagic/node_modules/google-auth-library/build/src/index.js';
import { Type, TypeGuard } from 'file:///Users/geektao/000-web-ai/colormagic/node_modules/@sinclair/typebox/build/esm/index.mjs';
import { betterAjvErrors } from 'file:///Users/geektao/000-web-ai/colormagic/node_modules/@apideck/better-ajv-errors/dist/index.js';
import Ajv from 'file:///Users/geektao/000-web-ai/colormagic/node_modules/ajv/dist/ajv.js';
import addFormats from 'file:///Users/geektao/000-web-ai/colormagic/node_modules/ajv-formats/dist/index.js';
import { Value } from 'file:///Users/geektao/000-web-ai/colormagic/node_modules/@sinclair/typebox/build/esm/value/index.mjs';
import { MongoClient, ObjectId } from 'file:///Users/geektao/000-web-ai/colormagic/node_modules/mongodb/lib/index.js';
import * as fs from 'fs';
import * as path from 'path';
import sharp from 'file:///Users/geektao/000-web-ai/colormagic/node_modules/sharp/lib/index.js';
import { basename } from 'file:///Users/geektao/000-web-ai/colormagic/node_modules/pathe/dist/index.mjs';
import { getIcons } from 'file:///Users/geektao/000-web-ai/colormagic/node_modules/@iconify/utils/lib/index.mjs';
import { collections } from 'file:///Users/geektao/000-web-ai/colormagic/.nuxt/nuxt-icon-server-bundle.mjs';

const r=Object.create(null),i=e=>globalThis.process?.env||globalThis._importMeta_.env||globalThis.Deno?.env.toObject()||globalThis.__env__||(e?r:globalThis),o=new Proxy(r,{get(e,s){return i()[s]??r[s]},has(e,s){const E=i();return s in E||s in r},set(e,s,E){const B=i(true);return B[s]=E,true},deleteProperty(e,s){if(!s)return  false;const E=i(true);return delete E[s],true},ownKeys(){const e=i(true);return Object.keys(e)}}),t=typeof process<"u"&&process.env&&"development"||"",f=[["APPVEYOR"],["AWS_AMPLIFY","AWS_APP_ID",{ci:true}],["AZURE_PIPELINES","SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"],["AZURE_STATIC","INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"],["APPCIRCLE","AC_APPCIRCLE"],["BAMBOO","bamboo_planKey"],["BITBUCKET","BITBUCKET_COMMIT"],["BITRISE","BITRISE_IO"],["BUDDY","BUDDY_WORKSPACE_ID"],["BUILDKITE"],["CIRCLE","CIRCLECI"],["CIRRUS","CIRRUS_CI"],["CLOUDFLARE_PAGES","CF_PAGES",{ci:true}],["CODEBUILD","CODEBUILD_BUILD_ARN"],["CODEFRESH","CF_BUILD_ID"],["DRONE"],["DRONE","DRONE_BUILD_EVENT"],["DSARI"],["GITHUB_ACTIONS"],["GITLAB","GITLAB_CI"],["GITLAB","CI_MERGE_REQUEST_ID"],["GOCD","GO_PIPELINE_LABEL"],["LAYERCI"],["HUDSON","HUDSON_URL"],["JENKINS","JENKINS_URL"],["MAGNUM"],["NETLIFY"],["NETLIFY","NETLIFY_LOCAL",{ci:false}],["NEVERCODE"],["RENDER"],["SAIL","SAILCI"],["SEMAPHORE"],["SCREWDRIVER"],["SHIPPABLE"],["SOLANO","TDDIUM"],["STRIDER"],["TEAMCITY","TEAMCITY_VERSION"],["TRAVIS"],["VERCEL","NOW_BUILDER"],["VERCEL","VERCEL",{ci:false}],["VERCEL","VERCEL_ENV",{ci:false}],["APPCENTER","APPCENTER_BUILD_ID"],["CODESANDBOX","CODESANDBOX_SSE",{ci:false}],["CODESANDBOX","CODESANDBOX_HOST",{ci:false}],["STACKBLITZ"],["STORMKIT"],["CLEAVR"],["ZEABUR"],["CODESPHERE","CODESPHERE_APP_ID",{ci:true}],["RAILWAY","RAILWAY_PROJECT_ID"],["RAILWAY","RAILWAY_SERVICE_ID"],["DENO-DEPLOY","DENO_DEPLOYMENT_ID"],["FIREBASE_APP_HOSTING","FIREBASE_APP_HOSTING",{ci:true}]];function b(){if(globalThis.process?.env)for(const e of f){const s=e[1]||e[0];if(globalThis.process?.env[s])return {name:e[0].toLowerCase(),...e[2]}}return globalThis.process?.env?.SHELL==="/bin/jsh"&&globalThis.process?.versions?.webcontainer?{name:"stackblitz",ci:false}:{name:"",ci:false}}const l=b(),p=l.name;function n(e){return e?e!=="false":false}const I=globalThis.process?.platform||"",T=n(o.CI)||l.ci!==false,a=n(globalThis.process?.stdout&&globalThis.process?.stdout.isTTY);n(o.DEBUG);const R=t==="test"||n(o.TEST);n(o.MINIMAL)||T||R||!a;const A=/^win/i.test(I);!n(o.NO_COLOR)&&(n(o.FORCE_COLOR)||(a||A)&&o.TERM!=="dumb"||T);const C=(globalThis.process?.versions?.node||"").replace(/^v/,"")||null;Number(C?.split(".")[0])||null;const y=globalThis.process||Object.create(null),_={versions:{}};new Proxy(y,{get(e,s){if(s==="env")return o;if(s in e)return e[s];if(s in _)return _[s]}});const c=globalThis.process?.release?.name==="node",O=!!globalThis.Bun||!!globalThis.process?.versions?.bun,D=!!globalThis.Deno,L=!!globalThis.fastly,S=!!globalThis.Netlify,u=!!globalThis.EdgeRuntime,N=globalThis.navigator?.userAgent==="Cloudflare-Workers",F=[[S,"netlify"],[u,"edge-light"],[N,"workerd"],[L,"fastly"],[D,"deno"],[O,"bun"],[c,"node"]];function G(){const e=F.find(s=>s[0]);if(e)return {name:e[1]}}const P=G();P?.name||"";

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /{{(.*?)}}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const defineAppConfig = (config) => config;

const appConfig0 = defineAppConfig({
  ui: {
    primary: "default-blue",
    gray: "cool",
    button: {
      rounded: "rounded-full",
      default: {
        color: "white",
        variant: "ghost",
        border: "none"
      },
      color: {
        white: {
          solid: "bg-white text-gray-900 hover:bg-white/90 dark:ring-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800",
          ghost: "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 dark:border-gray-800",
          link: "text-gray-900 dark:text-white underline-offset-4 hover:underline dark:hover:bg-gray-800",
          outline: "text-white border-white/5 hover:bg-white/10 dark:border-white/5"
        }
      },
      size: {
        xl: "text-xl"
      },
      padding: {
        xl: "px-8 py-2.5"
      }
    },
    input: {
      default: {
        size: "md",
        color: "white",
        variant: "outline"
      },
      color: {
        white: {
          outline: "bg-white/5 border-white/5 text-white ring-white/5 focus:border-white/20 focus:ring-white/10 placeholder:text-white/40"
        }
      }
    },
    card: {
      rounded: "rounded-xl",
      shadow: "shadow-sm",
      default: {
        variant: "ghost",
        ui: { background: "bg-white dark:bg-white/5 backdrop-blur-md border border-white/5" }
      }
    },
    modal: {
      default: {
        ui: {
          container: "dark:bg-white/5 backdrop-blur-md border dark:border-white/5",
          overlay: "dark:bg-gray-900/80",
          base: "dark:bg-white/5 backdrop-blur-xl border dark:border-white/5"
        }
      }
    }
  }
});

const appConfig1 = defineAppConfig({
  ui: {
    variables: {
      light: {
        background: "255 255 255",
        foreground: "var(--color-gray-700)"
      },
      dark: {
        background: "var(--color-gray-900)",
        foreground: "var(--color-gray-200)"
      },
      header: {
        height: "4rem"
      }
    },
    icons: {
      dark: "i-heroicons-moon-20-solid",
      light: "i-heroicons-sun-20-solid",
      system: "i-heroicons-computer-desktop-20-solid",
      search: "i-heroicons-magnifying-glass-20-solid",
      external: "i-heroicons-arrow-up-right-20-solid",
      chevron: "i-heroicons-chevron-down-20-solid",
      hash: "i-heroicons-hashtag-20-solid",
      menu: "i-heroicons-bars-3-20-solid",
      close: "i-heroicons-x-mark-20-solid",
      check: "i-heroicons-check-circle-20-solid"
    },
    presets: {
      button: {
        primary: {
          color: "white",
          variant: "solid"
        },
        secondary: {
          color: "gray",
          variant: "ghost"
        },
        input: {
          color: "white",
          variant: "outline",
          ui: {
            font: "",
            color: {
              white: {
                outline: "ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:ring-gray-300 dark:hover:ring-gray-700 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
              }
            }
          }
        }
      }
    }
  }
});

const inlineAppConfig = {
  "nuxt": {},
  "icon": {
    "provider": "server",
    "class": "",
    "aliases": {},
    "iconifyApiEndpoint": "https://api.iconify.design",
    "localApiEndpoint": "/api/_nuxt_icon",
    "fallbackToApi": true,
    "cssSelectorPrefix": "i-",
    "cssWherePseudo": true,
    "mode": "css",
    "attrs": {
      "aria-hidden": true
    },
    "collections": [
      "academicons",
      "akar-icons",
      "ant-design",
      "arcticons",
      "basil",
      "bi",
      "bitcoin-icons",
      "bpmn",
      "brandico",
      "bx",
      "bxl",
      "bxs",
      "bytesize",
      "carbon",
      "catppuccin",
      "cbi",
      "charm",
      "ci",
      "cib",
      "cif",
      "cil",
      "circle-flags",
      "circum",
      "clarity",
      "codicon",
      "covid",
      "cryptocurrency",
      "cryptocurrency-color",
      "dashicons",
      "devicon",
      "devicon-plain",
      "ei",
      "el",
      "emojione",
      "emojione-monotone",
      "emojione-v1",
      "entypo",
      "entypo-social",
      "eos-icons",
      "ep",
      "et",
      "eva",
      "f7",
      "fa",
      "fa-brands",
      "fa-regular",
      "fa-solid",
      "fa6-brands",
      "fa6-regular",
      "fa6-solid",
      "fad",
      "fe",
      "feather",
      "file-icons",
      "flag",
      "flagpack",
      "flat-color-icons",
      "flat-ui",
      "flowbite",
      "fluent",
      "fluent-emoji",
      "fluent-emoji-flat",
      "fluent-emoji-high-contrast",
      "fluent-mdl2",
      "fontelico",
      "fontisto",
      "formkit",
      "foundation",
      "fxemoji",
      "gala",
      "game-icons",
      "geo",
      "gg",
      "gis",
      "gravity-ui",
      "gridicons",
      "grommet-icons",
      "guidance",
      "healthicons",
      "heroicons",
      "heroicons-outline",
      "heroicons-solid",
      "hugeicons",
      "humbleicons",
      "ic",
      "icomoon-free",
      "icon-park",
      "icon-park-outline",
      "icon-park-solid",
      "icon-park-twotone",
      "iconamoon",
      "iconoir",
      "icons8",
      "il",
      "ion",
      "iwwa",
      "jam",
      "la",
      "lets-icons",
      "line-md",
      "logos",
      "ls",
      "lucide",
      "lucide-lab",
      "mage",
      "majesticons",
      "maki",
      "map",
      "marketeq",
      "material-symbols",
      "material-symbols-light",
      "mdi",
      "mdi-light",
      "medical-icon",
      "memory",
      "meteocons",
      "mi",
      "mingcute",
      "mono-icons",
      "mynaui",
      "nimbus",
      "nonicons",
      "noto",
      "noto-v1",
      "octicon",
      "oi",
      "ooui",
      "openmoji",
      "oui",
      "pajamas",
      "pepicons",
      "pepicons-pencil",
      "pepicons-pop",
      "pepicons-print",
      "ph",
      "pixelarticons",
      "prime",
      "ps",
      "quill",
      "radix-icons",
      "raphael",
      "ri",
      "rivet-icons",
      "si-glyph",
      "simple-icons",
      "simple-line-icons",
      "skill-icons",
      "solar",
      "streamline",
      "streamline-emojis",
      "subway",
      "svg-spinners",
      "system-uicons",
      "tabler",
      "tdesign",
      "teenyicons",
      "token",
      "token-branded",
      "topcoat",
      "twemoji",
      "typcn",
      "uil",
      "uim",
      "uis",
      "uit",
      "uiw",
      "unjs",
      "vaadin",
      "vs",
      "vscode-icons",
      "websymbol",
      "weui",
      "whh",
      "wi",
      "wpf",
      "zmdi",
      "zondicons"
    ],
    "fetchTimeout": 1500
  },
  "ui": {
    "primary": "green",
    "gray": "cool",
    "colors": [
      "red",
      "orange",
      "amber",
      "yellow",
      "lime",
      "green",
      "emerald",
      "teal",
      "cyan",
      "sky",
      "blue",
      "indigo",
      "violet",
      "purple",
      "fuchsia",
      "pink",
      "rose",
      "primary",
      "default-blue",
      "warning",
      "default-black"
    ],
    "strategy": "merge"
  }
};

const appConfig = defuFn(appConfig0, appConfig1, inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "dev",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "max-age=31536000"
        }
      },
      "/img/**": {
        "headers": {
          "cache-control": "max-age=31536000"
        }
      },
      "/palette/explore": {
        "headers": {
          "cache-control": "max-age=0"
        }
      },
      "/palette/explore/*": {
        "headers": {
          "cache-control": "max-age=0"
        }
      },
      "/palette/*": {
        "headers": {
          "cache-control": "max-age=2592000"
        }
      },
      "/__sitemap__/style.xsl": {
        "headers": {
          "Content-Type": "application/xslt+xml"
        }
      },
      "/sitemap.xml": {
        "redirect": {
          "to": "/sitemap_index.xml",
          "statusCode": 307
        }
      },
      "/sitemap_index.xml": {},
      "/__sitemap__/index.xml": {},
      "/__sitemap__/en-US.xml": {},
      "/__sitemap__/ja-JP.xml": {},
      "/__sitemap__/it-IT.xml": {},
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {
    "nodeEnv": "development",
    "siteUrl": "https://colormagic.club",
    "apiUrl": "https://colormagic.club/api",
    "plausible": {
      "enabled": true,
      "hashMode": false,
      "domain": "colormagic.club",
      "ignoredHostnames": [
        "localhost"
      ],
      "ignoreSubDomains": false,
      "trackLocalhost": false,
      "apiHost": "https://plausible.io",
      "autoPageviews": true,
      "autoOutboundTracking": true,
      "logIgnoredEvents": false
    },
    "i18n": {
      "baseUrl": "https://colormagic.club",
      "defaultLocale": "en",
      "defaultDirection": "ltr",
      "strategy": "prefix_except_default",
      "lazy": false,
      "rootRedirect": "",
      "routesNameSeparator": "___",
      "defaultLocaleRouteNameSuffix": "default",
      "skipSettingLocaleOnNavigate": false,
      "differentDomains": false,
      "trailingSlash": false,
      "configLocales": [
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
      "locales": {
        "en": {
          "domain": ""
        },
        "ja": {
          "domain": ""
        },
        "it": {
          "domain": ""
        }
      },
      "detectBrowserLanguage": false,
      "experimental": {
        "localeDetector": "",
        "switchLocalePathLinkSSR": false,
        "autoImportTranslationFunctions": false
      },
      "multiDomainLocales": false
    }
  },
  "user": {
    "collectionName": "users"
  },
  "rateLimit": {
    "maxRequests": 100,
    "intervalSeconds": 86400
  },
  "palette": {
    "collectionName": "palettes",
    "likesCollectionName": "palette_likes",
    "aiNamesStartDateMs": 1729116912549
  },
  "openai": {
    "apiKey": ""
  },
  "mongo": {
    "url": "mongodb+srv://geektao1024:litao1024@cluster0.sdlpf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  },
  "google": {
    "clientId": "",
    "clientSecret": "",
    "oauth": {
      "scopes": {
        "email": "https://www.googleapis.com/auth/userinfo.email"
      },
      "accessType": "offline",
      "prompt": "consent"
    }
  },
  "deepseek": {
    "apiKey": ""
  },
  "auth": {
    "jwt": {
      "privateKey": "not-a-secret"
    }
  },
  "oauth": {
    "redirectUrl": "https://colormagic.club/oauth"
  },
  "nodeEnv": "development",
  "logLevel": "debug",
  "icon": {
    "serverKnownCssClasses": []
  },
  "sitemap": {
    "isI18nMapped": true,
    "sitemapName": "sitemap.xml",
    "isMultiSitemap": true,
    "excludeAppSources": [],
    "cacheMaxAgeSeconds": 0,
    "autoLastmod": false,
    "defaultSitemapsChunkSize": 1000,
    "minify": false,
    "sortEntries": true,
    "debug": false,
    "discoverImages": true,
    "discoverVideos": true,
    "sitemapsPathPrefix": "/__sitemap__/",
    "isNuxtContentDocumentDriven": false,
    "xsl": "/__sitemap__/style.xsl",
    "xslTips": true,
    "xslColumns": [
      {
        "label": "URL",
        "width": "50%"
      },
      {
        "label": "Images",
        "width": "25%",
        "select": "count(image:image)"
      },
      {
        "label": "Last Updated",
        "width": "25%",
        "select": "concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"
      }
    ],
    "credits": true,
    "version": "7.2.9",
    "sitemaps": {
      "index": {
        "sitemapName": "index",
        "_route": "sitemap_index.xml",
        "sitemaps": [],
        "include": [],
        "exclude": []
      },
      "en-US": {
        "include": [],
        "exclude": [
          "/_nuxt/**",
          "/_**"
        ],
        "includeAppSources": true,
        "sitemapName": "en-US",
        "_route": "/__sitemap__/en-US.xml"
      },
      "ja-JP": {
        "include": [],
        "exclude": [
          "/_nuxt/**",
          "/_**"
        ],
        "includeAppSources": true,
        "sitemapName": "ja-JP",
        "_route": "/__sitemap__/ja-JP.xml"
      },
      "it-IT": {
        "include": [],
        "exclude": [
          "/_nuxt/**",
          "/_**"
        ],
        "includeAppSources": true,
        "sitemapName": "it-IT",
        "_route": "/__sitemap__/it-IT.xml"
      }
    },
    "autoI18n": {
      "differentDomains": false,
      "defaultLocale": "en",
      "locales": [
        {
          "code": "en",
          "language": "en-US",
          "name": "English",
          "flag": "🇬🇧",
          "_hreflang": "en-US",
          "_sitemap": "en-US"
        },
        {
          "code": "ja",
          "language": "ja-JP",
          "name": "Japanese",
          "flag": "🇯🇵",
          "_hreflang": "ja-JP",
          "_sitemap": "ja-JP"
        },
        {
          "code": "it",
          "language": "it-IT",
          "name": "Italian",
          "flag": "🇮🇹",
          "_hreflang": "it-IT",
          "_sitemap": "it-IT"
        }
      ],
      "strategy": "prefix_except_default"
    }
  },
  "nuxt-site-config": {
    "stack": [
      {
        "_context": "system",
        "_priority": -15,
        "name": "colormagic",
        "env": "development"
      },
      {
        "_context": "package.json",
        "_priority": -10,
        "name": "colormagic"
      },
      {
        "_context": "@nuxtjs/i18n",
        "url": "https://colormagic.club",
        "defaultLocale": "en-US"
      }
    ],
    "version": "3.1.7",
    "debug": false,
    "multiTenancy": []
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
const _sharedAppConfig = _deepFreeze(klona(appConfig));
function useAppConfig(event) {
  {
    return _sharedAppConfig;
  }
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_ENC_SLASH_RE = /%252f/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^").replace(SLASH_RE, "%2F");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return encode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F").replace(ENC_ENC_SLASH_RE, "%2F").replace(AMPERSAND_RE, "%26").replace(PLUS_RE, "%2B");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodeQueryKey(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}

function parseQuery(parametersString = "") {
  const object = {};
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decodeQueryKey(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (object[key] === void 0) {
      object[key] = value;
    } else if (Array.isArray(object[key])) {
      object[key].push(value);
    } else {
      object[key] = [object[key], value];
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map((_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k) => query[k] !== void 0).map((k) => encodeQueryItem(k, query[k])).filter(Boolean).join("&");
}

const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
function hasTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return input.endsWith("/");
  }
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return input.endsWith("/") ? input : input + "/";
  }
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withoutLeadingSlash(input = "") {
  return (hasLeadingSlash(input) ? input.slice(1) : input) || "/";
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const trimmed = input.slice(_base.length);
  return trimmed[0] === "/" ? trimmed : "/" + trimmed;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}
function joinRelativeURL(..._input) {
  const JOIN_SEGMENT_SPLIT_RE = /\/(?!\/)/;
  const input = _input.filter(Boolean);
  const segments = [];
  let segmentsDepth = 0;
  for (const i of input) {
    if (!i || i === "/") {
      continue;
    }
    for (const [sindex, s] of i.split(JOIN_SEGMENT_SPLIT_RE).entries()) {
      if (!s || s === ".") {
        continue;
      }
      if (s === "..") {
        if (segments.length === 1 && hasProtocol(segments[0])) {
          continue;
        }
        segments.pop();
        segmentsDepth--;
        continue;
      }
      if (sindex === 1 && segments[segments.length - 1]?.endsWith(":/")) {
        segments[segments.length - 1] += "/" + s;
        continue;
      }
      segments.push(s);
      segmentsDepth++;
    }
  }
  let url = segments.join("/");
  if (segmentsDepth >= 0) {
    if (input[0]?.startsWith("/") && !url.startsWith("/")) {
      url = "/" + url;
    } else if (input[0]?.startsWith("./") && !url.startsWith("./")) {
      url = "./" + url;
    }
  } else {
    url = "../".repeat(-1 * segmentsDepth) + url;
  }
  if (input[input.length - 1]?.endsWith("/") && !url.endsWith("/")) {
    url += "/";
  }
  return url;
}
function withHttps(input) {
  return withProtocol(input, "https://");
}
function withoutProtocol(input) {
  return withProtocol(input, "");
}
function withProtocol(input, protocol) {
  let match = input.match(PROTOCOL_REGEX);
  if (!match) {
    match = input.match(/^\/{2,}/);
  }
  if (!match) {
    return protocol + input;
  }
  return protocol + input.slice(match[0].length);
}

const protocolRelative = Symbol.for("ufo:protocolRelative");
function parseURL(input = "", defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  if (protocol === "file:") {
    path = path.replace(/\/(?=[A-Za-z]:)/, "");
  }
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash,
    [protocolRelative]: !protocol
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol || parsed[protocolRelative] ? (parsed.protocol || "") + "//" : "";
  return proto + auth + host + pathname + search + hash;
}

const serverAssets = [{"baseName":"server","dir":"/Users/geektao/000-web-ai/colormagic/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/geektao/000-web-ai/colormagic","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/geektao/000-web-ai/colormagic/server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/geektao/000-web-ai/colormagic/.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/geektao/000-web-ai/colormagic/.nuxt/cache","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/geektao/000-web-ai/colormagic/.data/kv","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[nitro] [cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const script$1 = `
if (!window.__NUXT_DEVTOOLS_TIME_METRIC__) {
  Object.defineProperty(window, '__NUXT_DEVTOOLS_TIME_METRIC__', {
    value: {},
    enumerable: false,
    configurable: true,
  })
}
window.__NUXT_DEVTOOLS_TIME_METRIC__.appInit = Date.now()
`;

const _5nN7PybQeQ = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script$1}<\/script>`);
  });
});

const rootDir = "/Users/geektao/000-web-ai/colormagic";

const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"},{"name":"robots","content":"index, follow"},{"name":"twitter:card","content":"summary_large_image"},{"name":"googlebot","content":"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"},{"name":"bingbot","content":"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"},{"property":"og:site_name","content":"ColorMagic"},{"name":"google-adsense-account","content":"ca-pub-6152848695010247"}],"link":[{"rel":"icon","type":"image/x-icon","href":"/img/favicon.ico"},{"rel":"icon","type":"image/svg+xml","href":"/img/icon.svg"},{"rel":"apple-touch-icon","href":"/img/apple-touch-icon.png"},{"rel":"manifest","href":"/manifest.webmanifest"}],"style":[],"script":[],"noscript":[],"charset":"utf-8","viewport":"width=device-width, initial-scale=1"};

const appRootTag = "div";

const appRootAttrs = {"id":"__nuxt"};

const appTeleportTag = "div";

const appTeleportAttrs = {"id":"teleports"};

const appId = "nuxt-app";

const devReducers = {
  VNode: (data) => isVNode(data) ? { type: data.type, props: data.props } : void 0,
  URL: (data) => data instanceof URL ? data.toString() : void 0
};
const asyncContext = getContext("nuxt-dev", { asyncContext: true, AsyncLocalStorage });
const _b9Vw9VSa3H = (nitroApp) => {
  const handler = nitroApp.h3App.handler;
  nitroApp.h3App.handler = (event) => {
    return asyncContext.callAsync({ logs: [], event }, () => handler(event));
  };
  onConsoleLog((_log) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    const rawStack = captureRawStackTrace();
    if (!rawStack || rawStack.includes("runtime/vite-node.mjs")) {
      return;
    }
    const trace = [];
    let filename = "";
    for (const entry of parseRawStackTrace(rawStack)) {
      if (entry.source === globalThis._importMeta_.url) {
        continue;
      }
      if (EXCLUDE_TRACE_RE.test(entry.source)) {
        continue;
      }
      filename ||= entry.source.replace(withTrailingSlash(rootDir), "");
      trace.push({
        ...entry,
        source: entry.source.startsWith("file://") ? entry.source.replace("file://", "") : entry.source
      });
    }
    const log = {
      ..._log,
      // Pass along filename to allow the client to display more info about where log comes from
      filename,
      // Clean up file names in stack trace
      stack: trace
    };
    ctx.logs.push(log);
  });
  nitroApp.hooks.hook("afterResponse", () => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    return nitroApp.hooks.callHook("dev:ssr-logs", { logs: ctx.logs, path: ctx.event.path });
  });
  nitroApp.hooks.hook("render:html", (htmlContext) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    try {
      const reducers = Object.assign(/* @__PURE__ */ Object.create(null), devReducers, ctx.event.context._payloadReducers);
      htmlContext.bodyAppend.unshift(`<script type="application/json" data-nuxt-logs="${appId}">${stringify(ctx.logs, reducers)}<\/script>`);
    } catch (e) {
      const shortError = e instanceof Error && "toString" in e ? ` Received \`${e.toString()}\`.` : "";
      console.warn(`[nuxt] Failed to stringify dev server logs.${shortError} You can define your own reducer/reviver for rich types following the instructions in https://nuxt.com/docs/api/composables/use-nuxt-app#payload.`);
    }
  });
};
const EXCLUDE_TRACE_RE = /\/node_modules\/(?:.*\/)?(?:nuxt|nuxt-nightly|nuxt-edge|nuxt3|consola|@vue)\/|core\/runtime\/nitro/;
function onConsoleLog(callback) {
  consola.addReporter({
    log(logObj) {
      callback(logObj);
    }
  });
  consola.wrapConsole();
}

function defineNitroPlugin(def) {
  return def;
}

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

function defineRenderHandler(handler) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
      setResponseHeader(event, "Content-Type", "image/x-icon");
      return send(
        event,
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      );
    }
    const response = await handler(event);
    if (!response) {
      const _currentStatus = getResponseStatus(event);
      setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
      return send(
        event,
        "No response returned from render handler: " + event.path
      );
    }
    const nitroApp = useNitroApp();
    await nitroApp.hooks.callHook("render:response", response, { event });
    if (response.headers) {
      setResponseHeaders(event, response.headers);
    }
    if (response.statusCode || response.statusMessage) {
      setResponseStatus(event, response.statusCode, response.statusMessage);
    }
    return response.body;
  });
}

function normalizeSiteConfig(config) {
  if (typeof config.indexable !== "undefined")
    config.indexable = String(config.indexable) !== "false";
  if (typeof config.trailingSlash !== "undefined" && !config.trailingSlash)
    config.trailingSlash = String(config.trailingSlash) !== "false";
  if (config.url && !hasProtocol(String(config.url), { acceptRelative: true, strict: false }))
    config.url = withHttps(String(config.url));
  const keys = Object.keys(config).sort((a, b) => a.localeCompare(b));
  const newConfig = {};
  for (const k of keys)
    newConfig[k] = config[k];
  return newConfig;
}
function createSiteConfigStack(options) {
  const debug = options?.debug || false;
  const stack = [];
  function push(input) {
    if (!input || typeof input !== "object" || Object.keys(input).length === 0) {
      return () => {
      };
    }
    if (!input._context && debug) {
      let lastFunctionName = new Error("tmp").stack?.split("\n")[2].split(" ")[5];
      if (lastFunctionName?.includes("/"))
        lastFunctionName = "anonymous";
      input._context = lastFunctionName;
    }
    const entry = {};
    for (const k in input) {
      const val = input[k];
      if (typeof val !== "undefined" && val !== "")
        entry[k] = val;
    }
    let idx;
    if (Object.keys(entry).filter((k) => !k.startsWith("_")).length > 0)
      idx = stack.push(entry);
    return () => {
      if (typeof idx !== "undefined") {
        stack.splice(idx - 1, 1);
      }
    };
  }
  function get(options2) {
    const siteConfig = {};
    if (options2?.debug)
      siteConfig._context = {};
    siteConfig._priority = {};
    for (const o in stack.sort((a, b) => (a._priority || 0) - (b._priority || 0))) {
      for (const k in stack[o]) {
        const key = k;
        const val = options2?.resolveRefs ? toValue(stack[o][k]) : stack[o][k];
        if (!k.startsWith("_") && typeof val !== "undefined" && val !== "") {
          siteConfig[k] = val;
          if (typeof stack[o]._priority !== "undefined" && stack[o]._priority !== -1) {
            siteConfig._priority[key] = stack[o]._priority;
          }
          if (options2?.debug)
            siteConfig._context[key] = stack[o]._context?.[key] || stack[o]._context || "anonymous";
        }
      }
    }
    return options2?.skipNormalize ? siteConfig : normalizeSiteConfig(siteConfig);
  }
  return {
    stack,
    push,
    get
  };
}

function envSiteConfig(env) {
  return Object.fromEntries(Object.entries(env).filter(([k]) => k.startsWith("NUXT_SITE_") || k.startsWith("NUXT_PUBLIC_SITE_")).map(([k, v]) => [
    k.replace(/^NUXT_(PUBLIC_)?SITE_/, "").split("_").map((s, i) => i === 0 ? s.toLowerCase() : s[0].toUpperCase() + s.slice(1).toLowerCase()).join(""),
    v
  ]));
}

const logger$1 = /* @__PURE__ */ createConsola({
  defaults: {
    tag: "nuxt-site-config"
  }
});

function useSiteConfig(e, _options) {
  if (!e.context._initedSiteConfig) {
    logger$1.warn("Site config has not been initialized yet. If you're trying to access site config in a server middleware then this not yet supported. See https://github.com/harlan-zw/nuxt-seo/issues/397");
  }
  e.context.siteConfig = e.context.siteConfig || createSiteConfigStack();
  const options = defu$1(_options, useRuntimeConfig(e)["nuxt-site-config"], { debug: false });
  return e.context.siteConfig.get(options);
}

const _KA2xayyjS2 = defineNitroPlugin(async (nitroApp) => {
  nitroApp.hooks.hook("render:html", async (ctx, { event }) => {
    const routeOptions = getRouteRules(event);
    const isIsland = process.env.NUXT_COMPONENT_ISLANDS && event.path.startsWith("/__nuxt_island");
    event.path;
    const noSSR = event.context.nuxt?.noSSR || routeOptions.ssr === false && !isIsland || (false);
    if (noSSR) {
      const siteConfig = Object.fromEntries(
        Object.entries(useSiteConfig(event)).map(([k, v]) => [k, toValue(v)])
      );
      ctx.body.push(`<script>window.__NUXT_SITE_CONFIG__=${devalue(siteConfig)}<\/script>`);
    }
  });
});

const script = "\"use strict\";(()=>{const t=window,e=document.documentElement,c=[\"dark\",\"light\"],n=getStorageValue(\"localStorage\",\"nuxt-color-mode\")||\"dark\";let i=n===\"system\"?u():n;const r=e.getAttribute(\"data-color-mode-forced\");r&&(i=r),l(i),t[\"__NUXT_COLOR_MODE__\"]={preference:n,value:i,getColorScheme:u,addColorScheme:l,removeColorScheme:d};function l(o){const s=\"\"+o+\"\",a=\"\";e.classList?e.classList.add(s):e.className+=\" \"+s,a&&e.setAttribute(\"data-\"+a,o)}function d(o){const s=\"\"+o+\"\",a=\"\";e.classList?e.classList.remove(s):e.className=e.className.replace(new RegExp(s,\"g\"),\"\"),a&&e.removeAttribute(\"data-\"+a)}function f(o){return t.matchMedia(\"(prefers-color-scheme\"+o+\")\")}function u(){if(t.matchMedia&&f(\"\").media!==\"not all\"){for(const o of c)if(f(\":\"+o).matches)return o}return\"dark\"}})();function getStorageValue(t,e){switch(t){case\"localStorage\":return window.localStorage.getItem(e);case\"sessionStorage\":return window.sessionStorage.getItem(e);case\"cookie\":return getCookie(e);default:return null}}function getCookie(t){const c=(\"; \"+window.document.cookie).split(\"; \"+t+\"=\");if(c.length===2)return c.pop()?.split(\";\").shift()}";

const _aMZGUVP0Yd = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

function isAPIRequest(event) {
  return event.path.includes("/api/");
}
function mapEventToLog(event, err) {
  var _a;
  return {
    err,
    req: {
      method: event.node.req.method,
      url: event.node.req.url,
      rateLimitPayload: event.context.payload,
      body: event.context.body,
      ip: getRequestIP(event),
      userAgent: getRequestHeader(event, "user-agent")
    },
    res: {
      statusCode: (_a = err == null ? void 0 : err.statusCode) != null ? _a : event.node.res.statusCode
    },
    responseTime: Date.now() - event.context.responseTime
  };
}

var _a;
const loggerConfig = {
  level: (_a = process.env.LOG_LEVEL) != null ? _a : "debug",
  enabled: true,
  formatters: void 0,
  transport: {
    target: "pino-pretty",
    options: {
      ignore: "pid,hostname"
    }
  } 
};

function getLoggerModule() {
  return pino(loggerConfig);
}

const _DVQIfrWTiT = defineNitroPlugin((nitroApp) => {
  const logger = getLoggerModule();
  nitroApp.hooks.hook("request", (event) => {
    event.context.responseTime = Date.now();
  });
  nitroApp.hooks.hook("afterResponse", (event) => {
    if (isAPIRequest(event)) {
      logger.info(mapEventToLog(event), "request completed");
    }
  });
  nitroApp.hooks.hook("error", (error, { event }) => {
    if (event !== void 0 && isAPIRequest(event)) {
      if ((error == null ? void 0 : error.statusCode) >= 500) {
        logger.error(mapEventToLog(event, error), "request completed");
      } else {
        logger.info(mapEventToLog(event, error), "request completed");
      }
    }
  });
});

class AIService {
  constructor(deepseekService) {
    this.deepseekService = deepseekService;
  }
  async getByPrompt(prompt) {
    const moderations = await this.deepseekService.getModeration(prompt);
    if (moderations.results[0].flagged) {
      throw createError({ statusCode: 403, statusMessage: "Prompt was flagged." });
    }
    return await this.deepseekService.getByMessages([{
      content: prompt,
      role: "user"
    }]);
  }
  /**
   * 使用DeepSeek-R1推理模型处理需要更高逻辑推理能力的请求
   */
  async getByPromptWithReasoner(prompt) {
    const moderations = await this.deepseekService.getModeration(prompt);
    if (moderations.results[0].flagged) {
      throw createError({ statusCode: 403, statusMessage: "Prompt was flagged." });
    }
    return await this.deepseekService.getByMessagesWithReasoner([{
      content: prompt,
      role: "user"
    }]);
  }
}

function getAIModule(logger, deepseekService) {
  logger.info("initializing ai module");
  const service = new AIService(deepseekService);
  return {
    service
  };
}

const authConfig = {
  privateKey: useRuntimeConfig().auth.jwt.privateKey,
  oauthRedirectUrl: useRuntimeConfig().oauth.redirectUrl
};

class AuthService {
  constructor(userService, googleService) {
    this.userService = userService;
    this.googleService = googleService;
  }
  setAuth(event, userId) {
    const expiresDate = addDays(/* @__PURE__ */ new Date(), 365);
    const expiresInMs = Math.floor(expiresDate.getTime() / 1e3);
    try {
      const token = jwt.sign({ userId }, authConfig.privateKey, {
        expiresIn: expiresInMs
      });
      setCookie(event, "jwt", token, {
        expires: expiresDate,
        secure: true
      });
    } catch (err) {
      throw createError({ statusCode: 401, statusMessage: "Error signing token." });
    }
  }
  async loginWithGoogle(event, code) {
    const googleUser = await this.googleService.getUser(code);
    const [foundByGoogle, foundByEmail] = await Promise.all([
      this.userService.getByGoogleId(googleUser.id),
      this.userService.getByEmail(googleUser.email)
    ]);
    if (foundByGoogle !== null) {
      await this.userService.setLastLoginToNow(foundByGoogle.id);
      this.setAuth(event, foundByGoogle.id);
      return foundByGoogle;
    }
    if (foundByEmail !== null) {
      await Promise.all([
        this.userService.setLastLoginToNow(foundByEmail.id),
        this.userService.linkGoogleIdToUser(foundByEmail.id, googleUser.id)
      ]);
      this.setAuth(event, foundByEmail.id);
      return foundByEmail;
    }
    const entity = await this.userService.createByGoogle(
      googleUser.id,
      googleUser.email
    );
    this.setAuth(event, entity.id);
    return entity;
  }
  async verify(event) {
    var _a;
    const token = (_a = getCookie(event, "jwt")) != null ? _a : getHeader(event, "Authorization");
    if (token === void 0) {
      throw createError({
        statusCode: 401,
        statusMessage: "Unauthorized."
      });
    }
    try {
      const payload = jwt.verify(token, authConfig.privateKey);
      const found = await this.userService.getById(payload.userId);
      if (found === null) {
        throw new Error("User not found.");
      }
      return payload;
    } catch (err) {
      throw createError({
        statusCode: 401,
        statusMessage: "Token error."
      });
    }
  }
}

function getAuthModule(logger, userService, googleService) {
  logger.info("initializing auth module");
  const service = new AuthService(userService, googleService);
  return {
    service
  };
}

const getApiKey = () => {
  var _a;
  try {
    const config = useRuntimeConfig();
    let key = "";
    if (config && typeof config === "object" && "deepseek" in config) {
      key = ((_a = config.deepseek) == null ? void 0 : _a.apiKey) || "";
    }
    if (!key && process.env && process.env.DEEPSEEK_API_KEY) {
      key = process.env.DEEPSEEK_API_KEY;
    }
    if (!key) {
      key = "sk-2dbf60c0b3a642419775574b92a96455";
    }
    console.log("[DeepSeek] API\u5BC6\u94A5\u662F\u5426\u5B58\u5728:", !!key);
    return key;
  } catch (error) {
    console.error("[DeepSeek] \u83B7\u53D6API\u5BC6\u94A5\u65F6\u51FA\u9519:", error);
    return "sk-2dbf60c0b3a642419775574b92a96455";
  }
};
const deepseekConfig = {
  apiKey: getApiKey(),
  apiBase: "https://api.deepseek.com"
};

const createDeepseekClient = () => {
  try {
    console.log("[DeepSeek] \u521D\u59CB\u5316\u5BA2\u6237\u7AEF\uFF0CbaseURL:", deepseekConfig.apiBase);
    console.log("[DeepSeek] API\u5BC6\u94A5\u524D6\u4F4D:", deepseekConfig.apiKey.substring(0, 6) + "***");
    return new OpenAI({
      baseURL: deepseekConfig.apiBase,
      apiKey: deepseekConfig.apiKey,
      timeout: 6e4,
      // 设置较长的超时时间 (60秒)
      maxRetries: 3
      // 设置最大重试次数
    });
  } catch (error) {
    console.error("[DeepSeek] \u521B\u5EFA\u5BA2\u6237\u7AEF\u65F6\u51FA\u9519:", error);
    throw error;
  }
};

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, key + "" , value);
  return value;
};
class DeepseekService {
  constructor() {
    __publicField(this, "client");
    this.client = createDeepseekClient();
  }
  async getModeration(input) {
    const sensitiveWords = ["hack", "illegal", "porn", "violent", "terrorism"];
    const flagged = sensitiveWords.some((word) => input.toLowerCase().includes(word));
    return {
      results: [{
        flagged
      }]
    };
  }
  async getByMessages(messages) {
    var _a;
    try {
      console.log("[DeepSeek] \u8C03\u7528API\uFF0C\u6D88\u606F:", JSON.stringify(messages, null, 2));
      const entity = await this.client.chat.completions.create({
        model: "deepseek-chat",
        temperature: 0.7,
        max_tokens: 200,
        messages
      });
      console.log("[DeepSeek] API\u54CD\u5E94:", JSON.stringify(entity, null, 2));
      const results = entity.choices.map((choice) => choice.message.content).filter((content) => content !== null);
      console.log("[DeepSeek] \u5904\u7406\u540E\u7ED3\u679C:", results);
      return results;
    } catch (error) {
      console.error("[DeepSeek] API\u8C03\u7528\u9519\u8BEF:", error);
      if (((_a = messages[0]) == null ? void 0 : _a.content) && typeof messages[0].content === "string") {
        const prompt = messages[0].content;
        if (prompt.includes("red")) {
          return ["#FF5733 #C70039 #900C3F #581845 #FFC300 [name:Red Elegance] [tags:red,crimson,maroon,dark,vibrant]"];
        } else if (prompt.includes("blue")) {
          return ["#1A5276 #2874A6 #3498DB #85C1E9 #D6EAF8 [name:Ocean Blues] [tags:blue,navy,sky,azure,water]"];
        } else if (prompt.includes("green")) {
          return ["#0B5345 #117A65 #16A085 #73C6B6 #D1F2EB [name:Forest Green] [tags:green,emerald,mint,jade,nature]"];
        } else {
          return ["#E74C3C #8E44AD #3498DB #16A085 #F39C12 [name:Colorful Harmony] [tags:vibrant,colorful,bright,diverse,modern]"];
        }
      }
      throw error;
    }
  }
  async getByMessagesWithReasoner(messages) {
    var _a;
    try {
      const entity = await this.client.chat.completions.create({
        model: "deepseek-reasoner",
        temperature: 0.3,
        // 推理模型通常使用较低的温度
        max_tokens: 500,
        // 推理可能需要更长的回答
        messages
      });
      return entity.choices.map((choice) => choice.message.content).filter((content) => content !== null);
    } catch (error) {
      console.error("[DeepSeek] Reasoner API\u8C03\u7528\u9519\u8BEF:", error);
      if (((_a = messages[0]) == null ? void 0 : _a.content) && typeof messages[0].content === "string") {
        return ["[tags:colorful,modern,diverse,bright,creative]"];
      }
      throw error;
    }
  }
}

function getDeepseekModule(logger) {
  logger.info("initializing deepseek module with DeepSeek-V3 model");
  const service = new DeepseekService();
  return {
    service
  };
}

const googleConfig = {
  clientId: useRuntimeConfig().google.clientId,
  clientSecret: useRuntimeConfig().google.clientSecret,
  oauth: {
    scopes: {
      email: useRuntimeConfig().google.oauth.scopes.email
    },
    accessType: useRuntimeConfig().google.oauth.accessType,
    prompt: useRuntimeConfig().google.oauth.prompt
  }
};

class GoogleService {
  async getAuthUrl(state) {
    const oauth2Client = new OAuth2Client(
      googleConfig.clientId,
      googleConfig.clientSecret,
      authConfig.oauthRedirectUrl
    );
    const url = oauth2Client.generateAuthUrl({
      scope: [googleConfig.oauth.scopes.email],
      state,
      access_type: googleConfig.oauth.accessType,
      prompt: googleConfig.oauth.prompt,
      include_granted_scopes: true
    });
    return url;
  }
  async getUser(code) {
    const oauth2Client = new OAuth2Client(
      googleConfig.clientId,
      googleConfig.clientSecret,
      authConfig.oauthRedirectUrl
    );
    const { tokens } = await oauth2Client.getToken(code);
    if (tokens.access_token === void 0 || tokens.access_token === null) {
      throw createError({
        statusCode: 404,
        statusMessage: "No tokens found."
      });
    }
    oauth2Client.setCredentials(tokens);
    const info = await oauth2Client.getTokenInfo(tokens.access_token);
    if (info.sub === void 0 || info.email === void 0) {
      throw createError({
        statusCode: 404,
        statusMessage: "No email or id found."
      });
    }
    return {
      id: info.sub,
      email: info.email
    };
  }
}

const GoogleAuthUrlInputDtoSchema = Type.Object({
  state: Type.String()
});
Type.Object({
  url: Type.String()
});
const GoogleAuthInputDtoSchema = Type.Object({
  code: Type.String()
});

let instance;
let instanceWithFormats;
function schemaOf(schemaOf2, value, schema) {
  switch (schemaOf2) {
    case "Constructor":
      return TypeGuard.IsConstructor(schema) && Value.Check(schema, value);
    case "Function":
      return TypeGuard.IsFunction(schema) && Value.Check(schema, value);
    case "Date":
      return TypeGuard.IsDate(schema) && Value.Check(schema, value);
    case "Promise":
      return TypeGuard.IsPromise(schema) && Value.Check(schema, value);
    case "Uint8Array":
      return TypeGuard.IsUint8Array(schema) && Value.Check(schema, value);
    case "Undefined":
      return TypeGuard.IsUndefined(schema) && Value.Check(schema, value);
    case "Void":
      return TypeGuard.IsVoid(schema) && Value.Check(schema, value);
    default:
      return false;
  }
}
function useValidator(options = {}) {
  if (options.includeAjvFormats === true) {
    if (instanceWithFormats === void 0) {
      instanceWithFormats = addFormats(new Ajv({
        keywords: ["kind", "modifier"]
      }), {
        mode: "fast",
        formats: [
          "date-time",
          "time",
          "date",
          "email",
          "uri",
          "uri-reference"
        ]
      }).addKeyword({ type: "object", keyword: "instanceOf", validate: schemaOf }).addKeyword({ type: "null", keyword: "typeOf", validate: schemaOf }).addKeyword("exclusiveMinimumTimestamp").addKeyword("exclusiveMaximumTimestamp").addKeyword("minimumTimestamp").addKeyword("maximumTimestamp").addKeyword("minByteLength").addKeyword("maxByteLength");
    }
    return instanceWithFormats;
  } else if (instance === void 0) {
    instance = new Ajv({
      keywords: ["kind", "modifier"]
    });
  }
  return instance;
}
async function validateBody(event, schema, options) {
  const body = await readBody(event);
  const validate = useValidator(options).compile(schema);
  if (!validate(body)) {
    const betterErrors = betterAjvErrors({ schema, data: body, errors: validate.errors, basePath: "body" });
    throw createError({ statusCode: 400, statusMessage: betterErrors[0].message });
  }
  return body;
}
function validateQuery(event, schema, options) {
  const query = getQuery$1(event);
  const validate = useValidator(options).compile(schema);
  if (!validate(query)) {
    const betterErrors = betterAjvErrors({ schema, data: query, errors: validate.errors, basePath: "query" });
    throw createError({ statusCode: 400, statusMessage: betterErrors[0].message });
  }
  return query;
}
function validateParams(event, schema, options) {
  const query = getRouterParams(event);
  const validate = useValidator(options).compile(schema);
  if (!validate(query)) {
    const betterErrors = betterAjvErrors({ schema, data: query, errors: validate.errors, basePath: "params" });
    throw createError({ statusCode: 400, statusMessage: betterErrors[0].message });
  }
  return query;
}

class GoogleValidation {
  async getAuthUrlInputBody(event) {
    return await validateBody(event, GoogleAuthUrlInputDtoSchema);
  }
  async getAuthInputBody(event) {
    return await validateBody(event, GoogleAuthInputDtoSchema);
  }
}

function getGoogleModule(logger) {
  logger.info("initializing google module");
  const service = new GoogleService();
  const validation = new GoogleValidation();
  return {
    service,
    validation
  };
}

function getMongoConfig() {
  const config = useRuntimeConfig();
  return {
    url: config.mongo.url
  };
}
const mongoConfig = getMongoConfig();

function getMongoModule(logger) {
  logger.info("initializing mongo module with url:", mongoConfig.url);
  return new MongoClient(mongoConfig.url, {
    ignoreUndefined: true,
    retryWrites: true,
    w: "majority",
    // Increased pool size for better connection handling
    maxPoolSize: 10,
    minPoolSize: 5,
    // Extended timeout values for serverless environments
    connectTimeoutMS: 5e4,
    // 30 seconds for connection establishment
    socketTimeoutMS: 8e4,
    // 60 seconds for socket operations
    // Additional retry settings
    serverSelectionTimeoutMS: 5e4,
    // 30 seconds for server selection
    heartbeatFrequencyMS: 3e4
    // 10 seconds between heartbeats
  });
}

var PaletteSortBy = /* @__PURE__ */ ((PaletteSortBy2) => {
  PaletteSortBy2["RECENT"] = "RECENT";
  PaletteSortBy2["POPULAR"] = "POPULAR";
  return PaletteSortBy2;
})(PaletteSortBy || {});

class OgService {
  constructor(paletteService) {
    this.paletteService = paletteService;
  }
  async loadLogo() {
    return await new Promise((resolve, reject) => {
      fs.readFile(path.resolve("public/img/HorizontalLogo.svg"), "utf8", (err, data) => {
        if (err !== null) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
  async generateSVG(colors, params) {
    var _a, _b;
    const width = (_a = params.width) != null ? _a : 1200;
    const height = (_b = params.height) != null ? _b : 630;
    const cardWidth = 480;
    const cardHeight = 200;
    const cardX = (width - cardWidth) / 2;
    const cardY = (height - cardHeight) / 2;
    const logoSvg = await this.loadLogo();
    const colorBars = colors.map((color, i) => {
      const rectWidth = width / colors.length;
      const x = i * rectWidth;
      return `<rect x="${x}" y="0" width="${rectWidth}" height="${height}" fill="#${color}" />`;
    }).join("");
    const textCard = params.text !== void 0 ? `
      <!-- Card (Rounded Rectangle) -->
        <rect x="${cardX}" y="${cardY}" rx="24" ry="24" width="${cardWidth}" height="${cardHeight}" fill="#fff" />

        <!-- Text -->
        <text x="50%" y="54%" font-size="56" font-weight="bold" font-family="-apple-system, BlinkMacSystemFont, 'Avenir Next', Avenir, 'Nimbus Sans L', Roboto, Noto, 'Segoe UI', Arial, Helvetica, 'Helvetica Neue', sans-serif" fill="#4E5460" text-anchor="middle" dy=".35em">${params.text}</text>

        <!-- Inline Logo -->
        <g transform="translate(${width / 2 - 125}, ${cardY + 30})">
          ${logoSvg}
        </g>
    ` : "";
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        <!-- Background color bars -->
        ${colorBars}
        
        <!-- Card (Rounded Rectangle) -->
        ${textCard}
      </svg>
    `;
    return svg;
  }
  async generateGridBackground(palettes, prompt) {
    const width = 1200;
    const height = 630;
    const numCols = 4;
    const numRows = Math.ceil(palettes.length / numCols);
    const gap = 40;
    const paletteWidth = (width - (numCols - 1) * gap) / numCols;
    const paletteHeight = (height - (numRows - 1) * gap) / numRows;
    const cardWidth = 480;
    const cardHeight = 200;
    const cardX = (width - cardWidth) / 2;
    const cardY = (height - cardHeight) / 2;
    const logoSvg = await this.loadLogo();
    const svgPalettes = [];
    palettes.forEach((palette, paletteIndex) => {
      const rowIndex = Math.floor(paletteIndex / numCols);
      const colIndex = paletteIndex % numCols;
      const x = colIndex * (paletteWidth + gap);
      const y = rowIndex * (paletteHeight + gap);
      const clipPathId = `clip-path-${paletteIndex}`;
      const clipPath = `
        <clipPath id="${clipPathId}">
          <rect x="${x}" y="${y}" width="${paletteWidth}" height="${paletteHeight}" rx="24" ry="24" />
        </clipPath>
      `;
      const paletteBackground = `<rect x="${x}" y="${y}" width="${paletteWidth}" height="${paletteHeight}" fill="#fff" rx="12" ry="12" />`;
      const colorBars = palette.map((color, colorIndex) => {
        const barWidth = paletteWidth / palette.length;
        const colorX = x + colorIndex * barWidth;
        return `<rect x="${colorX}" y="${y}" width="${barWidth}" height="${paletteHeight}" fill="${color}" clip-path="url(#${clipPathId})" />`;
      }).join("");
      svgPalettes.push(clipPath + paletteBackground + colorBars);
    });
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        <rect width="${width}" height="${height}" fill="#ffffff" />
        ${svgPalettes.join("")}
        <rect x="${cardX}" y="${cardY}" rx="24" ry="24" width="${cardWidth}" height="${cardHeight}" fill="#fff" />
        <text x="50%" y="54%" font-size="56" font-weight="bold" font-family="-apple-system, BlinkMacSystemFont, 'Avenir Next', Avenir, 'Nimbus Sans L', Roboto, Noto, 'Segoe UI', Arial, Helvetica, 'Helvetica Neue', sans-serif" fill="#4E5460" text-anchor="middle" dy=".35em">${prompt}</text>
        <g transform="translate(${width / 2 - 125}, ${cardY + 30})">
          ${logoSvg}
        </g>
      </svg>
    `;
    return svg;
  }
  async generateGridImageFromTags(tag, prompt) {
    const palettes = await this.paletteService.list(0, 16, {
      tags: [tag],
      sortBy: PaletteSortBy.RECENT
    });
    const svg = await this.generateGridBackground(palettes.items.map((v) => v.colors), prompt);
    const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer();
    return pngBuffer;
  }
  async generateImage(colors, prompt) {
    const svg = await this.generateSVG(colors, { text: prompt });
    const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer();
    return pngBuffer;
  }
  async generateSquareThumbnail(colors) {
    const svg = await this.generateSVG(colors, { width: 150, height: 150 });
    const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer();
    return pngBuffer;
  }
}

const OgInputDtoSchema = Type.Object({
  colors: Type.String(),
  text: Type.String(),
  aspect: Type.Optional(Type.Literal("square"))
});
const OgTagInputDtoSchema = Type.Object({
  tag: Type.String(),
  text: Type.String()
});
const OgThumbnailInputDtoSchema = Type.Object({
  colors: Type.String()
});

class OgValidation {
  async getInputQuery(event) {
    const query = validateQuery(event, OgInputDtoSchema);
    const hexCodes = query.colors.split(":");
    if (hexCodes.length > 5) {
      throw createError({
        statusCode: 400,
        statusMessage: "Too many colors."
      });
    }
    return query;
  }
  async getThumbnailInputQuery(event) {
    const query = validateQuery(event, OgThumbnailInputDtoSchema);
    const hexCodes = query.colors.split(":");
    if (hexCodes.length > 5) {
      throw createError({
        statusCode: 400,
        statusMessage: "Too many colors."
      });
    }
    return query;
  }
  async getTagQuery(event) {
    return validateQuery(event, OgTagInputDtoSchema);
  }
}

function getOgModule(logger, paletteService) {
  logger.info("initializing og module");
  const service = new OgService(paletteService);
  const validation = new OgValidation();
  return {
    service,
    validation
  };
}

const paletteConfig = {
  collectionName: useRuntimeConfig().palette.collectionName,
  likesCollectionName: useRuntimeConfig().palette.likesCollectionName,
  aiNamesStartDateMs: useRuntimeConfig().palette.aiNamesStartDateMs
};

class PaletteRepository {
  constructor(collection) {
    this.collection = collection;
  }
  async setup() {
    await this.collection.createIndexes([{
      key: { createdAt: -1 }
    }, {
      key: { tags: -1 }
    }, {
      key: { likesCount: -1 }
    }], { background: true });
  }
  async list(page, size, filter, sort) {
    return await this.collection.find(filter).sort(sort).skip(page * size).limit(size).toArray();
  }
  async count(filter) {
    console.log(`[palette.repository] Count called with filter: ${JSON.stringify(filter || {})}`);
    try {
      if (!this.collection) {
        console.error("[palette.repository] MongoDB collection is undefined in count method");
        throw new Error("MongoDB collection not initialized");
      }
      if (typeof this.collection.countDocuments !== "function") {
        console.error("[palette.repository] collection.countDocuments is not a function");
        throw new Error("MongoDB collection missing countDocuments method");
      }
      const startTime = Date.now();
      const count = await this.collection.countDocuments(filter);
      const duration = Date.now() - startTime;
      console.log(`[palette.repository] Count result: ${count}, duration: ${duration}ms`);
      return count;
    } catch (error) {
      console.error("[palette.repository] Error in count method:", {
        message: error.message,
        stack: error.stack,
        name: error.name,
        code: error.code,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
      throw error;
    }
  }
  async getById(id) {
    return await this.collection.findOne({ _id: new ObjectId(id) });
  }
  async create(entity) {
    const { insertedId } = await this.collection.insertOne(entity);
    return {
      _id: insertedId,
      ...entity
    };
  }
  async updateLikesCount(id, value) {
    await this.collection.updateOne({ _id: new ObjectId(id) }, {
      $inc: {
        likesCount: value
      }
    });
  }
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result !== null ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 0, g: 0, b: 0 };
}
function rgbToHex(rgb) {
  const r = rgb.r.toString(16);
  const g = rgb.g.toString(16);
  const b = rgb.b.toString(16);
  return `#${r.length === 1 ? `0${r}` : r}${g.length === 1 ? `0${g}` : g}${b.length === 1 ? `0${b}` : b}`;
}
function rgbToHsb(rgb) {
  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  let h = 0;
  let s = 0;
  const v = max;
  if (delta !== 0) {
    s = delta / max;
    switch (max) {
      case r:
        h = (g - b) / delta + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / delta + 2;
        break;
      case b:
        h = (r - g) / delta + 4;
        break;
    }
    h /= 6;
  }
  return {
    h: h * 360,
    s: s * 100,
    b: v * 100
  };
}
function hsbToRgb(hsb) {
  const h = hsb.h / 360;
  const s = hsb.s / 100;
  const v = hsb.b / 100;
  let r = 0;
  let g = 0;
  let b = 0;
  const i = Math.floor(h * 6);
  const f = h * 6 - i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);
  switch (i % 6) {
    case 0:
      r = v;
      g = t;
      b = p;
      break;
    case 1:
      r = q;
      g = v;
      b = p;
      break;
    case 2:
      r = p;
      g = v;
      b = t;
      break;
    case 3:
      r = p;
      g = q;
      b = v;
      break;
    case 4:
      r = t;
      g = p;
      b = v;
      break;
    case 5:
      r = v;
      g = p;
      b = q;
      break;
  }
  return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
}
function rgbToHsl(rgb) {
  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  if (delta !== 0) {
    s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
    switch (max) {
      case r:
        h = (g - b) / delta + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / delta + 2;
        break;
      case b:
        h = (r - g) / delta + 4;
        break;
    }
    h /= 6;
  }
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}
function hslToRgb(hsl) {
  const h = hsl.h / 360;
  const s = hsl.s / 100;
  const l = hsl.l / 100;
  let r, g, b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = function hue2rgb2(p2, q2, t) {
      if (t < 0)
        t += 1;
      if (t > 1)
        t -= 1;
      if (t < 1 / 6)
        return p2 + (q2 - p2) * 6 * t;
      if (t < 1 / 2)
        return q2;
      if (t < 2 / 3)
        return p2 + (q2 - p2) * (2 / 3 - t) * 6;
      return p2;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
}

function arrangeColors(colors, arrange) {
  return colors.map((color) => {
    var _a, _b, _c;
    const bColor = changeBrightness(color, (_a = arrange == null ? void 0 : arrange.brightness) != null ? _a : 0);
    const sColor = changeSaturation(bColor, (_b = arrange == null ? void 0 : arrange.saturation) != null ? _b : 0);
    const wColor = changeWarmth(sColor, (_c = arrange == null ? void 0 : arrange.warmth) != null ? _c : 0, colors);
    return wColor;
  });
}
const changeBrightness = (color, brightness) => {
  const absBrightness = Math.abs(brightness);
  return brendColor(color, brightness >= 0 ? "#ffffff" : "#000000", absBrightness);
};
const brendColor = (color1, color2, ratio) => {
  const rgbColors = [hexToRgb(color1), hexToRgb(color2)];
  const hsvColors = [rgbToHsb(rgbColors[0]), rgbToHsb(rgbColors[1])];
  const fixedColors = [hsvColors[0], hsvColors[1]];
  if (fixedColors[0].s === 0) {
    fixedColors[0].h = fixedColors[1].h;
  }
  if (fixedColors[1].s === 0) {
    fixedColors[1].h = fixedColors[0].h;
  }
  if (fixedColors[0].b === 0) {
    fixedColors[0].s = 100;
  }
  if (fixedColors[1].b === 0) {
    fixedColors[1].s = 100;
  }
  const blendHsv = {
    h: blendValue(fixedColors[0].h, fixedColors[1].h, ratio),
    s: blendValue(fixedColors[0].s, fixedColors[1].s, ratio),
    b: blendValue(fixedColors[0].b, fixedColors[1].b, ratio)
  };
  const blendRgb = hsbToRgb(blendHsv);
  return rgbToHex(blendRgb);
};
const blendValue = (value1, value2, ratio) => {
  return (value1 * (100 - ratio) + value2 * ratio) * 0.01;
};
const changeSaturation = (color, saturation) => {
  const rgbColor = hexToRgb(color);
  const hsvColor = rgbToHsl(rgbColor);
  const newSatColor = {
    h: hsvColor.h,
    s: hsvColor.s + (saturation > 0 ? 100 - hsvColor.s : hsvColor.s - 0) * saturation * 0.01,
    l: hsvColor.l
  };
  const newHexColor = rgbToHex(hslToRgb(newSatColor));
  return newHexColor;
};
const changeWarmth = (color, warmth, colors) => {
  const absWarmth = Math.abs(warmth);
  const rgbColors = colors.map((color2) => hexToRgb(color2));
  const hslColors = rgbColors.map((color2) => rgbToHsl(color2));
  const sAvg = hslColors.reduce((acc, color2) => acc + color2.s, 0) / hslColors.length;
  const lAvg = hslColors.reduce((acc, color2) => acc + color2.l, 0) / hslColors.length;
  const newCol = {
    h: warmth > 0 ? 20 : 220,
    s: sAvg,
    l: lAvg
  };
  return brendColorOverlay(color, rgbToHex(hslToRgb(newCol)), absWarmth);
};
const brendColorOverlay = (color1, color2, ratio) => {
  const rgbColor1 = hexToRgb(color1);
  const rgbColor2 = hexToRgb(color2);
  const ratioOne = ratio * 0.01;
  function blendRgbValue(value1, value2) {
    const value = value1 < 128 ? 2 * value2 * value1 / 255 : 255 - 2 * (255 - value1) * (255 - value2) / 255;
    return Math.round(Math.min(value * ratioOne + value1 * (1 - ratioOne), 255));
  }
  const newRgbColor = {
    r: blendRgbValue(rgbColor1.r, rgbColor2.r),
    g: blendRgbValue(rgbColor1.g, rgbColor2.g),
    b: blendRgbValue(rgbColor1.b, rgbColor2.b)
  };
  return rgbToHex(newRgbColor);
};

function getAllPaletteFilters() {
  return [
    ...getPaletteColorFilter(),
    ...getPaletteSeasonFilter(),
    ...getPaletteStyleFilter(),
    ...getPaletteToneFilter()
  ].sort((a, b) => a.id.localeCompare(b.id));
}
function getPaletteColorFilter() {
  return [
    { id: "amber", label: { en: "Amber", ja: "\u30A2\u30F3\u30D0\u30FC", it: "Ambra" }, palette: ["#FFBF00", "#FFB300", "#FF8C00", "#FF6600", "#FF4500"] },
    { id: "aqua", label: { en: "Aqua", ja: "\u30A2\u30AF\u30A2", it: "Acqua" }, palette: ["#00FFFF", "#00E5EE", "#00CED1", "#20B2AA", "#008B8B"] },
    { id: "apricot", label: { en: "Apricot", ja: "\u30A2\u30D7\u30EA\u30B3\u30C3\u30C8", it: "Albicocca" }, palette: ["#FBCEB1", "#FBC0A3", "#F8B293", "#F7A283", "#F69373"] },
    { id: "auburn", label: { en: "Auburn", ja: "\u8D64\u8910\u8272", it: "Auburn" }, palette: ["#A52A2A", "#8B0000", "#7E1E1E", "#6A1616", "#551212"] },
    { id: "beige", label: { en: "Beige", ja: "\u30D9\u30FC\u30B8\u30E5", it: "Beige" }, palette: ["#F5F5DC", "#ECE8D0", "#E5DFC7", "#DED5BC", "#D7CCB3"] },
    { id: "black", label: { en: "Black", ja: "\u9ED2", it: "Nero" }, palette: ["#000000", "#0A0A0A", "#141414", "#1F1F1F", "#2A2A2A"] },
    { id: "blue", label: { en: "Blue", ja: "\u9752", it: "Blu" }, palette: ["#0000FF", "#0000CD", "#00008B", "#4169E1", "#4682B4"] },
    { id: "brown", label: { en: "Brown", ja: "\u8336\u8272", it: "Marrone" }, palette: ["#964B00", "#8B4513", "#A52A2A", "#7B3F00", "#603311"] },
    { id: "burgundy", label: { en: "Burgundy", ja: "\u30D0\u30FC\u30AC\u30F3\u30C7\u30A3", it: "Borgogna" }, palette: ["#800020", "#66001E", "#4D001A", "#330015", "#1A000F"] },
    { id: "coral", label: { en: "Coral", ja: "\u30B3\u30FC\u30E9\u30EB", it: "Corallo" }, palette: ["#FF7F50", "#FF6347", "#FF4500", "#FF7256", "#FFA07A"] },
    { id: "cream", label: { en: "Cream", ja: "\u30AF\u30EA\u30FC\u30E0", it: "Crema" }, palette: ["#FFFDD0", "#FFFACD", "#FAF0E6", "#F5DEB3", "#FFE4B5"] },
    { id: "crimson", label: { en: "Crimson", ja: "\u30AF\u30EA\u30E0\u30BE\u30F3", it: "Cremisi" }, palette: ["#DC143C", "#B22222", "#A52A2A", "#8B0000", "#800000"] },
    { id: "fuschia", label: { en: "Fuschia", ja: "\u30D5\u30AF\u30B7\u30A2", it: "Fucsia" }, palette: ["#FF00FF", "#FF77FF", "#FF44FF", "#FF99FF", "#FF66CC"] },
    { id: "gold", label: { en: "Gold", ja: "\u30B4\u30FC\u30EB\u30C9", it: "Oro" }, palette: ["#FFD700", "#FFC700", "#FFB800", "#FFA700", "#FF9600"] },
    { id: "gray", label: { en: "Gray", ja: "\u7070\u8272", it: "Grigio" }, palette: ["#808080", "#A9A9A9", "#C0C0C0", "#D3D3D3", "#DCDCDC"] },
    { id: "green", label: { en: "Green", ja: "\u7DD1", it: "Verde" }, palette: ["#008000", "#006400", "#32CD32", "#228B22", "#2E8B57"] },
    { id: "hazel", label: { en: "Hazel", ja: "\u30D8\u30FC\u30BC\u30EB", it: "Nocciola" }, palette: ["#8E7618", "#9C8542", "#A58E5F", "#B29A7F", "#C2A592"] },
    { id: "indigo", label: { en: "Indigo", ja: "\u30A4\u30F3\u30C7\u30A3\u30B4", it: "Indaco" }, palette: ["#4B0082", "#3C006A", "#330057", "#260046", "#1A0033"] },
    { id: "ivory", label: { en: "Ivory", ja: "\u30A2\u30A4\u30DC\u30EA\u30FC", it: "Avorio" }, palette: ["#FFFFF0", "#FFFFE0", "#FAFAD2", "#FFEFD5", "#FFF5EE"] },
    { id: "lavender", label: { en: "Lavender", ja: "\u30E9\u30D9\u30F3\u30C0\u30FC", it: "Lavanda" }, palette: ["#E6E6FA", "#D8BFD8", "#DDA0DD", "#EE82EE", "#BA55D3"] },
    { id: "lilac", label: { en: "Lilac", ja: "\u30E9\u30A4\u30E9\u30C3\u30AF", it: "Lill\xE0" }, palette: ["#C8A2C8", "#D1B2D1", "#DAAEDC", "#E5BBE8", "#F2C6F3"] },
    { id: "magenta", label: { en: "Magenta", ja: "\u30DE\u30BC\u30F3\u30BF", it: "Magenta" }, palette: ["#FF00FF", "#FF77FF", "#FF44FF", "#FF99FF", "#FF66CC"] },
    { id: "maroon", label: { en: "Maroon", ja: "\u6817\u8272", it: "Bordeaux" }, palette: ["#800000", "#5C0000", "#3C0000", "#4E0505", "#720707"] },
    { id: "mint", label: { en: "Mint", ja: "\u30DF\u30F3\u30C8", it: "Menta" }, palette: ["#98FF98", "#90EE90", "#8FBC8F", "#98FB98", "#66CDAA"] },
    { id: "orange", label: { en: "Orange", ja: "\u30AA\u30EC\u30F3\u30B8", it: "Arancio" }, palette: ["#FFA500", "#FF8C00", "#FF7F50", "#FF6347", "#FF4500"] },
    { id: "peach", label: { en: "Peach", ja: "\u30D4\u30FC\u30C1", it: "Pesca" }, palette: ["#FFDAB9", "#FFE4B5", "#FFDEAD", "#F5DEB3", "#FAF0E6"] },
    { id: "pink", label: { en: "Pink", ja: "\u30D4\u30F3\u30AF", it: "Rosa" }, palette: ["#FFC0CB", "#FFB6C1", "#FF69B4", "#FF1493", "#FF6EB4"] },
    { id: "purple", label: { en: "Purple", ja: "\u7D2B", it: "Viola" }, palette: ["#800080", "#6A0DAD", "#9400D3", "#8A2BE2", "#9370DB"] },
    { id: "red", label: { en: "Red", ja: "\u8D64", it: "Rosso" }, palette: ["#FF0000", "#DC143C", "#B22222", "#CD5C5C", "#E9967A"] },
    { id: "sage", label: { en: "Sage", ja: "\u30BB\u30FC\u30B8", it: "Salvia" }, palette: ["#BCB88A", "#B2AC75", "#A9A26B", "#9F9760", "#8E8B4E"] },
    { id: "tan", label: { en: "Tan", ja: "\u30BF\u30F3", it: "Tan" }, palette: ["#D2B48C", "#D4A017", "#C19A6B", "#C3B091", "#DEB887"] },
    { id: "teal", label: { en: "Teal", ja: "\u30C6\u30A3\u30FC\u30EB", it: "Verde acqua" }, palette: ["#008080", "#009688", "#20B2AA", "#48D1CC", "#40E0D0"] },
    { id: "turquoise", label: { en: "Turquoise", ja: "\u30BF\u30FC\u30B3\u30A4\u30BA", it: "Turchese" }, palette: ["#40E0D0", "#48D1CC", "#00CED1", "#20B2AA", "#5F9EA0"] },
    { id: "violet", label: { en: "Violet", ja: "\u30B9\u30DF\u30EC", it: "Viola" }, palette: ["#EE82EE", "#DA70D6", "#DDA0DD", "#E6E6FA", "#BA55D3"] },
    { id: "white", label: { en: "White", ja: "\u767D", it: "Bianco" }, palette: ["#FFFFFF", "#F8F8FF", "#F5F5F5", "#F0F0F0", "#FAFAFA"] },
    { id: "yellow", label: { en: "Yellow", ja: "\u9EC4\u8272", it: "Giallo" }, palette: ["#FFFF00", "#FFD700", "#FFA500", "#FFAE42", "#FFE135"] }
  ].sort((a, b) => a.id.localeCompare(b.id));
}
function getPaletteToneFilter() {
  return [
    { id: "warm", label: { en: "Warm", ja: "\u30A6\u30A9\u30FC\u30E0", it: "Caldo" }, palette: ["#FF7F50", "#FF6347", "#FF4500", "#FF8C00", "#FFD700"] },
    { id: "cool", label: { en: "Cool", ja: "\u30AF\u30FC\u30EB", it: "Fresco" }, palette: ["#4682B4", "#5F9EA0", "#6495ED", "#00CED1", "#20B2AA"] },
    { id: "earthy", label: { en: "Earthy", ja: "\u30A2\u30FC\u30B7\u30FC", it: "Terroso" }, palette: ["#8B4513", "#A0522D", "#6B4226", "#D2B48C", "#C19A6B"] },
    { id: "pastel", label: { en: "Pastel", ja: "\u30D1\u30B9\u30C6\u30EB", it: "Pastello" }, palette: ["#FFB6C1", "#FFDAB9", "#E6E6FA", "#FFFACD", "#E0FFFF"] },
    { id: "vibrant", label: { en: "Vibrant", ja: "\u30D3\u30D3\u30C3\u30C9", it: "Vivace" }, palette: ["#FF1493", "#FF4500", "#FF69B4", "#FF6347", "#FF7F50"] },
    { id: "bright", label: { en: "Bright", ja: "\u30D6\u30E9\u30A4\u30C8", it: "Brillante" }, palette: ["#FFD700", "#FFAE42", "#FFA500", "#FF6347", "#FFD700"] },
    { id: "dark", label: { en: "Dark", ja: "\u30C0\u30FC\u30AF", it: "Scuro" }, palette: ["#000000", "#2F4F4F", "#4B0082", "#1C1C1C", "#696969"] },
    { id: "light", label: { en: "Light", ja: "\u30E9\u30A4\u30C8", it: "Chiaro" }, palette: ["#F5F5DC", "#FAFAD2", "#FFFACD", "#FFFAF0", "#F8F8FF"] },
    { id: "soft", label: { en: "Soft", ja: "\u30BD\u30D5\u30C8", it: "Morbido" }, palette: ["#FFE4E1", "#FFDEAD", "#FDF5E6", "#FAF0E6", "#FFEFD5"] },
    { id: "rainbow", label: { en: "Rainbow", ja: "\u30EC\u30A4\u30F3\u30DC\u30FC", it: "Arcobaleno" }, palette: ["#FF4500", "#FFD700", "#00FF00", "#1E90FF", "#800080"] },
    { id: "neutral", label: { en: "Neutral", ja: "\u30CB\u30E5\u30FC\u30C8\u30E9\u30EB", it: "Neutro" }, palette: ["#808080", "#A9A9A9", "#C0C0C0", "#D3D3D3", "#DCDCDC"] },
    { id: "muted", label: { en: "Muted", ja: "\u30DF\u30E5\u30FC\u30C8", it: "Smutato" }, palette: ["#696969", "#708090", "#778899", "#2F4F4F", "#A9A9A9"] },
    { id: "monochromatic", label: { en: "Monochromatic", ja: "\u30E2\u30CE\u30AF\u30ED\u30FC\u30E0", it: "Monocromatico" }, palette: ["#2F4F4F", "#696969", "#808080", "#A9A9A9", "#C0C0C0"] },
    { id: "deep", label: { en: "Deep", ja: "\u30C7\u30A3\u30FC\u30D7", it: "Profondo" }, palette: ["#4B0082", "#6A0DAD", "#800080", "#8B0000", "#000080"] },
    { id: "high-contrast", label: { en: "High Contrast", ja: "\u30CF\u30A4\u30B3\u30F3\u30C8\u30E9\u30B9\u30C8", it: "Alto Contrasto" }, palette: ["#FFFFFF", "#000000", "#FFD700", "#FF4500", "#1E90FF"] }
  ].sort((a, b) => a.id.localeCompare(b.id));
}
function getPaletteStyleFilter() {
  return [
    { id: "boho", label: { en: "Boho", ja: "\u30DC\u30D8\u30DF\u30A2\u30F3", it: "Boho" }, palette: ["#D2B48C", "#F4A460", "#DEB887", "#FFE4C4", "#D2691E"] },
    { id: "60s", label: { en: "60s", ja: "60\u5E74\u4EE3", it: "Anni 60" }, palette: ["#FF6347", "#FFD700", "#00FF00", "#4682B4", "#9400D3"] },
    { id: "70s", label: { en: "70s", ja: "70\u5E74\u4EE3", it: "Anni 70" }, palette: ["#DAA520", "#B8860B", "#FF8C00", "#A0522D", "#CD853F"] },
    { id: "80s", label: { en: "80s", ja: "80\u5E74\u4EE3", it: "Anni 80" }, palette: ["#FF69B4", "#FF1493", "#9400D3", "#00FFFF", "#FFD700"] },
    { id: "90s", label: { en: "90s", ja: "90\u5E74\u4EE3", it: "Anni 90" }, palette: ["#32CD32", "#00FA9A", "#ADFF2F", "#FFD700", "#FF4500"] },
    { id: "y2k", label: { en: "Y2K", ja: "Y2K", it: "Y2K" }, palette: ["#ADD8E6", "#00CED1", "#4682B4", "#87CEFA", "#5F9EA0"] },
    { id: "retro", label: { en: "Retro", ja: "\u30EC\u30C8\u30ED", it: "Retr\xF2" }, palette: ["#F08080", "#FF4500", "#FFD700", "#8B0000", "#00CED1"] },
    { id: "sunset", label: { en: "Sunset", ja: "\u30B5\u30F3\u30BB\u30C3\u30C8", it: "Tramonto" }, palette: ["#FF4500", "#FF6347", "#FFD700", "#FF7F50", "#FFA500"] },
    { id: "skin", label: { en: "Skin", ja: "\u30B9\u30AD\u30F3", it: "Pelle" }, palette: ["#FFE4C4", "#F5DEB3", "#D2B48C", "#C19A6B", "#DEB887"] },
    { id: "aesthetic", label: { en: "Aesthetic", ja: "\u30A8\u30B9\u30C6\u30C6\u30A3\u30C3\u30AF", it: "Estetico" }, palette: ["#FFC0CB", "#FFB6C1", "#FF69B4", "#E6E6FA", "#D8BFD8"] },
    { id: "vintage", label: { en: "Vintage", ja: "\u30D3\u30F3\u30C6\u30FC\u30B8", it: "Vintage" }, palette: ["#C0C0C0", "#A9A9A9", "#808080", "#696969", "#D3D3D3"] },
    { id: "forest", label: { en: "Forest", ja: "\u30D5\u30A9\u30EC\u30B9\u30C8", it: "Foresta" }, palette: ["#228B22", "#006400", "#32CD32", "#556B2F", "#8B4513"] },
    { id: "fun", label: { en: "Fun", ja: "\u30D5\u30A1\u30F3", it: "Divertente" }, palette: ["#FFD700", "#FF4500", "#FF6347", "#FF1493", "#32CD32"] },
    { id: "minimalist", label: { en: "Minimalist", ja: "\u30DF\u30CB\u30DE\u30EA\u30B9\u30C8", it: "Minimalista" }, palette: ["#F5F5F5", "#D3D3D3", "#A9A9A9", "#808080", "#F8F8F8"] },
    { id: "feminine", label: { en: "Feminine", ja: "\u30D5\u30A7\u30DF\u30CB\u30F3", it: "Femminile" }, palette: ["#FFB6C1", "#FFC0CB", "#FF69B4", "#FFDAB9", "#F4A460"] },
    { id: "royal", label: { en: "Royal", ja: "\u30ED\u30A4\u30E4\u30EB", it: "Reale" }, palette: ["#4169E1", "#4682B4", "#000080", "#6A5ACD", "#B0C4DE"] },
    { id: "wine", label: { en: "Wine", ja: "\u30EF\u30A4\u30F3", it: "Vino" }, palette: ["#722F37", "#800000", "#8B0000", "#A52A2A", "#B22222"] },
    { id: "beach", label: { en: "Beach", ja: "\u30D3\u30FC\u30C1", it: "Spiaggia" }, palette: ["#87CEFA", "#00CED1", "#4682B4", "#ADD8E6", "#5F9EA0"] },
    { id: "desert", label: { en: "Desert", ja: "\u7802\u6F20", it: "Deserto" }, palette: ["#EDC9AF", "#F4A460", "#DEB887", "#D2B48C", "#C19A6B"] },
    { id: "tropical", label: { en: "Tropical", ja: "\u30C8\u30ED\u30D4\u30AB\u30EB", it: "Tropicale" }, palette: ["#FF7F50", "#FFA07A", "#FFD700", "#ADFF2F", "#00FF7F"] },
    { id: "modern", label: { en: "Modern", ja: "\u30E2\u30C0\u30F3", it: "Moderno" }, palette: ["#A9A9A9", "#808080", "#696969", "#D3D3D3", "#B0C4DE"] },
    { id: "ocean", label: { en: "Ocean", ja: "\u30AA\u30FC\u30B7\u30E3\u30F3", it: "Oceano" }, palette: ["#4682B4", "#87CEFA", "#00CED1", "#5F9EA0", "#000080"] },
    { id: "cyberpunk", label: { en: "Cyberpunk", ja: "\u30B5\u30A4\u30D0\u30FC\u30D1\u30F3\u30AF", it: "Cyberpunk" }, palette: ["#9400D3", "#FF00FF", "#8A2BE2", "#7B68EE", "#DA70D6"] },
    { id: "space", label: { en: "Space", ja: "\u30B9\u30DA\u30FC\u30B9", it: "Spazio" }, palette: ["#000080", "#191970", "#4682B4", "#2F4F4F", "#6A5ACD"] },
    { id: "nature", label: { en: "Nature", ja: "\u30CD\u30A4\u30C1\u30E3\u30FC", it: "Natura" }, palette: ["#6B8E23", "#228B22", "#556B2F", "#8B4513", "#006400"] },
    { id: "coastal", label: { en: "Coastal", ja: "\u30B3\u30FC\u30B9\u30BF\u30EB", it: "Costiero" }, palette: ["#B0C4DE", "#ADD8E6", "#4682B4", "#5F9EA0", "#87CEFA"] },
    { id: "luxury", label: { en: "Luxury", ja: "\u30E9\u30B0\u30B8\u30E5\u30A2\u30EA\u30FC", it: "Lusso" }, palette: ["#B8860B", "#DAA520", "#FFD700", "#F4A460", "#DEB887"] },
    { id: "fire", label: { en: "Fire", ja: "\u30D5\u30A1\u30A4\u30A2", it: "Fuoco" }, palette: ["#FF4500", "#FF6347", "#FFD700", "#FFA07A", "#FF8C00"] },
    { id: "rustic", label: { en: "Rustic", ja: "\u30E9\u30B9\u30C6\u30A3\u30C3\u30AF", it: "Rustico" }, palette: ["#8B4513", "#A0522D", "#CD853F", "#DEB887", "#D2B48C"] },
    { id: "moon", label: { en: "Moon", ja: "\u30E0\u30FC\u30F3", it: "Luna" }, palette: ["#F8F8FF", "#F0F8FF", "#E6E6FA", "#ADD8E6", "#708090"] },
    { id: "hippie", label: { en: "Hippie", ja: "\u30D2\u30C3\u30D4\u30FC", it: "Hippie" }, palette: ["#FF4500", "#FFD700", "#FF6347", "#FF69B4", "#00FF7F"] },
    { id: "psychedelic", label: { en: "Psychedelic", ja: "\u30B5\u30A4\u30B1\u30C7\u30EA\u30C3\u30AF", it: "Psichedelico" }, palette: ["#FF00FF", "#9400D3", "#FF1493", "#FFD700", "#00FFFF"] },
    { id: "flower", label: { en: "Flower", ja: "\u30D5\u30E9\u30EF\u30FC", it: "Fiore" }, palette: ["#FF69B4", "#FFC0CB", "#FFD700", "#FFB6C1", "#FFA07A"] },
    { id: "masculine", label: { en: "Masculine", ja: "\u30DE\u30B9\u30AD\u30E5\u30EA\u30F3", it: "Maschile" }, palette: ["#2F4F4F", "#696969", "#808080", "#A9A9A9", "#000000"] },
    { id: "mountain", label: { en: "Mountain", ja: "\u30DE\u30A6\u30F3\u30C6\u30F3", it: "Montagna" }, palette: ["#2E8B57", "#006400", "#228B22", "#556B2F", "#8B4513"] },
    { id: "midnight", label: { en: "Midnight", ja: "\u30DF\u30C3\u30C9\u30CA\u30A4\u30C8", it: "Mezzanotte" }, palette: ["#191970", "#000080", "#4682B4", "#2F4F4F", "#6A5ACD"] },
    { id: "Scandinavian", label: { en: "Scandinavian", ja: "\u30B9\u30AB\u30F3\u30B8\u30CA\u30D3\u30A2", it: "Scandinavo" }, palette: ["#D3D3D3", "#A9A9A9", "#808080", "#F5F5F5", "#696969"] },
    { id: "wood", label: { en: "Wood", ja: "\u30A6\u30C3\u30C9", it: "Legno" }, palette: ["#8B4513", "#A0522D", "#D2691E", "#DEB887", "#F4A460"] },
    { id: "garden", label: { en: "Garden", ja: "\u30AC\u30FC\u30C7\u30F3", it: "Giardino" }, palette: ["#228B22", "#32CD32", "#006400", "#556B2F", "#8B4513"] },
    { id: "elegant", label: { en: "Elegant", ja: "\u30A8\u30EC\u30AC\u30F3\u30C8", it: "Elegante" }, palette: ["#DAA520", "#B8860B", "#FFD700", "#D2B48C", "#F4A460"] },
    { id: "cat", label: { en: "Cat", ja: "\u30AD\u30E3\u30C3\u30C8", it: "Gatto" }, palette: ["#C0C0C0", "#A9A9A9", "#808080", "#696969", "#D3D3D3"] },
    { id: "metal", label: { en: "Metal", ja: "\u30E1\u30BF\u30EB", it: "Metallo" }, palette: ["#808080", "#696969", "#A9A9A9", "#C0C0C0", "#D3D3D3"] },
    { id: "sun", label: { en: "Sun", ja: "\u30B5\u30F3", it: "Sole" }, palette: ["#FFD700", "#FF8C00", "#FFA500", "#FF4500", "#FFD700"] },
    { id: "medieval", label: { en: "Medieval", ja: "\u4E2D\u4E16", it: "Medievale" }, palette: ["#A52A2A", "#8B4513", "#DAA520", "#DEB887", "#CD853F"] },
    { id: "sunflower", label: { en: "Sunflower", ja: "\u30D2\u30DE\u30EF\u30EA", it: "Girasole" }, palette: ["#FFD700", "#FFA500", "#FF6347", "#FF8C00", "#DAA520"] },
    { id: "japanese", label: { en: "Japanese", ja: "\u65E5\u672C", it: "Giapponese" }, palette: ["#DC143C", "#FF4500", "#FF6347", "#FFD700", "#8B0000"] },
    { id: "hawaii", label: { en: "Hawaii", ja: "\u30CF\u30EF\u30A4", it: "Hawaii" }, palette: ["#FF6347", "#FFD700", "#FF7F50", "#00FF7F", "#4682B4"] },
    { id: "night-sky", label: { en: "Night Sky", ja: "\u30CA\u30A4\u30C8\u30B9\u30AB\u30A4", it: "Cielo Notturno" }, palette: ["#191970", "#000080", "#4682B4", "#2F4F4F", "#6A5ACD"] },
    { id: "zombie", label: { en: "Zombie", ja: "\u30BE\u30F3\u30D3", it: "Zombie" }, palette: ["#708090", "#A9A9A9", "#808080", "#696969", "#2F4F4F"] }
  ].sort((a, b) => a.id.localeCompare(b.id));
}
function getPaletteSeasonFilter() {
  return [
    { id: "winter", label: { en: "Winter", ja: "\u30A6\u30A3\u30F3\u30BF\u30FC", it: "Inverno" }, palette: ["#00BFFF", "#4682B4", "#191970", "#F8F8FF", "#DCDCDC"] },
    { id: "fall", label: { en: "Fall", ja: "\u30D5\u30A9\u30FC\u30EB", it: "Autunno" }, palette: ["#D2691E", "#A0522D", "#CD853F", "#8B4513", "#FF8C00"] },
    { id: "autumn", label: { en: "Autumn", ja: "\u30AA\u30FC\u30BF\u30E0", it: "Autunno" }, palette: ["#FF8C00", "#D2691E", "#CD853F", "#A0522D", "#8B4513"] },
    { id: "spring", label: { en: "Spring", ja: "\u30B9\u30D7\u30EA\u30F3\u30B0", it: "Primavera" }, palette: ["#00FF7F", "#FFD700", "#FFB6C1", "#FF69B4", "#ADFF2F"] },
    { id: "summer", label: { en: "Summer", ja: "\u30B5\u30DE\u30FC", it: "Estate" }, palette: ["#FFD700", "#FFA07A", "#00BFFF", "#4682B4", "#87CEEB"] }
  ].sort((a, b) => a.id.localeCompare(b.id));
}

function mapPaletteEntityToDto(entity, likedPaletteIds) {
  var _a, _b;
  return {
    id: entity._id.toHexString(),
    colors: arrangeColors(entity.colors, {
      brightness: 0,
      saturation: 0,
      warmth: 0
    }),
    tags: (_a = entity.tags) != null ? _a : [],
    /** @description required because older names could be inappropriate */
    text: new Date(entity.createdAt).getTime() > paletteConfig.aiNamesStartDateMs ? entity.text : "Cool Palette",
    likesCount: (_b = entity.likesCount) != null ? _b : 0,
    isLiked: likedPaletteIds == null ? void 0 : likedPaletteIds.includes(entity._id.toHexString())
  };
}
function mapPaletteLikeEntityToDto(entity) {
  return {
    id: entity._id.toHexString(),
    userId: entity.userId.toHexString(),
    paletteId: entity.paletteId.toHexString()
  };
}
function mapCreatePalettePrompt(prompt) {
  let value = "Generate a beautiful, bright color palette with 5 colors.";
  value += 'Align the tones. Avoid really close hues (can be a bit close). Eg. "sunset" would be #1e507b #4f6187 #8587a3 #f1b341 #d63f2e';
  value += "If the input is hex colors then generate a similar palette. Doesn't have to be exactly the same, make it nicer.";
  value += "Also create a name for this palette (can use input for it if not rude) and format like this: [name:Beach] or [name:Red Car]";
  value += "Also create up to 10 tags we can use for filtering, including a tag for each color and format like this: [tags:beach,sand,blue,warm,dark] etc.";
  value += `Here's some example tags: ${getAllPaletteFilters().map((color) => color.id).join(",")}`;
  value += 'Never include "palette" as a tag.';
  value += `Return ONLY the 5 hex color codes and the name. Create the colors for this: "${prompt}"`;
  return value;
}
function mapTagsPrompt(colors) {
  let value = "Create up to 10 tags we can use for filtering, including a tag for each color and format like this: [tags:beach,sand,blue,warm,dark] etc.";
  value += `Here's some example tags: ${getAllPaletteFilters().map((color) => color.id).join(",")}`;
  value += 'Never include "palette" as a tag.';
  value += `Return ONLY the tags. Create the tags for this palette: "${colors.join(",")}"`;
  return value;
}

class PaletteService {
  constructor(repository, aiService, likeService) {
    this.repository = repository;
    this.aiService = aiService;
    this.likeService = likeService;
  }
  async list(page, size, filter) {
    const colFilter = {};
    let sort = { createdAt: -1 };
    if (filter.tags !== void 0) {
      colFilter.tags = {
        $all: filter.tags
      };
    }
    if (filter.sortBy === PaletteSortBy.POPULAR) {
      sort = { likesCount: -1 };
    }
    const [entities, count] = await Promise.all([
      this.repository.list(page, size, colFilter, sort),
      this.repository.count(colFilter)
    ]);
    let likedPaletteIds = [];
    if (filter.userId !== void 0) {
      const paletteIds = entities.map((v) => v._id.toHexString());
      const likes = await this.likeService.listByPaletteIds(filter.userId, paletteIds);
      likedPaletteIds = likes.map((v) => v.paletteId);
    }
    return {
      items: entities.map((entity) => mapPaletteEntityToDto(entity, likedPaletteIds)),
      count
    };
  }
  async listLiked(userId, page, size) {
    const likes = await this.likeService.listByUserId(userId, page, size);
    const likedPaletteIds = likes.map((v) => v.paletteId);
    const colFilter = {
      _id: {
        $in: likes.map((v) => new ObjectId(v.paletteId))
      }
    };
    const [entities, count] = await Promise.all([
      this.repository.list(0, size, colFilter, { createdAt: -1 }),
      this.repository.count(colFilter)
    ]);
    return {
      items: entities.map((entity) => mapPaletteEntityToDto(entity, likedPaletteIds)),
      count
    };
  }
  async getById(id, userId) {
    const entity = await this.repository.getById(id);
    if (entity === null) {
      throw createError({ statusCode: 404 });
    }
    let likedPaletteIds = [];
    if (userId !== void 0) {
      const likes = await this.likeService.listByPaletteIds(userId, [entity._id.toHexString()]);
      likedPaletteIds = likes.map((v) => v.paletteId);
    }
    return mapPaletteEntityToDto(entity, likedPaletteIds);
  }
  async cloneById(id, colors) {
    var _a, _b, _c;
    const found = await this.getById(id);
    const prompt = mapTagsPrompt(colors);
    const response = await this.aiService.getByPrompt(prompt);
    const tags = (_c = (_b = (_a = response[0].match(/\[tags:(.*?)\]/)) == null ? void 0 : _a[1]) == null ? void 0 : _b.toLowerCase().split(",")) != null ? _c : [];
    const entity = await this.repository.create({
      colors: [colors[0], colors[1], colors[2], colors[3], colors[4]],
      text: found.text,
      tags,
      createdAt: /* @__PURE__ */ new Date()
    });
    return mapPaletteEntityToDto(entity);
  }
  async create(input) {
    var _a, _b, _c, _d, _e, _f;
    const prompt = mapCreatePalettePrompt(input);
    const response = await this.aiService.getByPrompt(prompt);
    const colors = [];
    if (response[0] !== void 0) {
      const colorText = `#${response[0]}`;
      colors.push(...(_a = colorText.match(/#[0-9a-fA-F]{6}/g)) != null ? _a : []);
    }
    const name = (_c = (_b = response[0].match(/\[name:(.*?)\]/)) == null ? void 0 : _b[1]) != null ? _c : "Cool Palette";
    const tags = (_f = (_e = (_d = response[0].match(/\[tags:(.*?)\]/)) == null ? void 0 : _d[1]) == null ? void 0 : _e.toLowerCase().split(",")) != null ? _f : [];
    const colorsNew = arrangeColors([...new Set(colors)], {
      brightness: 0,
      saturation: 0,
      warmth: 0
    });
    const entity = await this.repository.create({
      colors: [colorsNew[0], colorsNew[1], colorsNew[2], colorsNew[3], colorsNew[4]],
      text: name,
      tags,
      createdAt: /* @__PURE__ */ new Date()
    });
    return mapPaletteEntityToDto(entity);
  }
  async count(from) {
    console.log(`[palette.service] Count called with from date: ${(from == null ? void 0 : from.toISOString()) || "undefined"}`);
    try {
      const filter = {};
      if (from !== void 0) {
        filter.createdAt = {
          $gte: from
        };
        console.log(`[palette.service] Filtering by createdAt >= ${from.toISOString()}`);
      }
      if (!this.repository) {
        console.error("[palette.service] Repository is undefined in count method");
        throw new Error("Repository not initialized");
      }
      if (typeof this.repository.count !== "function") {
        console.error("[palette.service] repository.count is not a function");
        throw new Error("Repository missing count method");
      }
      console.log(`[palette.service] Calling repository.count with filter: ${JSON.stringify(filter)}`);
      const result = await this.repository.count(filter);
      console.log(`[palette.service] Count result: ${result}`);
      return result;
    } catch (error) {
      console.error("[palette.service] Error in count method:", {
        message: error.message,
        stack: error.stack,
        name: error.name,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
      throw error;
    }
  }
  async likeById(userId, id) {
    const found = await this.likeService.getByPaletteId(userId, id);
    if (found !== null) {
      throw createError({
        statusCode: 409,
        statusMessage: "Already liked."
      });
    }
    await Promise.all([
      this.likeService.create(userId, id),
      this.repository.updateLikesCount(id, 1)
    ]);
  }
  async deleteLikeById(userId, id) {
    const found = await this.likeService.getByPaletteId(userId, id);
    if ((found == null ? void 0 : found.userId) !== userId) {
      throw createError({
        statusCode: 401,
        statusMessage: "Unauthorized."
      });
    }
    await Promise.all([
      this.likeService.delete(found.id),
      this.repository.updateLikesCount(id, -1)
    ]);
  }
}

const PaletteDtoSchema = Type.Object({
  id: Type.String({ pattern: "^[0-9a-fA-F]{24}$" }),
  colors: Type.Array(Type.String(), { minItems: 5, maxItems: 5 }),
  text: Type.String(),
  tags: Type.Array(Type.String()),
  likesCount: Type.Number(),
  isLiked: Type.Optional(Type.Boolean())
});
const PaletteInputDtoSchema = Type.Object({
  id: PaletteDtoSchema.properties.id
});
const CreatePaletteInputDtoSchema = Type.Object({
  prompt: Type.String(),
  colors: Type.Optional(PaletteDtoSchema.properties.colors)
});
const ListPaletteInputDtoSchema = Type.Object({
  page: Type.String({ pattern: "^[0-9]+$" }),
  size: Type.Optional(Type.String({ pattern: "^[0-9]+$", maxLength: 3 })),
  tags: Type.Optional(Type.String({ maxLength: 500 })),
  sortBy: Type.Enum(PaletteSortBy)
});
Type.Object({
  items: Type.Array(PaletteDtoSchema),
  count: Type.Number()
});
Type.Object({
  count: Type.Number()
});
const ClonePaletteInputParamsDtoSchema = Type.Pick(PaletteDtoSchema, ["id"]);
const ClonePaletteInputQueryDtoSchema = Type.Pick(PaletteDtoSchema, ["colors"]);

const PaletteLikeDtoSchema = Type.Object({
  id: Type.String({ pattern: "^[0-9a-fA-F]{24}$" }),
  userId: Type.String({ pattern: "^[0-9a-fA-F]{24}$" }),
  paletteId: Type.String({ pattern: "^[0-9a-fA-F]{24}$" })
});
const CreatePaletteLikeInputDtoSchema = Type.Object({
  id: PaletteLikeDtoSchema.properties.paletteId
});
const DeletePaletteLikeInputDtoSchema = Type.Object({
  id: PaletteLikeDtoSchema.properties.paletteId
});

class PaletteValidation {
  async getCreateInputQuery(event) {
    return validateQuery(event, CreatePaletteInputDtoSchema);
  }
  async getInputBody(event) {
    return await validateBody(event, PaletteInputDtoSchema);
  }
  async getInputParams(event) {
    return validateParams(event, PaletteInputDtoSchema);
  }
  async getListInputQuery(event) {
    const query = validateQuery(event, ListPaletteInputDtoSchema);
    if (query.size !== void 0 && parseInt(query.size) > 100) {
      throw createError({
        statusCode: 400,
        statusMessage: "Size must be less than or equal to 100."
      });
    }
    return query;
  }
  async getCloneInputQuery(event) {
    return validateQuery(event, ClonePaletteInputQueryDtoSchema);
  }
  async getCloneInputParams(event) {
    return validateParams(event, ClonePaletteInputParamsDtoSchema);
  }
  async getCreateLikeInputParams(event) {
    return validateParams(event, CreatePaletteLikeInputDtoSchema);
  }
  async getDeleteLikeInputParams(event) {
    return validateParams(event, DeletePaletteLikeInputDtoSchema);
  }
}

class PaletteLikeRepository {
  constructor(collection) {
    this.collection = collection;
  }
  async setup() {
    await this.collection.createIndexes([{
      key: { createdAt: -1 }
    }, {
      key: { userId: -1 }
    }, {
      key: {
        userId: -1,
        paletteId: -1
      }
    }], { background: true });
  }
  async listByPaletteIds(userId, paletteIds) {
    return await this.collection.find({
      userId: new ObjectId(userId),
      paletteId: {
        $in: paletteIds.map((v) => new ObjectId(v))
      }
    }).sort({ createdAt: -1 }).toArray();
  }
  async listByUserId(userId, page, size) {
    return await this.collection.find({ userId: new ObjectId(userId) }).sort({ createdAt: -1 }).skip(page * size).limit(size).toArray();
  }
  async getByUserId(userId, paletteId) {
    return await this.collection.findOne({
      userId: new ObjectId(userId),
      paletteId: new ObjectId(paletteId)
    });
  }
  async deleteById(id) {
    await this.collection.deleteOne({ _id: new ObjectId(id) });
  }
  async create(doc) {
    const entity = {
      ...doc,
      createdAt: /* @__PURE__ */ new Date()
    };
    const { insertedId } = await this.collection.insertOne(entity);
    return {
      _id: insertedId,
      ...entity
    };
  }
}

class PaletteLikeService {
  constructor(repository) {
    this.repository = repository;
  }
  async getByPaletteId(userId, paletteId) {
    const entity = await this.repository.getByUserId(userId, paletteId);
    return entity !== null ? mapPaletteLikeEntityToDto(entity) : null;
  }
  async create(userId, paletteId) {
    const entity = await this.repository.create({
      userId: new ObjectId(userId),
      paletteId: new ObjectId(paletteId),
      createdAt: /* @__PURE__ */ new Date()
    });
    return mapPaletteLikeEntityToDto(entity);
  }
  async delete(id) {
    await this.repository.deleteById(id);
  }
  async listByUserId(userId, page, size) {
    const entities = await this.repository.listByUserId(userId, page, size);
    return entities.map((entity) => mapPaletteLikeEntityToDto(entity));
  }
  async listByPaletteIds(userId, ids) {
    const entities = await this.repository.listByPaletteIds(userId, ids);
    return entities.map((entity) => mapPaletteLikeEntityToDto(entity));
  }
}

function getPaletteModule(db, logger, aiService) {
  logger.info("initializing palette module");
  const likeCollection = db.collection(paletteConfig.likesCollectionName);
  const likeRepository = new PaletteLikeRepository(likeCollection);
  const likeService = new PaletteLikeService(likeRepository);
  const collection = db.collection(paletteConfig.collectionName);
  const repository = new PaletteRepository(collection);
  const service = new PaletteService(repository, aiService, likeService);
  const validation = new PaletteValidation();
  return {
    service,
    validation,
    like: {
      service: likeService
    },
    setup: async () => {
      await Promise.all([
        repository.setup(),
        likeRepository.setup()
      ]);
    }
  };
}

function mapUserEntityToDto(entity) {
  return {
    id: entity._id.toHexString(),
    email: entity.email,
    name: entity.name
  };
}

class UserService {
  constructor(repository) {
    this.repository = repository;
  }
  async getById(id) {
    const entity = await this.repository.getById(id);
    return entity !== null ? mapUserEntityToDto(entity) : null;
  }
  async getByEmail(email) {
    const entity = await this.repository.getByEmail(email);
    return entity !== null ? mapUserEntityToDto(entity) : null;
  }
  async getByGoogleId(googleId) {
    const entity = await this.repository.getByGoogleId(googleId);
    return entity !== null ? mapUserEntityToDto(entity) : null;
  }
  async setLastLoginToNow(id) {
    const entity = await this.repository.updateById(id, {
      lastLoginAt: /* @__PURE__ */ new Date()
    });
    return mapUserEntityToDto(entity);
  }
  async linkGoogleIdToUser(userId, googleId) {
    const entity = await this.repository.updateById(userId, {
      googleId
    });
    return mapUserEntityToDto(entity);
  }
  async createByGoogle(googleId, email) {
    const [foundByGoogleId, foundByEmail] = await Promise.all([
      this.getByGoogleId(googleId),
      this.getByEmail(email)
    ]);
    if (foundByGoogleId !== null) {
      throw createError({
        statusCode: 409,
        statusMessage: "Already exists."
      });
    }
    if (foundByEmail !== null) {
      return await this.linkGoogleIdToUser(foundByEmail.id, googleId);
    }
    const entity = await this.repository.create({
      email: email.toLowerCase(),
      googleId,
      createdAt: /* @__PURE__ */ new Date(),
      lastLoginAt: /* @__PURE__ */ new Date()
    });
    return mapUserEntityToDto(entity);
  }
}

const userConfig = {
  collectionName: useRuntimeConfig().user.collectionName
};

class UserRepository {
  constructor(collection) {
    this.collection = collection;
  }
  async getById(id) {
    return await this.collection.findOne({ _id: new ObjectId(id) });
  }
  async getByEmail(email) {
    return await this.collection.findOne({ email: email.toLowerCase() });
  }
  async getByGoogleId(googleId) {
    return await this.collection.findOne({ googleId });
  }
  async create(doc) {
    const entity = {
      ...doc,
      createdAt: /* @__PURE__ */ new Date()
    };
    const { insertedId } = await this.collection.insertOne(entity);
    return {
      _id: insertedId,
      ...entity
    };
  }
  async updateById(id, entity) {
    const response = await this.collection.findOneAndUpdate({ _id: new ObjectId(id) }, {
      $set: entity
    });
    if (response === null) {
      throw createError({ statusCode: 404 });
    }
    return response;
  }
}

function getUserModule(db, logger) {
  logger.info("initializing user module");
  const collection = db.collection(userConfig.collectionName);
  const repository = new UserRepository(collection);
  const service = new UserService(repository);
  return {
    service
  };
}

var InitStatus = /* @__PURE__ */ ((InitStatus2) => {
  InitStatus2["NOT_STARTED"] = "not_started";
  InitStatus2["IN_PROGRESS"] = "in_progress";
  InitStatus2["COMPLETED"] = "completed";
  InitStatus2["FAILED"] = "failed";
  return InitStatus2;
})(InitStatus || {});
let modules;
let initStatus = "not_started" /* NOT_STARTED */;
let initStartTime = 0;
let initEndTime = 0;
let lastInitError = null;
let initPromise = null;
let initResolve = null;
let initReject = null;
function getInitPromise() {
  if (!initPromise) {
    initPromise = new Promise((resolve, reject) => {
      initResolve = resolve;
      initReject = reject;
      if (initStatus === "completed" /* COMPLETED */) {
        resolve();
      } else if (initStatus === "failed" /* FAILED */ && lastInitError) {
        reject(lastInitError);
      }
    });
  }
  return initPromise;
}
async function connectWithRetry(mongodb, logger) {
  const MAX_RETRIES = 3;
  const RETRY_DELAY_MS = 2e3;
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      logger.info(`MongoDB connection attempt ${attempt}/${MAX_RETRIES}`);
      await mongodb.connect();
      logger.info("MongoDB connection successful");
      return true;
    } catch (error) {
      if (attempt < MAX_RETRIES) {
        logger.warn(`MongoDB connection failed, retrying in ${RETRY_DELAY_MS / 1e3}s (${attempt}/${MAX_RETRIES})`, error);
        await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS));
      } else {
        logger.error("MongoDB connection failed after maximum retries", error);
        return false;
      }
    }
  }
  return false;
}
async function setup() {
  if (initStatus === "in_progress" /* IN_PROGRESS */) {
    console.log(`[setup] Setup already in progress (started ${Date.now() - initStartTime}ms ago), returning`);
    return;
  }
  if (initStatus === "completed" /* COMPLETED */) {
    console.log(`[setup] Setup already completed (${Date.now() - initEndTime}ms ago), returning`);
    return;
  }
  initStatus = "in_progress" /* IN_PROGRESS */;
  initStartTime = Date.now();
  const logger = getLoggerModule();
  logger.info(`Starting server initialization process at ${(/* @__PURE__ */ new Date()).toISOString()}`);
  try {
    logger.info("Initializing MongoDB connection module");
    const mongodb = getMongoModule(logger);
    logger.info("Connecting to configured MongoDB with retry mechanism");
    const connected = await connectWithRetry(mongodb, logger);
    if (!connected) {
      const error = new Error("Failed to connect to MongoDB, initialization aborted");
      logger.error(error);
      initStatus = "failed" /* FAILED */;
      lastInitError = error;
      if (initReject)
        initReject(error);
      return;
    }
    logger.info("MongoDB connection successful, getting database instance");
    const db = mongodb.db();
    if (!db) {
      const error = new Error("Failed to get database instance from MongoDB connection");
      logger.error(error);
      initStatus = "failed" /* FAILED */;
      lastInitError = error;
      if (initReject)
        initReject(error);
      return;
    }
    logger.info("Starting modules initialization and dependency resolution");
    logger.info("Initializing DeepSeek module");
    const deepseek = getDeepseekModule(logger);
    logger.info("Initializing AI module");
    const ai = getAIModule(logger, deepseek.service);
    logger.info("Initializing Palette module");
    const palette = getPaletteModule(db, logger, ai.service);
    logger.info("Initializing OG module");
    const og = getOgModule(logger, palette.service);
    logger.info("Initializing User module");
    const user = getUserModule(db, logger);
    logger.info("Initializing Google module");
    const google = getGoogleModule(logger);
    logger.info("Initializing Auth module");
    const auth = getAuthModule(logger, user.service, google.service);
    logger.info("Running palette module setup");
    try {
      await palette.setup();
      logger.info("Palette module setup completed successfully");
    } catch (setupError) {
      logger.error({ err: setupError }, "Palette module setup failed, but continuing with initialization");
    }
    const moduleValidation = {
      ai: !!ai && !!ai.service,
      palette: !!palette && !!palette.service,
      auth: !!auth && !!auth.service
    };
    logger.info("Module validation check results:", moduleValidation);
    if (!moduleValidation.ai || !moduleValidation.palette || !moduleValidation.auth) {
      logger.warn("Some critical modules failed validation, but continuing with available modules");
    }
    logger.info("Setting global modules object with initialized services");
    const tempModules = {
      ai,
      logger,
      palette,
      og,
      auth,
      user,
      google
    };
    if (!tempModules.palette || !tempModules.palette.service) {
      const error = new Error('Critical module "palette" failed initialization');
      logger.error(error);
      initStatus = "failed" /* FAILED */;
      lastInitError = error;
      if (initReject)
        initReject(error);
      return;
    }
    modules = tempModules;
    initStatus = "completed" /* COMPLETED */;
    initEndTime = Date.now();
    logger.info(`Server initialization completed successfully in ${initEndTime - initStartTime}ms`);
    if (initResolve)
      initResolve();
  } catch (error) {
    const errorObj = error instanceof Error ? error : new Error("Unknown initialization error");
    logger.error({
      err: error,
      message: errorObj.message,
      stack: errorObj.stack,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    }, "Server initialization failed");
    initStatus = "failed" /* FAILED */;
    lastInitError = errorObj;
    if (initReject)
      initReject(errorObj);
  }
}

const _fpLTLjM9mg = defineNitroPlugin(() => {
  const logger = getLoggerModule();
  setup().catch(() => {
    logger.warn("error initializing setup in nitro plugin");
  });
});

const plugins = [
  _5nN7PybQeQ,
_b9Vw9VSa3H,
_KA2xayyjS2,
_aMZGUVP0Yd,
_DVQIfrWTiT,
_fpLTLjM9mg
];

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: statusCode !== 404 ? `<pre>${stack.map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n")}</pre>` : "",
    // TODO: check and validate error.data for serialisation into query
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, (error.message || error.toString() || "internal server error") + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return errorDev; }) ;
    {
      errorObject.description = errorObject.message;
    }
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const app = useRuntimeConfig().app;
  const publicBase = app.cdnURL || app.baseURL;
  return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

function useNitroOrigin(e) {
  const cert = process.env.NITRO_SSL_CERT;
  const key = process.env.NITRO_SSL_KEY;
  let host = process.env.NITRO_HOST || process.env.HOST || false;
  let port = false;
  port = process.env.NITRO_PORT || process.env.PORT || "3000";
  let protocol = cert && key || false ? "https" : "http";
  if (process.env.__NUXT_DEV__) {
    const origin = JSON.parse(process.env.__NUXT_DEV__).proxy.url;
    host = withoutProtocol(origin);
    protocol = origin.includes("https") ? "https" : "http";
  } else if (process.env.NUXT_VITE_NODE_OPTIONS) {
    const origin = JSON.parse(process.env.NUXT_VITE_NODE_OPTIONS).baseURL.replace("/__nuxt_vite_node__", "");
    host = withoutProtocol(origin);
    protocol = origin.includes("https") ? "https" : "http";
  } else if (e) {
    host = getRequestHost(e, { xForwardedHost: true }) || host;
    protocol = getRequestProtocol(e, { xForwardedProto: true }) || protocol;
  }
  if (typeof host === "string" && host.includes(":")) {
    port = host.split(":").pop();
    host = host.split(":")[0];
  }
  port = port ? `:${port}` : "";
  return withTrailingSlash(`${protocol}://${host}${port}`);
}

function resolveSitePath(pathOrUrl, options) {
  let path = pathOrUrl;
  if (hasProtocol(pathOrUrl, { strict: false, acceptRelative: true })) {
    const parsed = parseURL(pathOrUrl);
    path = parsed.pathname;
  }
  const base = withLeadingSlash(options.base || "/");
  if (base !== "/" && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  let origin = withoutTrailingSlash(options.absolute ? options.siteUrl : "");
  if (base !== "/" && origin.endsWith(base)) {
    origin = origin.slice(0, origin.indexOf(base));
  }
  const baseWithOrigin = options.withBase ? withBase(base, origin || "/") : origin;
  const resolvedUrl = withBase(path, baseWithOrigin);
  return path === "/" && !options.withBase ? withTrailingSlash(resolvedUrl) : fixSlashes(options.trailingSlash, resolvedUrl);
}
function isPathFile(path) {
  const lastSegment = path.split("/").pop();
  return !!(lastSegment || path).match(/\.[0-9a-z]+$/i)?.[0];
}
function fixSlashes(trailingSlash, pathOrUrl) {
  const $url = parseURL(pathOrUrl);
  if (isPathFile($url.pathname))
    return pathOrUrl;
  const fixedPath = trailingSlash ? withTrailingSlash($url.pathname) : withoutTrailingSlash($url.pathname);
  return `${$url.protocol ? `${$url.protocol}//` : ""}${$url.host || ""}${fixedPath}${$url.search || ""}${$url.hash || ""}`;
}

function createSitePathResolver(e, options = {}) {
  const siteConfig = useSiteConfig(e);
  const nitroOrigin = useNitroOrigin(e);
  const nuxtBase = useRuntimeConfig(e).app.baseURL || "/";
  return (path) => {
    return resolveSitePath(path, {
      ...options,
      siteUrl: options.canonical !== false || false ? siteConfig.url : nitroOrigin,
      trailingSlash: siteConfig.trailingSlash,
      base: nuxtBase
    });
  };
}

const warnOnceSet = /* @__PURE__ */ new Set();
const DEFAULT_ENDPOINT = "https://api.iconify.design";
const _CgsFJl = defineCachedEventHandler(async (event) => {
  const url = getRequestURL(event);
  if (!url)
    return createError({ status: 400, message: "Invalid icon request" });
  const options = useAppConfig().icon;
  const collectionName = event.context.params?.collection?.replace(/\.json$/, "");
  const collection = collectionName ? await collections[collectionName]?.() : null;
  const apiEndPoint = options.iconifyApiEndpoint || DEFAULT_ENDPOINT;
  const icons = url.searchParams.get("icons")?.split(",");
  if (collection) {
    if (icons?.length) {
      const data = getIcons(
        collection,
        icons
      );
      consola.debug(`[Icon] serving ${(icons || []).map((i) => "`" + collectionName + ":" + i + "`").join(",")} from bundled collection`);
      return data;
    }
  } else {
    if (collectionName && !warnOnceSet.has(collectionName) && apiEndPoint === DEFAULT_ENDPOINT) {
      consola.warn([
        `[Icon] Collection \`${collectionName}\` is not found locally`,
        `We suggest to install it via \`npm i -D @iconify-json/${collectionName}\` to provide the best end-user experience.`
      ].join("\n"));
      warnOnceSet.add(collectionName);
    }
  }
  if (options.fallbackToApi === true || options.fallbackToApi === "server-only") {
    const apiUrl = new URL("./" + basename(url.pathname) + url.search, apiEndPoint);
    consola.debug(`[Icon] fetching ${(icons || []).map((i) => "`" + collectionName + ":" + i + "`").join(",")} from iconify api`);
    if (apiUrl.host !== new URL(apiEndPoint).host) {
      return createError({ status: 400, message: "Invalid icon request" });
    }
    try {
      const data = await $fetch(apiUrl.href);
      return data;
    } catch (e) {
      console.error(e);
      if (e.status === 404)
        return createError({ status: 404 });
      else
        return createError({ status: 500, message: "Failed to fetch fallback icon" });
    }
  }
  return createError({ status: 404 });
}, {
  group: "nuxt",
  name: "icon",
  getKey(event) {
    const collection = event.context.params?.collection?.replace(/\.json$/, "") || "unknown";
    const icons = String(getQuery$1(event).icons || "");
    return `${collection}_${icons.split(",")[0]}_${icons.length}_${hash(icons)}`;
  },
  swr: true,
  maxAge: 60 * 60 * 24 * 7
  // 1 week
});

const _oleeaj = defineEventHandler(async (e) => {
  if (e.context._initedSiteConfig)
    return;
  const runtimeConfig = useRuntimeConfig(e);
  const config = runtimeConfig["nuxt-site-config"];
  const nitroApp = useNitroApp();
  const siteConfig = e.context.siteConfig || createSiteConfigStack({
    debug: config.debug
  });
  const nitroOrigin = useNitroOrigin(e);
  e.context.siteConfigNitroOrigin = nitroOrigin;
  {
    siteConfig.push({
      _context: "nitro:init",
      _priority: -4,
      url: nitroOrigin
    });
  }
  siteConfig.push({
    _context: "runtimeEnv",
    _priority: 0,
    ...runtimeConfig.site || {},
    ...runtimeConfig.public.site || {},
    // @ts-expect-error untyped
    ...envSiteConfig(globalThis._importMeta_.env)
    // just in-case, shouldn't be needed
  });
  const buildStack = config.stack || [];
  buildStack.forEach((c) => siteConfig.push(c));
  if (e.context._nitro.routeRules.site) {
    siteConfig.push({
      _context: "route-rules",
      ...e.context._nitro.routeRules.site
    });
  }
  if (config.multiTenancy) {
    const host = parseURL(nitroOrigin).host;
    const tenant = config.multiTenancy?.find((t) => t.hosts.includes(host));
    if (tenant) {
      siteConfig.push({
        _context: `multi-tenancy:${host}`,
        _priority: 0,
        ...tenant.config
      });
    }
  }
  const ctx = { siteConfig, event: e };
  await nitroApp.hooks.callHook("site-config:init", ctx);
  e.context.siteConfig = ctx.siteConfig;
  e.context._initedSiteConfig = true;
});

const _W3ij9n = defineEventHandler(async (e) => {
  const siteConfig = useSiteConfig(e);
  const nitroOrigin = useNitroOrigin(e);
  const runtimeConfig = useRuntimeConfig(e);
  const stack = e.context.siteConfig.stack;
  setHeader(e, "Content-Type", "application/json");
  return {
    config: siteConfig,
    stack,
    nitroOrigin,
    version: runtimeConfig["nuxt-site-config"].version
  };
});

const logger = createConsola({
  defaults: {
    tag: "@nuxt/sitemap"
  }
});
const merger = createDefu((obj, key, value) => {
  if (Array.isArray(obj[key]) && Array.isArray(value))
    obj[key] = Array.from(/* @__PURE__ */ new Set([...obj[key], ...value]));
  return obj[key];
});
function mergeOnKey(arr, key) {
  const res = {};
  arr.forEach((item) => {
    const k = item[key];
    res[k] = merger(item, res[k] || {});
  });
  return Object.values(res);
}
function splitForLocales(path, locales) {
  const prefix = withLeadingSlash(path).split("/")[1];
  if (locales.includes(prefix))
    return [prefix, path.replace(`/${prefix}`, "")];
  return [null, path];
}
const StringifiedRegExpPattern = /\/(.*?)\/([gimsuy]*)$/;
function normalizeRuntimeFilters(input) {
  return (input || []).map((rule) => {
    if (rule instanceof RegExp || typeof rule === "string")
      return rule;
    const match = rule.regex.match(StringifiedRegExpPattern);
    if (match)
      return new RegExp(match[1], match[2]);
    return false;
  }).filter(Boolean);
}
function createPathFilter(options = {}) {
  const urlFilter = createFilter(options);
  return (loc) => {
    let path = loc;
    try {
      path = parseURL(loc).pathname;
    } catch {
      return false;
    }
    return urlFilter(path);
  };
}
function createFilter(options = {}) {
  const include = options.include || [];
  const exclude = options.exclude || [];
  if (include.length === 0 && exclude.length === 0)
    return () => true;
  return function(path) {
    for (const v of [{ rules: exclude, result: false }, { rules: include, result: true }]) {
      const regexRules = v.rules.filter((r) => r instanceof RegExp);
      if (regexRules.some((r) => r.test(path)))
        return v.result;
      const stringRules = v.rules.filter((r) => typeof r === "string");
      if (stringRules.length > 0) {
        const routes = {};
        for (const r of stringRules) {
          if (r === path)
            return v.result;
          routes[r] = true;
        }
        const routeRulesMatcher = toRouteMatcher(createRouter({ routes, strictTrailingSlash: false }));
        if (routeRulesMatcher.matchAll(path).length > 0)
          return Boolean(v.result);
      }
    }
    return include.length === 0;
  };
}

function useSitemapRuntimeConfig(e) {
  const clone = JSON.parse(JSON.stringify(useRuntimeConfig(e).sitemap));
  for (const k in clone.sitemaps) {
    const sitemap = clone.sitemaps[k];
    sitemap.include = normalizeRuntimeFilters(sitemap.include);
    sitemap.exclude = normalizeRuntimeFilters(sitemap.exclude);
    clone.sitemaps[k] = sitemap;
  }
  return Object.freeze(clone);
}

function extractSitemapXML(xml) {
  const urls = xml.match(/<url>[\s\S]*?<\/url>/g) || [];
  return urls.map((url) => {
    const loc = url.match(/<loc>([^<]+)<\/loc>/)?.[1];
    if (!loc) return null;
    const lastmod = url.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1];
    const changefreq = url.match(/<changefreq>([^<]+)<\/changefreq>/)?.[1];
    const priority = url.match(/<priority>([^<]+)<\/priority>/) ? Number.parseFloat(url.match(/<priority>([^<]+)<\/priority>/)[1]) : void 0;
    const images = (url.match(/<image:image>[\s\S]*?<\/image:image>/g) || []).map((image) => {
      const imageLoc = image.match(/<image:loc>([^<]+)<\/image:loc>/)?.[1];
      return imageLoc ? { loc: imageLoc } : null;
    }).filter(Boolean);
    const videos = (url.match(/<video:video>[\s\S]*?<\/video:video>/g) || []).map((video) => {
      const videoObj = {};
      const title = video.match(/<video:title>([^<]+)<\/video:title>/)?.[1];
      const thumbnail_loc = video.match(/<video:thumbnail_loc>([^<]+)<\/video:thumbnail_loc>/)?.[1];
      const description = video.match(/<video:description>([^<]+)<\/video:description>/)?.[1];
      const content_loc = video.match(/<video:content_loc>([^<]+)<\/video:content_loc>/)?.[1];
      if (!title || !thumbnail_loc || !description || !content_loc) return null;
      videoObj.title = title;
      videoObj.thumbnail_loc = thumbnail_loc;
      videoObj.description = description;
      videoObj.content_loc = content_loc;
      const player_loc = video.match(/<video:player_loc>([^<]+)<\/video:player_loc>/)?.[1];
      if (player_loc) videoObj.player_loc = player_loc;
      const duration = video.match(/<video:duration>([^<]+)<\/video:duration>/) ? Number.parseInt(video.match(/<video:duration>([^<]+)<\/video:duration>/)[1], 10) : void 0;
      if (duration) videoObj.duration = duration;
      const expiration_date = video.match(/<video:expiration_date>([^<]+)<\/video:expiration_date>/)?.[1];
      if (expiration_date) videoObj.expiration_date = expiration_date;
      const rating = video.match(/<video:rating>([^<]+)<\/video:rating>/) ? Number.parseFloat(video.match(/<video:rating>([^<]+)<\/video:rating>/)[1]) : void 0;
      if (rating) videoObj.rating = rating;
      const view_count = video.match(/<video:view_count>([^<]+)<\/video:view_count>/) ? Number.parseInt(video.match(/<video:view_count>([^<]+)<\/video:view_count>/)[1], 10) : void 0;
      if (view_count) videoObj.view_count = view_count;
      const publication_date = video.match(/<video:publication_date>([^<]+)<\/video:publication_date>/)?.[1];
      if (publication_date) videoObj.publication_date = publication_date;
      const family_friendly = video.match(/<video:family_friendly>([^<]+)<\/video:family_friendly>/)?.[1];
      if (family_friendly) videoObj.family_friendly = family_friendly;
      const restriction = video.match(/<video:restriction relationship="([^"]+)">([^<]+)<\/video:restriction>/);
      if (restriction) videoObj.restriction = { relationship: restriction[1], restriction: restriction[2] };
      const platform = video.match(/<video:platform relationship="([^"]+)">([^<]+)<\/video:platform>/);
      if (platform) videoObj.platform = { relationship: platform[1], platform: platform[2] };
      const price = (video.match(/<video:price [^>]+>([^<]+)<\/video:price>/g) || []).map((price2) => {
        const priceValue = price2.match(/<video:price [^>]+>([^<]+)<\/video:price>/)?.[1];
        const currency = price2.match(/currency="([^"]+)"/)?.[1];
        const type = price2.match(/type="([^"]+)"/)?.[1];
        return priceValue ? { price: priceValue, currency, type } : null;
      }).filter(Boolean);
      if (price.length) videoObj.price = price;
      const requires_subscription = video.match(/<video:requires_subscription>([^<]+)<\/video:requires_subscription>/)?.[1];
      if (requires_subscription) videoObj.requires_subscription = requires_subscription;
      const uploader = video.match(/<video:uploader info="([^"]+)">([^<]+)<\/video:uploader>/);
      if (uploader) videoObj.uploader = { uploader: uploader[2], info: uploader[1] };
      const live = video.match(/<video:live>([^<]+)<\/video:live>/)?.[1];
      if (live) videoObj.live = live;
      const tag = (video.match(/<video:tag>([^<]+)<\/video:tag>/g) || []).map((tag2) => tag2.match(/<video:tag>([^<]+)<\/video:tag>/)?.[1]).filter(Boolean);
      if (tag.length) videoObj.tag = tag;
      return videoObj;
    }).filter(Boolean);
    const alternatives = (url.match(/<xhtml:link[\s\S]*?\/>/g) || []).map((link) => {
      const hreflang = link.match(/hreflang="([^"]+)"/)?.[1];
      const href = link.match(/href="([^"]+)"/)?.[1];
      return hreflang && href ? { hreflang, href } : null;
    }).filter(Boolean);
    const news = url.match(/<news:news>[\s\S]*?<\/news:news>/) ? {
      title: url.match(/<news:title>([^<]+)<\/news:title>/)?.[1],
      publication_date: url.match(/<news:publication_date>([^<]+)<\/news:publication_date>/)?.[1],
      publication: {
        name: url.match(/<news:name>([^<]+)<\/news:name>/)?.[1],
        language: url.match(/<news:language>([^<]+)<\/news:language>/)?.[1]
      }
    } : void 0;
    const urlObj = { loc, lastmod, changefreq, priority, images, videos, alternatives, news };
    return Object.fromEntries(Object.entries(urlObj).filter(([_, v]) => v != null && v.length !== 0));
  }).filter(Boolean);
}

async function fetchDataSource(input, event) {
  const context = typeof input.context === "string" ? { name: input.context } : input.context || { name: "fetch" };
  context.tips = context.tips || [];
  const url = typeof input.fetch === "string" ? input.fetch : input.fetch[0];
  const options = typeof input.fetch === "string" ? {} : input.fetch[1];
  const start = Date.now();
  const timeout = options.timeout || 5e3;
  const timeoutController = new AbortController();
  const abortRequestTimeout = setTimeout(() => timeoutController.abort(), timeout);
  let isMaybeErrorResponse = false;
  const isXmlRequest = parseURL(url).pathname.endsWith(".xml");
  const fetchContainer = url.startsWith("/") && event ? event : globalThis;
  try {
    const res = await fetchContainer.$fetch(url, {
      ...options,
      responseType: isXmlRequest ? "text" : "json",
      signal: timeoutController.signal,
      headers: defu$1(options?.headers, {
        Accept: isXmlRequest ? "text/xml" : "application/json"
      }, event ? { host: getRequestHost(event, { xForwardedHost: true }) } : {}),
      // @ts-expect-error untyped
      onResponse({ response }) {
        if (typeof response._data === "string" && response._data.startsWith("<!DOCTYPE html>"))
          isMaybeErrorResponse = true;
      }
    });
    const timeTakenMs = Date.now() - start;
    if (isMaybeErrorResponse) {
      context.tips.push("This is usually because the URL isn't correct or is throwing an error. Please check the URL");
      return {
        ...input,
        context,
        urls: [],
        timeTakenMs,
        error: "Received HTML response instead of JSON"
      };
    }
    let urls = [];
    if (typeof res === "object") {
      urls = res.urls || res;
    } else if (typeof res === "string" && parseURL(url).pathname.endsWith(".xml")) {
      urls = extractSitemapXML(res);
    }
    return {
      ...input,
      context,
      timeTakenMs,
      urls
    };
  } catch (_err) {
    const error = _err;
    if (error.message.includes("This operation was aborted"))
      context.tips.push("The request has taken too long. Make sure app sources respond within 5 seconds or adjust the timeout fetch option.");
    else
      context.tips.push(`Response returned a status of ${error.response?.status || "unknown"}.`);
    console.error("[@nuxtjs/sitemap] Failed to fetch source.", { url, error });
    return {
      ...input,
      context,
      urls: [],
      error: error.message
    };
  } finally {
    if (abortRequestTimeout) {
      clearTimeout(abortRequestTimeout);
    }
  }
}
function globalSitemapSources() {
  return Promise.resolve().then(function () { return globalSources; }).then((m) => m.sources);
}
function childSitemapSources(definition) {
  return definition?._hasSourceChunk ? Promise.resolve().then(function () { return childSources; }).then((m) => m.sources[definition.sitemapName] || []) : Promise.resolve([]);
}
async function resolveSitemapSources(sources, event) {
  return (await Promise.all(
    sources.map((source) => {
      if (typeof source === "object" && "urls" in source) {
        return {
          timeTakenMs: 0,
          ...source,
          urls: source.urls
        };
      }
      if (source.fetch)
        return fetchDataSource(source, event);
      return {
        ...source,
        error: "Invalid source"
      };
    })
  )).flat();
}

const _t8GCG7 = defineEventHandler(async (e) => {
  const _runtimeConfig = useSitemapRuntimeConfig();
  const { sitemaps: _sitemaps } = _runtimeConfig;
  const runtimeConfig = { ..._runtimeConfig };
  delete runtimeConfig.sitemaps;
  const globalSources = await globalSitemapSources();
  const nitroOrigin = useNitroOrigin(e);
  const sitemaps = {};
  for (const s of Object.keys(_sitemaps)) {
    sitemaps[s] = {
      ..._sitemaps[s],
      sources: await resolveSitemapSources(await childSitemapSources(_sitemaps[s]))
    };
  }
  return {
    nitroOrigin,
    sitemaps,
    runtimeConfig,
    globalSources: await resolveSitemapSources(globalSources)
  };
});

const _ksV01Q = defineEventHandler(async (e) => {
  const fixPath = createSitePathResolver(e, { absolute: false, withBase: true });
  const { sitemapName: fallbackSitemapName, cacheMaxAgeSeconds, version, xslColumns, xslTips } = useSitemapRuntimeConfig();
  setHeader(e, "Content-Type", "application/xslt+xml");
  if (cacheMaxAgeSeconds)
    setHeader(e, "Cache-Control", `public, max-age=${cacheMaxAgeSeconds}, must-revalidate`);
  else
    setHeader(e, "Cache-Control", `no-cache, no-store`);
  const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon" style="margin-right: 4px; font-size: 25px;" width="1em" height="1em" viewBox="0 0 32 32"><path fill="#93c5fd" d="M4 26h4v4H4zm10 0h4v4h-4zm10 0h4v4h-4zm1-10h-8v-2h-2v2H7a2.002 2.002 0 0 0-2 2v6h2v-6h8v6h2v-6h8v6h2v-6a2.002 2.002 0 0 0-2-2zM9 2v10h14V2zm2 2h2v6h-2zm10 6h-6V4h6z"></path></svg>`;
  const creditName = `<a href="https://github.com/nuxt-modules/sitemap" style="color: black; display: flex; align-items: center; font-weight: 500;" target="_blank" rel="noopener">${svgIcon} Nuxt Sitemap v${version}</a>`;
  const { name: siteName, url: siteUrl } = useSiteConfig(e);
  const referrer = getHeader(e, "Referer") || "/";
  const referrerPath = parseURL(referrer).pathname;
  const isNotIndexButHasIndex = referrerPath !== "/sitemap.xml" && referrerPath !== "/sitemap_index.xml" && referrerPath.endsWith(".xml");
  const sitemapName = parseURL(referrer).pathname.split("/").pop()?.split("-sitemap")[0] || fallbackSitemapName;
  const title = `${siteName}${sitemapName !== "sitemap.xml" ? ` - ${sitemapName === "sitemap_index.xml" ? "index" : sitemapName}` : ""}`.replace(/&/g, "&amp;");
  const canonicalQuery = getQuery(referrer).canonical;
  const isShowingCanonical = typeof canonicalQuery !== "undefined" && canonicalQuery !== "false";
  const conditionalTips = [
    'You are looking at a <a href="https://developer.mozilla.org/en-US/docs/Web/XSLT/Transforming_XML_with_XSLT/An_Overview" style="color: #398465" target="_blank">XML stylesheet</a>. Read the <a href="https://nuxtseo.com/sitemap/guides/customising-ui" style="color: #398465" target="_blank">docs</a> to learn how to customize it. View the page source to see the raw XML.',
    `URLs missing? Check Nuxt Devtools Sitemap tab (or the <a href="${withQuery("/__sitemap__/debug.json", { sitemap: sitemapName })}" style="color: #398465" target="_blank">debug endpoint</a>).`
  ];
  if (!isShowingCanonical) {
    const canonicalPreviewUrl = withQuery(referrer, { canonical: "" });
    conditionalTips.push(`Your canonical site URL is <strong>${siteUrl}</strong>.`);
    conditionalTips.push(`You can preview your canonical sitemap by visiting <a href="${canonicalPreviewUrl}" style="color: #398465; white-space: nowrap;">${fixPath(canonicalPreviewUrl)}?canonical</a>`);
  } else {
    conditionalTips.push(`You are viewing the canonical sitemap. You can switch to using the request origin: <a href="${fixPath(referrer)}" style="color: #398465; white-space: nowrap ">${fixPath(referrer)}</a>`);
  }
  const tips = conditionalTips.map((t) => `<li><p>${t}</p></li>`).join("\n");
  const showTips = xslTips !== false;
  let columns = [...xslColumns];
  if (!columns.length) {
    columns = [
      { label: "URL", width: "50%" },
      { label: "Images", width: "25%", select: "count(image:image)" },
      { label: "Last Updated", width: "25%", select: "concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))" }
    ];
  }
  return `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xhtml="http://www.w3.org/1999/xhtml"
                xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <style type="text/css">
          body {
            font-family: Inter, Helvetica, Arial, sans-serif;
            font-size: 14px;
            color: #333;
          }

          table {
            border: none;
            border-collapse: collapse;
          }

          .bg-yellow-200 {
            background-color: #fef9c3;
          }

          .p-5 {
            padding: 1.25rem;
          }

          .rounded {
            border-radius: 4px;
            }

          .shadow {
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          }

          #sitemap tr:nth-child(odd) td {
            background-color: #f8f8f8 !important;
          }

          #sitemap tbody tr:hover td {
            background-color: #fff;
          }

          #sitemap tbody tr:hover td, #sitemap tbody tr:hover td a {
            color: #000;
          }

          .expl a {
            color: #398465
            font-weight: 600;
          }

          .expl a:visited {
            color: #398465
          }

          a {
            color: #000;
            text-decoration: none;
          }

          a:visited {
            color: #777;
          }

          a:hover {
            text-decoration: underline;
          }

          td {
            font-size: 12px;
          }

          .text-2xl {
            font-size: 2rem;
            font-weight: 600;
            line-height: 1.25;
          }

          th {
            text-align: left;
            padding-right: 30px;
            font-size: 12px;
          }

          thead th {
            border-bottom: 1px solid #000;
          }
          .fixed { position: fixed; }
          .right-2 { right: 2rem; }
          .top-2 { top: 2rem; }
          .w-30 { width: 30rem; }
          p { margin: 0; }
          li { padding-bottom: 0.5rem; line-height: 1.5; }
          h1 { margin: 0; }
          .mb-5 { margin-bottom: 1.25rem; }
          .mb-3 { margin-bottom: 0.75rem; }
        </style>
      </head>
      <body>
        <div style="grid-template-columns: 1fr 1fr; display: grid; margin: 3rem;">
            <div>
             <div id="content">
          <h1 class="text-2xl mb-3">XML Sitemap</h1>
          <h2>${title}</h2>
          ${isNotIndexButHasIndex ? `<p style="font-size: 12px; margin-bottom: 1rem;"><a href="${fixPath("/sitemap_index.xml")}">${fixPath("/sitemap_index.xml")}</a></p>` : ""}
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &gt; 0">
            <p class="expl" style="margin-bottom: 1rem;">
              This XML Sitemap Index file contains
              <xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/> sitemaps.
            </p>
            <table id="sitemap" cellpadding="3">
              <thead>
                <tr>
                  <th width="75%">Sitemap</th>
                  <th width="25%">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                  <xsl:variable name="sitemapURL">
                    <xsl:value-of select="sitemap:loc"/>
                  </xsl:variable>
                  <tr>
                    <td>
                      <a href="{$sitemapURL}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td>
                      <xsl:value-of
                        select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &lt; 1">
            <p class="expl" style="margin-bottom: 1rem;">
              This XML Sitemap contains
              <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs.
            </p>
            <table id="sitemap" cellpadding="3">
              <thead>
                <tr>
                  ${columns.map((c) => `<th width="${c.width}">${c.label}</th>`).join("\n")}
                </tr>
              </thead>
              <tbody>
                <xsl:variable name="lower" select="'abcdefghijklmnopqrstuvwxyz'"/>
                <xsl:variable name="upper" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'"/>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td>
                      <xsl:variable name="itemURL">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:variable>
                      <a href="{$itemURL}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    ${columns.filter((c) => c.label !== "URL").map((c) => `<td>
<xsl:value-of select="${c.select}"/>
</td>`).join("\n")}
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
        </div>
        </div>
                    ${showTips ? `<div class="w-30 top-2 shadow rounded p-5 right-2" style="margin: 0 auto;"><p><strong>Sitemap Tips (development only)</strong></p><ul style="margin: 1rem; padding: 0;">${tips}</ul><p style="margin-top: 1rem;">${creditName}</p></div>` : ""}
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
`;
});

function withoutQuery(path) {
  return path.split("?")[0];
}
function createNitroRouteRuleMatcher() {
  const { nitro, app } = useRuntimeConfig();
  const _routeRulesMatcher = toRouteMatcher(
    createRouter({
      routes: Object.fromEntries(
        Object.entries(nitro?.routeRules || {}).map(([path, rules]) => [path === "/" ? path : withoutTrailingSlash(path), rules])
      )
    })
  );
  return (pathOrUrl) => {
    const path = pathOrUrl[0] === "/" ? pathOrUrl : parseURL(pathOrUrl, app.baseURL).pathname;
    const pathWithoutQuery = withoutQuery(path);
    return defu$1({}, ..._routeRulesMatcher.matchAll(
      // radix3 does not support trailing slashes
      withoutBase(pathWithoutQuery === "/" ? pathWithoutQuery : withoutTrailingSlash(pathWithoutQuery), app.baseURL)
    ).reverse());
  };
}

function resolve(s, resolvers) {
  if (typeof s === "undefined" || !resolvers)
    return s;
  s = typeof s === "string" ? s : s.toString();
  if (hasProtocol(s, { acceptRelative: true, strict: false }))
    return resolvers.fixSlashes(s);
  return resolvers.canonicalUrlResolver(s);
}
function removeTrailingSlash(s) {
  return s.replace(/\/(\?|#|$)/, "$1");
}
function preNormalizeEntry(_e, resolvers) {
  const e = typeof _e === "string" ? { loc: _e } : { ..._e };
  if (e.url && !e.loc) {
    e.loc = e.url;
    delete e.url;
  }
  if (typeof e.loc !== "string") {
    e.loc = "";
  }
  e.loc = removeTrailingSlash(e.loc);
  e._abs = hasProtocol(e.loc, { acceptRelative: false, strict: false });
  try {
    e._path = e._abs ? parseURL(e.loc) : parsePath(e.loc);
  } catch (e2) {
    e2._path = null;
  }
  if (e._path) {
    const query = parseQuery(e._path.search);
    const qs = stringifyQuery(query);
    e._relativeLoc = `${encodePath(e._path?.pathname)}${qs.length ? `?${qs}` : ""}`;
    if (e._path.host) {
      e.loc = stringifyParsedURL(e._path);
    } else {
      e.loc = e._relativeLoc;
    }
  } else if (!isEncoded(e.loc)) {
    e.loc = encodeURI(e.loc);
  }
  if (e.loc === "")
    e.loc = `/`;
  e.loc = resolve(e.loc, resolvers);
  e._key = `${e._sitemap || ""}${withoutTrailingSlash(e.loc)}`;
  return e;
}
function isEncoded(url) {
  try {
    return url !== decodeURIComponent(url);
  } catch {
    return false;
  }
}
function normaliseEntry(_e, defaults, resolvers) {
  const e = defu$1(_e, defaults);
  if (e.lastmod) {
    const date = normaliseDate(e.lastmod);
    if (date)
      e.lastmod = date;
    else
      delete e.lastmod;
  }
  if (!e.lastmod)
    delete e.lastmod;
  e.loc = resolve(e.loc, resolvers);
  if (e.alternatives) {
    e.alternatives = mergeOnKey(e.alternatives.map((e2) => {
      const a = { ...e2 };
      if (typeof a.href === "string")
        a.href = resolve(a.href, resolvers);
      else if (typeof a.href === "object" && a.href)
        a.href = resolve(a.href.href, resolvers);
      return a;
    }), "hreflang");
  }
  if (e.images) {
    e.images = mergeOnKey(e.images.map((i) => {
      i = { ...i };
      i.loc = resolve(i.loc, resolvers);
      return i;
    }), "loc");
  }
  if (e.videos) {
    e.videos = e.videos.map((v) => {
      v = { ...v };
      if (v.content_loc)
        v.content_loc = resolve(v.content_loc, resolvers);
      return v;
    });
  }
  return e;
}
const IS_VALID_W3C_DATE = [
  /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,
  /^\d{4}-[01]\d-[0-3]\d$/,
  /^\d{4}-[01]\d$/,
  /^\d{4}$/
];
function isValidW3CDate(d) {
  return IS_VALID_W3C_DATE.some((r) => r.test(d));
}
function normaliseDate(d) {
  if (typeof d === "string") {
    if (d.includes("T")) {
      const t = d.split("T")[1];
      if (!t.includes("+") && !t.includes("-") && !t.includes("Z")) {
        d += "Z";
      }
    }
    if (!isValidW3CDate(d))
      return false;
    d = new Date(d);
    d.setMilliseconds(0);
    if (Number.isNaN(d.getTime()))
      return false;
  }
  const z = (n) => `0${n}`.slice(-2);
  const date = `${d.getUTCFullYear()}-${z(d.getUTCMonth() + 1)}-${z(d.getUTCDate())}`;
  if (d.getUTCHours() > 0 || d.getUTCMinutes() > 0 || d.getUTCSeconds() > 0) {
    return `${date}T${z(d.getUTCHours())}:${z(d.getUTCMinutes())}:${z(d.getUTCSeconds())}Z`;
  }
  return date;
}

function sortSitemapUrls(urls) {
  return urls.sort(
    (a, b) => {
      const aLoc = typeof a === "string" ? a : a.loc;
      const bLoc = typeof b === "string" ? b : b.loc;
      return aLoc.localeCompare(bLoc, void 0, { numeric: true });
    }
  ).sort((a, b) => {
    const aLoc = (typeof a === "string" ? a : a.loc) || "";
    const bLoc = (typeof b === "string" ? b : b.loc) || "";
    const aSegments = aLoc.split("/").length;
    const bSegments = bLoc.split("/").length;
    if (aSegments > bSegments)
      return 1;
    if (aSegments < bSegments)
      return -1;
    return 0;
  });
}

function resolveKey(k) {
  switch (k) {
    case "images":
      return "image";
    case "videos":
      return "video";
    // news & others?
    case "news":
      return "news";
    default:
      return k;
  }
}
function handleObject(key, obj) {
  return [
    `        <${key}:${key}>`,
    ...Object.entries(obj).map(([sk, sv]) => {
      if (key === "video" && Array.isArray(sv)) {
        return sv.map((v) => {
          if (typeof v === "string") {
            return [
              `            `,
              `<${key}:${sk}>`,
              escapeValueForXml(v),
              `</${key}:${sk}>`
            ].join("");
          }
          const attributes = Object.entries(v).filter(([ssk]) => ssk !== sk).map(([ssk, ssv]) => `${ssk}="${escapeValueForXml(ssv)}"`).join(" ");
          return [
            `            <${key}:${sk} ${attributes}>`,
            // value is the same sk
            v[sk],
            `</${key}:${sk}>`
          ].join("");
        }).join("\n");
      }
      if (typeof sv === "object") {
        if (key === "video") {
          const attributes = Object.entries(sv).filter(([ssk]) => ssk !== sk).map(([ssk, ssv]) => `${ssk}="${escapeValueForXml(ssv)}"`).join(" ");
          return [
            `            <${key}:${sk} ${attributes}>`,
            // value is the same sk
            sv[sk],
            `</${key}:${sk}>`
          ].join("");
        }
        return [
          `            <${key}:${sk}>`,
          ...Object.entries(sv).map(([ssk, ssv]) => `                <${key}:${ssk}>${escapeValueForXml(ssv)}</${key}:${ssk}>`),
          `            </${key}:${sk}>`
        ].join("\n");
      }
      return `            <${key}:${sk}>${escapeValueForXml(sv)}</${key}:${sk}>`;
    }),
    `        </${key}:${key}>`
  ].join("\n");
}
function handleArray(key, arr) {
  if (arr.length === 0)
    return false;
  key = resolveKey(key);
  if (key === "alternatives") {
    return arr.map((obj) => [
      `        <xhtml:link rel="alternate" ${Object.entries(obj).map(([sk, sv]) => `${sk}="${escapeValueForXml(sv)}"`).join(" ")} />`
    ].join("\n")).join("\n");
  }
  return arr.map((obj) => handleObject(key, obj)).join("\n");
}
function handleEntry(k, e) {
  return Array.isArray(e[k]) ? handleArray(k, e[k]) : typeof e[k] === "object" ? handleObject(k, e[k]) : `        <${k}>${escapeValueForXml(e[k])}</${k}>`;
}
function wrapSitemapXml(input, resolvers, options) {
  const xsl = options.xsl ? resolvers.relativeBaseUrlResolver(options.xsl) : false;
  const credits = options.credits;
  input.unshift(`<?xml version="1.0" encoding="UTF-8"?>${xsl ? `<?xml-stylesheet type="text/xsl" href="${xsl}"?>` : ""}`);
  if (credits)
    input.push(`<!-- XML Sitemap generated by @nuxtjs/sitemap v${options.version} at ${(/* @__PURE__ */ new Date()).toISOString()} -->`);
  if (options.minify)
    return input.join("").replace(/(?<!<[^>]*)\s(?![^<]*>)/g, "");
  return input.join("\n");
}
function escapeValueForXml(value) {
  if (value === true || value === false)
    return value ? "yes" : "no";
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

function resolveSitemapEntries(sitemap, urls, runtimeConfig, resolvers) {
  const {
    autoI18n,
    isI18nMapped
  } = runtimeConfig;
  const filterPath = createPathFilter({
    include: sitemap.include,
    exclude: sitemap.exclude
  });
  const _urls = urls.map((_e) => {
    const e = preNormalizeEntry(_e, resolvers);
    if (!e.loc || !filterPath(e.loc))
      return false;
    return e;
  }).filter(Boolean);
  let validI18nUrlsForTransform = [];
  let warnIncorrectI18nTransformUsage = false;
  const withoutPrefixPaths = {};
  if (autoI18n && autoI18n.strategy !== "no_prefix") {
    const localeCodes = autoI18n.locales.map((l) => l.code);
    validI18nUrlsForTransform = _urls.map((_e, i) => {
      if (_e._abs)
        return false;
      const split = splitForLocales(_e._relativeLoc, localeCodes);
      let localeCode = split[0];
      const pathWithoutPrefix = split[1];
      if (!localeCode)
        localeCode = autoI18n.defaultLocale;
      const e = _e;
      e._pathWithoutPrefix = pathWithoutPrefix;
      const locale = autoI18n.locales.find((l) => l.code === localeCode);
      if (!locale)
        return false;
      e._locale = locale;
      e._index = i;
      e._key = `${e._sitemap || ""}${e._path?.pathname || "/"}${e._path.search}`;
      withoutPrefixPaths[pathWithoutPrefix] = withoutPrefixPaths[pathWithoutPrefix] || [];
      if (!withoutPrefixPaths[pathWithoutPrefix].some((e2) => e2._locale.code === locale.code))
        withoutPrefixPaths[pathWithoutPrefix].push(e);
      return e;
    }).filter(Boolean);
    for (const e of validI18nUrlsForTransform) {
      if (!e._i18nTransform && !e.alternatives?.length) {
        const alternatives = withoutPrefixPaths[e._pathWithoutPrefix].map((u) => {
          const entries = [];
          if (u._locale.code === autoI18n.defaultLocale) {
            entries.push({
              href: u.loc,
              hreflang: "x-default"
            });
          }
          entries.push({
            href: u.loc,
            hreflang: u._locale._hreflang || autoI18n.defaultLocale
          });
          return entries;
        }).flat().filter(Boolean);
        if (alternatives.length)
          e.alternatives = alternatives;
      } else if (e._i18nTransform) {
        delete e._i18nTransform;
        if (autoI18n.strategy === "no_prefix") {
          warnIncorrectI18nTransformUsage = true;
        }
        if (autoI18n.differentDomains) {
          e.alternatives = [
            {
              // apply default locale domain
              ...autoI18n.locales.find((l) => [l.code, l.language].includes(autoI18n.defaultLocale)),
              code: "x-default"
            },
            ...autoI18n.locales.filter((l) => !!l.domain)
          ].map((locale) => {
            return {
              hreflang: locale._hreflang,
              href: joinURL(withHttps(locale.domain), e._pathWithoutPrefix)
            };
          });
        } else {
          for (const l of autoI18n.locales) {
            let loc = joinURL(`/${l.code}`, e._pathWithoutPrefix);
            if (autoI18n.differentDomains || ["prefix_and_default", "prefix_except_default"].includes(autoI18n.strategy) && l.code === autoI18n.defaultLocale)
              loc = e._pathWithoutPrefix;
            const _sitemap = isI18nMapped ? l._sitemap : void 0;
            const newEntry = preNormalizeEntry({
              _sitemap,
              ...e,
              _index: void 0,
              _key: `${_sitemap || ""}${loc || "/"}${e._path.search}`,
              _locale: l,
              loc,
              alternatives: [{ code: "x-default", _hreflang: "x-default" }, ...autoI18n.locales].map((locale) => {
                const code = locale.code === "x-default" ? autoI18n.defaultLocale : locale.code;
                const isDefault = locale.code === "x-default" || locale.code === autoI18n.defaultLocale;
                let href = "";
                if (autoI18n.strategy === "prefix") {
                  href = joinURL("/", code, e._pathWithoutPrefix);
                } else if (["prefix_and_default", "prefix_except_default"].includes(autoI18n.strategy)) {
                  if (isDefault) {
                    href = e._pathWithoutPrefix;
                  } else {
                    href = joinURL("/", code, e._pathWithoutPrefix);
                  }
                }
                if (!filterPath(href))
                  return false;
                return {
                  hreflang: locale._hreflang,
                  href
                };
              }).filter(Boolean)
            }, resolvers);
            if (e._locale.code === newEntry._locale.code) {
              _urls[e._index] = newEntry;
              e._index = void 0;
            } else {
              _urls.push(newEntry);
            }
          }
        }
      }
      if (isI18nMapped) {
        e._sitemap = e._sitemap || e._locale._sitemap;
        e._key = `${e._sitemap || ""}${e.loc || "/"}${e._path.search}`;
      }
      if (e._index)
        _urls[e._index] = e;
    }
  }
  if (warnIncorrectI18nTransformUsage) {
    logger.warn("You're using _i18nTransform with the `no_prefix` strategy. This will cause issues with the sitemap. Please remove the _i18nTransform flag or change i18n strategy.");
  }
  return _urls;
}
async function buildSitemapUrls(sitemap, resolvers, runtimeConfig, nitro) {
  const {
    sitemaps,
    // enhancing
    autoI18n,
    isI18nMapped,
    isMultiSitemap,
    // sorting
    sortEntries,
    // chunking
    defaultSitemapsChunkSize
  } = runtimeConfig;
  const isChunking = typeof sitemaps.chunks !== "undefined" && !Number.isNaN(Number(sitemap.sitemapName));
  function maybeSort(urls) {
    return sortEntries ? sortSitemapUrls(urls) : urls;
  }
  function maybeSlice(urls) {
    if (isChunking && defaultSitemapsChunkSize) {
      const chunk = Number(sitemap.sitemapName);
      return urls.slice(chunk * defaultSitemapsChunkSize, (chunk + 1) * defaultSitemapsChunkSize);
    }
    return urls;
  }
  if (autoI18n?.differentDomains) {
    const domain = autoI18n.locales.find((e) => [e.language, e.code].includes(sitemap.sitemapName))?.domain;
    if (domain) {
      const _tester = resolvers.canonicalUrlResolver;
      resolvers.canonicalUrlResolver = (path) => resolveSitePath(path, {
        absolute: true,
        withBase: false,
        siteUrl: withHttps(domain),
        trailingSlash: _tester("/test/").endsWith("/"),
        base: "/"
      });
    }
  }
  const sourcesInput = sitemap.includeAppSources ? await globalSitemapSources() : [];
  sourcesInput.push(...await childSitemapSources(sitemap));
  const sources = await resolveSitemapSources(sourcesInput, resolvers.event);
  const resolvedCtx = {
    urls: sources.flatMap((s) => s.urls),
    sitemapName: sitemap.sitemapName,
    event: resolvers.event
  };
  await nitro?.hooks.callHook("sitemap:input", resolvedCtx);
  const enhancedUrls = resolveSitemapEntries(sitemap, resolvedCtx.urls, { autoI18n, isI18nMapped }, resolvers);
  const filteredUrls = enhancedUrls.filter((e) => {
    if (isMultiSitemap && e._sitemap && sitemap.sitemapName)
      return e._sitemap === sitemap.sitemapName;
    return true;
  });
  const sortedUrls = maybeSort(filteredUrls);
  return maybeSlice(sortedUrls);
}
function urlsToXml(urls, resolvers, { version, xsl, credits, minify }) {
  const urlset = urls.map((e) => {
    const keys = Object.keys(e).filter((k) => !k.startsWith("_"));
    return [
      "    <url>",
      keys.map((k) => handleEntry(k, e)).filter(Boolean).join("\n"),
      "    </url>"
    ].join("\n");
  });
  return wrapSitemapXml([
    '<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urlset.join("\n"),
    "</urlset>"
  ], resolvers, { version, xsl, credits, minify });
}

function useNitroUrlResolvers(e) {
  const canonicalQuery = getQuery$1(e).canonical;
  const isShowingCanonical = typeof canonicalQuery !== "undefined" && canonicalQuery !== "false";
  const siteConfig = useSiteConfig(e);
  return {
    event: e,
    fixSlashes: (path) => fixSlashes(siteConfig.trailingSlash, path),
    // we need these as they depend on the nitro event
    canonicalUrlResolver: createSitePathResolver(e, {
      canonical: isShowingCanonical || false,
      absolute: true,
      withBase: true
    }),
    relativeBaseUrlResolver: createSitePathResolver(e, { absolute: false, withBase: true })
  };
}
async function createSitemap(event, definition, runtimeConfig) {
  const { sitemapName } = definition;
  const nitro = useNitroApp();
  const resolvers = useNitroUrlResolvers(event);
  let sitemapUrls = await buildSitemapUrls(definition, resolvers, runtimeConfig, nitro);
  const routeRuleMatcher = createNitroRouteRuleMatcher();
  const { autoI18n } = runtimeConfig;
  sitemapUrls = sitemapUrls.map((u) => {
    const path = u._path?.pathname || u.loc;
    let routeRules = routeRuleMatcher(path);
    if (autoI18n?.locales && autoI18n?.strategy !== "no_prefix") {
      const match = splitForLocales(path, autoI18n.locales.map((l) => l.code));
      const pathWithoutPrefix = match[1];
      if (pathWithoutPrefix && pathWithoutPrefix !== path)
        routeRules = defu$1(routeRules, routeRuleMatcher(pathWithoutPrefix));
    }
    if (routeRules.sitemap === false)
      return false;
    if (typeof routeRules.robots !== "undefined" && !routeRules.robots) {
      return false;
    }
    const hasRobotsDisabled = Object.entries(routeRules.headers || {}).some(([name, value]) => name.toLowerCase() === "x-robots-tag" && value.toLowerCase().includes("noindex"));
    if (routeRules.redirect || hasRobotsDisabled)
      return false;
    return routeRules.sitemap ? defu$1(u, routeRules.sitemap) : u;
  }).filter(Boolean);
  const locSize = sitemapUrls.length;
  const resolvedCtx = {
    urls: sitemapUrls,
    sitemapName,
    event
  };
  await nitro.hooks.callHook("sitemap:resolved", resolvedCtx);
  if (resolvedCtx.urls.length !== locSize) {
    resolvedCtx.urls = resolvedCtx.urls.map((e) => preNormalizeEntry(e, resolvers));
  }
  const maybeSort = (urls2) => runtimeConfig.sortEntries ? sortSitemapUrls(urls2) : urls2;
  const normalizedPreDedupe = resolvedCtx.urls.map((e) => normaliseEntry(e, definition.defaults, resolvers));
  const urls = maybeSort(mergeOnKey(normalizedPreDedupe, "_key").map((e) => normaliseEntry(e, definition.defaults, resolvers)));
  const sitemap = urlsToXml(urls, resolvers, runtimeConfig);
  const ctx = { sitemap, sitemapName, event };
  await nitro.hooks.callHook("sitemap:output", ctx);
  setHeader(event, "Content-Type", "text/xml; charset=UTF-8");
  if (runtimeConfig.cacheMaxAgeSeconds)
    setHeader(event, "Cache-Control", `public, max-age=${runtimeConfig.cacheMaxAgeSeconds}, must-revalidate`);
  else
    setHeader(event, "Cache-Control", `no-cache, no-store`);
  event.context._isSitemap = true;
  return ctx.sitemap;
}

const _ow5xJn = defineEventHandler(async (e) => {
  const runtimeConfig = useSitemapRuntimeConfig();
  const { sitemaps } = runtimeConfig;
  if ("index" in sitemaps) {
    return sendRedirect(e, withBase("/sitemap_index.xml", useRuntimeConfig().app.baseURL), 302 );
  }
  return createSitemap(e, Object.values(sitemaps)[0], runtimeConfig);
});

const _lazy_lgl74w = () => Promise.resolve().then(function () { return sitemapUrls_get$1; });
const _lazy_A6VQfW = () => Promise.resolve().then(function () { return login$1; });
const _lazy_XhTMB0 = () => Promise.resolve().then(function () { return getUrl$1; });
const _lazy_0LNrrg = () => Promise.resolve().then(function () { return index_get$d; });
const _lazy_WdfSSA = () => Promise.resolve().then(function () { return index_get$b; });
const _lazy_HL2aPb = () => Promise.resolve().then(function () { return index_get$9; });
const _lazy_I917Ee = () => Promise.resolve().then(function () { return clone_put$1; });
const _lazy_hZhqbh = () => Promise.resolve().then(function () { return index_get$7; });
const _lazy_8G91Jt = () => Promise.resolve().then(function () { return index_delete$1; });
const _lazy_U8oj4e = () => Promise.resolve().then(function () { return index_put$3; });
const _lazy_k3UwL4 = () => Promise.resolve().then(function () { return index_get$5; });
const _lazy_EkpuEB = () => Promise.resolve().then(function () { return index_get$3; });
const _lazy_XcSTMV = () => Promise.resolve().then(function () { return index_put$1; });
const _lazy_51Zd22 = () => Promise.resolve().then(function () { return index_get$1; });
const _lazy_dSdwXr = () => Promise.resolve().then(function () { return get_get$1; });
const _lazy_lxFfzf = () => Promise.resolve().then(function () { return __sitemapUrls_get$1; });
const _lazy_nij5jZ = () => Promise.resolve().then(function () { return sitemap_xml$1; });
const _lazy_PPKqn3 = () => Promise.resolve().then(function () { return renderer$1; });
const _lazy_wnKsYz = () => Promise.resolve().then(function () { return sitemap_index_xml$1; });
const _lazy_EpQdLc = () => Promise.resolve().then(function () { return _sitemap__xml$1; });

const handlers = [
  { route: '/api/sitemap-urls', handler: _lazy_lgl74w, lazy: true, middleware: false, method: "get" },
  { route: '/api/auth/google/login', handler: _lazy_A6VQfW, lazy: true, middleware: false, method: undefined },
  { route: '/api/google/auth/get-url', handler: _lazy_XhTMB0, lazy: true, middleware: false, method: undefined },
  { route: '/api/og', handler: _lazy_0LNrrg, lazy: true, middleware: false, method: "get" },
  { route: '/api/og/tag', handler: _lazy_WdfSSA, lazy: true, middleware: false, method: "get" },
  { route: '/api/og/thumbnail', handler: _lazy_HL2aPb, lazy: true, middleware: false, method: "get" },
  { route: '/api/palettes/:id/clone', handler: _lazy_I917Ee, lazy: true, middleware: false, method: "put" },
  { route: '/api/palettes/:id', handler: _lazy_hZhqbh, lazy: true, middleware: false, method: "get" },
  { route: '/api/palettes/:id/like', handler: _lazy_8G91Jt, lazy: true, middleware: false, method: "delete" },
  { route: '/api/palettes/:id/like', handler: _lazy_U8oj4e, lazy: true, middleware: false, method: "put" },
  { route: '/api/palettes/count', handler: _lazy_k3UwL4, lazy: true, middleware: false, method: "get" },
  { route: '/api/palettes', handler: _lazy_EkpuEB, lazy: true, middleware: false, method: "get" },
  { route: '/api/palettes', handler: _lazy_XcSTMV, lazy: true, middleware: false, method: "put" },
  { route: '/api/palettes/liked', handler: _lazy_51Zd22, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/get', handler: _lazy_dSdwXr, lazy: true, middleware: false, method: "get" },
  { route: '/__sitemap-urls', handler: _lazy_lxFfzf, lazy: true, middleware: false, method: "get" },
  { route: '/sitemap.xml', handler: _lazy_nij5jZ, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_PPKqn3, lazy: true, middleware: false, method: undefined },
  { route: '/api/_nuxt_icon/:collection', handler: _CgsFJl, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _oleeaj, lazy: false, middleware: true, method: undefined },
  { route: '/__site-config__/debug.json', handler: _W3ij9n, lazy: false, middleware: false, method: undefined },
  { route: '/sitemap_index.xml', handler: _lazy_wnKsYz, lazy: true, middleware: false, method: undefined },
  { route: '/__sitemap__/**:sitemap', handler: _lazy_EpQdLc, lazy: true, middleware: false, method: undefined },
  { route: '/__sitemap__/debug.json', handler: _t8GCG7, lazy: false, middleware: false, method: undefined },
  { route: '/__sitemap__/style.xsl', handler: _ksV01Q, lazy: false, middleware: false, method: undefined },
  { route: '/sitemap.xml', handler: _ow5xJn, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_PPKqn3, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const server = new Server(toNodeListener(nitroApp.h3App));
function getAddress() {
  if (p === "stackblitz" || process.env.NITRO_NO_UNIX_SOCKET || process.versions.bun) {
    return 0;
  }
  const socketName = `worker-${process.pid}-${threadId}.sock`;
  if (A) {
    return join("\\\\.\\pipe\\nitro", socketName);
  } else {
    const socketDir = join(tmpdir(), "nitro");
    mkdirSync(socketDir, { recursive: true });
    return join(socketDir, socketName);
  }
}
const listenAddress = getAddress();
server.listen(listenAddress, () => {
  const _address = server.address();
  parentPort.postMessage({
    event: "listen",
    address: typeof _address === "string" ? { socketPath: _address } : { host: "localhost", port: _address.port }
  });
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
trapUnhandledNodeErrors();
async function onShutdown(signal) {
  await nitroApp.hooks.callHook("close");
}
parentPort.on("message", async (msg) => {
  if (msg && msg.event === "shutdown") {
    await onShutdown();
    parentPort.postMessage({ event: "exit" });
  }
});

const _messages = { "appName": "Nuxt", "version": "", "statusCode": 500, "statusMessage": "Server error", "description": "An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details.", "stack": "" };
const template$1 = (messages) => {
  messages = { ..._messages, ...messages };
  return '<!DOCTYPE html><html lang="en"><head><title>' + messages.statusCode + " - " + messages.statusMessage + " | " + messages.appName + `</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1.0,minimum-scale=1.0" name="viewport"><style>.spotlight{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-40vh;filter:blur(30vh);height:60vh;opacity:.8}*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-size:1em;font-variation-settings:normal}h1,p,pre{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.fixed{position:fixed}.left-0{left:0}.right-0{right:0}.z-10{z-index:10}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.h-auto{height:auto}.min-h-screen{min-height:100vh}.flex{display:flex}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.overflow-y-auto{overflow-y:auto}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.bg-black\\/5{background-color:#0000000d}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-14{padding-top:3.5rem}.text-6xl{font-size:3.75rem;line-height:1}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-black{--un-text-opacity:1;color:rgb(0 0 0/var(--un-text-opacity))}.font-light{font-weight:300}.font-medium{font-weight:500}.leading-tight{line-height:1.25}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme:dark){.dark\\:bg-black{--un-bg-opacity:1;background-color:rgb(0 0 0/var(--un-bg-opacity))}.dark\\:bg-white\\/10{background-color:#ffffff1a}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media (min-width:640px){.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}.sm\\:text-8xl{font-size:6rem;line-height:1}}</style><script>!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();<\/script></head><body class="antialiased bg-white dark:bg-black dark:text-white flex flex-col font-sans min-h-screen pt-14 px-10 text-black"><div class="fixed left-0 right-0 spotlight"></div><h1 class="font-medium mb-6 sm:text-8xl text-6xl">` + messages.statusCode + '</h1><p class="font-light leading-tight mb-8 sm:text-2xl text-xl">' + messages.description + '</p><div class="bg-black/5 bg-white dark:bg-white/10 flex-1 h-auto overflow-y-auto rounded-t-md"><pre class="font-light leading-tight p-8 text-xl z-10">' + messages.stack + "</pre></div></body></html>";
};

const errorDev = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template$1
});

const sources$1 = [
    {
        "context": {
            "name": "sitemap:urls",
            "description": "Set with the `sitemap.urls` config."
        },
        "urls": [],
        "sourceType": "user"
    },
    {
        "context": {
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/api",
                "_sitemap": "en-US",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/api"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/api"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/api"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/api"
                    }
                ]
            },
            {
                "loc": "/ja/api",
                "_sitemap": "ja-JP",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/api"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/api"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/api"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/api"
                    }
                ]
            },
            {
                "loc": "/it/api",
                "_sitemap": "it-IT",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/api"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/api"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/api"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/api"
                    }
                ]
            },
            {
                "loc": "/app/contrast-checker",
                "_sitemap": "en-US",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/app/contrast-checker"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/app/contrast-checker"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/app/contrast-checker"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/app/contrast-checker"
                    }
                ]
            },
            {
                "loc": "/ja/app/contrast-checker",
                "_sitemap": "ja-JP",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/app/contrast-checker"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/app/contrast-checker"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/app/contrast-checker"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/app/contrast-checker"
                    }
                ]
            },
            {
                "loc": "/it/app/contrast-checker",
                "_sitemap": "it-IT",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/app/contrast-checker"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/app/contrast-checker"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/app/contrast-checker"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/app/contrast-checker"
                    }
                ]
            },
            {
                "loc": "/app/explore",
                "_sitemap": "en-US",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/app/explore"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/app/explore"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/app/explore"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/app/explore"
                    }
                ]
            },
            {
                "loc": "/ja/app/explore",
                "_sitemap": "ja-JP",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/app/explore"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/app/explore"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/app/explore"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/app/explore"
                    }
                ]
            },
            {
                "loc": "/it/app/explore",
                "_sitemap": "it-IT",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/app/explore"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/app/explore"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/app/explore"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/app/explore"
                    }
                ]
            },
            {
                "loc": "/app/image-color-picker",
                "_sitemap": "en-US",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/app/image-color-picker"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/app/image-color-picker"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/app/image-color-picker"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/app/image-color-picker"
                    }
                ]
            },
            {
                "loc": "/ja/app/image-color-picker",
                "_sitemap": "ja-JP",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/app/image-color-picker"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/app/image-color-picker"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/app/image-color-picker"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/app/image-color-picker"
                    }
                ]
            },
            {
                "loc": "/it/app/image-color-picker",
                "_sitemap": "it-IT",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/app/image-color-picker"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/app/image-color-picker"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/app/image-color-picker"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/app/image-color-picker"
                    }
                ]
            },
            {
                "loc": "/app",
                "_sitemap": "en-US",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/app"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/app"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/app"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/app"
                    }
                ]
            },
            {
                "loc": "/ja/app",
                "_sitemap": "ja-JP",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/app"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/app"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/app"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/app"
                    }
                ]
            },
            {
                "loc": "/it/app",
                "_sitemap": "it-IT",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/app"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/app"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/app"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/app"
                    }
                ]
            },
            {
                "loc": "/app/palette",
                "_sitemap": "en-US",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/app/palette"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/app/palette"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/app/palette"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/app/palette"
                    }
                ]
            },
            {
                "loc": "/ja/app/palette",
                "_sitemap": "ja-JP",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/app/palette"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/app/palette"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/app/palette"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/app/palette"
                    }
                ]
            },
            {
                "loc": "/it/app/palette",
                "_sitemap": "it-IT",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/app/palette"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/app/palette"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/app/palette"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/app/palette"
                    }
                ]
            },
            {
                "loc": "/app/random-color",
                "_sitemap": "en-US",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/app/random-color"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/app/random-color"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/app/random-color"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/app/random-color"
                    }
                ]
            },
            {
                "loc": "/ja/app/random-color",
                "_sitemap": "ja-JP",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/app/random-color"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/app/random-color"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/app/random-color"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/app/random-color"
                    }
                ]
            },
            {
                "loc": "/it/app/random-color",
                "_sitemap": "it-IT",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/app/random-color"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/app/random-color"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/app/random-color"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/app/random-color"
                    }
                ]
            },
            {
                "loc": "/contrast-checker",
                "_sitemap": "en-US",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/contrast-checker"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/contrast-checker"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/contrast-checker"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/contrast-checker"
                    }
                ]
            },
            {
                "loc": "/ja/contrast-checker",
                "_sitemap": "ja-JP",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/contrast-checker"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/contrast-checker"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/contrast-checker"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/contrast-checker"
                    }
                ]
            },
            {
                "loc": "/it/contrast-checker",
                "_sitemap": "it-IT",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/contrast-checker"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/contrast-checker"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/contrast-checker"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/contrast-checker"
                    }
                ]
            },
            {
                "loc": "/explore",
                "_sitemap": "en-US",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/explore"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/explore"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/explore"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/explore"
                    }
                ]
            },
            {
                "loc": "/ja/explore",
                "_sitemap": "ja-JP",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/explore"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/explore"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/explore"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/explore"
                    }
                ]
            },
            {
                "loc": "/it/explore",
                "_sitemap": "it-IT",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/explore"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/explore"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/explore"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/explore"
                    }
                ]
            },
            {
                "loc": "/home",
                "_sitemap": "en-US",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/home"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/home"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/home"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/home"
                    }
                ]
            },
            {
                "loc": "/ja/home",
                "_sitemap": "ja-JP",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/home"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/home"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/home"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/home"
                    }
                ]
            },
            {
                "loc": "/it/home",
                "_sitemap": "it-IT",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/home"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/home"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/home"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/home"
                    }
                ]
            },
            {
                "loc": "/image-color-picker",
                "_sitemap": "en-US",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/image-color-picker"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/image-color-picker"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/image-color-picker"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/image-color-picker"
                    }
                ]
            },
            {
                "loc": "/ja/image-color-picker",
                "_sitemap": "ja-JP",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/image-color-picker"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/image-color-picker"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/image-color-picker"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/image-color-picker"
                    }
                ]
            },
            {
                "loc": "/it/image-color-picker",
                "_sitemap": "it-IT",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/image-color-picker"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/image-color-picker"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/image-color-picker"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/image-color-picker"
                    }
                ]
            },
            {
                "loc": "/",
                "_sitemap": "en-US",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/"
                    }
                ]
            },
            {
                "loc": "/ja",
                "_sitemap": "ja-JP",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/"
                    }
                ]
            },
            {
                "loc": "/it",
                "_sitemap": "it-IT",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/"
                    }
                ]
            },
            {
                "loc": "/login",
                "_sitemap": "en-US",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/login"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/login"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/login"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/login"
                    }
                ]
            },
            {
                "loc": "/ja/login",
                "_sitemap": "ja-JP",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/login"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/login"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/login"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/login"
                    }
                ]
            },
            {
                "loc": "/it/login",
                "_sitemap": "it-IT",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/login"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/login"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/login"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/login"
                    }
                ]
            },
            {
                "loc": "/oauth",
                "_sitemap": "en-US",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/oauth"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/oauth"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/oauth"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/oauth"
                    }
                ]
            },
            {
                "loc": "/ja/oauth",
                "_sitemap": "ja-JP",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/oauth"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/oauth"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/oauth"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/oauth"
                    }
                ]
            },
            {
                "loc": "/it/oauth",
                "_sitemap": "it-IT",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/oauth"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/oauth"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/oauth"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/oauth"
                    }
                ]
            },
            {
                "loc": "/palette-generator",
                "_sitemap": "en-US",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/palette-generator"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/palette-generator"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/palette-generator"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/palette-generator"
                    }
                ]
            },
            {
                "loc": "/ja/palette-generator",
                "_sitemap": "ja-JP",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/palette-generator"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/palette-generator"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/palette-generator"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/palette-generator"
                    }
                ]
            },
            {
                "loc": "/it/palette-generator",
                "_sitemap": "it-IT",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/palette-generator"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/palette-generator"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/palette-generator"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/palette-generator"
                    }
                ]
            },
            {
                "loc": "/palette/explore",
                "_sitemap": "en-US",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/palette/explore"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/palette/explore"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/palette/explore"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/palette/explore"
                    }
                ]
            },
            {
                "loc": "/ja/palette/explore",
                "_sitemap": "ja-JP",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/palette/explore"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/palette/explore"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/palette/explore"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/palette/explore"
                    }
                ]
            },
            {
                "loc": "/it/palette/explore",
                "_sitemap": "it-IT",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/palette/explore"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/palette/explore"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/palette/explore"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/palette/explore"
                    }
                ]
            },
            {
                "loc": "/palette/explore/tags",
                "_sitemap": "en-US",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/palette/explore/tags"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/palette/explore/tags"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/palette/explore/tags"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/palette/explore/tags"
                    }
                ]
            },
            {
                "loc": "/ja/palette/explore/tags",
                "_sitemap": "ja-JP",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/palette/explore/tags"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/palette/explore/tags"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/palette/explore/tags"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/palette/explore/tags"
                    }
                ]
            },
            {
                "loc": "/it/palette/explore/tags",
                "_sitemap": "it-IT",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/palette/explore/tags"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/palette/explore/tags"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/palette/explore/tags"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/palette/explore/tags"
                    }
                ]
            },
            {
                "loc": "/palette/liked",
                "_sitemap": "en-US",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/palette/liked"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/palette/liked"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/palette/liked"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/palette/liked"
                    }
                ]
            },
            {
                "loc": "/ja/palette/liked",
                "_sitemap": "ja-JP",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/palette/liked"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/palette/liked"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/palette/liked"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/palette/liked"
                    }
                ]
            },
            {
                "loc": "/it/palette/liked",
                "_sitemap": "it-IT",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/palette/liked"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/palette/liked"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/palette/liked"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/palette/liked"
                    }
                ]
            },
            {
                "loc": "/privacy",
                "_sitemap": "en-US",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/privacy"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/privacy"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/privacy"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/privacy"
                    }
                ]
            },
            {
                "loc": "/ja/privacy",
                "_sitemap": "ja-JP",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/privacy"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/privacy"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/privacy"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/privacy"
                    }
                ]
            },
            {
                "loc": "/it/privacy",
                "_sitemap": "it-IT",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/privacy"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/privacy"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/privacy"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/privacy"
                    }
                ]
            },
            {
                "loc": "/random-color",
                "_sitemap": "en-US",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/random-color"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/random-color"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/random-color"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/random-color"
                    }
                ]
            },
            {
                "loc": "/ja/random-color",
                "_sitemap": "ja-JP",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/random-color"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/random-color"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/random-color"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/random-color"
                    }
                ]
            },
            {
                "loc": "/it/random-color",
                "_sitemap": "it-IT",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/random-color"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/random-color"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/random-color"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/random-color"
                    }
                ]
            },
            {
                "loc": "/recent",
                "_sitemap": "en-US",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/recent"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/recent"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/recent"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/recent"
                    }
                ]
            },
            {
                "loc": "/ja/recent",
                "_sitemap": "ja-JP",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/recent"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/recent"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/recent"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/recent"
                    }
                ]
            },
            {
                "loc": "/it/recent",
                "_sitemap": "it-IT",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/recent"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/recent"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/recent"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/recent"
                    }
                ]
            },
            {
                "loc": "/terms",
                "_sitemap": "en-US",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/terms"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/terms"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/terms"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/terms"
                    }
                ]
            },
            {
                "loc": "/ja/terms",
                "_sitemap": "ja-JP",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/terms"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/terms"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/terms"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/terms"
                    }
                ]
            },
            {
                "loc": "/it/terms",
                "_sitemap": "it-IT",
                "alternatives": [
                    {
                        "hreflang": "en-US",
                        "href": "/terms"
                    },
                    {
                        "hreflang": "ja-JP",
                        "href": "/ja/terms"
                    },
                    {
                        "hreflang": "it-IT",
                        "href": "/it/terms"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/terms"
                    }
                ]
            },
            {
                "loc": "/sitemap.xml",
                "_sitemap": "en-US"
            }
        ],
        "sourceType": "app"
    },
    {
        "context": {
            "name": "nuxt:route-rules",
            "description": "Generated from your route rules config.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:route-rules'] }`."
            ]
        },
        "urls": [
            "/palette/explore"
        ],
        "sourceType": "app"
    }
];

const globalSources = /*#__PURE__*/Object.freeze({
  __proto__: null,
  sources: sources$1
});

const sources = {
    "en-US": [],
    "ja-JP": [],
    "it-IT": []
};

const childSources = /*#__PURE__*/Object.freeze({
  __proto__: null,
  sources: sources
});

const sitemapUrls_get = defineEventHandler(async (event) => {
  const dynamicUrls = [
    // 示例：假设有一些动态生成的调色板页面
    {
      loc: "/palette/summer-vibes",
      lastmod: /* @__PURE__ */ new Date(),
      changefreq: "monthly",
      priority: 0.8
    },
    {
      loc: "/palette/ocean-breeze",
      lastmod: /* @__PURE__ */ new Date(),
      changefreq: "monthly",
      priority: 0.8
    },
    {
      loc: "/palette/forest-dream",
      lastmod: /* @__PURE__ */ new Date(),
      changefreq: "monthly",
      priority: 0.8
    }
    // 实际应用中，这些应该从数据库中动态获取
  ];
  const locales = ["en", "ja", "it"];
  const defaultLocale = "en";
  const localizedUrls = dynamicUrls.flatMap((url) => {
    return locales.filter((locale) => locale !== defaultLocale).map((locale) => ({
      ...url,
      loc: `/${locale}${url.loc}`
    }));
  });
  return [...dynamicUrls, ...localizedUrls];
});

const sitemapUrls_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: sitemapUrls_get
});

const login = defineEventHandler(async (event) => {
  const body = await modules.google.validation.getAuthInputBody(event);
  const response = await modules.auth.service.loginWithGoogle(event, body.code);
  return response;
});

const login$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: login
});

const getUrl = defineEventHandler(async (event) => {
  const body = await modules.google.validation.getAuthUrlInputBody(event);
  const response = await modules.google.service.getAuthUrl(body.state);
  return {
    url: response
  };
});

const getUrl$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: getUrl
});

const index_get$c = defineEventHandler(async (event) => {
  const query = await modules.og.validation.getInputQuery(event);
  const response = await modules.og.service.generateImage(
    query.colors.split(":"),
    query.text
  );
  setResponseHeader(event, "Content-Type", "image/png");
  return response;
});

const index_get$d = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_get$c
});

const index_get$a = defineEventHandler(async (event) => {
  const query = await modules.og.validation.getTagQuery(event);
  const response = await modules.og.service.generateGridImageFromTags(
    query.tag.toLowerCase(),
    query.text
  );
  setResponseHeader(event, "Content-Type", "image/png");
  return response;
});

const index_get$b = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_get$a
});

const index_get$8 = defineEventHandler(async (event) => {
  const query = await modules.og.validation.getThumbnailInputQuery(event);
  const response = await modules.og.service.generateSquareThumbnail(
    query.colors.split(":")
  );
  setResponseHeader(event, "Content-Type", "image/png");
  return response;
});

const index_get$9 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_get$8
});

const clone_put = defineEventHandler(async (event) => {
  const query = await modules.palette.validation.getCloneInputQuery(event);
  const params = await modules.palette.validation.getCloneInputParams(event);
  const response = await modules.palette.service.cloneById(params.id, query.colors);
  return response;
});

const clone_put$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: clone_put
});

const index_get$6 = defineCachedEventHandler(async (event) => {
  const params = await modules.palette.validation.getInputParams(event);
  let userId;
  try {
    const auth = await modules.auth.service.verify(event);
    userId = auth.userId;
  } catch {
  }
  const response = await modules.palette.service.getById(params.id, userId);
  return response;
}, { maxAge: 60 * 60 });

const index_get$7 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_get$6
});

const index_delete = defineEventHandler(async (event) => {
  const { userId } = await modules.auth.service.verify(event);
  const params = await modules.palette.validation.getDeleteLikeInputParams(event);
  await modules.palette.service.deleteLikeById(userId, params.id);
  setResponseStatus(event, 201);
});

const index_delete$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_delete
});

const index_put$2 = defineEventHandler(async (event) => {
  const { userId } = await modules.auth.service.verify(event);
  const params = await modules.palette.validation.getCreateLikeInputParams(event);
  await modules.palette.service.likeById(userId, params.id);
  setResponseStatus(event, 201);
});

const index_put$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_put$2
});

const index_get$4 = defineCachedEventHandler(async (event) => {
  var _a;
  console.log(`[palette/count] Request received: ${(/* @__PURE__ */ new Date()).toISOString()}`);
  try {
    if (initStatus !== InitStatus.COMPLETED) {
      console.log(`[palette/count] Server initialization not completed (current status: ${initStatus}), waiting...`);
      try {
        await getInitPromise();
        console.log(`[palette/count] Server initialization completed, proceeding with request`);
      } catch (initError) {
        console.error(`[palette/count] Server initialization failed: ${initError.message}`);
        throw createError({
          statusCode: 503,
          statusMessage: "Server still initializing. Please try again later."
        });
      }
    }
    if (!modules) {
      console.error("[palette/count] Fatal error: modules object is undefined even after initialization");
      throw createError({
        statusCode: 500,
        statusMessage: "Server initialization error: Modules not initialized"
      });
    }
    if (!modules.palette) {
      console.error("[palette/count] Fatal error: modules.palette is undefined");
      throw createError({
        statusCode: 500,
        statusMessage: "Server initialization error: Palette module not initialized"
      });
    }
    if (!modules.palette.service) {
      console.error("[palette/count] Fatal error: modules.palette.service is undefined");
      throw createError({
        statusCode: 500,
        statusMessage: "Server initialization error: Palette service not available"
      });
    }
    if (typeof modules.palette.service.count !== "function") {
      console.error("[palette/count] Fatal error: modules.palette.service.count is not a function");
      throw createError({
        statusCode: 500,
        statusMessage: "Server initialization error: Palette service is malformed"
      });
    }
    console.log("[palette/count] Modules check passed, proceeding with count operation");
    const now = /* @__PURE__ */ new Date();
    const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1e3);
    console.log(`[palette/count] Calling service.count with date: ${twentyFourHoursAgo.toISOString()}`);
    const response = await modules.palette.service.count(twentyFourHoursAgo);
    console.log(`[palette/count] Count operation successful, result: ${response}`);
    return {
      count: response
    };
  } catch (error) {
    console.error("[palette/count] Error details:", {
      message: error.message,
      stack: error.stack,
      name: error.name,
      code: error.code,
      statusCode: error.statusCode,
      requestPath: event.path,
      requestMethod: event.method,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    });
    if (error.statusCode) {
      console.error(`[palette/count] Re-throwing H3 error with statusCode: ${error.statusCode}`);
      throw error;
    } else if ((_a = error.message) == null ? void 0 : _a.includes("connection")) {
      console.error("[palette/count] Database connection error detected");
      throw createError({
        statusCode: 503,
        statusMessage: "Service temporarily unavailable. Please try again later."
      });
    } else {
      console.error("[palette/count] General server error");
      throw createError({
        statusCode: 500,
        statusMessage: "Failed to get palette count. Please try again later."
      });
    }
  }
}, { maxAge: 60 * 5 });

const index_get$5 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_get$4
});

const index_get$2 = defineEventHandler(async (event) => {
  var _a, _b, _c;
  const query = await modules.palette.validation.getListInputQuery(event);
  const page = parseInt(query.page);
  const size = parseInt((_a = query.size) != null ? _a : "20");
  const tags = (_c = (_b = query.tags) == null ? void 0 : _b.split(",")) != null ? _c : void 0;
  let userId;
  try {
    const auth = await modules.auth.service.verify(event);
    userId = auth.userId;
  } catch {
  }
  const response = await modules.palette.service.list(page, size, {
    tags,
    userId,
    sortBy: query.sortBy
  });
  return response;
});

const index_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_get$2
});

const index_put = defineEventHandler(async (event) => {
  var _a;
  console.log(`[palette/index.put] Request received: ${(/* @__PURE__ */ new Date()).toISOString()}, URL: ${event.node.req.url}`);
  try {
    if (initStatus !== InitStatus.COMPLETED) {
      console.log(`[palette/index.put] Server initialization not completed (current status: ${initStatus}), waiting...`);
      try {
        await getInitPromise();
        console.log(`[palette/index.put] Server initialization completed, proceeding with request`);
      } catch (initError) {
        console.error(`[palette/index.put] Server initialization failed: ${initError.message}`);
        throw createError({
          statusCode: 503,
          statusMessage: "Server still initializing. Please try again later."
        });
      }
    }
    if (!modules) {
      console.error("[palette/index.put] Fatal error: modules object is undefined even after initialization");
      throw createError({
        statusCode: 500,
        statusMessage: "Server initialization error: Modules not initialized"
      });
    }
    if (!modules.palette) {
      console.error("[palette/index.put] Fatal error: modules.palette is undefined");
      throw createError({
        statusCode: 500,
        statusMessage: "Server initialization error: Palette service not ready"
      });
    }
    if (!modules.palette.validation) {
      console.error("[palette/index.put] Fatal error: modules.palette.validation is undefined");
      throw createError({
        statusCode: 500,
        statusMessage: "Server initialization error: Palette validation service not ready"
      });
    }
    if (typeof modules.palette.validation.getCreateInputQuery !== "function") {
      console.error("[palette/index.put] Fatal error: modules.palette.validation.getCreateInputQuery is not a function");
      throw createError({
        statusCode: 500,
        statusMessage: "Server initialization error: Palette validation method not available"
      });
    }
    console.log("[palette/index.put] Validating request input");
    const body = await modules.palette.validation.getCreateInputQuery(event);
    if (!body.prompt) {
      console.error("[palette/index.put] Error: Missing prompt parameter");
      throw createError({
        statusCode: 400,
        statusMessage: "Missing prompt parameter"
      });
    }
    console.log(`[palette/index.put] Processing prompt: "${body.prompt}"`);
    if (!modules.palette.service) {
      console.error("[palette/index.put] Fatal error: modules.palette.service is undefined");
      throw createError({
        statusCode: 500,
        statusMessage: "Server initialization error: Palette service not initialized"
      });
    }
    if (typeof modules.palette.service.create !== "function") {
      console.error("[palette/index.put] Fatal error: modules.palette.service.create is not a function");
      throw createError({
        statusCode: 500,
        statusMessage: "Server initialization error: Palette create method not available"
      });
    }
    const startTime = Date.now();
    console.log(`[palette/index.put] Calling palette.service.create with prompt: "${body.prompt}"`);
    const response = await modules.palette.service.create(body.prompt);
    console.log(`[palette/index.put] Palette created successfully in ${Date.now() - startTime}ms, ID: ${response.id}`);
    return response;
  } catch (error) {
    console.error("[palette/index.put] Error generating palette:", error);
    console.error("[palette/index.put] Error stack:", error.stack);
    if (error.statusCode) {
      console.error(`[palette/index.put] Rethrowing HTTP error with status ${error.statusCode}: ${error.statusMessage}`);
      throw error;
    } else if ((_a = error.message) == null ? void 0 : _a.includes("connection")) {
      console.error("[palette/index.put] Database connection error:", error.message);
      throw createError({
        statusCode: 503,
        statusMessage: "Service temporarily unavailable. Please try again later."
      });
    } else {
      console.error("[palette/index.put] Unhandled server error:", error.message);
      throw createError({
        statusCode: 500,
        statusMessage: "Failed to generate palette. Please try again later."
      });
    }
  }
});

const index_put$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_put
});

const index_get = defineEventHandler(async (event) => {
  var _a;
  const { userId } = await modules.auth.service.verify(event);
  const query = await modules.palette.validation.getListInputQuery(event);
  const page = parseInt(query.page);
  const size = parseInt((_a = query.size) != null ? _a : "20");
  const response = await modules.palette.service.listLiked(userId, page, size);
  return response;
});

const index_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_get
});

const get_get = defineEventHandler(async (event) => {
  const { userId } = await modules.auth.service.verify(event);
  const response = await modules.user.service.getById(userId);
  if (response === null) {
    throw createError({ statusCode: 404 });
  }
  return response;
});

const get_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: get_get
});

const __sitemapUrls_get = defineEventHandler(async (event) => {
  const urls = await $fetch("/api/sitemap-urls");
  const processedUrls = urls.map((url) => {
    if (typeof url.loc === "string" && url.loc.includes("localhost")) {
      url.loc = url.loc.replace(/http:\/\/localhost:\d+/g, "https://colormagic.club");
    }
    return url;
  });
  return processedUrls;
});

const __sitemapUrls_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: __sitemapUrls_get
});

const sitemap_xml = defineEventHandler(async (event) => {
  const siteUrl = "https://colormagic.club";
  const sitemap = new SitemapStream({
    hostname: siteUrl
  });
  const routes = [
    { url: "/", changefreq: "daily", priority: 1 },
    { url: "/palette-generator", changefreq: "weekly", priority: 0.8 },
    { url: "/random-color", changefreq: "weekly", priority: 0.8 },
    { url: "/image-color-picker", changefreq: "weekly", priority: 0.8 },
    { url: "/contrast-checker", changefreq: "weekly", priority: 0.8 },
    { url: "/explore", changefreq: "daily", priority: 0.9 },
    { url: "/privacy", changefreq: "monthly", priority: 0.3 },
    { url: "/terms", changefreq: "monthly", priority: 0.3 }
  ];
  const i18nRoutes = [];
  const locales = ["ja", "it"];
  for (const locale of locales) {
    for (const route of routes) {
      i18nRoutes.push({
        url: `/${locale}${route.url}`,
        changefreq: route.changefreq,
        priority: route.priority
      });
    }
  }
  const allRoutes = [...routes, ...i18nRoutes];
  for (const route of allRoutes) {
    sitemap.write(route);
  }
  sitemap.end();
  return streamToPromise(sitemap).then((data) => {
    setResponseHeader(event, "Content-Type", "application/xml");
    return data.toString();
  });
});

const sitemap_xml$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: sitemap_xml
});

const Vue3 = version[0] === "3";

function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref) {
  if (ref instanceof Promise || ref instanceof Date || ref instanceof RegExp)
    return ref;
  const root = resolveUnref(ref);
  if (!ref || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r));
  if (typeof root === "object") {
    const resolved = {};
    for (const k in root) {
      if (!Object.prototype.hasOwnProperty.call(root, k)) {
        continue;
      }
      if (k === "titleTemplate" || k[0] === "o" && k[1] === "n") {
        resolved[k] = unref(root[k]);
        continue;
      }
      resolved[k] = resolveUnrefHeadInput(root[k]);
    }
    return resolved;
  }
  return root;
}

const VueReactivityPlugin = defineHeadPlugin({
  hooks: {
    "entries:resolve": (ctx) => {
      for (const entry of ctx.entries)
        entry.resolvedInput = resolveUnrefHeadInput(entry.input);
    }
  }
});

const headSymbol = "usehead";
function vueInstall(head) {
  const plugin = {
    install(app) {
      if (Vue3) {
        app.config.globalProperties.$unhead = head;
        app.config.globalProperties.$head = head;
        app.provide(headSymbol, head);
      }
    }
  };
  return plugin.install;
}
function createServerHead(options = {}) {
  const head = createServerHead$1(options);
  head.use(VueReactivityPlugin);
  head.install = vueInstall(head);
  return head;
}

const unheadPlugins = true ? [CapoPlugin({ track: true })] : [];

const renderSSRHeadOptions = {"omitLineBreaks":false};

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const getClientManifest = () => import('file:///Users/geektao/000-web-ai/colormagic/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getServerEntry = () => import('file:///Users/geektao/000-web-ai/colormagic/.nuxt/dist/server/server.mjs').then((r) => r.default || r);
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString: renderToString$1,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "").then((r) => APP_ROOT_OPEN_TAG + r + APP_ROOT_CLOSE_TAG);
  const options = {
    manifest,
    renderToString: () => spaTemplate,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig(ssrContext.event);
    ssrContext.modules = ssrContext.modules || /* @__PURE__ */ new Set();
    ssrContext.payload.serverRendered = false;
    ssrContext.config = {
      public: config.public,
      app: config.app
    };
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
const ISLAND_SUFFIX_RE = /\.json(\?.*)?$/;
async function getIslandContext(event) {
  let url = event.path || "";
  const componentParts = url.substring("/__nuxt_island".length + 1).replace(ISLAND_SUFFIX_RE, "").split("_");
  const hashId = componentParts.length > 1 ? componentParts.pop() : void 0;
  const componentName = componentParts.join("_");
  const context = event.method === "GET" ? getQuery$1(event) : await readBody(event);
  const ctx = {
    url: "/",
    ...context,
    id: hashId,
    name: componentName,
    props: destr(context.props) || {},
    slots: {},
    components: {}
  };
  return ctx;
}
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
const PAYLOAD_URL_RE = /\/_payload.json(\?.*)?$/ ;
const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag}[^>]*>([\\s\\S]*)<\\/${appRootTag}>$`);
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
  if (ssrError && ssrError.statusCode) {
    ssrError.statusCode = Number.parseInt(ssrError.statusCode);
  }
  if (ssrError && !("__unenv__" in event.node.req)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const isRenderingIsland = event.path.startsWith("/__nuxt_island");
  const islandContext = isRenderingIsland ? await getIslandContext(event) : void 0;
  let url = ssrError?.url || islandContext?.url || event.path;
  const isRenderingPayload = PAYLOAD_URL_RE.test(url) && !isRenderingIsland;
  if (isRenderingPayload) {
    url = url.substring(0, url.lastIndexOf("/")) || "/";
    event._path = url;
    event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  const head = createServerHead({
    plugins: unheadPlugins
  });
  const headEntryOptions = { mode: "server" };
  if (!isRenderingIsland) {
    head.push(appHead, headEntryOptions);
  }
  const ssrContext = {
    url,
    event,
    runtimeConfig: useRuntimeConfig(event),
    noSSR: event.context.nuxt?.noSSR || routeOptions.ssr === false && !isRenderingIsland || (false),
    head,
    error: !!ssrError,
    nuxt: void 0,
    /* NuxtApp */
    payload: ssrError ? { error: ssrError } : {},
    _payloadReducers: /* @__PURE__ */ Object.create(null),
    modules: /* @__PURE__ */ new Set(),
    islandContext
  };
  const renderer = ssrContext.noSSR ? await getSPARenderer() : await getSSRRenderer();
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    if (ssrContext._renderResponse && error.message === "skipping render") {
      return {};
    }
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult: _rendered });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response2 = renderPayloadResponse(ssrContext);
    return response2;
  }
  const inlinedStyles = isRenderingIsland ? await renderInlineStyles(ssrContext.modules ?? []) : [];
  const NO_SCRIPTS = routeOptions.experimentalNoScripts;
  const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
  if (inlinedStyles.length) {
    head.push({ style: inlinedStyles });
  }
  {
    const link = [];
    for (const style in styles) {
      const resource = styles[style];
      if ("inline" in getQuery(resource.file)) {
        continue;
      }
      if (!isRenderingIsland || resource.file.includes("scoped") && !resource.file.includes("pages/")) {
        link.push({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file) });
      }
    }
    if (link.length) {
      head.push({ link }, headEntryOptions);
    }
  }
  if (!NO_SCRIPTS && !isRenderingIsland) {
    head.push({
      link: getPreloadLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      link: getPrefetchLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      script: renderPayloadJsonScript({ ssrContext, data: ssrContext.payload }) 
    }, {
      ...headEntryOptions,
      // this should come before another end of body scripts
      tagPosition: "bodyClose",
      tagPriority: "high"
    });
  }
  if (!routeOptions.experimentalNoScripts && !isRenderingIsland) {
    head.push({
      script: Object.values(scripts).map((resource) => ({
        type: resource.module ? "module" : null,
        src: renderer.rendererContext.buildAssetsURL(resource.file),
        defer: resource.module ? null : true,
        // if we are rendering script tag payloads that import an async payload
        // we need to ensure this resolves before executing the Nuxt entry
        tagPosition: "head",
        crossorigin: ""
      }))
    }, headEntryOptions);
  }
  const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(head, renderSSRHeadOptions);
  const htmlContext = {
    island: isRenderingIsland,
    htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
    head: normalizeChunks([headTags]),
    bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
    bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
    body: [
      replaceIslandTeleports(ssrContext, _rendered.html) ,
      APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG
    ],
    bodyAppend: [bodyTags]
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  if (isRenderingIsland && islandContext) {
    const islandHead = {};
    for (const entry of head.headEntries()) {
      for (const [key, value] of Object.entries(resolveUnrefHeadInput(entry.input))) {
        const currentValue = islandHead[key];
        if (Array.isArray(currentValue)) {
          currentValue.push(...value);
        }
        islandHead[key] = value;
      }
    }
    islandHead.link = islandHead.link || [];
    islandHead.style = islandHead.style || [];
    const islandResponse = {
      id: islandContext.id,
      head: islandHead,
      html: getServerComponentHTML(htmlContext.body),
      components: getClientIslandResponse(ssrContext),
      slots: getSlotIslandResponse(ssrContext)
    };
    await nitroApp.hooks.callHook("render:island", islandResponse, { event, islandContext });
    const response2 = {
      body: JSON.stringify(islandResponse, null, 2),
      statusCode: getResponseStatus(event),
      statusMessage: getResponseStatusText(event),
      headers: {
        "content-type": "application/json;charset=utf-8",
        "x-powered-by": "Nuxt"
      }
    };
    return response2;
  }
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: getResponseStatus(event),
    statusMessage: getResponseStatusText(event),
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
  return response;
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  if (chunks.length === 0) {
    return "";
  }
  return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html><html${joinAttrs(html.htmlAttrs)}><head>${joinTags(html.head)}</head><body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body></html>`;
}
async function renderInlineStyles(usedModules) {
  const styleMap = await getSSRStyles();
  const inlinedStyles = /* @__PURE__ */ new Set();
  for (const mod of usedModules) {
    if (mod in styleMap) {
      for (const style of await styleMap[mod]()) {
        inlinedStyles.add(style);
      }
    }
  }
  return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}
function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(splitPayload(ssrContext).payload, ssrContext._payloadReducers) ,
    statusCode: getResponseStatus(ssrContext.event),
    statusMessage: getResponseStatusText(ssrContext.event),
    headers: {
      "content-type": "application/json;charset=utf-8" ,
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadJsonScript(opts) {
  const contents = opts.data ? stringify(opts.data, opts.ssrContext._payloadReducers) : "";
  const payload = {
    "type": "application/json",
    "innerHTML": contents,
    "data-nuxt-data": appId,
    "data-ssr": !(opts.ssrContext.noSSR)
  };
  {
    payload.id = "__NUXT_DATA__";
  }
  if (opts.src) {
    payload["data-src"] = opts.src;
  }
  const config = uneval(opts.ssrContext.config);
  return [
    payload,
    {
      innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}`
    }
  ];
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}
function getServerComponentHTML(body) {
  const match = body[0].match(ROOT_NODE_REGEX);
  return match ? match[1] : body[0];
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=[^;]*;(.*)$/;
function getSlotIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) {
    return void 0;
  }
  const response = {};
  for (const slot in ssrContext.islandContext.slots) {
    response[slot] = {
      ...ssrContext.islandContext.slots[slot],
      fallback: ssrContext.teleports?.[`island-fallback=${slot}`]
    };
  }
  return response;
}
function getClientIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) {
    return void 0;
  }
  const response = {};
  for (const clientUid in ssrContext.islandContext.components) {
    const html = ssrContext.teleports?.[clientUid].replaceAll("<!--teleport start anchor-->", "") || "";
    response[clientUid] = {
      ...ssrContext.islandContext.components[clientUid],
      html,
      slots: getComponentSlotTeleport(ssrContext.teleports ?? {})
    };
  }
  return response;
}
function getComponentSlotTeleport(teleports) {
  const entries = Object.entries(teleports);
  const slots = {};
  for (const [key, value] of entries) {
    const match = key.match(SSR_CLIENT_SLOT_MARKER);
    if (match) {
      const [, slot] = match;
      if (!slot) {
        continue;
      }
      slots[slot] = value;
    }
  }
  return slots;
}
function replaceIslandTeleports(ssrContext, html) {
  const { teleports, islandContext } = ssrContext;
  if (islandContext || !teleports) {
    return html;
  }
  for (const key in teleports) {
    const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
    if (matchClientComp) {
      const [, uid, clientId] = matchClientComp;
      if (!uid || !clientId) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-component="${clientId}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
      continue;
    }
    const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
    if (matchSlot) {
      const [, uid, slot] = matchSlot;
      if (!uid || !slot) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-slot="${slot}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
    }
  }
  return html;
}

const renderer$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: renderer
});

async function buildSitemapIndex(resolvers, runtimeConfig, nitro) {
  const {
    sitemaps,
    // enhancing
    autoLastmod,
    // chunking
    defaultSitemapsChunkSize,
    autoI18n,
    isI18nMapped,
    sortEntries,
    sitemapsPathPrefix
  } = runtimeConfig;
  if (!sitemaps)
    throw new Error("Attempting to build a sitemap index without required `sitemaps` configuration.");
  function maybeSort(urls) {
    return sortEntries ? sortSitemapUrls(urls) : urls;
  }
  const isChunking = typeof sitemaps.chunks !== "undefined";
  const chunks = {};
  if (isChunking) {
    const sitemap = sitemaps.chunks;
    const sources = await resolveSitemapSources(await globalSitemapSources());
    const resolvedCtx = {
      urls: sources.flatMap((s) => s.urls),
      sitemapName: sitemap.sitemapName,
      event: resolvers.event
    };
    await nitro?.hooks.callHook("sitemap:input", resolvedCtx);
    const normalisedUrls = resolveSitemapEntries(sitemap, resolvedCtx.urls, { autoI18n, isI18nMapped }, resolvers);
    const enhancedUrls = normalisedUrls.map((e) => defu$1(e, sitemap.defaults));
    const sortedUrls = maybeSort(enhancedUrls);
    sortedUrls.forEach((url, i) => {
      const chunkIndex = Math.floor(i / defaultSitemapsChunkSize);
      chunks[chunkIndex] = chunks[chunkIndex] || { urls: [] };
      chunks[chunkIndex].urls.push(url);
    });
  } else {
    for (const sitemap in sitemaps) {
      if (sitemap !== "index") {
        chunks[sitemap] = chunks[sitemap] || { urls: [] };
      }
    }
  }
  const entries = [];
  for (const name in chunks) {
    const sitemap = chunks[name];
    const entry = {
      _sitemapName: name,
      sitemap: resolvers.canonicalUrlResolver(joinURL(sitemapsPathPrefix || "", `/${name}.xml`))
    };
    let lastmod = sitemap.urls.filter((a) => !!a?.lastmod).map((a) => typeof a.lastmod === "string" ? new Date(a.lastmod) : a.lastmod).sort((a, b) => (b?.getTime() || 0) - (a?.getTime() || 0))?.[0];
    if (!lastmod && autoLastmod)
      lastmod = /* @__PURE__ */ new Date();
    if (lastmod)
      entry.lastmod = normaliseDate(lastmod);
    entries.push(entry);
  }
  if (sitemaps.index) {
    entries.push(...sitemaps.index.sitemaps.map((entry) => {
      return typeof entry === "string" ? { sitemap: entry } : entry;
    }));
  }
  return entries;
}
function urlsToIndexXml(sitemaps, resolvers, { version, xsl, credits, minify }) {
  const sitemapXml = sitemaps.map((e) => [
    "    <sitemap>",
    `        <loc>${escapeValueForXml(e.sitemap)}</loc>`,
    // lastmod is optional
    e.lastmod ? `        <lastmod>${escapeValueForXml(e.lastmod)}</lastmod>` : false,
    "    </sitemap>"
  ].filter(Boolean).join("\n")).join("\n");
  return wrapSitemapXml([
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    sitemapXml,
    "</sitemapindex>"
  ], resolvers, { version, xsl, credits, minify });
}

const sitemap_index_xml = defineEventHandler(async (e) => {
  const runtimeConfig = useSitemapRuntimeConfig();
  const nitro = useNitroApp();
  const resolvers = useNitroUrlResolvers(e);
  const sitemaps = await buildSitemapIndex(resolvers, runtimeConfig, nitro);
  const indexResolvedCtx = { sitemaps, event: e };
  await nitro.hooks.callHook("sitemap:index-resolved", indexResolvedCtx);
  const output = urlsToIndexXml(indexResolvedCtx.sitemaps, resolvers, runtimeConfig);
  const ctx = { sitemap: output, sitemapName: "sitemap", event: e };
  await nitro.hooks.callHook("sitemap:output", ctx);
  setHeader(e, "Content-Type", "text/xml; charset=UTF-8");
  if (runtimeConfig.cacheMaxAgeSeconds)
    setHeader(e, "Cache-Control", `public, max-age=${runtimeConfig.cacheMaxAgeSeconds}, must-revalidate`);
  else
    setHeader(e, "Cache-Control", `no-cache, no-store`);
  return ctx.sitemap;
});

const sitemap_index_xml$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: sitemap_index_xml
});

const _sitemap__xml = defineEventHandler(async (e) => {
  const runtimeConfig = useSitemapRuntimeConfig(e);
  const { sitemaps } = runtimeConfig;
  const sitemapName = withoutLeadingSlash(withoutTrailingSlash((getRouterParam(e, "sitemap") || e.path)?.replace(".xml", "").replace(runtimeConfig.sitemapsPathPrefix || "", "")));
  const isChunking = typeof sitemaps.chunks !== "undefined" && !Number.isNaN(Number(sitemapName));
  if (!(sitemapName in sitemaps) && !isChunking) {
    return createError({
      statusCode: 404,
      message: `Sitemap "${sitemapName}" not found.`
    });
  }
  return createSitemap(e, isChunking ? {
    ...sitemaps.chunks,
    sitemapName
  } : sitemaps[sitemapName], runtimeConfig);
});

const _sitemap__xml$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _sitemap__xml
});

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: styles
});

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template
});
//# sourceMappingURL=index.mjs.map
