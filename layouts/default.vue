<template>
  <!-- add padding at bottom for floating button -->
  <div class="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
    <NuxtLoadingIndicator color="#5576ff" />

    <!-- 导航 - 使用非简化模式 (带有完整导航链接) -->
    <CommonNav :simplified="false" />

    <!-- 内容 -->
    <main class="flex-1">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <slot />
      </div>
    </main>

    <!-- 页脚 -->
    <CommonFooter />

    <!-- 全局通知 -->
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

const { siteUrl } = useRuntimeConfig().public;
const route = useRoute();
const { locale, defaultLocale } = useI18n();

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

onMounted(() => {
  /** @description 设置为深色模式 */
  const colorMode = useLocalStorage('nuxt-color-mode', 'dark');
  colorMode.value = 'dark';
  document.documentElement.classList.add('dark');
  document.documentElement.classList.remove('light');
});
</script>
