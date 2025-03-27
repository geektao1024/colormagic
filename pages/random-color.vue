<template>
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
    <!-- 左侧工具输入区域 -->
    <div class="lg:col-span-5 bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
      <h1 class="text-2xl font-bold mb-4">{{ $t('randomColor.title') }}</h1>
      <p class="text-lg mb-6 text-gray-300">{{ $t('randomColor.seoDescription') }}</p>
      
      <!-- 生成按钮 -->
      <UButton
        size="xl"
        block
        :label="$t('randomColor.generateLabel')"
        color="primary"
        class="mb-6"
        @click="generateColor()"
      />
      
      <!-- 颜色调整 -->
      <div class="border border-gray-700 rounded-xl p-4 mb-6 bg-gray-850">
        <h2 class="text-lg font-medium mb-3">{{ $t('app.randomColor.adjust') }}</h2>
        <ColorArrangeSliders v-model="arrange" />
      </div>
      
      <!-- 提示信息 -->
      <div class="text-center text-sm text-gray-400 mt-4">
        <p>{{ $t('app.randomColor.spacebarTip') }}</p>
      </div>
    </div>

    <!-- 右侧结果显示区域 -->
    <div class="lg:col-span-7 bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
      <!-- 颜色显示 -->
      <div class="border border-gray-700 rounded-xl overflow-hidden mb-6">
        <div
          class="h-64 w-full relative"
          :style="{ background: arrangedColor[0] }"
        >
          <!-- 颜色名称 -->
          <ColorNameBadge
            :name="ntc.name(arrangedColor[0])[1].toString()"
            class="bottom-2 left-2 absolute"
          />

          <!-- 重置按钮 -->
          <UButton
            v-if="hasChanges"
            :label="$t('palette.resetLabel')"
            class="absolute bottom-2 right-2"
            @click="resetArrange()"
          />
        </div>

        <!-- 颜色代码复制 -->
        <div class="p-4 bg-gray-850">
          <h3 class="text-sm font-medium mb-2">{{ $t('app.randomColor.colorCode') }}</h3>
          <ColorCopyButtons :hex="arrangedColor[0]" />
        </div>
      </div>

      <!-- 最近生成的颜色 -->
      <ClientOnly>
        <div>
          <h2 class="text-xl font-bold mb-4">{{ $t('recent.topLabel') }}</h2>
          
          <!-- 颜色列表 -->
          <div v-if="session.length">
            <ul class="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <li
                v-for="(item, index) in recentColors"
                :key="index"
              >
                <ColorPaletteButton
                  :colors="[item]"
                  :name="ntc.name(item)[1].toString()"
                  @click="viewRecentColor(item)"
                />
              </li>
            </ul>
            
            <!-- 显示更多按钮 -->
            <div v-if="session.length > 6 && !showAllRecent" class="mt-4 text-center">
              <UButton
                variant="ghost"
                size="sm"
                class="text-gray-300"
                @click="showAllRecent = true"
              >
                {{ $t('app.randomColor.showMore') }}
              </UButton>
            </div>
          </div>

          <!-- 无颜色时显示 -->
          <p v-else class="text-gray-400 text-center py-4 border border-dashed border-gray-700 rounded-lg bg-gray-850">
            {{ $t('recent.noneFound') }}
          </p>
        </div>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import { whenever, useMagicKeys, useLocalStorage, StorageSerializers } from '@vueuse/core';
import ntc from '~/layers/palette/utils/ntc.util';
import { PlausibleEventName } from '~/layers/plausible/types';

definePageMeta({
  layout: 'app'
});

const { t } = useI18n();
const showAllRecent = ref(false);

// SEO元数据
const title = computed(() => t('randomColor.seoTitle'));
const description = computed(() => t('randomColor.seoDescription'));

useSeoMeta({
  title,
  description,
  ogTitle: title.value,
  ogDescription: description,
  ogImageUrl: `${useRuntimeConfig().public.siteUrl}/api/og/thumbnail?colors=${getRandomHexColor().replace('#', '')}`
});

// 本地存储最近生成的颜色
const session = useLocalStorage<string[]>(
  'random-color:created',
  [],
  { serializer: StorageSerializers.object }
);

// 最近生成的颜色（限制显示数量）
const recentColors = computed(() => {
  return showAllRecent.value ? session.value : session.value.slice(0, 6);
});

// 空格键监听
const { SPACE } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.key === ' ' && e.type === 'keydown') {
      e.preventDefault();
    }
  }
});

// 当前颜色
const color = ref('');

// 颜色调整参数
const arrange = ref({
  brightness: 0,
  saturation: 0,
  warmth: 0
});

// 调整后的颜色
const arrangedColor = computed(() => arrangeColors([color.value], {
  brightness: arrange.value.brightness,
  saturation: arrange.value.saturation,
  warmth: arrange.value.warmth
}));

// 检查是否有调整
const hasChanges = computed(() => {
  return arrange.value.brightness !== 0 ||
  arrange.value.saturation !== 0 ||
  arrange.value.warmth !== 0;
});

// 重置调整
function resetArrange(): void {
  arrange.value.brightness = 0;
  arrange.value.saturation = 0;
  arrange.value.warmth = 0;
}

// 生成随机颜色
function generateColor(): void {
  const newColor = getRandomHexColor();

  // 保存到历史记录
  session.value = [newColor, ...session.value];

  // 限制保存数量
  if (session.value.length > 100) {
    session.value.pop();
  }

  // 更新当前颜色
  color.value = newColor;
  
  // 重置调整
  resetArrange();

  // 发送事件
  sendPlausibleEvent(PlausibleEventName.RANDOM_COLOR_GENERATED);
}

// 查看历史颜色
function viewRecentColor(value: string): void {
  color.value = value;
  resetArrange();

  // 滚动到顶部
  if (window !== undefined) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// 监听空格键生成随机颜色
whenever(SPACE, () => {
  generateColor();
});

// 组件挂载时生成初始颜色
onMounted(() => {
  color.value = getRandomHexColor();
});
</script> 