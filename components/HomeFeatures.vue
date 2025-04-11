<template>
  <section class="py-20 px-6 relative">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-[#FF5F6D]/10 to-[#FFC371]/10 rounded-full blur-[100px] -z-10"></div>
    <div class="container mx-auto max-w-6xl">
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-sm text-white/70 mb-4">
          {{ $t('home.features.title') }}
        </span>
        <h2 class="text-4xl font-bold">
          {{ $t('home.features.titleHighlight') }} <span class="bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent">{{ $t('home.features.title') }}</span>
        </h2>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(feature, index) in features" :key="index" 
             class="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-[#FF5F6D]/50 transition-all duration-500 overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-[#FF5F6D]/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="relative">
            <div class="w-14 h-14 bg-gradient-to-br from-[#FF5F6D]/20 to-[#FF5F6D]/30 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#FF5F6D]/20 transition-all duration-500">
              <UIcon :name="feature.icon" class="h-7 w-7 text-[#FF5F6D]" />
            </div>
            <h3 class="text-xl font-semibold mb-3 group-hover:text-[#FF5F6D] transition-colors duration-300">{{ feature.title }}</h3>
            <p class="text-white/60 leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();

const features = computed(() => [
  {
    icon: 'i-heroicons-swatch',
    title: t('home.features.feature1.title'),
    description: t('home.features.feature1.description')
  },
  {
    icon: 'i-heroicons-light-bulb',
    title: t('home.features.feature2.title'),
    description: t('home.features.feature2.description')
  },
  {
    icon: 'i-heroicons-eye',
    title: t('home.features.feature3.title'),
    description: t('home.features.feature3.description')
  },
  {
    icon: 'i-heroicons-check-badge',
    title: t('home.features.feature4.title'),
    description: t('home.features.feature4.description')
  },
  {
    icon: 'i-heroicons-document-arrow-down',
    title: t('home.features.feature5.title'),
    description: t('home.features.feature5.description')
  },
  {
    icon: 'i-heroicons-squares-2x2',
    title: t('home.features.feature6.title'),
    description: t('home.features.feature6.description')
  }
]);
</script> 