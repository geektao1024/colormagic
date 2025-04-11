<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-b from-[#111827] to-[#1F2937] text-white">
    <NuxtLoadingIndicator color="#5576ff" />

    <!-- 顶部导航 - 使用简化模式 -->
    <CommonNav :simplified="true" />

    <!-- 主内容区域 - 左侧导航 + 右侧内容 -->
    <div class="flex flex-1 overflow-hidden pt-16">
      <!-- 左侧导航栏 - 修改为固定定位 -->
      <div class="w-64 bg-gradient-to-b from-[#111827]/80 to-[#1F2937]/80 border-r border-white/5 hidden md:block shadow-lg backdrop-blur-sm fixed top-16 left-0 bottom-0 z-20">
        <!-- 自定义垂直导航 -->
        <div class="p-4 space-y-6 h-full overflow-y-auto">
          <!-- 主导航部分 -->
          <div>
            <div v-for="link in mainNavLinks" :key="link.to" class="mb-2">
              <NuxtLinkLocale
                :to="link.to"
                class="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:text-white transition-colors duration-300 hover:bg-white/5"
                :class="{ 'bg-gradient-to-r from-[#FF5F6D]/20 to-[#FFC371]/20 text-white': route.path === link.to }"
              >
                <UIcon :name="link.icon" class="w-5 h-5" />
                <span class="text-sm font-medium">{{ link.label }}</span>
              </NuxtLinkLocale>
            </div>
          </div>
          
          <!-- 工具导航部分 -->
          <div>
            <div class="text-xs text-white/50 font-semibold mb-3 px-4">{{ $t('nav.tools') }}</div>
            <div v-for="link in toolLinks" :key="link.to" class="mb-2">
              <NuxtLinkLocale
                :to="link.to"
                class="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:text-white transition-colors duration-300 hover:bg-white/5"
                :class="{ 'bg-gradient-to-r from-[#FF5F6D]/20 to-[#FFC371]/20 text-white': route.path === link.to }"
              >
                <UIcon :name="link.icon" class="w-5 h-5 text-[#FF5F6D]" />
                <span class="text-sm font-medium">{{ link.label }}</span>
              </NuxtLinkLocale>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧内容区域 - 添加左侧边距以适应固定导航栏 -->
      <div class="flex-1 overflow-y-auto bg-gradient-to-b from-[#111827] to-[#1F2937] md:ml-64">
        <main class="p-5">
          <slot />
        </main>
      </div>
    </div>

    <!-- 移动设备的底部导航 -->
    <div class="md:hidden fixed bottom-0 left-0 right-0 bg-[#111827]/90 border-t border-white/10 z-10 shadow-lg backdrop-blur-md">
      <div class="flex justify-around items-center h-16">
        <UButton
          v-for="(item, index) in mainNavLinks"
          :key="index"
          :to="item.to"
          :icon="item.icon"
          :aria-label="item.label"
          variant="ghost"
          class="flex-1 flex flex-col items-center justify-center text-gray-300 hover:text-white transition-colors"
          :ui="{
            padding: { base: 'py-1 px-2' },
            icon: {
              size: { base: 'md' }
            },
            label: { base: 'text-xs mt-1' }
          }"
        >
          <span class="text-xs mt-1">{{ item.label }}</span>
        </UButton>
        <UButton
          icon="i-heroicons-bars-3"
          variant="ghost"
          aria-label="更多工具"
          class="flex-1 flex flex-col items-center justify-center text-gray-300 hover:text-white transition-colors"
          :ui="{
            padding: { base: 'py-1 px-2' },
            icon: {
              size: { base: 'md' }
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
    >
      <div class="p-0 overflow-auto bg-gradient-to-b from-[#111827] to-[#1F2937] min-h-screen">
        <div class="flex items-center justify-between mb-6 px-4 py-4">
          <!-- logo -->
          <NuxtLinkLocale
            to="/"
            aria-label="Home"
            class="flex-shrink-0 ml-0"
          >
            <div class="relative">
              <span class="text-2xl font-extrabold">
                <span class="text-white">Color</span>
                <span class="bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent">Magic</span>
              </span>
              <div class="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] rounded-full"></div>
            </div>
          </NuxtLinkLocale>

          <!-- close button -->
          <UButton
            icon="i-heroicons-x-mark"
            variant="ghost"
            class="text-white/70 hover:text-white transition-colors"
            aria-label="关闭菜单"
            @click="isMobileNavOpen = false"
          />
        </div>

        <!-- 移动导航链接 -->
        <div class="px-4 space-y-6">
          <!-- 主导航部分 -->
          <div>
            <div v-for="link in mainNavLinks" :key="link.to" class="mb-2">
              <NuxtLinkLocale
                :to="link.to"
                class="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:text-white transition-colors duration-300 hover:bg-white/5"
                :class="{ 'bg-gradient-to-r from-[#FF5F6D]/20 to-[#FFC371]/20 text-white': route.path === link.to }"
                @click="isMobileNavOpen = false"
              >
                <UIcon :name="link.icon" class="w-5 h-5" />
                <span class="text-sm font-medium">{{ link.label }}</span>
              </NuxtLinkLocale>
            </div>
          </div>
          
          <!-- 工具导航部分 -->
          <div>
            <div class="text-xs text-white/50 font-semibold mb-3 px-4">{{ $t('nav.tools') }}</div>
            <div v-for="link in toolLinks" :key="link.to" class="mb-2">
              <NuxtLinkLocale
                :to="link.to"
                class="block"
                @click="isMobileNavOpen = false"
              >
                <div class="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors duration-300">
                  <UIcon :name="link.icon" class="w-5 h-5 text-[#FF5F6D] mt-1" />
                  <div>
                    <div class="text-white font-medium">{{ link.label }}</div>
                    <div class="text-xs text-white/60">{{ link.description }}</div>
                  </div>
                </div>
              </NuxtLinkLocale>
            </div>
          </div>
        </div>
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
    to: localePath('/home'),
    label: t('nav.home'),
    icon: 'i-heroicons-home'
  },
  {
    to: localePath('/palette/explore'),
    label: t('nav.explore'),
    icon: 'i-heroicons-globe-alt'
  },
  {
    to: localePath('/palette/liked'),
    label: t('nav.liked'),
    icon: 'i-heroicons-heart'
  }
]);

// 工具链接
const toolLinks = computed(() => [
  {
    to: localePath('/palette-generator'),
    label: t('nav.colorPaletteGenrator'),
    description: t('home.title'),
    icon: 'i-heroicons-paint-brush'
  },
  {
    to: localePath('/random-color'),
    label: t('nav.randomColor'),
    description: t('randomColor.seoDescription'),
    icon: 'i-heroicons-arrow-path'
  },
  {
    to: localePath('/image-color-picker'),
    label: t('nav.imageColorPicker'),
    description: t('imageColorPicker.seoDescription'),
    icon: 'i-heroicons-photo'
  },
  {
    to: localePath('/color-reshape'),
    label: 'AI COLOR RESHAPE',
    description: 'Batch color correction tool for AI images',
    icon: 'i-heroicons-photo'
  },
  {
    to: localePath('/contrast-checker'),
    label: t('nav.contrastChecker'),
    description: t('contrastChecker.seoDescription'),
    icon: 'i-heroicons-sun'
  }
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

<style>
/* 自定义滚动条 */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 95, 109, 0.5);
}
</style> 