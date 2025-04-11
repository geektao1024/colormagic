<template>
  <div>
    <!-- 页面头部，添加渐变背景和卡片效果 -->
    <div class="mb-10 relative">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#FF5F6D]/20 to-[#FFC371]/10 rounded-full blur-[100px] -z-10"></div>
      
      <!-- 标题区域，添加动态渐变效果 -->
      <div class="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-lg">
        <div class="inline-block px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-sm text-white/70 mb-4">
          {{ $t('nav.liked') }}
        </div>
        
        <h1 class="text-4xl font-bold mb-4">
          <span class="bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent">
            {{ $t('liked.title') }}
          </span>
        </h1>

        <!-- 描述 -->
        <p class="text-xl font-medium mb-4 max-w-xl text-white/80">
          {{ description }}
        </p>
      </div>
    </div>

    <!-- 登录提示，美化样式 -->
    <div
      v-if="isUserError"
      class="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-lg text-center relative overflow-hidden"
    >
      <div class="absolute -bottom-16 -right-16 w-64 h-64 bg-[#FF5F6D]/10 rounded-full blur-[60px]"></div>
      
      <div class="w-16 h-16 bg-gradient-to-br from-[#FF5F6D]/20 to-[#FF5F6D]/30 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:shadow-lg group-hover:shadow-[#FF5F6D]/20 transition-all duration-500">
        <UIcon name="i-heroicons-heart" class="h-8 w-8 text-[#FF5F6D]" />
      </div>
      
      <p class="text-xl font-semibold mb-6 text-white">
        {{ $t('liked.loginNeeded') || 'Please login to view your liked palettes' }}
      </p>
      
      <NuxtLinkLocale
        to="/login"
        class="inline-block px-6 py-3 bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] rounded-full text-white font-medium hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 transform hover:translate-y-[-2px]"
      >
        {{ $t('nav.login') }}
      </NuxtLinkLocale>
    </div>

    <!-- 加载骨架屏 -->
    <div v-else-if="!list">
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
    <div
      v-else-if="palettes"
      class="relative"
    >
      <div class="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#FFC371]/10 rounded-full blur-[120px] -z-10"></div>
      
      <!-- 调色板网格 -->
      <ul class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <li
          v-for="(item, index) in palettes"
          :key="index"
          class="transform hover:scale-[1.02] transition-all duration-300"
        >
          <ColorPaletteButton
            :palette-id="item.id"
            :is-liked="item.isLiked === true"
            :likes-count="item.likesCount"
            :can-like="user?.id !== undefined"
            :colors="item.colors"
            :name="item.text"
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
      
      <!-- 当没有收藏内容时显示提示 -->
      <div v-if="palettes && palettes.length === 0" class="mt-8 text-center p-10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/10">
        <UIcon name="i-heroicons-heart" class="h-12 w-12 text-[#FF5F6D]/50 mb-4 mx-auto" />
        <p class="text-xl font-semibold text-white/70 mb-2">{{ $t('liked.noItems') || 'No liked palettes yet' }}</p>
        <p class="text-white/60 mb-6">{{ $t('liked.exploreMore') || 'Explore more palettes and add them to your favorites' }}</p>
        <NuxtLinkLocale
          to="/palette/explore"
          class="inline-block px-6 py-3 bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] rounded-full text-white font-medium hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 transform hover:translate-y-[-2px]"
        >
          {{ $t('nav.explore') }}
        </NuxtLinkLocale>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'app'
});

const { t } = useI18n();
const localePath = useLocalePath();

const title = t('liked.seoTitle');
const description = t('liked.seoDescription');

const { data: user, isError: isUserError } = useUser();
const { data: list, isFetching, hasNextPage, fetchNextPage, suspense } = useListLikedPalettes(100, 0);

await suspense();

const palettes = computed(() => list.value?.pages.flatMap((items) => items.items) ?? undefined);

useSeoMeta({
  title,
  description
});
</script>
