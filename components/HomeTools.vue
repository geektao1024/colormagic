<template>
  <section class="py-20 px-6 relative">
    <div class="container mx-auto max-w-6xl">
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-sm text-white/70 mb-4">
          {{ $t('home.tools.title') }}
        </span>
        <h2 class="text-4xl font-bold">
          {{ $t('home.tools.titleHighlight') }} <span class="bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent">{{ $t('home.tools.title') }}</span>
        </h2>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="(tool, index) in tools" :key="index" class="group relative">
          <div class="h-[280px] rounded-2xl mb-6 overflow-hidden relative transition-all duration-500 group-hover:shadow-xl group-hover:shadow-[#FF5F6D]/20 group-hover:scale-[1.02]"
               :class="tool.gradientClass">
            <div class="absolute inset-0 bg-gradient-to-br" :class="tool.overlayClass"></div>
            <div class="absolute inset-0 flex flex-col items-center justify-center p-8">
              <div class="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/20">
                <UIcon :name="tool.icon" class="h-8 w-8 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-white mb-2">{{ tool.title }}</h3>
              <p class="text-white/80 text-center max-w-md">
                {{ tool.shortDescription }}
              </p>
            </div>
            
            <!-- 装饰元素 -->
            <div class="absolute -top-6 -right-6 w-24 h-24 bg-white/10 backdrop-blur-md rounded-full"></div>
            <div class="absolute bottom-10 -left-10 w-32 h-32 bg-white/5 backdrop-blur-md rounded-full"></div>
          </div>
          <p class="text-white/70 mb-5 px-2">
            {{ tool.description }}
          </p>
          <UButton
            :to="localePath(tool.link)"
            class="ml-2 px-6 py-3 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-2px]"
            :class="tool.buttonClass"
          >
            {{ $t('home.tools.startButton') }}
          </UButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const tools = computed(() => [
  {
    title: t('home.tools.tool1.title'),
    description: t('home.tools.tool1.description'),
    shortDescription: t('home.tools.tool1.shortDescription'),
    link: '/palette-generator',
    gradientClass: 'bg-gradient-to-br from-[#FF5F6D] to-[#FF8C61]',
    overlayClass: 'from-[#FF5F6D]/80 to-[#FF8C61]/90',
    buttonClass: 'bg-gradient-to-r from-[#FF5F6D] to-[#FF8C61]',
    icon: 'i-heroicons-beaker'
  },
  {
    title: t('home.tools.tool2.title'),
    description: t('home.tools.tool2.description'),
    shortDescription: t('home.tools.tool2.shortDescription'),
    link: '/image-color-picker',
    gradientClass: 'bg-gradient-to-br from-[#FFA75F] to-[#FFC371]',
    overlayClass: 'from-[#FFA75F]/80 to-[#FFC371]/90',
    buttonClass: 'bg-gradient-to-r from-[#FFA75F] to-[#FFC371]',
    icon: 'i-heroicons-photo'
  },
  {
    title: t('home.tools.tool3.title'),
    description: t('home.tools.tool3.description'),
    shortDescription: t('home.tools.tool3.shortDescription'),
    link: '/contrast-checker',
    gradientClass: 'bg-gradient-to-br from-[#4CAF50] to-[#8BC34A]',
    overlayClass: 'from-[#4CAF50]/80 to-[#8BC34A]/90',
    buttonClass: 'bg-gradient-to-r from-[#4CAF50] to-[#8BC34A]',
    icon: 'i-heroicons-shield-check'
  },
  {
    title: t('home.tools.tool4.title'),
    description: t('home.tools.tool4.description'),
    shortDescription: t('home.tools.tool4.shortDescription'),
    link: '/random-color',
    gradientClass: 'bg-gradient-to-br from-[#2196F3] to-[#03A9F4]',
    overlayClass: 'from-[#2196F3]/80 to-[#03A9F4]/90',
    buttonClass: 'bg-gradient-to-r from-[#2196F3] to-[#03A9F4]',
    icon: 'i-heroicons-sparkles'
  }
]);
</script> 