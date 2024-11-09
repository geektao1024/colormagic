<template>
  <!-- add padding at bottom for floating button -->
  <div class="pb-16">
    <NuxtLoadingIndicator color="#5576ff" />

    <!-- nav -->
    <CommonNav />

    <!-- content -->
    <main>
      <div class="max-w-3xl mx-auto px-4 pt-8">
        <slot />
      </div>
    </main>

    <!-- footer -->
    <CommonFooter />

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
  /** @description hack to always set to light mode until we add dark mode properly */
  const colorMode = useLocalStorage('nuxt-color-mode', 'light');
  colorMode.value = 'light';
  document.documentElement.classList.remove('dark');
});
</script>
