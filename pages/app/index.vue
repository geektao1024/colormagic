<template>
  <div>
    <!-- 标题和介绍 -->
    <div class="mb-8">
      <h1 class="text-2xl font-bold mb-4">{{ $t('app.workspace.title') }}</h1>
      <p class="text-lg">{{ $t('app.workspace.description') }}</p>
    </div>

    <!-- 常用工具卡片 -->
    <div class="mb-10">
      <h2 class="text-xl font-semibold mb-4">{{ $t('app.workspace.popularTools') }}</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <UCard
          v-for="(tool, index) in toolLinks"
          :key="index"
          :ui="{ body: { padding: 'p-4'} }"
          class="hover:shadow-lg transition-shadow"
        >
          <div class="flex items-start">
            <div class="bg-primary/10 p-3 rounded-lg mr-3">
              <UIcon 
                :name="tool.icon" 
                class="text-primary text-xl" 
              />
            </div>
            <div>
              <h3 class="font-semibold">{{ tool.label }}</h3>
              <p class="text-sm text-gray-500">{{ tool.description }}</p>
              <UButton
                :to="tool.to"
                size="sm"
                variant="link"
                class="pl-0 mt-2"
              >
                {{ $t('app.workspace.launch') }}
              </UButton>
            </div>
          </div>
        </UCard>
      </div>
    </div>

    <!-- 最近创建的调色板 -->
    <div v-if="recentPalettes?.length">
      <h2 class="text-xl font-semibold mb-4">{{ $t('app.workspace.recentPalettes') }}</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          v-for="palette in recentPalettes"
          :key="palette.id"
        >
          <PaletteColorPaletteButton
            :palette="palette"
            size="sm"
            show-like-button
          />
        </div>
      </div>
      
      <div class="mt-4 text-center">
        <UButton
          :to="localePath('/palette/explore')"
          variant="soft"
        >
          {{ $t('app.workspace.viewMore') }}
        </UButton>
      </div>
    </div>

    <!-- 空状态 -->
    <div
      v-else
      class="mt-8 border border-dashed border-gray-200 rounded-lg p-8 text-center"
    >
      <UIcon
        name="i-heroicons-paint-brush"
        class="text-gray-400 h-10 w-10 mb-3 mx-auto"
      />
      <h3 class="text-lg font-medium mb-2">
        {{ $t('app.workspace.noPalettes.title') }}
      </h3>
      <p class="text-gray-500 mb-4">
        {{ $t('app.workspace.noPalettes.description') }}
      </p>
      <UButton
        :to="localePath('/app/palette')"
        color="primary"
      >
        {{ $t('app.workspace.createPalette') }}
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'app'
});

const { t } = useI18n();
const localePath = useLocalePath();

// 获取最近创建的调色板
const { data: recentPalettes } = await useFetch('/api/palette/recent');

// 工具链接 - 复用来自布局组件的工具链接配置
const toolLinks = computed(() => [
  {
    to: localePath('/app/palette'),
    label: t('nav.colorPaletteGenrator'),
    description: t('home.title'),
    icon: 'i-heroicons-paint-brush'
  },
  {
    to: localePath('/app/random-color'),
    label: t('nav.randomColor'),
    description: t('randomColor.seoDescription'),
    icon: 'i-heroicons-arrow-path'
  },
  {
    to: localePath('/app/image-color-picker'),
    label: t('nav.imageColorPicker'),
    description: t('imageColorPicker.seoDescription'),
    icon: 'i-heroicons-photo'
  },
  {
    to: localePath('/app/contrast-checker'),
    label: t('nav.contrastChecker'),
    description: t('contrastChecker.seoDescription'),
    icon: 'i-heroicons-sun'
  }
]);

// SEO元数据
const title = computed(() => t('app.workspace.seoTitle'));
const description = computed(() => t('app.workspace.seoDescription'));

useSeoMeta({
  title,
  description
});
</script> 