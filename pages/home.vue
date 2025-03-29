<template>
  <div class="pt-0">
    <!-- 工具轮播Banner -->
    <HomeBannerCarousel />
    
    <!-- AI颜色工具展示 -->
    <div class="pb-8">
      <HomeColorToolsGrid />
      
      <!-- 精选调色板展示 -->
      <HomeFeaturedPalettes />
      
      <!-- 最近活动 -->
      <HomeRecentActivity />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

definePageMeta({
  layout: 'app'
});

const { t } = useI18n();

useSeoMeta({
  title: computed(() => t('app.workspace.seoTitle')),
  description: computed(() => t('app.workspace.seoDescription'))
});
</script> 