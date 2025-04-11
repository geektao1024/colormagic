<template>
  <div class="relative">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#FF5F6D]/10 to-[#FFC371]/10 rounded-full blur-[120px] -z-10"></div>
    
    <!-- 加载骨架图 -->
    <div v-if="!data && !isError" class="space-y-6">
      <USkeleton class="w-full h-12 rounded-xl" />
      <USkeleton class="w-full h-12 rounded-xl" />
      <USkeleton class="w-full h-48 rounded-xl" />
      <USkeleton class="w-full h-24 rounded-xl" />
    </div>

    <!-- 调色板详情主体内容 -->
    <div v-else-if="data" class="space-y-8">
      <div class="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-lg">
        <!-- 标签导航 -->
        <div class="mb-4">
          <PaletteTagLinks :links="paletteTagLinks" />
        </div>

        <!-- 标题和操作按钮 -->
        <div class="flex gap-4 flex-wrap flex-row justify-between sm:items-center mb-6">
          <h1 class="text-3xl font-bold mb-0 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            {{ data?.text }}
          </h1>

          <!-- 保存按钮 -->
          <div
            v-if="hasChanges"
            class="flex items-center gap-2"
          >
            <UButton
              :label="$t('palette.resetLabel')"
              variant="soft"
              class="px-4 py-2 rounded-xl hover:bg-white/10 transition-all duration-300"
              @click="resetArrange()"
            />
            <UButton
              type="submit"
              color="primary"
              :label="$t('palette.saveLabel')"
              :loading="isCloning"
              class="bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 transform hover:translate-y-[-2px] px-4 py-2 rounded-xl"
              @click="onSave()"
            />
          </div>
          <div v-else>
            <ColorLikeButton
              :is-liked="data.isLiked === true"
              :likes-count="data.likesCount"
              :can-like="user?.id !== undefined"
              size="md"
              :palette-id="data.id"
            />
          </div>
        </div>

        <!-- 颜色显示区域 -->
        <div class="overflow-hidden mb-6 rounded-2xl border border-white/10 shadow-lg">
          <!-- 颜色展示 -->
          <ul class="flex">
            <li
              v-for="(item, index) in arrangedColors"
              :key="index"
              class="w-full relative group"
            >
              <!-- 颜色按钮 -->
              <div
                :style="{ background: item }"
                class="w-full h-52 relative transition-all duration-300 group-hover:brightness-110"
              >
                <UTooltip
                  :text="`Generate a ${ntc.name(item)[1].toString()} palette`"
                  class="bottom-0 left-0 absolute p-3 w-full"
                >
                  <UButton
                    size="xs"
                    icon="i-heroicons-sparkles"
                    truncate
                    class="max-w-[90%] bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30 transition-all duration-300"
                    :loading="isCreating"
                    @click="onClickExample(`${ntc.name(item)[1].toString()} (${ntc.name(item)[0]})`)"
                  >
                    <span class="hidden sm:block truncate font-medium">{{ ntc.name(item)[1].toString() }}</span>
                  </UButton>
                </UTooltip>
              </div>
            </li>
          </ul>

          <!-- 颜色代码 -->
          <ul class="hidden sm:flex divide-x divide-white/5 bg-gradient-to-br from-white/5 to-white/10">
            <li
              v-for="(item, index) in arrangedColors"
              :key="index"
              class="w-full relative"
            >
              <div class="py-4 px-2">
                <div class="flex gap-2 items-center mb-2 ml-2">
                  <!-- 颜色选择器 -->
                  <ColorPicker
                    :initial-color="item"
                    @select="value => colors[index] = value"
                  />

                  <!-- 重置颜色按钮 -->
                  <UButton
                    v-if="colors[index] !== data.colors[index]"
                    icon="i-heroicons-arrow-path"
                    size="xs"
                    class="bg-white/10 hover:bg-white/20 transition-all duration-300"
                    @click="colors[index] = data.colors[index]"
                  />
                </div>

                <ColorCopyButtons :hex="item" />
              </div>
            </li>
          </ul>
        </div>

        <!-- 移动端颜色列表 -->
        <ul class="sm:hidden flex flex-col mb-4 space-y-2">
          <li
            v-for="(item, index) in colors"
            :key="index"
            class="w-full items-center flex gap-3 py-2 px-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
          >
            <!-- 颜色显示 -->
            <div
              :style="{ background: item }"
              class="w-8 h-8 rounded-lg relative"
            />

            <!-- 复制按钮 -->
            <ColorCopyButtons :hex="item" />
          </li>
        </ul>

        <!-- 调整滑块 -->
        <div class="border border-white/10 rounded-xl p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm shadow-lg">
          <ColorArrangeSliders v-model="arrange" />
        </div>
      </div>

      <!-- 分享按钮 -->
      <div class="mt-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-lg">
        <p class="text-sm font-semibold mb-4 bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent">
          {{ $t('palette.shareLabel') }}
        </p>
        <CommonSocialShareButtons
          type="text"
          orientation="horizontal"
          :text="`${t('palette.shareText')} ${data.text ?? ''} with ColorMagic AI!`"
        />
      </div>
      
      <!-- 建议操作区 -->
      <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- 生成类似调色板 -->
        <div class="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-lg hover:border-[#FF5F6D]/30 transition-all duration-300 group">
          <div class="w-12 h-12 bg-gradient-to-br from-[#FF5F6D]/20 to-[#FF5F6D]/30 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-[#FF5F6D]/20 transition-all duration-500">
            <UIcon name="i-heroicons-sparkles" class="h-6 w-6 text-[#FF5F6D]" />
          </div>
          <h3 class="text-lg font-semibold mb-2 group-hover:text-[#FF5F6D] transition-colors duration-300">{{ $t('palette.generateSimilar') || 'Generate Similar' }}</h3>
          <p class="text-white/60 mb-4">{{ $t('palette.generateSimilarDesc') || 'Create a new palette with similar colors and mood' }}</p>
          <UButton
            color="white"
            variant="ghost"
            class="bg-white/10 hover:bg-white/20 transition-all duration-300"
            :loading="isCreating"
            @click="onClickExample(data.text)"
          >
            {{ $t('palette.generate') || 'Generate' }}
          </UButton>
        </div>
        
        <!-- 探索更多 -->
        <div class="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-lg hover:border-[#FFC371]/30 transition-all duration-300 group">
          <div class="w-12 h-12 bg-gradient-to-br from-[#FFC371]/20 to-[#FFC371]/30 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-[#FFC371]/20 transition-all duration-500">
            <UIcon name="i-heroicons-globe-alt" class="h-6 w-6 text-[#FFC371]" />
          </div>
          <h3 class="text-lg font-semibold mb-2 group-hover:text-[#FFC371] transition-colors duration-300">{{ $t('palette.exploreMore') || 'Explore More' }}</h3>
          <p class="text-white/60 mb-4">{{ $t('palette.exploreMoreDesc') || 'Discover more color palettes in our collection' }}</p>
          <NuxtLinkLocale :to="localePath('/palette/explore')">
            <UButton
              color="white"
              variant="ghost"
              class="bg-white/10 hover:bg-white/20 transition-all duration-300"
            >
              {{ $t('nav.explore') }}
            </UButton>
          </NuxtLinkLocale>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ntc from '~/layers/palette/utils/ntc.util';

definePageMeta({
  layout: 'app'
});

const { params } = useRoute();
const id = ref(typeof params.id === 'string' ? params.id : undefined);

const { t, locale } = useI18n();
const localePath = useLocalePath();
const { data, suspense, isError } = usePalette(id);
const { mutate: clone, isPending: isCloning } = useClonePalette();
const { mutate: create, isPending: isCreating } = useCreatePalette();
const notifications = useNotifications();

await suspense();

const { data: user } = useUser();

/** @description redirect home because old palettes will throw 404's otherwise */
if (data.value === undefined) {
  await navigateTo('/', { replace: true });
}

const title = computed(() => `${data.value?.text ?? 'Loading...'} - ${t('palette.seoTitle')}`);
const ogImageUrl = computed(() => (data.value !== undefined ? formatOgUrl(data.value.colors, data.value.text) : ''));
const description = t('palette.seoDescription');

useSeoMeta({
  title,
  description,
  ogTitle: title.value,
  ogDescription: description,
  ogImageUrl: `${useRuntimeConfig().public.siteUrl}${ogImageUrl.value}`,
  robots: {
    noindex: true
  }
});

const paletteTagLinks = getAllPaletteFilters().map(v => ({
  label: v.label[getLocale(locale.value)],
  id: v.id,
  to: localePath(`/palette/explore/${v.id}`)
})).filter(v => data.value?.tags.includes(v.id));

const colors = ref<string[]>([]);

const arrange = ref({
  brightness: 0,
  saturation: 0,
  warmth: 0
});

const hasChanges = computed(() => {
  return arrange.value.brightness !== 0 ||
  arrange.value.saturation !== 0 ||
  arrange.value.warmth !== 0 ||
  (data.value !== undefined && JSON.stringify(data.value.colors) !== JSON.stringify(colors.value));
});

const arrangedColors = computed(() => arrangeColors(colors.value, {
  brightness: arrange.value.brightness,
  saturation: arrange.value.saturation,
  warmth: arrange.value.warmth
}));

function resetArrange(): void {
  arrange.value.brightness = 0;
  arrange.value.saturation = 0;
  arrange.value.warmth = 0;

  if (data.value?.colors !== undefined) {
    colors.value = [...data.value.colors];
  }
}

function onClickExample(prompt: string): void {
  create({ prompt }, {
    onError: (err) => {
      notifications.addError(err.message ?? 'Error creating palette.');
    },
    onSuccess: (value) => {
      notifications.addSuccess(`Successfully created ${prompt} palette.`);
      void navigateTo(localePath(`/palette/${value.id}`));
    }
  });
}

function onSave(): void {
  if (data.value?.id === undefined) {
    return;
  }

  clone({ id: data.value?.id, colors: arrangedColors.value }, {
    onError: (err) => {
      notifications.addError(err.message ?? 'Error cloning palette.');
    },
    onSuccess: (value) => {
      void navigateTo(localePath(`/palette/${value.id}`));
    }
  });
}

watch(data, (newValue) => {
  if (newValue !== undefined) {
    colors.value = [...newValue.colors];
  }
}, { immediate: true });
</script>

<style>
/* 修复颜色选择器样式，确保与深色模式兼容 */
.vc-sketch {
  background: #202334 !important;
  border-color: rgba(255, 255, 255, 0.1) !important;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25) !important;
}
.vc-sketch-field input {
  color: white !important;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1) !important;
  background: rgba(255, 255, 255, 0.1) !important;
}
</style>
