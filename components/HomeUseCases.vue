<template>
  <section class="py-20 px-6 relative bg-gradient-to-b from-[#111827]/0 to-[#111827]/80">
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#FF5F6D]/5 to-[#FFC371]/5 rounded-full blur-[100px] -z-10"></div>
    
    <div class="container mx-auto max-w-6xl">
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-sm text-white/70 mb-4">
          {{ $t('home.useCases.title') }}
        </span>
        <h2 class="text-4xl font-bold">
          <span class="bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent">{{ $t('home.useCases.titleHighlight') }}</span> {{ $t('home.useCases.title') }}
        </h2>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(useCase, index) in useCases" :key="index" 
             class="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-[#FF5F6D]/50 transition-all duration-500 overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-[#FF5F6D]/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="w-12 h-12 bg-gradient-to-br from-[#FF5F6D]/20 to-[#FF5F6D]/30 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#FF5F6D]/20 transition-all duration-500">
            <UIcon :name="getIconForIndex(index)" class="h-6 w-6 text-[#FF5F6D]" />
          </div>
          <h3 class="text-xl font-semibold mb-3 group-hover:text-[#FF5F6D] transition-colors duration-300">{{ useCase.title }}</h3>
          <p class="text-white/60 leading-relaxed">
            {{ useCase.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();

const useCases = computed(() => [
  {
    title: t('home.useCases.case1.title'),
    description: t('home.useCases.case1.description')
  },
  {
    title: t('home.useCases.case2.title'),
    description: t('home.useCases.case2.description')
  },
  {
    title: t('home.useCases.case3.title'),
    description: t('home.useCases.case3.description')
  },
  {
    title: t('home.useCases.case4.title'),
    description: t('home.useCases.case4.description')
  },
  {
    title: t('home.useCases.case5.title'),
    description: t('home.useCases.case5.description')
  },
  {
    title: t('home.useCases.case6.title'),
    description: t('home.useCases.case6.description')
  }
]);

// 根据索引返回不同的图标
const getIconForIndex = (index: number) => {
  const icons = [
    'i-heroicons-paint-brush',
    'i-heroicons-computer-desktop',
    'i-heroicons-photo',
    'i-heroicons-user-group',
    'i-heroicons-academic-cap', 
    'i-heroicons-pencil-square'
  ];
  return icons[index % icons.length];
};
</script> 