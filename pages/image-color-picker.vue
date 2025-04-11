<template>
  <div class="min-h-screen bg-gradient-to-b from-[#111827] to-[#1F2937] text-white p-6">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
      <!-- 左侧工具输入区域 -->
      <div class="lg:col-span-5 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-xl relative overflow-hidden">
        <div class="absolute -top-10 -left-10 w-40 h-40 bg-[#FF5F6D]/10 rounded-full blur-[60px] -z-10"></div>
        <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-[#FFC371]/10 rounded-full blur-[60px] -z-10"></div>
        
        <div class="relative mb-3">
          <h1 class="text-2xl font-bold bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent inline-block">{{ $t('imageColorPicker.title') }}</h1>
          <div class="absolute -bottom-2 left-0 w-16 h-[2px] bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] rounded-full"></div>
        </div>
        
        <p class="text-white/70 mb-4">
          {{ $t('imageColorPicker.seoDescription') }}
        </p>
        
        <!-- 表单 -->
        <UForm
          :state="state"
          :schema="FormSchema"
          class="space-y-4"
          @submit="onSubmit"
        >
          <!-- 图片上传 -->
          <UFormGroup
            name="dataUrl"
            :label="$t('imageColorPicker.uploadPlaceholder')"
          >
            <div 
              class="relative border border-dashed border-[#444a5c] rounded-xl p-4 transition-all duration-300 hover:border-[#FF5F6D]/50 group cursor-pointer overflow-hidden mb-3 bg-[#1a1f2e]/80"
              :class="{'border-[#FF5F6D]/50 bg-[#1a1f2e]': state.dataUrl !== ''}"
              @click="fileInputRef?.click()"
            >
              <!-- Background glow effect -->
              <div class="absolute -inset-1 bg-gradient-to-r from-[#FF5F6D]/10 to-[#FFC371]/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div v-if="state.dataUrl !== ''" class="mb-2 relative">
                <img 
                  :src="state.dataUrl" 
                  class="w-full h-auto rounded-lg shadow-lg max-h-[220px] object-contain mx-auto" 
                />
                <!-- 删除按钮 -->
                <button 
                  class="absolute top-2 right-2 w-7 h-7 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-[#FF5F6D] transition-colors duration-300"
                  @click.stop="clearUploadedImage"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div v-if="state.dataUrl === ''" class="text-center py-6">
                <div class="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div class="text-[#FF5F6D] opacity-80">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                  </div>
                </div>
                <p class="text-white/70 mb-1 group-hover:text-white transition-colors duration-300">{{ $t('imageColorPicker.uploadPlaceholder') }}</p>
                <p class="text-white/50 text-sm group-hover:text-white/70 transition-colors duration-300">或点击选择图片</p>
              </div>
              
              <input
                ref="fileInputRef"
                type="file"
                accept="image/*"
                class="hidden"
                @change="handleFileChange"
              />
            </div>
          </UFormGroup>

          <!-- 提交按钮 -->
          <UButton
            type="submit"
            block
            size="xl"
            class="group relative w-full px-6 py-3 bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] rounded-lg text-white font-medium overflow-hidden shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            :loading="isPending || isFetchingImage"
            :disabled="!hasImage"
          >
            <span class="absolute inset-0 bg-gradient-to-r from-[#FFC371] to-[#FF5F6D] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span>{{ $t('generate.label') }}</span>
          </UButton>
        </UForm>

        <!-- 示例图片 -->
        <div class="mt-6 relative rounded-lg bg-transparent">
          <h3 class="text-lg font-medium mb-3 text-white">{{ $t('home.exampleLabel') }}</h3>
          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="(item, index) in getSampleImages().slice(0, 4)"
              :key="index"
              class="bg-[#1a1f2e] p-1.5 rounded-lg overflow-hidden cursor-pointer shadow-md border border-[#2c3344] hover:border-[#FF5F6D]/30 transition-all duration-300"
            >
              <img 
                :src="item" 
                :alt="`Example ${index + 1}`" 
                class="w-full h-24 object-cover rounded-md"
                :class="{ 'opacity-70': isPending || isFetchingImage }"
                @click="!isPending && !isFetchingImage && onClickExample(item)"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧结果显示区域 -->
      <div class="lg:col-span-7 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-xl relative overflow-hidden">
        <div class="absolute -top-10 -right-10 w-40 h-40 bg-[#FFC371]/10 rounded-full blur-[60px] -z-10"></div>
        <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-[#FF5F6D]/10 rounded-full blur-[60px] -z-10"></div>
        
        <!-- 结果标题 -->
        <div class="relative mb-6">
          <h2 class="text-2xl font-bold bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent inline-block">{{ $t('app.imageColorPicker.result') }}</h2>
          <div class="absolute -bottom-2 left-0 w-16 h-[2px] bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] rounded-full"></div>
        </div>

        <!-- 加载状态 -->
        <div 
          v-if="isPending || isFetchingImage" 
          class="flex flex-col items-center justify-center py-16"
        >
          <div class="w-16 h-16 bg-gradient-to-br from-[#FF5F6D]/20 to-[#FFC371]/20 rounded-full flex items-center justify-center mb-6 animate-pulse">
            <UIcon name="i-heroicons-arrow-path" class="animate-spin h-8 w-8 text-[#FF5F6D]" />
          </div>
          <p class="text-lg text-white/70">{{ $t('app.imageColorPicker.extracting') }}</p>
        </div>

        <!-- 空状态 -->
        <div 
          v-else-if="!extractedColors.length" 
          class="flex flex-col items-center justify-center py-16 bg-white/5 backdrop-blur-sm border border-dashed border-white/5 rounded-xl"
        >
          <div class="w-20 h-20 bg-gradient-to-br from-[#FF5F6D]/10 to-[#FFC371]/10 rounded-full flex items-center justify-center mb-6">
            <UIcon name="i-heroicons-photo" class="text-white/30 h-10 w-10" />
          </div>
          <p class="text-white/50 text-center max-w-xs">
            {{ $t('app.imageColorPicker.emptyState') }}
          </p>
        </div>

        <!-- 提取的颜色结果 -->
        <div v-else class="space-y-8">
          <!-- 颜色显示 -->
          <div>
            <div class="flex overflow-hidden rounded-xl mb-6 h-48 shadow-lg">
              <div
                v-for="(color, index) in extractedColors"
                :key="index"
                class="flex-1 h-full relative group"
                :style="{ backgroundColor: color }"
              >
                <!-- 颜色代码提示 -->
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 backdrop-blur-sm">
                  <span class="text-white font-mono text-sm">{{ color }}</span>
                </div>
              </div>
            </div>

            <!-- 颜色值展示 -->
            <div class="grid grid-cols-5 gap-4">
              <div
                v-for="(color, index) in extractedColors"
                :key="index"
                class="rounded-xl overflow-hidden shadow-lg"
              >
                <!-- 颜色块 -->
                <div 
                  class="relative h-24 cursor-pointer flex items-center justify-center transition-all duration-200 hover:brightness-110"
                  :style="{ backgroundColor: color }"
                  @click="copyColorToClipboard(color)"
                >
                  <!-- 复制图标 -->
                  <div class="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/20 transition-opacity duration-200">
                    <UIcon name="i-heroicons-clipboard" class="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <!-- 颜色值信息 -->
                <div class="p-3 bg-white/10 backdrop-blur-sm">
                  <p 
                    class="font-mono text-xs font-medium px-2 py-1 rounded-full inline-block cursor-pointer transition-colors duration-100 bg-white/10 hover:bg-white/20" 
                    title="Click to copy hex color" 
                    @click="copyColorToClipboard(color)"
                  >
                    {{ color }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- 操作按钮 -->
          <div class="flex gap-4 mt-8">
            <UButton
              block
              class="flex-1 bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] border-0 hover:shadow-lg hover:shadow-[#FF5F6D]/20 transition-all duration-300 transform hover:translate-y-[-2px]"
              @click="savePalette"
            >
              <span>{{ $t('app.imageColorPicker.savePalette') }}</span>
            </UButton>
            <UButton
              variant="soft"
              class="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300"
              @click="copyAllColors"
            >
              <span>{{ $t('app.imageColorPicker.copyAll') }}</span>
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- SEO营销内容区域 - 添加在两栏下方 -->
  <div class="mt-16 max-w-7xl mx-auto">
    <!-- 顶部大型色彩展示 -->
    <div class="relative mb-12 rounded-2xl overflow-hidden">
      <div class="grid grid-cols-7 h-48">
        <div class="bg-[#E56B6F]"></div>
        <div class="bg-[#EAAC8B]"></div>
        <div class="bg-[#6D8A96]"></div>
        <div class="bg-[#1A535C]"></div>
        <div class="bg-[#4CC9F0]"></div>
        <div class="bg-[#4361EE]"></div>
        <div class="bg-[#3A0CA3]"></div>
      </div>
      <div class="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-black/50 via-black/30 to-black/50">
        <div class="text-center px-4">
          <h2 class="text-4xl font-bold mb-4 text-white">{{ $t('imageColorPicker.marketing.heroTitle') }}</h2>
          <p class="text-xl text-white/90 max-w-3xl mx-auto">{{ $t('imageColorPicker.marketing.heroSubtitle') }}</p>
        </div>
      </div>
    </div>

    <!-- 工具特性介绍区 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      <!-- 特性1: 智能提取 -->
      <div class="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/5 shadow-xl relative overflow-hidden group transform transition-all duration-300 hover:translate-y-[-5px]">
        <div class="absolute -top-10 -right-10 w-40 h-40 bg-[#E56B6F]/20 rounded-full blur-[60px] -z-10 group-hover:bg-[#E56B6F]/30 transition-all duration-700"></div>
        
        <div class="flex items-start mb-4">
          <div class="p-3 rounded-lg bg-white/10 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#E56B6F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-2">{{ $t('imageColorPicker.marketing.feature1Title') }}</h3>
            <p class="text-white/70">{{ $t('imageColorPicker.marketing.feature1Desc') }}</p>
          </div>
        </div>
        
        <div class="bg-white/5 rounded-lg p-3 ml-16">
          <div class="text-sm text-white/60 italic">
            <span class="text-white/90 font-semibold">PRO TIP:</span> {{ $t('imageColorPicker.marketing.feature1Tip') }}
          </div>
        </div>
      </div>
      
      <!-- 特性2: 一键应用 -->
      <div class="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/5 shadow-xl relative overflow-hidden group transform transition-all duration-300 hover:translate-y-[-5px]">
        <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-[#4CC9F0]/20 rounded-full blur-[60px] -z-10 group-hover:bg-[#4CC9F0]/30 transition-all duration-700"></div>
        
        <div class="flex items-start mb-4">
          <div class="p-3 rounded-lg bg-white/10 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#4CC9F0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-2">{{ $t('imageColorPicker.marketing.feature2Title') }}</h3>
            <p class="text-white/70">{{ $t('imageColorPicker.marketing.feature2Desc') }}</p>
          </div>
        </div>
        
        <div class="bg-white/5 rounded-lg p-3 ml-16">
          <div class="text-sm text-white/60 italic">
            <span class="text-white/90 font-semibold">PRO TIP:</span> {{ $t('imageColorPicker.marketing.feature2Tip') }}
          </div>
        </div>
      </div>
      
      <!-- 特性3: 便捷操作 -->
      <div class="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/5 shadow-xl relative overflow-hidden group transform transition-all duration-300 hover:translate-y-[-5px]">
        <div class="absolute -top-10 -left-10 w-40 h-40 bg-[#3A0CA3]/20 rounded-full blur-[60px] -z-10 group-hover:bg-[#3A0CA3]/30 transition-all duration-700"></div>
        
        <div class="flex items-start mb-4">
          <div class="p-3 rounded-lg bg-white/10 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#3A0CA3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
            </svg>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-2">{{ $t('imageColorPicker.marketing.feature3Title') }}</h3>
            <p class="text-white/70">{{ $t('imageColorPicker.marketing.feature3Desc') }}</p>
          </div>
        </div>
        
        <div class="bg-white/5 rounded-lg p-3 ml-16">
          <div class="text-sm text-white/60 italic">
            <span class="text-white/90 font-semibold">PRO TIP:</span> {{ $t('imageColorPicker.marketing.feature3Tip') }}
          </div>
        </div>
      </div>
    </div>

    <!-- 应用场景展示 -->
    <div class="mb-16">
      <h2 class="text-2xl font-bold mb-8 text-center">{{ $t('imageColorPicker.marketing.useCasesTitle') }}</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- 左侧：应用场景图例 -->
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden">
            <div class="h-24 bg-[#E56B6F]"></div>
            <div class="p-4">
              <h3 class="text-lg font-medium mb-1">{{ $t('imageColorPicker.marketing.useCase1Title') }}</h3>
              <p class="text-white/60 text-sm">{{ $t('imageColorPicker.marketing.useCase1Desc') }}</p>
            </div>
          </div>
          
          <div class="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden">
            <div class="h-24 bg-[#4CC9F0]"></div>
            <div class="p-4">
              <h3 class="text-lg font-medium mb-1">{{ $t('imageColorPicker.marketing.useCase2Title') }}</h3>
              <p class="text-white/60 text-sm">{{ $t('imageColorPicker.marketing.useCase2Desc') }}</p>
            </div>
          </div>
          
          <div class="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden">
            <div class="h-24 bg-[#4361EE]"></div>
            <div class="p-4">
              <h3 class="text-lg font-medium mb-1">{{ $t('imageColorPicker.marketing.useCase3Title') }}</h3>
              <p class="text-white/60 text-sm">{{ $t('imageColorPicker.marketing.useCase3Desc') }}</p>
            </div>
          </div>
          
          <div class="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden">
            <div class="h-24 bg-[#3A0CA3]"></div>
            <div class="p-4">
              <h3 class="text-lg font-medium mb-1">{{ $t('imageColorPicker.marketing.useCase4Title') }}</h3>
              <p class="text-white/60 text-sm">{{ $t('imageColorPicker.marketing.useCase4Desc') }}</p>
            </div>
          </div>
        </div>
        
        <!-- 右侧：详细说明 -->
        <div class="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/5 shadow-xl">
          <h3 class="text-xl font-bold mb-4">{{ $t('imageColorPicker.marketing.whyUseTitle') }}</h3>
          
          <ul class="space-y-4">
            <li class="flex items-start">
              <span class="w-6 h-6 bg-gradient-to-r from-[#E56B6F] to-[#EAAC8B] rounded-full flex items-center justify-center mr-3 mt-0.5 text-white shrink-0">1</span>
              <div>
                <h4 class="font-medium mb-1">{{ $t('imageColorPicker.marketing.benefit1Title') }}</h4>
                <p class="text-white/70 text-sm">{{ $t('imageColorPicker.marketing.benefit1Desc') }}</p>
              </div>
            </li>
            
            <li class="flex items-start">
              <span class="w-6 h-6 bg-gradient-to-r from-[#4CC9F0] to-[#4361EE] rounded-full flex items-center justify-center mr-3 mt-0.5 text-white shrink-0">2</span>
              <div>
                <h4 class="font-medium mb-1">{{ $t('imageColorPicker.marketing.benefit2Title') }}</h4>
                <p class="text-white/70 text-sm">{{ $t('imageColorPicker.marketing.benefit2Desc') }}</p>
              </div>
            </li>
            
            <li class="flex items-start">
              <span class="w-6 h-6 bg-gradient-to-r from-[#4361EE] to-[#3A0CA3] rounded-full flex items-center justify-center mr-3 mt-0.5 text-white shrink-0">3</span>
              <div>
                <h4 class="font-medium mb-1">{{ $t('imageColorPicker.marketing.benefit3Title') }}</h4>
                <p class="text-white/70 text-sm">{{ $t('imageColorPicker.marketing.benefit3Desc') }}</p>
              </div>
            </li>
            
            <li class="flex items-start">
              <span class="w-6 h-6 bg-gradient-to-r from-[#EAAC8B] to-[#E56B6F] rounded-full flex items-center justify-center mr-3 mt-0.5 text-white shrink-0">4</span>
              <div>
                <h4 class="font-medium mb-1">{{ $t('imageColorPicker.marketing.benefit4Title') }}</h4>
                <p class="text-white/70 text-sm">{{ $t('imageColorPicker.marketing.benefit4Desc') }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <!-- 用户评价 -->
    <div class="mb-16">
      <h2 class="text-2xl font-bold mb-6 text-center">{{ $t('imageColorPicker.marketing.testimonialsTitle') }}</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/5 shadow-xl relative overflow-hidden">
          <div class="absolute -top-10 -right-10 w-40 h-40 bg-[#E56B6F]/10 rounded-full blur-[60px] -z-10"></div>
          
          <div class="flex mb-4">
            <div class="text-[#FFC371]">
              <UIcon name="i-heroicons-star" class="w-5 h-5" />
              <UIcon name="i-heroicons-star" class="w-5 h-5" />
              <UIcon name="i-heroicons-star" class="w-5 h-5" />
              <UIcon name="i-heroicons-star" class="w-5 h-5" />
              <UIcon name="i-heroicons-star" class="w-5 h-5" />
            </div>
          </div>
          
          <p class="text-white/80 italic mb-4">{{ $t('imageColorPicker.marketing.testimonial1') }}</p>
          
          <div class="flex items-center">
            <div class="w-10 h-10 rounded-full bg-gradient-to-r from-[#E56B6F] to-[#EAAC8B] mr-3 flex items-center justify-center text-white font-bold">L</div>
            <div>
              <h4 class="font-medium">{{ $t('imageColorPicker.marketing.testimonial1Name') }}</h4>
              <p class="text-white/50 text-sm">{{ $t('imageColorPicker.marketing.testimonial1Role') }}</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/5 shadow-xl relative overflow-hidden">
          <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-[#4CC9F0]/10 rounded-full blur-[60px] -z-10"></div>
          
          <div class="flex mb-4">
            <div class="text-[#FFC371]">
              <UIcon name="i-heroicons-star" class="w-5 h-5" />
              <UIcon name="i-heroicons-star" class="w-5 h-5" />
              <UIcon name="i-heroicons-star" class="w-5 h-5" />
              <UIcon name="i-heroicons-star" class="w-5 h-5" />
              <UIcon name="i-heroicons-star" class="w-5 h-5" />
            </div>
          </div>
          
          <p class="text-white/80 italic mb-4">{{ $t('imageColorPicker.marketing.testimonial2') }}</p>
          
          <div class="flex items-center">
            <div class="w-10 h-10 rounded-full bg-gradient-to-r from-[#4CC9F0] to-[#4361EE] mr-3 flex items-center justify-center text-white font-bold">W</div>
            <div>
              <h4 class="font-medium">{{ $t('imageColorPicker.marketing.testimonial2Name') }}</h4>
              <p class="text-white/50 text-sm">{{ $t('imageColorPicker.marketing.testimonial2Role') }}</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/5 shadow-xl relative overflow-hidden">
          <div class="absolute -top-10 -left-10 w-40 h-40 bg-[#3A0CA3]/10 rounded-full blur-[60px] -z-10"></div>
          
          <div class="flex mb-4">
            <div class="text-[#FFC371]">
              <UIcon name="i-heroicons-star" class="w-5 h-5" />
              <UIcon name="i-heroicons-star" class="w-5 h-5" />
              <UIcon name="i-heroicons-star" class="w-5 h-5" />
              <UIcon name="i-heroicons-star" class="w-5 h-5" />
              <UIcon name="i-heroicons-star-half" class="w-5 h-5" />
            </div>
          </div>
          
          <p class="text-white/80 italic mb-4">{{ $t('imageColorPicker.marketing.testimonial3') }}</p>
          
          <div class="flex items-center">
            <div class="w-10 h-10 rounded-full bg-gradient-to-r from-[#3A0CA3] to-[#4361EE] mr-3 flex items-center justify-center text-white font-bold">Z</div>
            <div>
              <h4 class="font-medium">{{ $t('imageColorPicker.marketing.testimonial3Name') }}</h4>
              <p class="text-white/50 text-sm">{{ $t('imageColorPicker.marketing.testimonial3Role') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 常见问题 -->
    <div class="mb-16">
      <h2 class="text-2xl font-bold mb-8 text-center">{{ $t('imageColorPicker.marketing.faqTitle') }}</h2>
      
      <div class="space-y-4 max-w-4xl mx-auto">
        <div class="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden">
          <div class="p-5 border-b border-white/5">
            <h3 class="text-lg font-medium">{{ $t('imageColorPicker.marketing.faq1Question') }}</h3>
          </div>
          <div class="p-5">
            <p class="text-white/70">{{ $t('imageColorPicker.marketing.faq1Answer') }}</p>
          </div>
        </div>
        
        <div class="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden">
          <div class="p-5 border-b border-white/5">
            <h3 class="text-lg font-medium">{{ $t('imageColorPicker.marketing.faq2Question') }}</h3>
          </div>
          <div class="p-5">
            <p class="text-white/70">{{ $t('imageColorPicker.marketing.faq2Answer') }}</p>
          </div>
        </div>
        
        <div class="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden">
          <div class="p-5 border-b border-white/5">
            <h3 class="text-lg font-medium">{{ $t('imageColorPicker.marketing.faq3Question') }}</h3>
          </div>
          <div class="p-5">
            <p class="text-white/70">{{ $t('imageColorPicker.marketing.faq3Answer') }}</p>
          </div>
        </div>
        
        <div class="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden">
          <div class="p-5 border-b border-white/5">
            <h3 class="text-lg font-medium">{{ $t('imageColorPicker.marketing.faq4Question') }}</h3>
          </div>
          <div class="p-5">
            <p class="text-white/70">{{ $t('imageColorPicker.marketing.faq4Answer') }}</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 号召行动 -->
    <div class="bg-gradient-to-r from-[#1a1f2e]/80 to-[#1a1f2e]/80 backdrop-blur-xl rounded-2xl p-10 border border-white/5 shadow-xl mb-16 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-[#E56B6F]/5 to-[#3A0CA3]/5"></div>
      <div class="absolute -top-20 -right-20 w-64 h-64 bg-[#4CC9F0]/10 rounded-full blur-[100px] -z-10"></div>
      <div class="absolute -bottom-20 -left-20 w-64 h-64 bg-[#E56B6F]/10 rounded-full blur-[100px] -z-10"></div>
      
      <div class="max-w-4xl mx-auto text-center relative">
        <h2 class="text-3xl font-bold mb-4">{{ $t('imageColorPicker.marketing.ctaTitle') }}</h2>
        <p class="text-white/70 text-lg mb-8 max-w-2xl mx-auto">{{ $t('imageColorPicker.marketing.ctaDesc') }}</p>
        
        <UButton
          size="xl"
          class="px-8 py-4 bg-gradient-to-r from-[#E56B6F] to-[#4CC9F0] border-0 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-[#E56B6F]/20 transition-all duration-300 transform hover:translate-y-[-2px]"
          @click="scrollToTop"
        >
          {{ $t('imageColorPicker.marketing.ctaButton') }}
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { object, type InferType, string } from 'yup';
import { prominent } from 'color.js';
import type { FormSubmitEvent } from '#ui/types';

definePageMeta({
  layout: 'app'
});

const { t } = useI18n();
const localePath = useLocalePath();
const notifications = useNotifications();

// 文件输入引用
const fileInputRef = ref<HTMLInputElement | null>(null);

// SEO元数据
const title = computed(() => t('imageColorPicker.seoTitle'));
const description = computed(() => t('imageColorPicker.seoDescription'));

useSeoMeta({
  title,
  description,
  ogTitle: title.value,
  ogDescription: description,
  ogImageUrl: `${useRuntimeConfig().public.siteUrl}/img/og.png`
});

// 创建调色板相关
const { mutate: create, isPending } = useCreatePalette();

// 文件上传和处理相关
const files = ref<FileList>();
const isFetchingImage = ref(false);
const extractedColors = ref<string[]>([]);

// 表单状态
const state = ref({
  prompt: '',
  dataUrl: ''
});

// 检查是否有图片
const hasImage = computed(() => state.value.dataUrl !== '');

// 表单验证
const FormSchema = object({
  prompt: string().required(),
  dataUrl: string().required()
});

export type Form = InferType<typeof FormSchema>;

// 处理文件选择
function handleFileChange(event: Event): void {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    files.value = target.files;
  }
}

// 提交表单
function onSubmit(event: FormSubmitEvent<Form>): void {
  create({ prompt: event.data.prompt }, {
    onError: (err) => {
      notifications.addError(err.message ?? 'Error creating palette.');
    },
    onSuccess: (value) => {
      notifications.addSuccess(t('app.imageColorPicker.paletteCreated'));
      void navigateTo(localePath(`/palette/${value.id}`));
    }
  });
}

// 点击示例图片
async function onClickExample(thumbnailUrl: string): Promise<void> {
  isFetchingImage.value = true;
  extractedColors.value = [];

  try {
    const imageBase64 = await getImageBase64(thumbnailUrl);
    if (imageBase64 === null) {
      notifications.addError(t('app.imageColorPicker.imageLoadError'));
      isFetchingImage.value = false;
      return;
    }

    state.value.dataUrl = imageBase64;
    
    const colors = await prominent(imageBase64, {
      amount: 5,
      format: 'hex'
    }) as string[];

    extractedColors.value = colors;
    state.value.prompt = colors.toString();
    
    notifications.addSuccess(t('app.imageColorPicker.colorsExtracted'));
  } catch (error) {
    notifications.addError(t('app.imageColorPicker.extractionError'));
  } finally {
    isFetchingImage.value = false;
  }
}

// 保存调色板
function savePalette(): void {
  if (!extractedColors.value.length) return;
  
  create({ prompt: extractedColors.value.toString() }, {
    onError: (err) => {
      notifications.addError(err.message ?? 'Error creating palette.');
    },
    onSuccess: (value) => {
      notifications.addSuccess(t('app.imageColorPicker.paletteCreated'));
      void navigateTo(localePath(`/palette/${value.id}`));
    }
  });
}

// 复制所有颜色
function copyAllColors(): void {
  if (!extractedColors.value.length) return;
  
  navigator.clipboard.writeText(extractedColors.value.join(', '));
  notifications.addSuccess(t('app.imageColorPicker.colorsCopied'));
}

// 复制单个颜色
function copyColorToClipboard(color: string): void {
  navigator.clipboard.writeText(color);
  notifications.addSuccess(t('app.palette.colorCopied'));
}

// 监听文件上传
watch(files, async () => {
  if (files.value?.[0] !== undefined) {
    isFetchingImage.value = true;
    extractedColors.value = [];
    
    try {
      const reader = new FileReader();

      reader.onload = async () => {
        state.value.dataUrl = reader.result as string;
        
        const colors = await prominent(state.value.dataUrl, { 
          amount: 5, 
          format: 'hex' 
        }) as string[];
        
        if (colors.length > 0) {
          extractedColors.value = colors;
          state.value.prompt = colors.toString();
          notifications.addSuccess(t('app.imageColorPicker.colorsExtracted'));
        }
        
        isFetchingImage.value = false;
      };

      reader.onerror = () => {
        notifications.addError(t('app.imageColorPicker.imageLoadError'));
        isFetchingImage.value = false;
      };

      reader.readAsDataURL(files.value[0]);
    } catch (error) {
      notifications.addError(t('app.imageColorPicker.imageLoadError'));
      isFetchingImage.value = false;
    }
  } else {
    state.value.dataUrl = '';
    extractedColors.value = [];
  }
});

// 清除已上传的图片
function clearUploadedImage(e: Event): void {
  e.stopPropagation();
  state.value.dataUrl = '';
  state.value.prompt = '';
  extractedColors.value = [];
  
  if (fileInputRef.value) {
    fileInputRef.value.value = '';
  }
  
  if (files.value) {
    files.value = undefined;
  }
}

// 添加滚动到顶部的方法
function scrollToTop(): void {
  if (window !== undefined) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
</script>

<style scoped>
/* 自定义滚动条 */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 95, 109, 0.5);
}

/* 渐变文本效果 */
.gradient-text {
  @apply bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent;
}

/* 添加动画效果 */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.lg\:col-span-7 {
  animation: fadeIn 0.8s ease-out;
}

/* 字体平滑 */
:deep(html) {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style> 