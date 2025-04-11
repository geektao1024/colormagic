<template>
  <div class="relative overflow-hidden rounded-2xl mb-8 mx-1">
    <!-- 左右箭头导航 - 调整位置，避免遮挡内容 -->
    <button 
      @click="prevSlide" 
      class="absolute left-6 top-1/2 z-10 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 border border-white/10"
    >
      <UIcon name="i-heroicons-chevron-left" class="w-6 h-6" />
    </button>
    
    <button 
      @click="nextSlide"
      class="absolute right-6 top-1/2 z-10 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 border border-white/10"
    >
      <UIcon name="i-heroicons-chevron-right" class="w-6 h-6" />
    </button>
    
    <!-- 轮播内容容器 -->
    <div 
      ref="carouselContainer" 
      class="flex transition-transform duration-500 ease-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div 
        v-for="(slide, index) in bannerSlides" 
        :key="index" 
        class="w-full flex-shrink-0 relative overflow-hidden"
      >
        <!-- 替换图片为渐变背景 -->
        <div class="relative aspect-[16/5] overflow-hidden rounded-2xl">
          <!-- 高级磨玻璃渐变背景 -->
          <div class="absolute inset-0" :class="`bg-gradient-${index}`"></div>
          
          <!-- 主要装饰元素 -->
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-[120px] opacity-30" :class="`bg-blur-${index}`"></div>
          <div class="absolute -bottom-40 -right-40 w-96 h-96 rounded-full blur-[80px] opacity-40" :class="`bg-blur-accent-${index}`"></div>
          <div class="absolute top-20 -left-20 w-80 h-80 rounded-full blur-[100px] opacity-30" :class="`bg-blur-secondary-${index}`"></div>
          
          <!-- 额外装饰元素 - 增加层次感 -->
          <div class="absolute bottom-10 left-1/4 w-32 h-32 rounded-full blur-[50px] opacity-20" :class="`bg-blur-extra1-${index}`"></div>
          <div class="absolute top-1/3 right-1/4 w-24 h-24 rounded-full blur-[40px] opacity-30" :class="`bg-blur-extra2-${index}`"></div>
          
          <!-- 磨玻璃效果覆盖层 -->
          <div class="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
          
          <!-- 波浪纹装饰 -->
          <div class="absolute bottom-0 left-0 right-0 h-24 opacity-20" :class="`bg-wave-${index}`"></div>
          
          <!-- 内容区域 - 调整内边距，避免被按钮遮挡 -->
          <div class="absolute inset-0 flex flex-col justify-center p-6 md:p-16 md:pl-24">
            <div class="max-w-2xl">
              <h2 class="text-3xl md:text-4xl font-bold mb-4" v-html="slide.titleHtml"></h2>
              <p class="text-white/80 text-lg max-w-lg mb-6 leading-relaxed">{{ slide.description }}</p>
              <div>
                <!-- 不同风格的按钮 -->
                <template v-if="index === 0">
                  <!-- 调色板风格 -->
                  <UButton
                    :to="localePath(slide.buttonLink)"
                    size="lg"
                    :ui="{
                      base: 'bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] hover:shadow-lg hover:shadow-[#FF5F6D]/20 transition-all duration-300 transform hover:translate-y-[-2px] rounded-xl',
                      padding: { lg: 'px-8 py-3' },
                      fontSize: 'text-base'
                    }"
                  >
                    <div class="flex items-center gap-2">
                      <UIcon name="i-heroicons-sparkles" class="w-5 h-5" />
                      <span>{{ slide.buttonText }}</span>
                    </div>
                  </UButton>
                </template>
                
                <template v-else-if="index === 1">
                  <!-- 随机颜色风格 -->
                  <UButton
                    :to="localePath(slide.buttonLink)"
                    size="lg"
                    :ui="{
                      base: 'bg-gradient-to-r from-[#2196F3] to-[#03A9F4] hover:shadow-lg hover:shadow-[#2196F3]/20 transition-all duration-300 transform hover:translate-y-[-2px] rounded-full',
                      padding: { lg: 'px-8 py-3' },
                      fontSize: 'text-base'
                    }"
                  >
                    <div class="flex items-center gap-2">
                      <UIcon name="i-heroicons-arrows-right-left" class="w-5 h-5" />
                      <span>{{ slide.buttonText }}</span>
                    </div>
                  </UButton>
                </template>
                
                <template v-else-if="index === 2">
                  <!-- 图像提取风格 -->
                  <UButton
                    :to="localePath(slide.buttonLink)"
                    size="lg"
                    :ui="{
                      base: 'bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] hover:shadow-lg hover:shadow-[#4CAF50]/20 transition-all duration-300 transform hover:translate-y-[-2px] rounded-lg',
                      padding: { lg: 'px-8 py-3' },
                      fontSize: 'text-base'
                    }"
                  >
                    <div class="flex items-center gap-2">
                      <UIcon name="i-heroicons-photo" class="w-5 h-5" />
                      <span>{{ slide.buttonText }}</span>
                    </div>
                  </UButton>
                </template>
                
                <template v-else>
                  <!-- 对比检查风格 -->
                  <UButton
                    :to="localePath(slide.buttonLink)"
                    size="lg"
                    :ui="{
                      base: 'bg-gradient-to-r from-[#9C27B0] to-[#673AB7] hover:shadow-lg hover:shadow-[#9C27B0]/20 transition-all duration-300 transform hover:translate-y-[-2px] rounded-xl',
                      padding: { lg: 'px-8 py-3' },
                      fontSize: 'text-base'
                    }"
                  >
                    <div class="flex items-center gap-2">
                      <UIcon name="i-heroicons-check-circle" class="w-5 h-5" />
                      <span>{{ slide.buttonText }}</span>
                    </div>
                  </UButton>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 轮播指示器 - 改进样式 -->
    <div class="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
      <button 
        v-for="(_, index) in bannerSlides" 
        :key="index"
        @click="goToSlide(index)"
        class="w-2.5 h-2.5 rounded-full transition-all duration-300"
        :class="[
          index === currentIndex ? 'scale-125' : 'bg-white/30 hover:bg-white/50',
          index === 0 ? (index === currentIndex ? 'bg-[#FF5F6D]' : 'hover:bg-[#FF5F6D]/50') : '',
          index === 1 ? (index === currentIndex ? 'bg-[#2196F3]' : 'hover:bg-[#2196F3]/50') : '',
          index === 2 ? (index === currentIndex ? 'bg-[#4CAF50]' : 'hover:bg-[#4CAF50]/50') : '',
          index === 3 ? (index === currentIndex ? 'bg-[#9C27B0]' : 'hover:bg-[#9C27B0]/50') : ''
        ]"
      ></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

interface BannerSlide {
  title: string;
  titleHtml: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const localePath = useLocalePath();
const { t } = useI18n();

const currentIndex = ref(0);
const carouselContainer = ref(null);
const autoplayInterval = ref<ReturnType<typeof setInterval> | null>(null);

// 轮播内容
const bannerSlides = computed(() => [
  {
    title: t('home.banner.palette.title'),
    titleHtml: t('home.banner.palette.titleHtml'),
    description: t('home.banner.palette.description'),
    buttonText: t('home.banner.palette.buttonText'),
    buttonLink: '/palette-generator'
  },
  {
    title: t('home.banner.random.title'),
    titleHtml: t('home.banner.random.titleHtml'),
    description: t('home.banner.random.description'),
    buttonText: t('home.banner.random.buttonText'),
    buttonLink: '/random-color'
  },
  {
    title: t('home.banner.image.title'),
    titleHtml: t('home.banner.image.titleHtml'),
    description: t('home.banner.image.description'),
    buttonText: t('home.banner.image.buttonText'),
    buttonLink: '/image-color-picker'
  },
  {
    title: t('home.banner.contrast.title'),
    titleHtml: t('home.banner.contrast.titleHtml'),
    description: t('home.banner.contrast.description'),
    buttonText: t('home.banner.contrast.buttonText'),
    buttonLink: '/contrast-checker'
  }
]);

// 控制轮播
function nextSlide(): void {
  currentIndex.value = (currentIndex.value + 1) % bannerSlides.value.length;
  resetAutoplay();
}

function prevSlide(): void {
  currentIndex.value = (currentIndex.value - 1 + bannerSlides.value.length) % bannerSlides.value.length;
  resetAutoplay();
}

function goToSlide(index: number): void {
  currentIndex.value = index;
  resetAutoplay();
}

// 自动播放
function startAutoplay(): void {
  autoplayInterval.value = setInterval(() => {
    nextSlide();
  }, 7000); // 进一步增加轮播间隔时间
}

function resetAutoplay(): void {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value);
  }
  startAutoplay();
}

onMounted(() => {
  startAutoplay();
});

onBeforeUnmount(() => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value);
  }
});
</script>

<style scoped>
/* 渐变背景样式 - 增强版 */
.bg-gradient-0 {
  background: linear-gradient(135deg, rgba(255, 95, 109, 0.2), rgba(255, 167, 95, 0.2), rgba(255, 195, 113, 0.2));
  background-size: 600% 600%;
  animation: gradientShift 15s ease infinite;
}
.bg-gradient-1 {
  background: linear-gradient(135deg, rgba(33, 150, 243, 0.2), rgba(0, 188, 212, 0.2), rgba(3, 169, 244, 0.2));
  background-size: 600% 600%;
  animation: gradientShift 15s ease infinite;
}
.bg-gradient-2 {
  background: linear-gradient(135deg, rgba(76, 175, 80, 0.2), rgba(139, 195, 74, 0.2), rgba(205, 220, 57, 0.2));
  background-size: 600% 600%;
  animation: gradientShift 15s ease infinite;
}
.bg-gradient-3 {
  background: linear-gradient(135deg, rgba(156, 39, 176, 0.2), rgba(103, 58, 183, 0.2), rgba(63, 81, 181, 0.2));
  background-size: 600% 600%;
  animation: gradientShift 15s ease infinite;
}

@keyframes gradientShift {
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
}

/* 模糊背景元素 - 强化版 */
.bg-blur-0 {
  background: radial-gradient(circle, rgba(255, 95, 109, 0.5), rgba(255, 95, 109, 0.1), rgba(255, 95, 109, 0));
  animation: pulsate 10s ease-in-out infinite;
}
.bg-blur-1 {
  background: radial-gradient(circle, rgba(33, 150, 243, 0.5), rgba(33, 150, 243, 0.1), rgba(33, 150, 243, 0));
  animation: pulsate 12s ease-in-out infinite;
}
.bg-blur-2 {
  background: radial-gradient(circle, rgba(76, 175, 80, 0.5), rgba(76, 175, 80, 0.1), rgba(76, 175, 80, 0));
  animation: pulsate 11s ease-in-out infinite;
}
.bg-blur-3 {
  background: radial-gradient(circle, rgba(156, 39, 176, 0.5), rgba(156, 39, 176, 0.1), rgba(156, 39, 176, 0));
  animation: pulsate 13s ease-in-out infinite;
}

.bg-blur-accent-0 {
  background: radial-gradient(circle, rgba(255, 195, 113, 0.5), rgba(255, 195, 113, 0.1), rgba(255, 195, 113, 0));
  animation: pulsate 9s ease-in-out infinite reverse;
}
.bg-blur-accent-1 {
  background: radial-gradient(circle, rgba(3, 169, 244, 0.5), rgba(3, 169, 244, 0.1), rgba(3, 169, 244, 0));
  animation: pulsate 14s ease-in-out infinite reverse;
}
.bg-blur-accent-2 {
  background: radial-gradient(circle, rgba(139, 195, 74, 0.5), rgba(139, 195, 74, 0.1), rgba(139, 195, 74, 0));
  animation: pulsate 13s ease-in-out infinite reverse;
}
.bg-blur-accent-3 {
  background: radial-gradient(circle, rgba(103, 58, 183, 0.5), rgba(103, 58, 183, 0.1), rgba(103, 58, 183, 0));
  animation: pulsate 12s ease-in-out infinite reverse;
}

.bg-blur-secondary-0 {
  background: radial-gradient(circle, rgba(255, 140, 97, 0.5), rgba(255, 140, 97, 0.1), rgba(255, 140, 97, 0));
  animation: float 20s ease-in-out infinite;
}
.bg-blur-secondary-1 {
  background: radial-gradient(circle, rgba(0, 188, 212, 0.5), rgba(0, 188, 212, 0.1), rgba(0, 188, 212, 0));
  animation: float 22s ease-in-out infinite;
}
.bg-blur-secondary-2 {
  background: radial-gradient(circle, rgba(0, 150, 136, 0.5), rgba(0, 150, 136, 0.1), rgba(0, 150, 136, 0));
  animation: float 18s ease-in-out infinite;
}
.bg-blur-secondary-3 {
  background: radial-gradient(circle, rgba(233, 30, 99, 0.5), rgba(233, 30, 99, 0.1), rgba(233, 30, 99, 0));
  animation: float 25s ease-in-out infinite;
}

/* 额外的装饰元素 */
.bg-blur-extra1-0 {
  background: radial-gradient(circle, rgba(255, 87, 34, 0.5), rgba(255, 87, 34, 0));
  animation: float 15s ease-in-out infinite alternate;
}
.bg-blur-extra1-1 {
  background: radial-gradient(circle, rgba(0, 150, 136, 0.5), rgba(0, 150, 136, 0));
  animation: float 18s ease-in-out infinite alternate;
}
.bg-blur-extra1-2 {
  background: radial-gradient(circle, rgba(255, 193, 7, 0.5), rgba(255, 193, 7, 0));
  animation: float 16s ease-in-out infinite alternate;
}
.bg-blur-extra1-3 {
  background: radial-gradient(circle, rgba(33, 150, 243, 0.5), rgba(33, 150, 243, 0));
  animation: float 17s ease-in-out infinite alternate;
}

.bg-blur-extra2-0 {
  background: radial-gradient(circle, rgba(244, 67, 54, 0.5), rgba(244, 67, 54, 0));
  animation: float 14s ease-in-out infinite alternate-reverse;
}
.bg-blur-extra2-1 {
  background: radial-gradient(circle, rgba(76, 175, 80, 0.5), rgba(76, 175, 80, 0));
  animation: float 16s ease-in-out infinite alternate-reverse;
}
.bg-blur-extra2-2 {
  background: radial-gradient(circle, rgba(139, 195, 74, 0.5), rgba(139, 195, 74, 0));
  animation: float 15s ease-in-out infinite alternate-reverse;
}
.bg-blur-extra2-3 {
  background: radial-gradient(circle, rgba(156, 39, 176, 0.5), rgba(156, 39, 176, 0));
  animation: float 17s ease-in-out infinite alternate-reverse;
}

/* 波浪纹背景 */
.bg-wave-0 {
  background: repeating-linear-gradient(45deg, rgba(255, 95, 109, 0.1) 0px, rgba(255, 195, 113, 0.1) 20px, rgba(255, 95, 109, 0.05) 20px, rgba(255, 195, 113, 0.05) 40px);
}
.bg-wave-1 {
  background: repeating-linear-gradient(45deg, rgba(33, 150, 243, 0.1) 0px, rgba(3, 169, 244, 0.1) 20px, rgba(33, 150, 243, 0.05) 20px, rgba(3, 169, 244, 0.05) 40px);
}
.bg-wave-2 {
  background: repeating-linear-gradient(45deg, rgba(76, 175, 80, 0.1) 0px, rgba(139, 195, 74, 0.1) 20px, rgba(76, 175, 80, 0.05) 20px, rgba(139, 195, 74, 0.05) 40px);
}
.bg-wave-3 {
  background: repeating-linear-gradient(45deg, rgba(156, 39, 176, 0.1) 0px, rgba(103, 58, 183, 0.1) 20px, rgba(156, 39, 176, 0.05) 20px, rgba(103, 58, 183, 0.05) 40px);
}

@keyframes pulsate {
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.05); opacity: 0.7; }
  100% { transform: scale(1); opacity: 0.5; }
}

@keyframes float {
  0% { transform: translateY(0) translateX(0); }
  25% { transform: translateY(-10px) translateX(10px); }
  50% { transform: translateY(0) translateX(20px); }
  75% { transform: translateY(10px) translateX(10px); }
  100% { transform: translateY(0) translateX(0); }
}
</style> 