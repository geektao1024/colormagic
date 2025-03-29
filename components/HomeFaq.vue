<template>
  <section class="py-20 px-6">
    <div class="container mx-auto max-w-4xl">
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-sm text-white/70 mb-4">
          {{ $t('home.faq.title') }}
        </span>
        <h2 class="text-4xl font-bold">
          {{ $t('home.faq.title') }} <span class="bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent">{{ $t('home.faq.title') }}</span>
        </h2>
      </div>
      
      <div class="space-y-6">
        <div v-for="(item, index) in faqItems" :key="index" 
             class="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-[#FF5F6D]/50 transition-all duration-500 overflow-hidden">
          <div class="flex justify-between items-start">
            <h3 class="text-xl font-semibold group-hover:text-[#FF5F6D] transition-colors duration-300">{{ item.question }}</h3>
            <div class="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-[#FF5F6D]/20 transition-colors duration-300">
              <UIcon name="i-heroicons-chevron-down" class="h-5 w-5 text-white/70 group-hover:text-[#FF5F6D]" />
            </div>
          </div>
          <p class="text-white/60 mt-4 leading-relaxed">
            {{ item.answer }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();

const faqItems = computed(() => [
  {
    question: t('home.faq.question1'),
    answer: t('home.faq.answer1')
  },
  {
    question: t('home.faq.question2'),
    answer: t('home.faq.answer2')
  },
  {
    question: t('home.faq.question3'),
    answer: t('home.faq.answer3')
  },
  {
    question: t('home.faq.question4'),
    answer: t('home.faq.answer4')
  },
  {
    question: t('home.faq.question5'),
    answer: t('home.faq.answer5')
  }
]);
</script> 