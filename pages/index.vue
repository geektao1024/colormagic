<template>
  <div class="text-white">
    <!-- Hero Section -->
    <section class="pt-32 pb-20 px-6 relative overflow-hidden">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-[#FF5F6D]/20 to-[#FFC371]/5 rounded-full blur-[120px] -z-10"></div>
      <div class="container mx-auto max-w-6xl relative">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-8">
            <div class="inline-block px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-sm text-white/70 mb-2">
              AI-Powered Color Solutions
            </div>
            <h1 class="text-5xl md:text-6xl font-bold leading-tight">
              <span class="bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent">{{ $t('home.hero.professional') }}</span> 
              <br>{{ $t('home.hero.studio') }}
            </h1>
            <p class="text-white/70 text-lg max-w-lg leading-relaxed">
              {{ $t('home.hero.description') }}
            </p>
            <div class="flex flex-wrap gap-5 pt-4">
              <UButton
                :to="localePath('/palette-generator')"
                class="group relative px-8 py-3 bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] rounded-full text-white font-medium overflow-hidden shadow-lg shadow-orange-500/20 transform hover:translate-y-[-2px] transition-all duration-300"
              >
                <span class="relative z-10">{{ $t('home.hero.createButton') }}</span>
                <span class="absolute inset-0 bg-gradient-to-r from-[#FFC371] to-[#FF5F6D] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </UButton>
              <UButton
                :to="localePath('/palette/explore')"
                class="px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full text-white font-medium hover:bg-white/10 transition-all duration-300"
              >
                {{ $t('home.hero.exploreButton') }}
              </UButton>
            </div>
          </div>
          <div class="relative">
            <div class="absolute -top-20 -right-20 w-64 h-64 bg-[#FF5F6D]/20 rounded-full blur-[80px]"></div>
            <div class="absolute -bottom-10 -left-10 w-48 h-48 bg-[#FFC371]/20 rounded-full blur-[60px]"></div>
            
            <!-- 使用独立的调色板预览组件 -->
            <HomePalettePreview />
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <HomeFeatures />

    <!-- Tools Section -->
    <HomeTools />

    <!-- Use Cases Section -->
    <HomeUseCases />

    <!-- CTA Section -->
    <section class="py-20 px-6 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-[#FF5F6D]/20 to-[#FFC371]/20 blur-3xl opacity-50"></div>
      <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div class="container mx-auto max-w-4xl relative">
        <div class="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/10 shadow-2xl shadow-orange-500/5 text-center">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
            {{ $t('home.cta.title') }}
          </h2>
          <p class="text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            {{ $t('home.cta.description') }}
          </p>
          <div class="flex flex-wrap justify-center gap-6">
            <UButton
              :to="localePath('/palette-generator')"
              class="group relative px-8 py-4 bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] rounded-full text-white font-medium overflow-hidden shadow-lg shadow-orange-500/20 transform hover:translate-y-[-2px] transition-all duration-300"
            >
              <span class="relative z-10">{{ $t('home.cta.tryButton') }}</span>
              <span class="absolute inset-0 bg-gradient-to-r from-[#FFC371] to-[#FF5F6D] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </UButton>
            <UButton
              :to="localePath('/palette/explore')"
              class="px-8 py-4 bg-white/5 backdrop-blur-sm rounded-full text-white font-medium hover:bg-white/10 transition-all duration-300 transform hover:translate-y-[-2px]"
            >
              {{ $t('home.cta.exploreButton') }}
            </UButton>
          </div>
          
          <!-- 装饰元素 -->
          <div class="absolute -top-10 -right-10 w-40 h-40 bg-[#FFC371]/20 rounded-full blur-[60px]"></div>
          <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-[#FF5F6D]/20 rounded-full blur-[60px]"></div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <HomeFaq />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

// SEO配置
useHead({
  title: t('home.seo.title'),
  meta: [
    {
      name: 'description',
      content: t('home.seo.description')
    },
    {
      name: 'keywords',
      content: 'Color Magic AI design studio, Professional ColorMagic palette creator, Designer-grade color harmonies, Color theory generator, Context-aware palette system, Design-specific color schemes, Color Magic for professionals, WCAG color accessibility tool, Brand color system generator'
    },
    {
      name: 'author',
      content: 'ColorMagic Team'
    },
    {
      property: 'og:title',
      content: t('home.seo.ogTitle')
    },
    {
      property: 'og:description',
      content: t('home.seo.ogDescription')
    },
    {
      property: 'og:image',
      content: `${useRuntimeConfig().public.siteUrl}/img/og.png`
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: `${useRuntimeConfig().public.siteUrl}`
    },
    {
      property: 'og:site_name',
      content: 'Color Magic - Your Professional AI Palette Studio'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: t('home.seo.ogTitle')
    },
    {
      name: 'twitter:description',
      content: t('home.seo.ogDescription')
    },
    {
      name: 'twitter:image',
      content: `${useRuntimeConfig().public.siteUrl}/img/og.png`
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: `${useRuntimeConfig().public.siteUrl}`
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        'name': 'Color Magic - Your Professional AI Palette Studio',
        'url': 'https://colormagic.club',
        'description': t('home.seo.description'),
        'potentialAction': {
          '@type': 'SearchAction',
          'target': 'https://colormagic.club/search?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        },
        'creator': {
          '@type': 'Organization',
          'name': 'ColorMagic Team',
          'email': 'contact@colormagic.club',
          'sameAs': [
            'https://instagram.com/colormagic.club'
          ]
        },
        'offers': {
          '@type': 'Offer',
          'category': 'Design Tool / Creative Color Solution',
          'description': 'Color Magic offers designer-grade palette creation using advanced AI technology. Unlike basic generators, our studio provides professional color harmonies with real-time design application previews and expert color theory integration.'
        }
      })
    }
  ]
});
</script>

<style scoped>
/* 自定义容器类样式 */
:deep(.home-section-container) {
  @apply container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
</style>
