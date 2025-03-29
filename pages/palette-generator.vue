<template>
  <div class="min-h-screen bg-gradient-to-b from-[#111827] to-[#1F2937] text-white p-6">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
      <!-- 左侧工具输入区域 -->
      <div class="lg:col-span-5 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/5 shadow-xl relative overflow-hidden">
        <div class="absolute -top-10 -left-10 w-40 h-40 bg-[#FF5F6D]/10 rounded-full blur-[60px] -z-10"></div>
        <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-[#FFC371]/10 rounded-full blur-[60px] -z-10"></div>
        
        <h1 class="text-3xl font-bold mb-4">{{ $t('nav.colorPaletteGenrator') }}</h1>
        <p class="text-lg mb-8 text-white/70">{{ $t('home.seoDescription') }}</p>
        
        <!-- 表单 -->
        <UForm
          :state="state"
          :schema="FormSchema"
          class="space-y-6"
          @submit="onSubmit"
        >
          <!-- 提示词 -->
          <UFormGroup name="prompt">
            <UButtonGroup
              size="xl"
              class="w-full shadow-lg"
            >
              <UInput
                v-model="state.prompt"
                size="xl"
                class="w-full bg-white/5 border-white/5 text-white placeholder:text-white/40 focus:border-[#FF5F6D] transition-all duration-300"
                :placeholder="$t('generate.placeholder')"
              />
              <UButton
                icon="i-heroicons-arrow-path"
                class="bg-white/10 border-white/5 text-white hover:bg-white/20 transition-all duration-300"
                aria-label="Generate Sample Prompt"
                @click="generateSamplePrompt()"
              />
            </UButtonGroup>
          </UFormGroup>

          <!-- 提交按钮 -->
          <UButton
            type="submit"
            block
            size="xl"
            class="mt-8 group relative overflow-hidden shadow-lg shadow-[#FF5F6D]/20 transform hover:translate-y-[-2px] transition-all duration-300 border-0"
            :class="{'bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] hover:shadow-[#FF5F6D]/30': !isPending}"
            :loading="isPending"
          >
            <span class="relative z-10">{{ $t('generate.label') }}</span>
            <span class="absolute inset-0 bg-gradient-to-r from-[#FFC371] to-[#FF5F6D] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </UButton>
        </UForm>

        <!-- 关键词示例 -->
        <div class="mt-10">
          <p class="text-sm font-medium mb-4 text-white/80">{{ $t('home.exampleLabel') || '试试这些例子' }}:</p>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="example in ['Forest', 'Ocean', 'Beach', 'Summer', 'Cute', 'Romantic', 'Elegant', 'Sporty', 'Happy', 'Spring', 'Cafe', 'Aquarium', 'Sunflower', 'Campfire', 'Flower', 'Winter', 'Neon', 'Autumn', 'Christmas', 'Teenage']"
              :key="example"
              class="px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-white/80 hover:bg-white/10 hover:text-white hover:border-white/10 transition-all duration-300 text-sm"
              @click="state.prompt = example"
            >
              {{ example }}
            </button>
          </div>
        </div>

        <!-- 调色板数量 -->
        <p class="italic text-xs text-center mt-12 text-white/40">
          {{ count?.count.toLocaleString() ?? 0 }} {{ $t('app.palette.palettesGenerated') }}
        </p>
      </div>

      <!-- 右侧结果显示区域 -->
      <div class="lg:col-span-7 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/5 shadow-xl relative overflow-hidden">
        <div class="absolute -top-10 -right-10 w-40 h-40 bg-[#FFC371]/10 rounded-full blur-[60px] -z-10"></div>
        <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-[#FF5F6D]/10 rounded-full blur-[60px] -z-10"></div>
        
        <!-- 结果标题 -->
        <h2 class="text-2xl font-bold mb-6">{{ $t('app.palette.result') }}</h2>

        <!-- 加载状态 -->
        <div 
          v-if="isPending" 
          class="flex flex-col items-center justify-center py-16 bg-white/5 backdrop-blur-sm border border-white/5 rounded-xl"
        >
          <div class="w-16 h-16 bg-gradient-to-br from-[#FF5F6D]/20 to-[#FFC371]/20 rounded-full flex items-center justify-center mb-6 animate-pulse">
            <UIcon name="i-heroicons-arrow-path" class="animate-spin h-8 w-8 text-[#FF5F6D]" />
          </div>
          <p class="text-lg text-white/70">{{ $t('app.palette.generating') }}</p>
        </div>

        <!-- 空状态 -->
        <div 
          v-else-if="!currentPalette" 
          class="flex flex-col items-center justify-center py-16 bg-white/5 backdrop-blur-sm border border-dashed border-white/5 rounded-xl"
        >
          <div class="w-16 h-16 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/5">
            <UIcon name="i-heroicons-paint-brush" class="text-white/50 h-8 w-8" />
          </div>
          <p class="text-lg text-white/60">{{ $t('app.palette.emptyState') }}</p>
        </div>

        <!-- 调色板结果 -->
        <div v-else class="space-y-8">
          <!-- 调色板颜色显示 -->
          <div>
            <!-- 大色块区域 -->
            <div class="flex overflow-hidden rounded-xl mb-6 h-48 shadow-lg">
              <div
                v-for="(color, index) in arrangedColors"
                :key="index"
                class="flex-1 h-full relative"
                :style="{ backgroundColor: color }"
              >
                <!-- 添加颜色名称标签 -->
                <ColorNameBadge
                  :name="getColorName(color)"
                  class="absolute bottom-2 left-2"
                />
              </div>
            </div>

            <!-- 颜色值展示 - 单独色卡 -->
            <div class="grid grid-cols-5 gap-4">
              <div
                v-for="(color, index) in arrangedColors"
                :key="index"
                class="rounded-xl overflow-hidden shadow-lg"
              >
                <!-- 颜色块 - 作为调色按钮 -->
                <div 
                  class="relative h-24 cursor-pointer flex items-center justify-center transition-all duration-200 hover:brightness-110"
                  :style="{ backgroundColor: color }"
                  @click="openColorAdjuster(color, index)"
                >
                  <!-- 调色图标 -->
                  <div class="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/20 transition-opacity duration-200">
                    <UIcon name="i-heroicons-adjustments-horizontal" class="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <!-- 颜色值信息 -->
                <div class="p-3 pl-2 bg-white text-gray-800">
                  <p 
                    class="font-mono text-xs font-medium mb-1.5 px-2 py-0.5 rounded-full inline-block cursor-pointer transition-colors duration-100 hover:bg-gray-200" 
                    title="Click to copy hex color" 
                    @click="copyColorToClipboard(color)"
                  >
                    {{ color }}
                  </p>
                  <p 
                    class="font-mono text-xs font-medium px-1.5 py-0.5 rounded cursor-pointer transition-colors duration-100 hover:bg-gray-100" 
                    title="Click to copy RGB color" 
                    @click="copyColorToClipboard(rgbValue(color).replace(/\s+/g, ''))"
                  >
                    {{ rgbValue(color).replace(/\s+/g, '') }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- 调色板名称 -->
          <div class="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/5">
            <p class="font-medium mb-2 text-white/90">{{ $t('app.palette.paletteName') }}:</p>
            <p class="text-xl text-white font-semibold">{{ currentPalette.text }}</p>
          </div>

          <!-- 调整选项 -->
          <div class="bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-xl p-6 rounded-xl border border-white/5">
            <p class="text-lg font-semibold mb-4">{{ $t('palette.adjustSettings') || '调整设置' }}</p>
            
            <UFormGroup :label="$t('palette.brightness')" class="mb-4">
              <URange
                v-model="arrange.brightness"
                :min="-100"
                :max="100"
                :step="10"
                class="accent-[#FF5F6D]"
              />
            </UFormGroup>
            <UFormGroup :label="$t('palette.saturation')" class="mb-4">
              <URange
                v-model="arrange.saturation"
                :min="-100"
                :max="100"
                :step="10"
                class="accent-[#FF8C61]"
              />
            </UFormGroup>
            <UFormGroup :label="$t('palette.warmth')" class="mb-6">
              <URange
                v-model="arrange.warmth"
                :min="-100"
                :max="100"
                :step="10"
                class="accent-[#FFC371]"
              />
            </UFormGroup>

            <div class="flex justify-between mt-6">
              <!-- 重置按钮 -->
              <UButton
                variant="soft"
                class="bg-white/5 border border-white/5 hover:bg-white/10 transition-colors duration-300"
                :disabled="!hasChanges"
                @click="resetArrange"
              >
                <UIcon name="i-heroicons-arrow-path" class="mr-2 h-4 w-4" />
                {{ $t('palette.resetLabel') }}
              </UButton>

              <!-- 保存按钮 -->
              <UButton
                class="bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] border-0 hover:shadow-lg hover:shadow-[#FF5F6D]/20 transition-all duration-300 transform hover:translate-y-[-2px]"
                @click="savePalette"
              >
                <UIcon name="i-heroicons-heart" class="mr-2 h-4 w-4" />
                {{ $t('palette.saveLabel') }}
              </UButton>
            </div>
          </div>
        </div>
      </div>
      
      <!-- SEO营销内容区域 - 添加在两栏下方 -->
      <div class="lg:col-span-12 mt-8 space-y-8">
        <!-- 第一部分：专业AI调色板生成器 -->
        <div class="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/5 shadow-xl relative overflow-hidden group">
          <div class="absolute -top-20 -left-20 w-60 h-60 bg-[#FF5F6D]/10 rounded-full blur-[80px] -z-10 group-hover:bg-[#FF5F6D]/20 transition-all duration-700"></div>
          <div class="absolute -bottom-20 -right-20 w-60 h-60 bg-[#FFC371]/10 rounded-full blur-[80px] -z-10 group-hover:bg-[#FFC371]/20 transition-all duration-700"></div>
          
          <h2 class="text-2xl font-bold mb-4">{{ $t('palette.marketing.mainTitle') }}</h2>
          <p class="text-lg text-white/80 mb-6">{{ $t('palette.marketing.mainDescription') }}</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div class="bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-white/5 hover:bg-white/10 transition-all duration-300 transform hover:translate-y-[-2px]">
              <h3 class="text-xl font-semibold mb-3 gradient-text">{{ $t('palette.marketing.keywordToColorTitle') }}</h3>
              <p class="text-white/80">{{ $t('palette.marketing.keywordToColorDesc') }}</p>
            </div>
            <div class="bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-white/5 hover:bg-white/10 transition-all duration-300 transform hover:translate-y-[-2px]">
              <h3 class="text-xl font-semibold mb-3 gradient-text">{{ $t('palette.marketing.colorAdjustmentTitle') }}</h3>
              <p class="text-white/80">{{ $t('palette.marketing.colorAdjustmentDesc') }}</p>
            </div>
          </div>
          
          <h3 class="text-xl font-bold mt-10 mb-4">{{ $t('palette.marketing.whyChooseTitle') }}</h3>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <li class="flex items-start group/item">
              <span class="bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] p-1 rounded-full mr-2 mt-1 group-hover/item:scale-125 transition-transform duration-300"></span>
              <span class="text-white/80">{{ $t('palette.marketing.whyChooseItem1') }}</span>
            </li>
            <li class="flex items-start group/item">
              <span class="bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] p-1 rounded-full mr-2 mt-1 group-hover/item:scale-125 transition-transform duration-300"></span>
              <span class="text-white/80">{{ $t('palette.marketing.whyChooseItem2') }}</span>
            </li>
            <li class="flex items-start group/item">
              <span class="bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] p-1 rounded-full mr-2 mt-1 group-hover/item:scale-125 transition-transform duration-300"></span>
              <span class="text-white/80">{{ $t('palette.marketing.whyChooseItem3') }}</span>
            </li>
            <li class="flex items-start group/item">
              <span class="bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] p-1 rounded-full mr-2 mt-1 group-hover/item:scale-125 transition-transform duration-300"></span>
              <span class="text-white/80">{{ $t('palette.marketing.whyChooseItem4') }}</span>
            </li>
          </ul>
        </div>

        <!-- 第二部分：设计师的高效色彩工具 -->
        <div class="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/5 shadow-xl relative overflow-hidden group">
          <div class="absolute -bottom-20 -left-20 w-60 h-60 bg-[#FF5F6D]/10 rounded-full blur-[80px] -z-10 group-hover:bg-[#FF5F6D]/20 transition-all duration-700"></div>
          <div class="absolute -top-20 -right-20 w-60 h-60 bg-[#FFC371]/10 rounded-full blur-[80px] -z-10 group-hover:bg-[#FFC371]/20 transition-all duration-700"></div>
          
          <h2 class="text-2xl font-bold mb-4">{{ $t('palette.marketing.designToolTitle') }}</h2>
          
          <div class="space-y-6">
            <div class="flex flex-col md:flex-row gap-6">
              <div class="flex-1 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-all duration-300">
                <h3 class="text-xl font-medium mb-3">{{ $t('palette.marketing.brandDesignTitle') }}</h3>
                <p class="text-white/80 text-sm">{{ $t('palette.marketing.brandDesignDesc') }}</p>
              </div>
              <div class="flex-1 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-all duration-300">
                <h3 class="text-xl font-medium mb-3">{{ $t('palette.marketing.webDesignTitle') }}</h3>
                <p class="text-white/80 text-sm">{{ $t('palette.marketing.webDesignDesc') }}</p>
              </div>
              <div class="flex-1 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-all duration-300">
                <h3 class="text-xl font-medium mb-3">{{ $t('palette.marketing.illustrationTitle') }}</h3>
                <p class="text-white/80 text-sm">{{ $t('palette.marketing.illustrationDesc') }}</p>
              </div>
            </div>
            
            <p class="text-white/70 mt-6">{{ $t('palette.marketing.conclusionText') }}</p>
            
            <!-- 快速尝试按钮 -->
            <div class="mt-8 text-center">
              <button 
                class="bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] px-8 py-3 rounded-full text-white font-semibold shadow-lg shadow-[#FF5F6D]/20 hover:shadow-[#FF5F6D]/30 transition-all duration-300 transform hover:translate-y-[-2px]"
                @click="scrollToForm"
              >
                {{ $t('palette.marketing.tryItNowButton') }}
              </button>
            </div>
            
            <!-- SEO关键词（隐藏在视觉上但对搜索引擎可见） -->
            <div class="mt-8 text-sm text-white/60">
              <p>{{ $t('palette.marketing.keywords') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { object, type InferType, string } from 'yup';
import type { FormSubmitEvent } from '#ui/types';
import ntc from '~/layers/palette/utils/ntc.util';
import { hexToName } from '~/layers/palette/utils/color-converter.util';
import ColorNameBadge from '~/layers/palette/components/ColorNameBadge.vue';

definePageMeta({
  layout: 'app'
});

const { t, locale } = useI18n();
const localePath = useLocalePath();
const notifications = useNotifications();

// SEO元数据
const title = computed(() => t('home.seoTitle'));
const description = computed(() => t('home.seoDescription'));

useSeoMeta({
  title,
  description,
  ogTitle: title.value,
  ogDescription: description,
  ogImageUrl: `${useRuntimeConfig().public.siteUrl}/img/og.png`
});

// 获取调色板数量
const { data: count, suspense } = usePaletteCount();
await suspense();

// 表单状态
const state = ref({
  prompt: ''
});

// 表单验证
const FormSchema = object({
  prompt: string().required()
});

export type Form = InferType<typeof FormSchema>;

// 示例提示词
const samplePrompts = ref(getSamplePrompt(getLocale(locale.value)));

// 生成随机示例提示词
function generateSamplePrompt(): void {
  state.value.prompt = samplePrompts.value[Math.floor(Math.random() * samplePrompts.value.length)];
}

// 调色板生成相关
const { mutate: create, isPending } = useCreatePalette();
const currentPalette = ref<{ id: string; text: string; colors: string[] } | null>(null);

// 颜色调整
const arrange = ref({
  brightness: 0,
  saturation: 0,
  warmth: 0
});

// 检查是否有变更
const hasChanges = computed(() => {
  return arrange.value.brightness !== 0 ||
  arrange.value.saturation !== 0 ||
  arrange.value.warmth !== 0 ||
  (currentPalette.value !== null && JSON.stringify(currentPalette.value.colors) !== JSON.stringify(arrangedColors.value));
});

// 计算调整后的颜色
const arrangedColors = computed(() => {
  if (!currentPalette.value) return [];
  return arrangeColors(currentPalette.value.colors, {
    brightness: arrange.value.brightness,
    saturation: arrange.value.saturation,
    warmth: arrange.value.warmth
  });
});

// 重置调整
function resetArrange(): void {
  arrange.value.brightness = 0;
  arrange.value.saturation = 0;
  arrange.value.warmth = 0;
}

// 复制颜色到剪贴板
function copyColorToClipboard(color: string): void {
  navigator.clipboard.writeText(color);
  notifications.addSuccess(t('app.palette.colorCopied'));
}

// 保存调色板
function savePalette(): void {
  if (!currentPalette.value) return;
  
  // 如果有调整，使用调整后的颜色
  if (hasChanges.value && arrangedColors.value.length > 0) {
    currentPalette.value.colors = [...arrangedColors.value];
  }
  
  // 实际保存逻辑需要根据应用需求实现
  notifications.addSuccess(t('app.palette.paletteSaved'));
}

// 提交表单
function onSubmit(event: FormSubmitEvent<Form>): void {
  create({ prompt: event.data.prompt }, {
    onError: (err) => {
      notifications.addError(err.message ?? 'Error creating palette.');
    },
    onSuccess: (value) => {
      currentPalette.value = value;
      resetArrange();
      notifications.addSuccess(`${t('app.palette.successGenerated')} "${value.text}"`);
    }
  });
}

// 滚动到表单区域的函数
function scrollToForm(): void {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// 获取颜色名称
function getColorName(hexColor: string): string {
  try {
    return ntc.name(hexColor)[1].toString();
  } catch (e) {
    console.error('Error getting color name:', e);
    return `Color`;
  }
}

// 将十六进制颜色转换为RGB格式字符串
function rgbValue(hexColor: string): string {
  try {
    // 去掉#前缀
    const hex = hexColor.replace('#', '');
    
    // 提取RGB值
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    return `rgb(${r}, ${g}, ${b})`;
  } catch (e) {
    console.error('Error converting hex to RGB:', e);
    return 'rgb(0, 0, 0)';
  }
}

// 单色调色器相关状态
const isColorAdjusterOpen = ref(false);
const currentEditingColorIndex = ref(-1);
const currentEditingColor = ref('');
const singleColorAdjust = ref({
  hue: 0,
  saturation: 0,
  brightness: 0
});

// 计算调整后的单个颜色
const adjustedSingleColor = computed(() => {
  if (!currentEditingColor.value) return '#000000';
  
  // 将色相调整转换为色温调整，因为当前的 arrangeColors 函数不直接支持色相调整
  const warmthValue = singleColorAdjust.value.hue / 3.6; // 将 0-360 转换为 -100 到 100 范围
  
  // 使用与整体调色板相同的调整函数，但只应用于单个颜色
  return arrangeColors([currentEditingColor.value], {
    brightness: singleColorAdjust.value.brightness,
    saturation: singleColorAdjust.value.saturation,
    warmth: warmthValue
  })[0];
});

// 检查单色调整是否有变化
const hasSingleColorChanges = computed(() => {
  return singleColorAdjust.value.brightness !== 0 ||
         singleColorAdjust.value.saturation !== 0 ||
         singleColorAdjust.value.hue !== 0;
});

// 打开单色调整器
function openColorAdjuster(color: string, index: number): void {
  currentEditingColor.value = color;
  currentEditingColorIndex.value = index;
  resetSingleColorAdjust();
  isColorAdjusterOpen.value = true;
}

// 重置单色调整
function resetSingleColorAdjust(): void {
  singleColorAdjust.value = {
    hue: 0,
    saturation: 0,
    brightness: 0
  };
}

// 应用单色调整
function applySingleColorChange(): void {
  if (!currentPalette.value || currentEditingColorIndex.value < 0) return;
  
  // 更新调色板中的颜色
  const updatedColors = [...arrangedColors.value];
  updatedColors[currentEditingColorIndex.value] = adjustedSingleColor.value;
  
  // 更新调色板
  currentPalette.value.colors = updatedColors;
  
  // 关闭调色器
  isColorAdjusterOpen.value = false;
  notifications.addSuccess(t('app.palette.colorUpdated') || '颜色已更新');
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

/* 渐变文本效果 */
.gradient-text {
  @apply bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent;
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

/* 禁用原始示例按钮 */
:deep(.try-an-example),
:deep([class*="Try an example"]) {
  display: none !important;
}

/* 覆盖提交按钮样式 */
:deep(.u-button[type="submit"]) {
  border: none !important;
  outline: none !important;
  box-shadow: 0 0 0 0 transparent !important;
}

:deep(button[type="submit"]) {
  border: none !important;
  outline: none !important;
  box-shadow: 0 0 0 0 transparent !important;
}

/* 针对gradiant背景按钮的特别处理 */
:deep(.bg-gradient-to-r) {
  border: none !important;
}

/* 添加动画效果 */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.lg\:col-span-12 {
  animation: fadeIn 0.8s ease-out;
}

/* 提高表单标签的可见度 */
:deep(.u-form-group) label {
  color: rgba(255, 255, 255, 0.9) !important;
  font-weight: 500 !important;
}
</style> 