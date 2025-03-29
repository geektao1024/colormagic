<template>
  <!-- 调色板预览组件 -->
  <div class="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl shadow-orange-500/5 transform hover:scale-[1.02] transition-all duration-500">
    <div class="grid grid-cols-5 gap-3 mb-6">
      <div class="h-20 rounded-lg bg-[#FF5F6D] shadow-lg shadow-[#FF5F6D]/20 transform hover:scale-105 transition-transform duration-300"></div>
      <div class="h-20 rounded-lg bg-[#FF8C61] shadow-lg shadow-[#FF8C61]/20 transform hover:scale-105 transition-transform duration-300"></div>
      <div class="h-20 rounded-lg bg-[#FFA75F] shadow-lg shadow-[#FFA75F]/20 transform hover:scale-105 transition-transform duration-300"></div>
      <div class="h-20 rounded-lg bg-[#FFC371] shadow-lg shadow-[#FFC371]/20 transform hover:scale-105 transition-transform duration-300"></div>
      <div class="h-20 rounded-lg bg-[#FFE17D] shadow-lg shadow-[#FFE17D]/20 transform hover:scale-105 transition-transform duration-300"></div>
    </div>
    <div class="h-10 w-full bg-white/5 backdrop-blur-sm rounded-lg mb-6 border border-white/10"></div>
    <div class="flex items-center justify-between">
      <div class="flex space-x-3">
        <div class="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10 hover:bg-white/20 transition-colors duration-300 cursor-pointer">
          <UIcon name="i-heroicons-plus" class="h-4 w-4 text-white/70" />
        </div>
        <div class="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10 hover:bg-white/20 transition-colors duration-300 cursor-pointer">
          <UIcon name="i-heroicons-minus" class="h-4 w-4 text-white/70" />
        </div>
      </div>
      <div class="px-5 py-2 bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] rounded-lg text-xs font-medium hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 transform hover:translate-y-[-2px] cursor-pointer">
        EXPORT
      </div>
    </div>
    
    <!-- 悬浮元素 -->
    <div class="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-[#FF5F6D] to-[#FF8C61] rounded-xl rotate-12 shadow-lg animate-float-slow"></div>
    <div class="absolute -bottom-8 -left-4 w-16 h-16 bg-gradient-to-br from-[#FFA75F] to-[#FFC371] rounded-xl -rotate-12 shadow-lg animate-float"></div>
  </div>
</template>

<script setup lang="ts">
// 如果需要额外的功能，可以在此处添加
</script>

<style scoped>
/* 自定义动画 */
@keyframes float {
  0% { transform: translateY(0px) rotate(-12deg); }
  50% { transform: translateY(-10px) rotate(-8deg); }
  100% { transform: translateY(0px) rotate(-12deg); }
}

@keyframes float-slow {
  0% { transform: translateY(0px) rotate(12deg); }
  50% { transform: translateY(-15px) rotate(15deg); }
  100% { transform: translateY(0px) rotate(12deg); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}
</style> 