<template>
  <div class="min-h-screen bg-gradient-to-b from-[#111827] to-[#1F2937] text-white p-6">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
      <!-- 左侧工具输入区域 -->
      <div class="lg:col-span-5 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/5 shadow-xl relative overflow-hidden">
        <div class="absolute -top-10 -left-10 w-40 h-40 bg-[#FF5F6D]/10 rounded-full blur-[60px] -z-10"></div>
        <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-[#FFC371]/10 rounded-full blur-[60px] -z-10"></div>
        
        <h1 class="text-3xl font-bold mb-4">{{ $t('randomColor.title') }}</h1>
        <p class="text-lg mb-6 text-white/70">{{ $t('randomColor.seoDescription') }}</p>
        
        <!-- 生成按钮 -->
        <UButton
          size="xl"
          block
          :label="$t('randomColor.generateLabel')"
          class="mb-6 group relative overflow-hidden shadow-lg shadow-[#FF5F6D]/20 transform hover:translate-y-[-2px] transition-all duration-300 border-0 bg-gradient-to-r from-[#FF5F6D] to-[#FFC371]"
          @click="generateColor()"
        >
          <span class="relative z-10">{{ $t('randomColor.generateLabel') }}</span>
          <span class="absolute inset-0 bg-gradient-to-r from-[#FFC371] to-[#FF5F6D] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
        </UButton>
        
        <!-- 颜色调整 -->
        <div class="bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-xl p-6 rounded-xl border border-white/5 mb-6">
          <h2 class="text-lg font-medium mb-4">{{ $t('app.randomColor.adjust') }}</h2>
          <ColorArrangeSliders v-model="arrange" />
        </div>
        
        <!-- 提示信息 -->
        <div class="text-center text-sm text-white/40 mt-6">
          <p>{{ $t('app.randomColor.spacebarTip') }}</p>
        </div>
      </div>

      <!-- 右侧结果显示区域 -->
      <div class="lg:col-span-7 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/5 shadow-xl relative overflow-hidden">
        <div class="absolute -top-10 -right-10 w-40 h-40 bg-[#FFC371]/10 rounded-full blur-[60px] -z-10"></div>
        <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-[#FF5F6D]/10 rounded-full blur-[60px] -z-10"></div>
        
        <!-- 颜色显示 -->
        <div class="border border-white/5 rounded-xl overflow-hidden mb-6 shadow-lg">
          <div
            class="h-64 w-full relative transition-all duration-300"
            :style="{ background: arrangedColor[0] }"
          >
            <!-- 颜色名称 -->
            <ColorNameBadge
              :name="ntc.name(arrangedColor[0])[1].toString()"
              class="bottom-3 left-3 absolute"
            />

            <!-- 重置按钮 -->
            <UButton
              v-if="hasChanges"
              :label="$t('palette.resetLabel')"
              class="absolute bottom-3 right-3 bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all duration-300"
              @click="resetArrange()"
            />
          </div>

          <!-- 颜色代码复制 -->
          <div class="p-5 bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-xl">
            <h3 class="text-sm font-medium mb-3 text-white/90">{{ $t('app.randomColor.colorCode') }}</h3>
            
            <!-- 自定义颜色代码显示 -->
            <div class="space-y-3">
              <!-- 十六进制颜色值 -->
              <div class="flex items-center space-x-2">
                <div class="px-4 py-2 bg-gray-600/30 rounded-full flex-1 ring-1 ring-white/10">
                  <p class="font-mono text-white font-medium text-sm tracking-wide">{{ arrangedColor[0] }}</p>
                </div>
                <UButton
                  icon="i-heroicons-clipboard"
                  color="white"
                  variant="soft"
                  size="xs"
                  class="bg-white/10 hover:bg-white/20 transition-colors duration-200"
                  @click="copyToClipboard(arrangedColor[0])"
                />
              </div>
              
              <!-- RGB颜色值 -->
              <div class="flex items-center space-x-2">
                <div class="px-4 py-2 bg-gray-600/30 rounded-full flex-1 ring-1 ring-white/10">
                  <p class="font-mono text-white font-medium text-sm tracking-wide">{{ hexToRgb(arrangedColor[0]) }}</p>
                </div>
                <UButton
                  icon="i-heroicons-clipboard"
                  color="white"
                  variant="soft"
                  size="xs"
                  class="bg-white/10 hover:bg-white/20 transition-colors duration-200"
                  @click="copyToClipboard(hexToRgb(arrangedColor[0]))"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- 最近生成的颜色 -->
        <ClientOnly>
          <div>
            <h2 class="text-2xl font-bold mb-4">{{ $t('recent.topLabel') }}</h2>
            
            <!-- 颜色列表 -->
            <div v-if="session.length" class="mt-4">
              <ul class="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <li
                  v-for="(item, index) in recentColors"
                  :key="index"
                >
                  <!-- 自定义颜色卡片，替代ColorPaletteButton组件 -->
                  <div 
                    class="rounded-xl overflow-hidden shadow-lg transform hover:translate-y-[-2px] transition-all duration-300 cursor-pointer h-24 relative"
                    :style="{ backgroundColor: item }"
                    @click="viewRecentColor(item)"
                  >
                    <!-- 颜色名称标签 -->
                    <ColorNameBadge
                      :name="ntc.name(item)[1].toString()"
                      class="bottom-2 left-2 absolute"
                    />
                  </div>
                </li>
              </ul>
              
              <!-- 显示更多按钮 -->
              <div v-if="session.length > 6 && !showAllRecent" class="mt-6 text-center">
                <UButton
                  variant="ghost"
                  size="sm"
                  class="text-white/70 hover:text-white transition-colors duration-300 bg-white/5 backdrop-blur-sm px-6 py-2 rounded-full border border-white/5 hover:bg-white/10"
                  @click="showAllRecent = true"
                >
                  {{ $t('app.randomColor.showMore') }}
                </UButton>
              </div>
            </div>

            <!-- 无颜色时显示 -->
            <p v-else class="text-white/60 text-center py-8 border border-dashed border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
              {{ $t('recent.noneFound') }}
            </p>
          </div>
        </ClientOnly>
      </div>
    </div>
    
    <!-- SEO营销内容区域 - 添加在两栏下方 -->
    <div class="mt-16 max-w-7xl mx-auto">
      <!-- 顶部大型色彩展示 -->
      <div class="relative mb-12 rounded-2xl overflow-hidden">
        <div class="grid grid-cols-7 h-48">
          <div class="bg-[#FF5F6D]"></div>
          <div class="bg-[#FFC371]"></div>
          <div class="bg-[#38ef7d]"></div>
          <div class="bg-[#11998e]"></div>
          <div class="bg-[#8E2DE2]"></div>
          <div class="bg-[#4A00E0]"></div>
          <div class="bg-[#c471ed]"></div>
        </div>
        <div class="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-black/50 via-black/30 to-black/50">
          <div class="text-center px-4">
            <h2 class="text-4xl font-bold mb-4 text-white">{{ $t('randomColor.marketing.heroTitle') || '发现完美色彩的随机之旅' }}</h2>
            <p class="text-xl text-white/90 max-w-3xl mx-auto">{{ $t('randomColor.marketing.heroSubtitle') || '每次点击，每个空格，都是一次色彩灵感的探索' }}</p>
          </div>
        </div>
      </div>

      <!-- 工具特性介绍区 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <!-- 特性1: 随机发现 -->
        <div class="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/5 shadow-xl relative overflow-hidden group transform transition-all duration-300 hover:translate-y-[-5px]">
          <div class="absolute -top-10 -right-10 w-40 h-40 bg-[#FF5F6D]/20 rounded-full blur-[60px] -z-10 group-hover:bg-[#FF5F6D]/30 transition-all duration-700"></div>
          
          <div class="flex items-start mb-4">
            <div class="p-3 rounded-lg bg-white/10 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#FF5F6D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">{{ $t('randomColor.marketing.feature1Title') || '随机探索色彩' }}</h3>
              <p class="text-white/70">{{ $t('randomColor.marketing.feature1Desc') || '按空格键或点击按钮，瞬间生成新颜色。解锁无限创意可能，打破设计瓶颈。' }}</p>
            </div>
          </div>
          
          <div class="bg-white/5 rounded-lg p-3 ml-16">
            <div class="text-sm text-white/60 italic">
              <span class="text-white/90 font-semibold">PRO TIP:</span> {{ $t('randomColor.marketing.feature1Tip') || '连续按空格键快速浏览多种颜色，直到找到心仪的那一个。' }}
            </div>
          </div>
        </div>
        
        <!-- 特性2: 精确调整 -->
        <div class="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/5 shadow-xl relative overflow-hidden group transform transition-all duration-300 hover:translate-y-[-5px]">
          <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-[#FFC371]/20 rounded-full blur-[60px] -z-10 group-hover:bg-[#FFC371]/30 transition-all duration-700"></div>
          
          <div class="flex items-start mb-4">
            <div class="p-3 rounded-lg bg-white/10 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#FFC371]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">{{ $t('randomColor.marketing.feature2Title') || '精确控制色调' }}</h3>
              <p class="text-white/70">{{ $t('randomColor.marketing.feature2Desc') || '通过亮度、饱和度、色温三个维度精确调整，将随机颜色完美匹配你的设计需求。' }}</p>
            </div>
          </div>
          
          <div class="bg-white/5 rounded-lg p-3 ml-16">
            <div class="text-sm text-white/60 italic">
              <span class="text-white/90 font-semibold">PRO TIP:</span> {{ $t('randomColor.marketing.feature2Tip') || '先找到接近的颜色，再通过微调得到完美匹配。比手动混色更快更精确。' }}
            </div>
          </div>
        </div>
        
        <!-- 特性3: 历史记录 -->
        <div class="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/5 shadow-xl relative overflow-hidden group transform transition-all duration-300 hover:translate-y-[-5px]">
          <div class="absolute -top-10 -left-10 w-40 h-40 bg-[#38ef7d]/20 rounded-full blur-[60px] -z-10 group-hover:bg-[#38ef7d]/30 transition-all duration-700"></div>
          
          <div class="flex items-start mb-4">
            <div class="p-3 rounded-lg bg-white/10 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#38ef7d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">{{ $t('randomColor.marketing.feature3Title') || '智能历史记录' }}</h3>
              <p class="text-white/70">{{ $t('randomColor.marketing.feature3Desc') || '自动保存生成的颜色，轻松找回喜欢的色彩。永不错过任何灵感闪现。' }}</p>
            </div>
          </div>
          
          <div class="bg-white/5 rounded-lg p-3 ml-16">
            <div class="text-sm text-white/60 italic">
              <span class="text-white/90 font-semibold">PRO TIP:</span> {{ $t('randomColor.marketing.feature3Tip') || '探索时不必担心错过好色彩，所有生成的颜色都会被自动保存以供日后参考。' }}
            </div>
          </div>
        </div>
      </div>

      <!-- 单色应用场景展示 -->
      <div class="mb-16">
        <h2 class="text-2xl font-bold mb-8 text-center">{{ $t('randomColor.marketing.useCasesTitle') || '单色在设计中的力量' }}</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- 左侧：应用场景图例 -->
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden">
              <div class="h-32 bg-[#FF5F6D]"></div>
              <div class="p-4">
                <h3 class="font-medium text-lg mb-1">{{ $t('randomColor.marketing.useCase1Title') || '品牌色彩' }}</h3>
                <p class="text-sm text-white/70">{{ $t('randomColor.marketing.useCase1Desc') || '发现能代表品牌个性的主色调，塑造鲜明的品牌识别度。' }}</p>
              </div>
            </div>
            
            <div class="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden">
              <div class="h-32 bg-[#4A00E0]"></div>
              <div class="p-4">
                <h3 class="font-medium text-lg mb-1">{{ $t('randomColor.marketing.useCase2Title') || '情感设计' }}</h3>
                <p class="text-sm text-white/70">{{ $t('randomColor.marketing.useCase2Desc') || '利用色彩心理学，选择能唤起特定情感反应的色调。' }}</p>
              </div>
            </div>
            
            <div class="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden">
              <div class="h-32 bg-[#38ef7d]"></div>
              <div class="p-4">
                <h3 class="font-medium text-lg mb-1">{{ $t('randomColor.marketing.useCase3Title') || '强调元素' }}</h3>
                <p class="text-sm text-white/70">{{ $t('randomColor.marketing.useCase3Desc') || '用独特颜色突出重点元素，引导用户关注。' }}</p>
              </div>
            </div>
            
            <div class="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden">
              <div class="h-32 bg-[#FFC371]"></div>
              <div class="p-4">
                <h3 class="font-medium text-lg mb-1">{{ $t('randomColor.marketing.useCase4Title') || '渐变基色' }}</h3>
                <p class="text-sm text-white/70">{{ $t('randomColor.marketing.useCase4Desc') || '寻找完美的基础色彩，创建引人注目的渐变效果。' }}</p>
              </div>
            </div>
          </div>
          
          <!-- 右侧：单色设计指南 -->
          <div class="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/5 shadow-xl relative overflow-hidden">
            <div class="absolute -top-20 -right-20 w-60 h-60 bg-[#4A00E0]/10 rounded-full blur-[80px] -z-10"></div>
            <div class="absolute -bottom-20 -left-20 w-60 h-60 bg-[#FF5F6D]/10 rounded-full blur-[80px] -z-10"></div>
            
            <h3 class="text-2xl font-bold mb-6">{{ $t('randomColor.marketing.designGuideTitle') || '单色设计指南' }}</h3>
            <ul class="space-y-4">
              <li class="flex items-start">
                <span class="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] mr-3 text-white font-bold">1</span>
                <p class="pt-1 text-white/80">{{ $t('randomColor.marketing.designTip1') || '选择一个能代表核心信息的主色调，作为设计的情感核心。' }}</p>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] mr-3 text-white font-bold">2</span>
                <p class="pt-1 text-white/80">{{ $t('randomColor.marketing.designTip2') || '创建同一色调的不同明度变体，建立视觉层次感。' }}</p>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] mr-3 text-white font-bold">3</span>
                <p class="pt-1 text-white/80">{{ $t('randomColor.marketing.designTip3') || '考虑色彩的文化和心理含义，确保与目标受众产生共鸣。' }}</p>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] mr-3 text-white font-bold">4</span>
                <p class="pt-1 text-white/80">{{ $t('randomColor.marketing.designTip4') || '测试你的色彩在不同背景和光线条件下的表现效果。' }}</p>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] mr-3 text-white font-bold">5</span>
                <p class="pt-1 text-white/80">{{ $t('randomColor.marketing.designTip5') || '确保色彩满足无障碍设计标准，提供足够的对比度。' }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- 工具使用建议和行动号召 -->
      <div class="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/5 shadow-xl text-center relative overflow-hidden">
        <div class="absolute -top-20 -left-20 w-60 h-60 bg-[#FF5F6D]/10 rounded-full blur-[80px] -z-10"></div>
        <div class="absolute -bottom-20 -right-20 w-60 h-60 bg-[#FFC371]/10 rounded-full blur-[80px] -z-10"></div>
        
        <h2 class="text-3xl font-bold mb-4">{{ $t('randomColor.marketing.callToActionTitle') || '开始你的色彩探索之旅' }}</h2>
        <p class="text-lg text-white/80 max-w-3xl mx-auto mb-8">{{ $t('randomColor.marketing.callToActionDesc') || '无论你是寻找品牌色彩、设计灵感还是完美的UI元素，随机颜色生成器都能助你一臂之力。按下空格键，发现完美色彩只在一瞬间。' }}</p>
        
        <button 
          class="bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] px-8 py-4 rounded-full text-white text-lg font-semibold shadow-lg shadow-[#FF5F6D]/20 hover:shadow-[#FF5F6D]/30 transition-all duration-300 transform hover:translate-y-[-2px]"
          @click="scrollToTop"
        >
          {{ $t('randomColor.marketing.startExploringButton') || '开始探索' }}
          <span class="ml-2 inline-block">→</span>
        </button>
        
        <div class="mt-6 text-white/50 text-sm">{{ $t('randomColor.marketing.keyboardShortcut') || '快捷键: 空格键 = 生成新颜色' }}</div>
      </div>
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
const notifications = useNotifications();
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

// 十六进制转RGB函数
function hexToRgb(hex: string): string {
  // 去掉#前缀
  const cleanHex = hex.replace('#', '');
  
  // 提取RGB值
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  
  return `rgb(${r}, ${g}, ${b})`;
}

// 复制到剪贴板函数
function copyToClipboard(text: string): void {
  navigator.clipboard.writeText(text);
  
  // 如果有通知系统，可以使用它
  if (typeof notifications !== 'undefined') {
    notifications.addSuccess(`Copied: ${text}`);
  }
}

// 滚动到顶部的函数
function scrollToTop(): void {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
</script>

<style scoped>
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

/* 覆盖UI组件默认样式 */
:deep(.nuxt-ui-button) {
  --button-border-color: rgba(255, 255, 255, 0.05);
}

:deep(.u-button) {
  border-color: rgba(255, 255, 255, 0.05) !important;
}

:deep(.u-popover) {
  border-color: rgba(255, 255, 255, 0.05) !important;
}

:deep(.u-button-group) .u-button {
  border-color: rgba(255, 255, 255, 0.05) !important;
}

/* 覆盖表单组件边框 */
:deep(.u-input), 
:deep(.u-input:focus),
:deep(.u-input:hover) {
  border-color: rgba(255, 255, 255, 0.05) !important;
}

/* 针对gradient背景按钮的特别处理 */
:deep(.bg-gradient-to-r) {
  border: none !important;
}

/* 添加动画效果 */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.lg\:col-span-7, .lg\:col-span-5 {
  animation: fadeIn 0.8s ease-out;
}

/* 增强颜色按钮样式 */
:deep(.color-buttons-enhanced) .color-button {
  background-color: rgba(255, 255, 255, 0.1) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  margin-bottom: 0.5rem !important;
  border-radius: 0.5rem !important;
}

:deep(.color-buttons-enhanced) .color-text {
  color: rgba(255, 255, 255, 0.95) !important;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace !important;
  font-size: 0.85rem !important;
  letter-spacing: 0.025em !important;
}

:deep(.color-buttons-enhanced) .copy-icon {
  color: white !important;
  opacity: 0.8 !important;
}

:deep(.color-buttons-enhanced) .copy-button:hover .copy-icon {
  opacity: 1 !important;
}

/* 最近颜色卡片样式重写 */
:deep(.recent-color-card) {
  background-color: transparent !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  border-radius: 0.75rem !important;
  overflow: hidden !important;
}

:deep(.recent-color-card) a {
  background-color: transparent !important;
  border: none !important;
  padding: 0 !important;
  border-radius: 0.75rem !important;
  overflow: hidden !important;
}

:deep(.recent-color-card span) {
  width: 100% !important;
  border-radius: 0.5rem !important;
  overflow: hidden !important;
}

/* 核心修复：让颜色占满整个卡片 */
:deep(.recent-color-card span > span) {
  width: 100% !important;
  height: 100px !important;
}

/* 删除第一个span（白色区域） */
:deep(.recent-color-card a span span:first-child) {
  display: none !important;
}

/* 让第二个span（颜色区域）占据100%宽度 */
:deep(.recent-color-card a span span:last-child) {
  width: 100% !important;
  border-radius: 0.5rem !important;
}

/* 调整标签样式 */
:deep(.recent-color-card .color-name-badge) {
  position: absolute !important;
  bottom: 0.5rem !important;
  left: 0.5rem !important;
  background-color: rgba(0, 0, 0, 0.3) !important;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 10;
}
</style> 