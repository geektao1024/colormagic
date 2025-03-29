<template>
  <div class="mb-16 mx-1">
    <div class="flex justify-between items-center mb-8">
      <h2 class="text-2xl font-bold flex items-center gap-3">
        <UIcon name="i-heroicons-clock" class="w-6 h-6 text-[#FF8C61]" />
        <span>{{ $t('home.recentActivity') }}</span>
      </h2>
    </div>
    
    <!-- 如果有最近活动 -->
    <div v-if="recentPalettes?.length" class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="palette in recentPalettes"
        :key="palette.id"
        class="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/10 hover:border-white/30 transition-all duration-300"
      >
        <div class="flex flex-col">
          <div class="flex flex-wrap gap-1 mb-3">
            <div
              v-for="(color, index) in palette.colors"
              :key="index"
              class="w-8 h-8 rounded-md cursor-pointer transform hover:scale-110 transition-transform duration-300"
              :style="{ backgroundColor: color }"
              @click="copyColor(color)"
            ></div>
          </div>
          <div class="flex items-center justify-between">
            <div>
              <h3 class="font-medium text-white">{{ palette.name }}</h3>
              <p class="text-xs text-white/50">
                {{ $t('home.createdAt') }}: {{ formatDate(palette.createdAt) }}
              </p>
            </div>
            <div class="flex space-x-2">
              <UButton
                icon="i-heroicons-pencil-square"
                color="white"
                variant="ghost"
                size="xs"
                :ui="{
                  base: 'hover:bg-white/10 transition-colors duration-300',
                  rounded: 'rounded-full',
                  padding: { xs: 'p-2' }
                }"
                :to="localePath(`/palette/${palette.id}`)"
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
      
      <div v-if="recentPalettes.length > 0 && recentPalettes.length < 4" class="md:col-span-2 mt-4 text-center">
        <UButton
          :to="localePath('/palette-generator')"
          variant="soft"
          color="primary"
          class="mx-auto"
        >
          {{ $t('home.createMorePalettes') }}
        </UButton>
      </div>
    </div>
    
    <!-- 如果没有最近活动 -->
    <div
      v-else
      class="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 text-center"
    >
      <div class="w-16 h-16 bg-white/5 rounded-full mx-auto flex items-center justify-center mb-4">
        <UIcon name="i-heroicons-paint-brush" class="w-8 h-8 text-white/30" />
      </div>
      <h3 class="text-xl font-semibold mb-2">{{ $t('home.noPalettes.title') }}</h3>
      <p class="text-white/60 mb-6 max-w-md mx-auto">{{ $t('home.noPalettes.description') }}</p>
      <UButton
        :to="localePath('/palette-generator')"
        color="primary"
        :ui="{
          base: 'bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] hover:shadow-lg hover:shadow-[#FF5F6D]/20 transition-all duration-300 transform hover:translate-y-[-2px]',
          padding: { base: 'px-6 py-3' }
        }"
      >
        {{ $t('home.createFirstPalette') }}
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { format } from 'date-fns';

interface Palette {
  id: string;
  name: string;
  colors: string[];
  createdAt: string;
}

const localePath = useLocalePath();
const { t } = useI18n();
const toast = useToast();

// 获取最近创建的调色板
// 在实际应用中应该通过API获取数据
const { data: recentPalettes } = await useFetch<Palette[]>('/api/palette/recent');

// 格式化日期
function formatDate(dateString: string): string {
  return format(new Date(dateString), 'yyyy-MM-dd HH:mm');
}

// 复制颜色
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

// 复制整个调色板
function copyPalette(palette: Palette): void {
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