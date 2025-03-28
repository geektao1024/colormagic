<template>
  <div class="min-h-screen flex flex-col bg-gray-950 text-gray-100">
    <NuxtLoadingIndicator color="#5576ff" />

    <!-- 顶部导航 - 使用简化模式 -->
    <CommonNav :simplified="true" />

    <!-- 主内容区域 - 左侧导航 + 右侧内容 -->
    <div class="flex flex-1 overflow-hidden">
      <!-- 左侧导航栏 -->
      <div class="w-60 bg-gray-950 border-r border-gray-800/50 hidden md:block overflow-y-auto shadow-lg">
        <UVerticalNavigation 
          :links="sidebarLinks" 
          class="p-3"
          :ui="{
            base: 'space-y-2',
            wrapper: 'space-y-4',
            container: 'space-y-4',
            grouped: {
              container: 'space-y-2'
            },
            divider: 'my-3 border-gray-700/50',
            item: {
              base: 'group flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200',
              active: 'bg-gray-800/70 text-primary-400 shadow-sm',
              inactive: 'text-gray-300 hover:bg-gray-800/50 hover:text-primary-400 transition-all',
              label: 'truncate',
              icon: {
                base: 'flex-shrink-0 w-5 h-5',
                active: 'text-primary-400',
                inactive: 'text-gray-400 group-hover:text-primary-400/70'
              }
            }
          }"
        />
      </div>

      <!-- 右侧内容区域 -->
      <div class="flex-1 overflow-y-auto bg-gray-900/90">
        <main class="p-6">
          <slot />
        </main>
      </div>
    </div>

    <!-- 移动设备的底部导航 -->
    <div class="md:hidden fixed bottom-0 left-0 right-0 bg-gray-950/90 backdrop-blur-sm border-t border-gray-800/50 z-10 shadow-lg">
      <div class="flex justify-around items-center h-16">
        <UButton
          v-for="(item, index) in mainNavLinks"
          :key="index"
          :to="item.to"
          :icon="item.icon"
          :aria-label="item.label"
          variant="ghost"
          class="flex-1 flex flex-col items-center justify-center text-gray-300 hover:text-primary-400 transition-all duration-200"
          :ui="{
            padding: 'py-1 px-2',
            icon: {
              size: 'md'
            },
            label: 'text-xs mt-1'
          }"
        >
          <span class="text-xs mt-1">{{ item.label }}</span>
        </UButton>
        <UButton
          icon="i-heroicons-bars-3"
          variant="ghost"
          aria-label="更多工具"
          class="flex-1 flex flex-col items-center justify-center text-gray-300 hover:text-primary-400 transition-all duration-200"
          :ui="{
            padding: 'py-1 px-2',
            icon: {
              size: 'md'
            }
          }"
          @click="isMobileNavOpen = true"
        >
          <span class="text-xs mt-1">{{ $t('nav.tools') }}</span>
        </UButton>
      </div>
    </div>

    <!-- 移动设备的侧边导航抽屉 -->
    <UModal
      v-model="isMobileNavOpen"
      fullscreen
      :ui="{ 
        overlay: { 
          background: 'bg-gray-950/80 backdrop-blur-sm'
        },
        container: {
          background: 'bg-transparent'
        }
      }"
    >
      <div class="p-4 overflow-auto bg-gray-950 min-h-screen">
        <div class="flex items-center justify-between mb-6">
          <!-- logo -->
          <NuxtLinkLocale
            to="/"
            aria-label="Home"
            class="transition-opacity hover:opacity-80"
          >
            <img
              width="128px"
              height="20.4px"
              src="/img/HorizontalLogo.svg"
              alt="ColorMagic - AI Color Palette generator"
              class="filter brightness-200"
            >
          </NuxtLinkLocale>

          <!-- close button -->
          <UButton
            icon="i-heroicons-x-mark"
            variant="ghost"
            class="text-gray-300 hover:text-white transition-colors"
            aria-label="关闭菜单"
            @click="isMobileNavOpen = false"
          />
        </div>

        <!-- 移动导航链接 -->
        <UVerticalNavigation 
          :links="[mainNavLinks, toolLinksWithHeader]" 
          :ui="{
            base: 'space-y-2',
            wrapper: 'space-y-4',
            container: 'space-y-4',
            grouped: {
              container: 'space-y-2'
            },
            divider: 'my-3 border-gray-700/50',
            item: {
              base: 'group/item flex items-center gap-2 rounded-md px-3.5 py-2.5 text-sm transition-all duration-200',
              active: 'bg-gray-800/70 text-primary-400 font-medium',
              inactive: 'text-gray-300 hover:bg-gray-800/50 hover:text-primary-400',
              label: 'truncate font-medium',
              icon: {
                base: 'flex-shrink-0 w-5 h-5'
              }
            }
          }"
        />
      </div>
    </UModal>

    <!-- global notifications -->
    <UNotifications>
      <template #description="{ description }">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <span v-html="description" />
      </template>
    </UNotifications>
  </div>
</template>

<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core';

const { t } = useI18n();
const localePath = useLocalePath();
const route = useRoute();
const { locale, defaultLocale } = useI18n();
const { siteUrl } = useRuntimeConfig().public;
const isMobileNavOpen = ref(false);

// 构建规范的 canonical URL
const canonicalUrl = computed(() => {
  let path = route.path;
  
  // 如果是默认语言,移除语言前缀
  if (locale.value === defaultLocale && path.startsWith(`/${locale.value}`)) {
    path = path.substring(locale.value.length + 1);
  }
  
  // 确保路径以 / 开头
  if (!path.startsWith('/')) {
    path = '/' + path;
  }
  
  // 移除尾部斜杠(除了首页)
  if (path !== '/' && path.endsWith('/')) {
    path = path.slice(0, -1);
  }

  return `${siteUrl}${path}`;
});

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
});

useHead({
  htmlAttrs: {
    lang: head.value.htmlAttrs.lang
  },
  link: [
    // 添加 canonical 链接
    {
      rel: 'canonical',
      href: canonicalUrl
    },
    ...(head.value.link ?? [])
  ],
  meta: [...(head.value.meta ?? [])]
});

useServerSeoMeta({
  ogUrl: canonicalUrl,
  ogType: 'website'
});

// 主要导航链接 - 首页和探索
const mainNavLinks = computed(() => [
  {
    to: localePath('/workspace'),
    label: t('nav.home'),
    icon: 'i-heroicons-home'
  },
  {
    to: localePath('/palettes'),
    label: t('nav.explore'),
    icon: 'i-heroicons-globe-alt'
  }
]);

// 工具链接
const toolLinks = computed(() => [
  {
    to: localePath('/palette-generator'),
    label: t('nav.colorPaletteGenrator'),
    icon: 'i-heroicons-paint-brush'
  },
  {
    to: localePath('/random-color'),
    label: t('nav.randomColor'),
    icon: 'i-heroicons-arrow-path'
  },
  {
    to: localePath('/image-color-picker'),
    label: t('nav.imageColorPicker'),
    icon: 'i-heroicons-photo'
  },
  {
    to: localePath('/contrast-checker'),
    label: t('nav.contrastChecker'),
    icon: 'i-heroicons-sun'
  }
]);

// 添加工具分组标题的链接
const toolLinksWithHeader = computed(() => [
  {
    label: t('nav.tools'),
    disabled: true,
    class: 'text-xs text-primary-400/80 font-semibold px-3 pt-4'
  },
  ...toolLinks.value
]);

// 侧边栏链接 - 包含分组
const sidebarLinks = computed(() => [
  mainNavLinks.value,
  [
    {
      label: t('nav.tools'),
      disabled: true,
      class: 'text-xs text-primary-400/80 mt-4 mb-1 font-semibold px-3'
    },
    ...toolLinks.value
  ]
]);

onMounted(() => {
  /** @description 设置为深色模式 */
  const colorMode = useLocalStorage('nuxt-color-mode', 'dark');
  colorMode.value = 'dark';
  document.documentElement.classList.add('dark');
  document.documentElement.classList.remove('light');
});

// 关闭抽屉当路由变化时
watch(useRoute(), () => {
  isMobileNavOpen.value = false;
});
</script> 