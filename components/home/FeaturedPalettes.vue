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
    
    <!-- 调色板卡片网格 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="(palette, index) in featuredPalettes" 
        :key="index"
        class="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/30 hover:shadow-lg transition-all duration-500"
      >
        <div class="grid grid-cols-5 gap-2 mb-4">
          <div 
            v-for="(color, colorIndex) in palette.colors" 
            :key="colorIndex"
            class="h-12 rounded-md shadow-sm transform hover:scale-110 transition-transform duration-300"
            :style="{
              backgroundColor: color,
              boxShadow: `0 1px 2px ${color}20`
            }"
            @click="copyColor(color)"
          ></div>
        </div>
        <div class="flex items-center justify-between">
          <h3 class="text-white font-medium">{{ palette.name }}</h3>
          <div class="flex space-x-2">
            <UButton
              icon="i-heroicons-heart"
              color="white"
              variant="ghost"
              size="xs"
              :ui="{
                base: 'hover:bg-white/10 transition-colors duration-300',
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
                base: 'hover:bg-white/10 transition-colors duration-300',
                rounded: 'rounded-full',
                padding: { xs: 'p-2' }
              }"
              @click="copyPalette(palette)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface ColorPalette {
  name: string;
  colors: string[];
  liked?: boolean;
}

const localePath = useLocalePath();
const { t } = useI18n();
const toast = useToast();

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
</script> 