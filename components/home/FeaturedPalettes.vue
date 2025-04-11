<template>
  <div class="mb-16 mx-1">
    <div class="flex justify-between items-center mb-8">
      <h2 class="text-2xl font-bold flex items-center gap-3">
        <UIcon name="i-heroicons-star" class="w-6 h-6 text-[#FFC371]" />
        <span>{{ $t('home.featuredPalettes') }}</span>
      </h2>
      <UButton
        :to="localePath('/explore')"
        variant="link"
        class="text-white/70 hover:text-white flex items-center gap-1 transition-colors duration-300"
      >
        <span>{{ $t('home.viewMore') }}</span>
        <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
      </UButton>
    </div>
    
    <!-- 调色板卡片容器 -->
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
      
      <!-- 调色板卡片 - 水平滚动 -->
      <div 
        ref="palettesContainer"
        class="flex overflow-x-auto pb-6 hide-scrollbar snap-x snap-mandatory"
      >
        <div 
          v-for="(palette, index) in featuredPalettes" 
          :key="index"
          class="group snap-start flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3 first:pl-0 last:pr-0"
        >
          <div class="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/30 hover:shadow-lg transition-all duration-500">
            <!-- 顶部区域：调色板名称和操作按钮 -->
            <div class="flex justify-between items-center mb-3">
              <h3 class="text-white font-medium text-xl">{{ palette.name }}</h3>
              <div class="flex space-x-2">
                <UButton
                  icon="i-heroicons-heart"
                  color="white"
                  variant="ghost"
                  size="xs"
                  :ui="{
                    base: 'bg-white/15 hover:bg-white/25 transition-colors duration-300',
                    rounded: 'rounded-full',
                    padding: { xs: 'p-2' }
                  }"
                  @click="toggleLike(index)"
                />
                <UButton
                  icon="i-heroicons-clipboard"
                  color="white"
                  variant="ghost"
                  size="xs"
                  :ui="{
                    base: 'bg-white/15 hover:bg-white/25 transition-colors duration-300',
                    rounded: 'rounded-full',
                    padding: { xs: 'p-2' }
                  }"
                  @click="copyPalette(palette)"
                />
              </div>
            </div>
            
            <!-- 色块布局 -->
            <div class="grid grid-cols-5 gap-0 mb-4 overflow-hidden rounded-lg">
              <div 
                v-for="(color, colorIndex) in palette.colors" 
                :key="colorIndex"
                class="flex flex-col items-center"
              >
                <div 
                  class="w-full h-28 transform hover:scale-105 transition-transform duration-300 mb-2"
                  :style="{
                    backgroundColor: color
                  }"
                  @click="copyColor(color)"
                ></div>
                <span class="text-xs text-white/70 font-mono">{{ color }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

interface ColorPalette {
  name: string;
  colors: string[];
  liked?: boolean;
}

const localePath = useLocalePath();
const { t } = useI18n();
const toast = useToast();

// 滚动控制
const palettesContainer = ref<HTMLElement | null>(null);
const canScrollLeft = ref(false);
const canScrollRight = ref(false);

// 精选调色板数据
const featuredPalettes = computed<ColorPalette[]>(() => [
  {
    name: t('home.palettes.sunset'),
    colors: ['#FF5F6D', '#FF8C61', '#FFA75F', '#FFC371', '#FFE17D'],
    liked: false
  },
  {
    name: t('home.palettes.ocean'),
    colors: ['#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50'],
    liked: false
  },
  {
    name: t('home.palettes.violet'),
    colors: ['#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4'],
    liked: false
  },
  {
    name: 'Polar Night',
    colors: ['#2E3440', '#3B4252', '#434C5E', '#4C566A'],
    liked: false
  }
]);

// 复制颜色到剪贴板
function copyColor(color: string): void {
  navigator.clipboard.writeText(color).then(() => {
    toast.add({
      title: t('home.colorCopied'),
      description: color,
      icon: 'i-heroicons-check-circle',
      color: 'green',
      timeout: 2000
    });
  });
}

// 切换喜欢状态
function toggleLike(index: number): void {
  featuredPalettes.value[index].liked = !featuredPalettes.value[index].liked;
  
  // 在实际应用中，这里可能需要调用API来保存喜欢状态
  const palette = featuredPalettes.value[index];
  const action = palette.liked ? t('home.addedToFavorites') : t('home.removedFromFavorites');
  
  toast.add({
    title: action,
    description: palette.name,
    icon: palette.liked ? 'i-heroicons-heart' : 'i-heroicons-heart',
    color: palette.liked ? 'rose' : 'gray',
    timeout: 2000
  });
}

// 复制整个调色板
function copyPalette(palette: ColorPalette): void {
  const colorCodes = palette.colors.join(', ');
  navigator.clipboard.writeText(colorCodes).then(() => {
    toast.add({
      title: t('home.paletteCopied'),
      description: palette.name,
      icon: 'i-heroicons-clipboard-document-check',
      color: 'green',
      timeout: 2000
    });
  });
}

// 检查是否可以滚动
function updateScrollButtons(): void {
  if (!palettesContainer.value) return;
  
  const container = palettesContainer.value;
  canScrollLeft.value = container.scrollLeft > 0;
  canScrollRight.value = container.scrollLeft < container.scrollWidth - container.clientWidth;
}

// 滚动控制
function scrollLeft(): void {
  if (!palettesContainer.value) return;
  palettesContainer.value.scrollBy({ left: -320, behavior: 'smooth' });
}

function scrollRight(): void {
  if (!palettesContainer.value) return;
  palettesContainer.value.scrollBy({ left: 320, behavior: 'smooth' });
}

onMounted(() => {
  updateScrollButtons();
  if (palettesContainer.value) {
    palettesContainer.value.addEventListener('scroll', updateScrollButtons);
    // 监听窗口大小变化
    window.addEventListener('resize', updateScrollButtons);
  }
});

onUnmounted(() => {
  if (palettesContainer.value) {
    palettesContainer.value.removeEventListener('scroll', updateScrollButtons);
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