<template>
  <div class="mb-16 mx-1">
    <div class="flex justify-between items-center mb-8">
      <h2 class="text-2xl font-bold flex items-center gap-3">
        <UIcon name="i-heroicons-photo" class="w-6 h-6 text-[#4ade80]" />
        <span>{{ $t('nav.imageColorPicker') }}</span>
      </h2>
      <UButton
        :to="localePath('/image-color-picker')"
        variant="link"
        class="text-white/70 hover:text-white flex items-center gap-1 transition-colors duration-300"
      >
        <span>{{ $t('home.tryNow') }}</span>
        <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
      </UButton>
    </div>
    
    <!-- 图片卡片容器 -->
    <div class="relative">
      <!-- 左右滚动按钮 - 仅在溢出时显示 -->
      <button 
        v-if="canScrollLeft"
        @click="scrollLeft"
        class="absolute -left-4 top-1/2 z-10 transform -translate-y-1/2 w-8 h-8 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-black/60 transition-all duration-300"
      >
        <UIcon name="i-heroicons-chevron-left" class="w-5 h-5" />
      </button>
      <button 
        v-if="canScrollRight"
        @click="scrollRight"
        class="absolute -right-4 top-1/2 z-10 transform -translate-y-1/2 w-8 h-8 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-black/60 transition-all duration-300"
      >
        <UIcon name="i-heroicons-chevron-right" class="w-5 h-5" />
      </button>
      
      <!-- 图片卡片容器 - 使用 flex 替代 grid -->
      <div 
        ref="toolsContainer"
        class="flex overflow-x-auto pb-6 hide-scrollbar snap-x snap-mandatory"
      >
        <!-- 示例图片卡片 -->
        <div 
          v-for="(imageSrc, index) in sampleImages.slice(0, 6)" 
          :key="index"
          class="group flex flex-col snap-start flex-shrink-0 w-[280px] mx-3 first:ml-0 last:mr-0"
          @mouseenter="extractColorsForImage(imageSrc, index)"
        >
          <!-- 卡片主体 -->
          <div class="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-[#4ade80]/50 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-[#4ade80]/20 mb-3">
            <div class="aspect-[4/3] overflow-hidden">
              <img :src="imageSrc" :alt="`${t('imageColorPicker.imageNames.image' + (index + 1))}`" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
            </div>
            
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <!-- 鼠标悬停时显示提取的颜色 -->
              <div class="transition-all duration-300 overflow-hidden max-h-0 group-hover:max-h-28 mb-3">
                <div class="flex h-8 rounded-lg overflow-hidden mb-2 shadow-md">
                  <div 
                    v-for="(color, colorIndex) in extractedColorsMap[index] || []" 
                    :key="colorIndex" 
                    class="flex-1 h-full transform hover:scale-105 transition-transform duration-300" 
                    :style="{ backgroundColor: color }"
                  ></div>
                  <div 
                    v-if="!extractedColorsMap[index] || extractedColorsMap[index].length === 0"
                    class="w-full h-full flex items-center justify-center bg-gray-800"
                  >
                    <UIcon v-if="isExtractingMap[index]" name="i-heroicons-arrow-path" class="animate-spin text-white h-4 w-4" />
                    <span v-else class="text-xs text-white/60">{{ $t('app.imageColorPicker.hoverToExtract') }}</span>
                  </div>
                </div>
                <!-- 优化颜色值显示 -->
                <div v-if="extractedColorsMap[index] && extractedColorsMap[index].length > 0" class="flex flex-wrap gap-1 mb-3">
                  <div 
                    v-for="(color, colorIndex) in extractedColorsMap[index]" 
                    :key="colorIndex"
                    class="px-2 py-1 rounded-md text-xs font-mono text-white font-medium bg-gradient-to-r from-[#4ade80]/80 to-[#4ade80]/60 backdrop-blur-md border border-[#4ade80]/40 hover:shadow-md hover:shadow-[#4ade80]/20 cursor-pointer transition-all duration-300 transform hover:scale-105"
                    @click="copyColorToClipboard(color)"
                  >
                    {{ color }}
                  </div>
                </div>
              </div>
              
              <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
                <a
                  :href="localePath('/image-color-picker')"
                  class="py-1.5 px-4 rounded-full text-center text-sm font-medium text-white bg-gradient-to-r from-[#62C751] to-[#56BE46] border border-[#7FD670]/20 shadow-sm hover:shadow hover:shadow-[#62C751]/20 transform hover:translate-y-[-1px] transition-all duration-300 flex items-center justify-center gap-1.5"
                >
                  <UIcon name="i-heroicons-photo" class="w-3.5 h-3.5" />
                  {{ $t('home.startExtracting') }}
                </a>
              </div>
            </div>
            
            <!-- 装饰元素 -->
            <div class="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-[#4ade80]/30 to-[#4ade80]/10 rounded-xl rotate-12 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="absolute -bottom-8 -left-4 w-16 h-16 bg-gradient-to-br from-[#4ade80]/20 to-[#4ade80]/5 rounded-xl -rotate-12 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          <!-- 卡片标题 - 移到卡片外部底部 -->
          <h3 class="text-lg font-semibold text-center group-hover:text-[#4ade80] transition-colors duration-300">
            {{ $t('imageColorPicker.imageNames.image' + (index + 1)) }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, onUnmounted } from 'vue';
import { getSampleImages, getImageBase64 } from '~/layers/image-color-picker/utils/image-color-picker.util';
import { prominent } from 'color.js';

const localePath = useLocalePath();
const { t } = useI18n();
const router = useRouter();
const notifications = useNotifications();

const toolsContainer = ref<HTMLElement | null>(null);
const canScrollLeft = ref(false);
const canScrollRight = ref(false);

// 示例图片
const sampleImages = getSampleImages();

// 存储每张图片的提取颜色
const extractedColorsMap = reactive<Record<number, string[]>>({});
const isExtractingMap = reactive<Record<number, boolean>>({});

// 为特定图片提取颜色
async function extractColorsForImage(imageSrc: string, index: number) {
  if (extractedColorsMap[index] || isExtractingMap[index]) return;
  
  isExtractingMap[index] = true;
  try {
    const imageBase64 = await getImageBase64(imageSrc);
    if (imageBase64) {
      const colors = await prominent(imageBase64, {
        amount: 5,
        format: 'hex'
      }) as string[];
      extractedColorsMap[index] = colors;
    }
  } catch (error) {
    console.error('Error extracting colors:', error);
  } finally {
    isExtractingMap[index] = false;
  }
}

// 复制颜色到剪贴板
function copyColorToClipboard(color: string) {
  navigator.clipboard.writeText(color)
    .then(() => {
      notifications.addSuccess(color, t('app.copied'));
    })
    .catch(() => {
      notifications.addError(t('app.copyError'));
    });
}

// 使用当前图片
async function useImageSample(imageSrc: string) {
  try {
    const { mutate: create } = useCreatePalette();
    
    // 提取颜色
    const imageBase64 = await getImageBase64(imageSrc);
    if (!imageBase64) return;
    
    const colors = await prominent(imageBase64, {
      amount: 5,
      format: 'hex'
    }) as string[];
    
    if (colors.length > 0) {
      create({ prompt: colors.toString() }, {
        onSuccess: (value) => {
          router.push(localePath(`/palette/${value.id}`));
        },
        onError: (err) => {
          notifications.addError(err.message ?? 'Error creating palette.');
        }
      });
    }
  } catch (error) {
    console.error('Error using image:', error);
  }
}

// 检查是否可以滚动
function updateScrollButtons(): void {
  if (!toolsContainer.value) return;
  
  const container = toolsContainer.value;
  canScrollLeft.value = container.scrollLeft > 0;
  canScrollRight.value = container.scrollLeft < container.scrollWidth - container.clientWidth;
}

// 滚动控制
function scrollLeft(): void {
  if (!toolsContainer.value) return;
  toolsContainer.value.scrollBy({ left: -320, behavior: 'smooth' });
}

function scrollRight(): void {
  if (!toolsContainer.value) return;
  toolsContainer.value.scrollBy({ left: 320, behavior: 'smooth' });
}

onMounted(() => {
  updateScrollButtons();
  if (toolsContainer.value) {
    toolsContainer.value.addEventListener('scroll', updateScrollButtons);
    // 监听窗口大小变化
    window.addEventListener('resize', updateScrollButtons);
  }
});

onUnmounted(() => {
  if (toolsContainer.value) {
    toolsContainer.value.removeEventListener('scroll', updateScrollButtons);
  }
  window.removeEventListener('resize', updateScrollButtons);
});
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>