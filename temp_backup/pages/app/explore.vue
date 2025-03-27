<template>
  <div>
    <!-- 标题和介绍 -->
    <div class="mb-8">
      <h1 class="text-2xl font-bold mb-4">{{ $t('explore.title') }}</h1>
      <p class="text-lg mb-4">{{ $t('explore.seoDescription') }}</p>
      
      <!-- 生成的调色板数量 -->
      <p class="italic text-sm">
        {{ count.toLocaleString() }} {{ $t('explore.colorPalettes') }}
      </p>
    </div>

    <!-- 加载骨架 -->
    <div v-if="!palettes">
      <ul class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <li
          v-for="index in 6"
          :key="index"
        >
          <USkeleton class="w-full h-24" />
        </li>
      </ul>
    </div>

    <!-- 调色板列表 -->
    <div v-if="palettes">
      <!-- 筛选器 -->
      <div class="mb-4 flex justify-between gap-4 items-center flex-wrap">
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
      <ul class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <li
          v-for="(item, index) in palettes"
          :key="index"
        >
          <PaletteColorPaletteButton
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
      <div class="mt-8 text-center">
        <UButton
          v-if="palettes.length"
          :label="hasNextPage ? $t('explore.loadMore') : $t('explore.noMoreResults')"
          :disabled="!hasNextPage"
          :loading="isFetching"
          @click="fetchNextPage"
        />
      </div>
    </div>

    <!-- 标签链接 -->
    <div class="mt-12 bg-white rounded-lg p-5 shadow-sm">
      <p class="font-semibold mb-4">
        {{ $t('explore.byTag') }}
      </p>
      <div class="space-y-4">
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

// SEO元数据
const title = computed(() => t('explore.seoTitle'));
const description = computed(() => t('explore.seoDescription'));

useSeoMeta({
  title,
  description,
  ogTitle: title.value,
  ogDescription: description,
  ogImageUrl: `${useRuntimeConfig().public.siteUrl}/img/og.png`
});
</script> 