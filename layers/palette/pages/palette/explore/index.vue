<template>
  <div>
    <!-- 页面头部，添加渐变背景和卡片效果 -->
    <div class="mb-10 relative">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#FF5F6D]/20 to-[#FFC371]/10 rounded-full blur-[100px] -z-10"></div>
      
      <!-- 标题区域，添加动态渐变效果 -->
      <div class="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-lg">
        <div class="inline-block px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-sm text-white/70 mb-4">
          {{ $t('explore.byTag') }}
        </div>
        
        <h1 class="text-4xl font-bold mb-4">
          <span class="bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent">
            {{ $t('explore.title') }}
          </span>
        </h1>

        <!-- 描述 -->
        <p class="text-xl font-medium mb-4 max-w-xl text-white/80">
          {{ $t('explore.seoDescription') }}
        </p>

        <!-- 调色板数量 -->
        <p class="italic text-sm text-white/60">
          {{ count.toLocaleString() }} public color palettes generated
        </p>
      </div>
    </div>

    <!-- 加载骨架屏 -->
    <div v-if="!palettes">
      <ul class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <li
          v-for="index in 6"
          :key="index"
        >
          <USkeleton class="w-full h-32 rounded-xl" />
        </li>
      </ul>
    </div>

    <!-- 调色板展示区 -->
    <div v-if="palettes" class="relative">
      <div class="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#FFC371]/10 rounded-full blur-[120px] -z-10"></div>
      
      <!-- 筛选和排序区域 -->
      <div class="mb-6 p-4 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-xl border border-white/10 flex justify-between gap-4 items-center flex-wrap relative z-30">
        <PaletteFilters
          :tags="[]"
          :color-options="paletteFilterOptions.color.value"
          :style-options="paletteFilterOptions.style.value"
          :tone-options="paletteFilterOptions.tone.value"
          :season-options="paletteFilterOptions.season.value"
        />

        <PaletteSortSelectMenu
          :initial-sort-by="sortBy"
          @change="value => sortBy = value"
        />
      </div>

      <!-- 调色板网格 -->
      <ul class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <li
          v-for="(item, index) in palettes"
          :key="index"
          class="transform hover:scale-[1.02] transition-all duration-300"
        >
          <ColorPaletteButton
            :palette-id="item.id"
            :is-liked="item.isLiked ?? false"
            :likes-count="item.likesCount"
            :colors="item.colors"
            :name="item.text"
            :can-like="user?.id !== undefined"
            :to="localePath(`/palette/${item.id}`)"
            no-follow
          />
        </li>
      </ul>

      <!-- 加载更多按钮 -->
      <div class="mt-10 text-center">
        <UButton
          v-if="palettes.length"
          :label="hasNextPage ? 'Load more...' : 'No more results'"
          :disabled="!hasNextPage"
          :loading="isFetching"
          variant="soft"
          color="gray"
          class="group bg-gradient-to-r hover:from-[#FF5F6D] hover:to-[#FFC371] px-6 py-3 rounded-full transition-all duration-300 transform hover:shadow-lg hover:shadow-orange-500/20 hover:translate-y-[-2px]"
          @click="fetchNextPage"
        />
      </div>
    </div>

    <!-- 标签分类区域 -->
    <div class="mt-16 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-lg relative overflow-hidden">
      <div class="absolute top-0 right-0 w-32 h-32 bg-[#FF5F6D]/10 rounded-full blur-[40px]"></div>
      
      <h3 class="text-xl font-semibold mb-6 bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent">
        {{ $t('explore.byTag') }}
      </h3>
      
      <div class="space-y-6">
        <PaletteTagLinks :links="paletteFilterOptions.color.value" />
        <PaletteTagLinks :links="paletteFilterOptions.style.value" />
        <PaletteTagLinks :links="paletteFilterOptions.tone.value" />
        <PaletteTagLinks :links="paletteFilterOptions.season.value" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PaletteSortBy } from '~/layers/palette/types';

definePageMeta({
  layout: 'app'
});

const { t } = useI18n();
const localePath = useLocalePath();

const sortBy = ref<PaletteSortBy>(PaletteSortBy.POPULAR);
const listFilter = computed(() => ({
  sortBy: sortBy.value
}));

const { data: user } = useUser();
const { data: list, isFetching, hasNextPage, fetchNextPage, suspense } = useListPalettes(50, listFilter);
const paletteFilterOptions = usePaletteFilterOptions([]);

await suspense();

const palettes = computed(() => list.value?.pages.flatMap((items) => items.items) ?? []);
const count = computed(() => list.value?.pages[0].count ?? 0);

useSeoMeta({
  title: t('explore.seoTitle'),
  description: t('explore.seoDescription'),
  ogTitle: t('explore.seoTitle'),
  ogDescription: t('explore.seoDescription'),
  ogImageUrl: `${useRuntimeConfig().public.siteUrl}/img/og.png`
});
</script>
