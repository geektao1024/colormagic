<template>
  <div class="min-h-screen bg-gradient-to-b from-[#111827] to-[#1F2937] text-white p-6">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
      <!-- 左侧工具输入区域 -->
      <div class="lg:col-span-5 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-xl relative overflow-hidden">
        <div class="absolute -top-10 -left-10 w-40 h-40 bg-[#FF5F6D]/10 rounded-full blur-[60px] -z-10"></div>
        <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-[#FFC371]/10 rounded-full blur-[60px] -z-10"></div>
        
        <h1 class="text-3xl font-bold mb-4">AI COLOR RESHAPE</h1>
        <p class="text-lg mb-6 text-white/70">
          Unlock the true colors of GPT-4o generated images with precise color balancing algorithms.
        </p>
        
        <!-- Upload Area -->
        <div class="mb-8">
          <div 
            class="relative border-2 border-dashed border-white/20 rounded-xl p-6 transition-all duration-300 hover:border-[#FF5F6D]/50 group cursor-pointer overflow-hidden"
            :class="{'border-[#FF5F6D]/50 bg-white/5': uploadedCount > 0}"
            @click="triggerFileInput"
            @dragover.prevent="dragOver = true"
            @dragleave.prevent="dragOver = false"
            @drop.prevent="handleFileDrop"
          >
            <!-- Background glow effect -->
            <div class="absolute -inset-1 bg-gradient-to-r from-[#FF5F6D]/20 to-[#FFC371]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="relative z-10">
              <div v-if="uploadedCount > 0 && uploadedImage" class="mb-4 relative">
                <img :src="uploadedImage" alt="Uploaded image" class="w-full h-auto rounded-lg shadow-lg max-h-[300px] object-contain mx-auto" />
              </div>
              
              <div v-if="uploadedCount === 0" class="text-center py-10">
                <div class="w-16 h-16 bg-gradient-to-br from-[#FF5F6D]/20 to-[#FFC371]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-[#FF5F6D]/20 transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white/70 group-hover:text-[#FF5F6D] transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p class="text-white/70 mb-2 group-hover:text-white transition-colors duration-300">拖放图片到这里上传</p>
                <p class="text-white/50 text-sm group-hover:text-white/70 transition-colors duration-300">或点击选择文件</p>
              </div>
              
              <input 
                type="file" 
                ref="fileInput" 
                @change="handleFileUpload" 
                accept="image/*" 
                class="absolute inset-0 opacity-0 cursor-pointer hidden"
                multiple
              />
            </div>
          </div>
        </div>
        
        <!-- Action Button -->
        <button 
          @click="triggerFileInput" 
          class="group relative w-full px-6 py-3 bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] rounded-lg text-white font-medium overflow-hidden shadow-lg"
        >
          <span class="relative z-10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            批量上传
          </span>
          <span class="absolute inset-0 bg-gradient-to-r from-[#FFC371] to-[#FF5F6D] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
        </button>
        
        <!-- Process Button -->
        <button 
          v-if="uploadedCount > 0 && !processedImage"
          @click="processImage" 
          class="group relative w-full px-6 py-3 bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] rounded-lg text-white font-medium overflow-hidden shadow-lg mt-4"
        >
          <span class="relative z-10">一键色彩校正</span>
          <span class="absolute inset-0 bg-gradient-to-r from-[#FFC371] to-[#FF5F6D] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
        </button>
        
        <!-- Batch Upload Section -->
        <div class="mt-10">
          <h3 class="text-lg font-medium mb-4 text-white/90">已上传图片 ({{ uploadedCount }})</h3>
          
          <!-- Thumbnails Gallery -->
          <div 
            v-if="uploadedCount > 0"
            class="grid grid-cols-4 gap-3 mt-4 max-h-[200px] overflow-y-auto pr-2 custom-scrollbar"
          >
            <div 
              v-for="(image, index) in uploadedImages" 
              :key="index"
              class="relative rounded-lg overflow-hidden group cursor-pointer border border-transparent"
              :class="{'border-[#FF5F6D] ring-2 ring-[#FF5F6D]/50': selectedImageIndex === index}"
              @click="selectImage(index)"
            >
              <img 
                :src="image.original" 
                alt="Thumbnail" 
                class="w-full h-16 object-cover"
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
          <h2 class="text-2xl font-bold">预览与调整</h2>
          <div class="absolute -bottom-2 left-0 w-16 h-[2px] bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] rounded-full"></div>
        </div>
        
        <!-- 加载状态 -->
        <div v-if="isProcessing" class="h-full flex flex-col items-center justify-center py-20">
          <div class="w-20 h-20 bg-gradient-to-br from-[#FF5F6D]/10 to-[#FFC371]/10 rounded-full flex items-center justify-center mb-6 animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-[#FF5F6D] animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <p class="text-white/70 text-center">处理中，请稍候...</p>
        </div>
        
        <div v-else-if="processedImage" class="space-y-6">
          <!-- Before/After Comparison -->
          <div class="grid grid-cols-2 gap-3">
            <div class="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10">
              <div class="py-2 px-3 border-b border-white/10">
                <h4 class="text-sm font-medium text-white/80">原始图片</h4>
                <p class="text-xs text-white/50">调整前</p>
              </div>
              <div class="p-2">
                <img 
                  :src="uploadedImage" 
                  alt="Original image" 
                  class="w-full h-auto rounded-lg max-h-[250px] object-contain mx-auto cursor-pointer hover:opacity-90 transition-opacity" 
                  @click="showModal = true; modalImage = uploadedImage; modalTitle = '原始图片'"
                />
                <div class="absolute top-2 right-2 bg-black/40 backdrop-blur-sm p-1.5 rounded-md cursor-pointer hover:bg-[#FF5F6D]/70 transition-colors" @click="showModal = true; modalImage = uploadedImage; modalTitle = '原始图片'">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m4-3H6" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div class="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10">
              <div class="py-2 px-3 border-b border-white/10 bg-gradient-to-r from-[#FF5F6D]/10 to-[#FFC371]/10">
                <h4 class="text-sm font-medium text-[#FF5F6D]">处理后图片</h4>
                <p class="text-xs text-white/50">应用色彩矫正</p>
              </div>
              <div class="p-2">
                <img 
                  :src="processedImage" 
                  alt="Processed image" 
                  class="w-full h-auto rounded-lg max-h-[250px] object-contain mx-auto cursor-pointer hover:opacity-90 transition-opacity" 
                  @click="showModal = true; modalImage = processedImage; modalTitle = '处理后图片'"
                />
                <div class="absolute top-2 right-2 bg-black/40 backdrop-blur-sm p-1.5 rounded-md cursor-pointer hover:bg-[#FF5F6D]/70 transition-colors" @click="showModal = true; modalImage = processedImage; modalTitle = '处理后图片'">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m4-3H6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Color Adjustment Controls - Tab Navigation -->
          <div class="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
            <!-- Tab Headers -->
            <div class="flex border-b border-white/10">
              <button 
                @click="activeTab = 'shadows'" 
                class="flex-1 py-3 px-4 text-center transition-colors duration-300" 
                :class="activeTab === 'shadows' ? 'bg-white/10 text-[#FF5F6D] font-medium' : 'text-white/70 hover:bg-white/5'"
              >
                阴影区域
              </button>
              <button 
                @click="activeTab = 'midtones'" 
                class="flex-1 py-3 px-4 text-center transition-colors duration-300" 
                :class="activeTab === 'midtones' ? 'bg-white/10 text-[#FF5F6D] font-medium' : 'text-white/70 hover:bg-white/5'"
              >
                中间调区域
              </button>
              <button 
                @click="activeTab = 'highlights'" 
                class="flex-1 py-3 px-4 text-center transition-colors duration-300" 
                :class="activeTab === 'highlights' ? 'bg-white/10 text-[#FF5F6D] font-medium' : 'text-white/70 hover:bg-white/5'"
              >
                高光区域
              </button>
            </div>
            
            <!-- Tab Contents -->
            <div class="p-5">
              <!-- Shadows Tab -->
              <div v-if="activeTab === 'shadows'" class="space-y-4">
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm text-white/70">青色-红色</span>
                    <span class="text-sm font-mono">{{ colorSettings.shadows.red }}</span>
                  </div>
                  <input 
                    type="range" 
                    min="-20" 
                    max="20" 
                    v-model.number="colorSettings.shadows.red" 
                    class="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm text-white/70">洋红-绿色</span>
                    <span class="text-sm font-mono">{{ colorSettings.shadows.green }}</span>
                  </div>
                  <input 
                    type="range" 
                    min="-20" 
                    max="20" 
                    v-model.number="colorSettings.shadows.green" 
                    class="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm text-white/70">黄色-蓝色</span>
                    <span class="text-sm font-mono">{{ colorSettings.shadows.blue }}</span>
                  </div>
                  <input 
                    type="range" 
                    min="-20" 
                    max="20" 
                    v-model.number="colorSettings.shadows.blue" 
                    class="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
              
              <!-- Midtones Tab -->
              <div v-if="activeTab === 'midtones'" class="space-y-4">
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm text-white/70">青色-红色</span>
                    <span class="text-sm font-mono">{{ colorSettings.midtones.red }}</span>
                  </div>
                  <input 
                    type="range" 
                    min="-20" 
                    max="20" 
                    v-model.number="colorSettings.midtones.red" 
                    class="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm text-white/70">洋红-绿色</span>
                    <span class="text-sm font-mono">{{ colorSettings.midtones.green }}</span>
                  </div>
                  <input 
                    type="range" 
                    min="-20" 
                    max="20" 
                    v-model.number="colorSettings.midtones.green" 
                    class="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm text-white/70">黄色-蓝色</span>
                    <span class="text-sm font-mono">{{ colorSettings.midtones.blue }}</span>
                  </div>
                  <input 
                    type="range" 
                    min="-20" 
                    max="20" 
                    v-model.number="colorSettings.midtones.blue" 
                    class="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
              
              <!-- Highlights Tab -->
              <div v-if="activeTab === 'highlights'" class="space-y-4">
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm text-white/70">青色-红色</span>
                    <span class="text-sm font-mono">{{ colorSettings.highlights.red }}</span>
                  </div>
                  <input 
                    type="range" 
                    min="-20" 
                    max="20" 
                    v-model.number="colorSettings.highlights.red" 
                    class="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm text-white/70">洋红-绿色</span>
                    <span class="text-sm font-mono">{{ colorSettings.highlights.green }}</span>
                  </div>
                  <input 
                    type="range" 
                    min="-20" 
                    max="20" 
                    v-model.number="colorSettings.highlights.green" 
                    class="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm text-white/70">黄色-蓝色</span>
                    <span class="text-sm font-mono">{{ colorSettings.highlights.blue }}</span>
                  </div>
                  <input 
                    type="range" 
                    min="-20" 
                    max="20" 
                    v-model.number="colorSettings.highlights.blue" 
                    class="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <!-- Action Buttons -->
          <div class="flex gap-4 mt-8">
            <button 
              @click="resetColorSettings"
              class="flex-1 px-5 py-3 bg-red-600 rounded-lg text-white font-medium hover:bg-red-700 transition-colors duration-300 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              重置调整
            </button>
            <button 
              @click="applyToAll"
              class="flex-1 px-5 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors duration-300 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              应用到所有
            </button>
            <button 
              @click="downloadImage"
              class="flex-1 px-5 py-3 bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] rounded-lg text-white font-medium hover:shadow-lg hover:shadow-[#FF5F6D]/20 transition-all duration-300 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              下载图片
            </button>
          </div>
        </div>
        
        <!-- 空状态 -->
        <div v-else class="h-full flex flex-col items-center justify-center py-20">
          <div class="w-20 h-20 bg-gradient-to-br from-[#FF5F6D]/10 to-[#FFC371]/10 rounded-full flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
            </svg>
          </div>
          <p class="text-white/50 text-center">
            上传图片后<br>
            系统会自动进行色彩校正<br>
            您可以在此调整色彩参数
          </p>
        </div>
      </div>
    </div>
    
    <!-- SEO Marketing Section - Optional -->
    <div class="mt-16 max-w-7xl mx-auto">
      <!-- Top Color Display -->
      <div class="relative mb-12 rounded-2xl overflow-hidden">
        <div class="grid grid-cols-7 h-48">
          <div class="bg-[#FF5F6D]"></div>
          <div class="bg-[#FF9A9E]"></div>
          <div class="bg-[#FFC371]"></div>
          <div class="bg-[#FFE69A]"></div>
          <div class="bg-[#FFF6B3]"></div>
          <div class="bg-[#FFFCDB]"></div>
          <div class="bg-[#FFFFFF]"></div>
        </div>
        <div class="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-black/50 via-black/30 to-black/50">
          <div class="text-center px-4">
            <h2 class="text-4xl font-bold mb-4 text-white">Perfect Colors for AI Generated Images</h2>
            <p class="text-xl text-white/90 max-w-3xl mx-auto">Fix color issues in GPT-4o and other AI generated images with one click</p>
          </div>
        </div>
      </div>

      <!-- Tool Features -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <!-- Feature 1: One-Click Correction -->
        <div class="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/5 shadow-xl relative overflow-hidden group transform transition-all duration-300 hover:translate-y-[-5px]">
          <div class="absolute -top-10 -right-10 w-40 h-40 bg-[#FF5F6D]/20 rounded-full blur-[60px] -z-10 group-hover:bg-[#FF5F6D]/30 transition-all duration-700"></div>
          
          <div class="flex items-start mb-4">
            <div class="p-3 rounded-lg bg-white/10 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#FF5F6D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">Automatic Color Correction</h3>
              <p class="text-white/70">Fix common AI color issues with just one click. Our algorithm analyzes and corrects color imbalances automatically.</p>
            </div>
          </div>
          
          <div class="bg-white/5 rounded-lg p-3 ml-16">
            <div class="text-sm text-white/60 italic">
              <span class="text-white/90 font-semibold">PRO TIP:</span> Upload multiple images to batch process your entire AI art collection at once.
            </div>
          </div>
        </div>
        
        <!-- Feature 2: Advanced Controls -->
        <div class="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/5 shadow-xl relative overflow-hidden group transform transition-all duration-300 hover:translate-y-[-5px]">
          <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-[#FFC371]/20 rounded-full blur-[60px] -z-10 group-hover:bg-[#FFC371]/30 transition-all duration-700"></div>
          
          <div class="flex items-start mb-4">
            <div class="p-3 rounded-lg bg-white/10 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#FFC371]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">Professional Controls</h3>
              <p class="text-white/70">Fine-tune colors with shadow, midtone, and highlight adjustments for precise control over your image appearance.</p>
            </div>
          </div>
          
          <div class="bg-white/5 rounded-lg p-3 ml-16">
            <div class="text-sm text-white/60 italic">
              <span class="text-white/90 font-semibold">PRO TIP:</span> Adjust blue values in shadows for more natural looking AI generated landscapes.
            </div>
          </div>
        </div>
        
        <!-- Feature 3: Batch Processing -->
        <div class="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/5 shadow-xl relative overflow-hidden group transform transition-all duration-300 hover:translate-y-[-5px]">
          <div class="absolute -top-20 -right-10 w-40 h-40 bg-gradient-to-br from-[#FF5F6D]/20 to-[#FFC371]/20 rounded-full blur-[60px] -z-10 group-hover:opacity-80 transition-all duration-700"></div>
          
          <div class="flex items-start mb-4">
            <div class="p-3 rounded-lg bg-white/10 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gradient-to-r from-[#FF5F6D] to-[#FFC371]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">Batch Processing</h3>
              <p class="text-white/70">Correct multiple images at once with the same settings, saving time on large AI art collections.</p>
            </div>
          </div>
          
          <div class="bg-white/5 rounded-lg p-3 ml-16">
            <div class="text-sm text-white/60 italic">
              <span class="text-white/90 font-semibold">PRO TIP:</span> Adjust settings on one image then use "Apply to All" to maintain consistent look across your collection.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 图片放大模态框 -->
  <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" @click="showModal = false">
    <div class="max-w-4xl w-full bg-white/5 backdrop-blur-md rounded-xl p-2 border border-white/10 shadow-2xl overflow-hidden" @click.stop>
      <div class="flex justify-between items-center p-3 border-b border-white/10">
        <h3 class="font-medium text-white">{{ modalTitle }}</h3>
        <button @click="showModal = false" class="p-1 rounded-full hover:bg-white/10">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="p-3 flex items-center justify-center">
        <img :src="modalImage" class="max-h-[80vh] max-w-full object-contain rounded-lg" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'

// Reactive state
const fileInput = ref(null)
const uploadedImage = ref(null)
const processedImage = ref(null)
const dragOver = ref(false)
const uploadedImages = ref([])
const selectedImageIndex = ref(0)
const uploadedCount = ref(0)
const isProcessing = ref(false)
const activeTab = ref('shadows') // 默认显示阴影区域
const showModal = ref(false)
const modalImage = ref(null)
const modalTitle = ref('')

// Color adjustment settings
const colorSettings = reactive({
  shadows: {
    red: -5,
    green: 0,
    blue: 10
  },
  midtones: {
    red: -6,
    green: 0,
    blue: 20
  },
  highlights: {
    red: -6,
    green: 0,
    blue: 15
  }
})

// Default settings
const defaultSettings = {
  shadows: { red: -5, green: 0, blue: 10 },
  midtones: { red: -6, green: 0, blue: 20 },
  highlights: { red: -6, green: 0, blue: 15 }
}

// Function: Trigger file input
const triggerFileInput = () => {
  fileInput.value.click()
}

// Function: Handle file upload
const handleFileUpload = (event) => {
  const files = event.target.files
  if (files.length === 0) return
  
  processFiles(files)
}

// Function: Handle file drop
const handleFileDrop = (event) => {
  dragOver.value = false
  const files = event.dataTransfer.files
  if (files.length === 0) return
  
  processFiles(files)
}

// Function: Process files
const processFiles = (files) => {
  const fileArray = Array.from(files).filter(file => file.type.startsWith('image/'))
  if (fileArray.length === 0) return
  
  fileArray.forEach(file => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const newImage = {
        original: e.target.result,
        processed: null,
        filename: file.name,
        settings: JSON.parse(JSON.stringify(defaultSettings))
      }
      
      uploadedImages.value.push(newImage)
      uploadedCount.value = uploadedImages.value.length
      
      // If this is the first image, set it as current and process it immediately
      if (uploadedImages.value.length === 1) {
        selectedImageIndex.value = 0
        uploadedImage.value = newImage.original
        processImage() // 自动处理第一张上传的图片
      }
    }
    reader.readAsDataURL(file)
  })
}

// Function: Remove image
const removeImage = () => {
  uploadedImage.value = null
  processedImage.value = null
}

// Function: Remove image at index
const removeImageAt = (index) => {
  uploadedImages.value.splice(index, 1)
  uploadedCount.value = uploadedImages.value.length
  
  if (uploadedCount.value === 0) {
    uploadedImage.value = null
    processedImage.value = null
  } else if (selectedImageIndex.value === index) {
    // If deleted image was the selected one, select another
    selectedImageIndex.value = 0
    uploadedImage.value = uploadedImages.value[0].original
    processedImage.value = uploadedImages.value[0].processed
    
    // Update color settings
    Object.assign(colorSettings, uploadedImages.value[0].settings)
  } else if (selectedImageIndex.value > index) {
    // If deleted image was before the selected one, adjust index
    selectedImageIndex.value--
  }
}

// Function: Clear all images
const clearAllImages = () => {
  uploadedImages.value = []
  uploadedCount.value = 0
  uploadedImage.value = null
  processedImage.value = null
  resetColorSettings()
}

// Function: Select image
const selectImage = (index) => {
  selectedImageIndex.value = index
  uploadedImage.value = uploadedImages.value[index].original
  
  // If this is the first image, process it immediately
  if (selectedImageIndex.value === 0) {
    processImage()
  }
  
  // Update color settings
  if (uploadedImages.value[index].settings) {
    Object.assign(colorSettings, uploadedImages.value[index].settings)
  } else {
    resetColorSettings()
  }
}

// Function: Reset color settings
const resetColorSettings = () => {
  Object.assign(colorSettings, JSON.parse(JSON.stringify(defaultSettings)))
}

// Function: Process image
const processImage = (showLoading = true) => {
  if (!uploadedImage.value) return
  
  if (showLoading) {
    isProcessing.value = true
  }
  
  // Create image processing canvas
  const img = new Image()
  img.onload = function() {
    const canvas = document.createElement('canvas')
    canvas.width = img.width
    canvas.height = img.height
    
    const ctx = canvas.getContext('2d')
    ctx.drawImage(img, 0, 0)
    
    // Get image data
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const data = imageData.data
    
    // Apply color balance algorithm to each pixel
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i]
      const g = data[i + 1]
      const b = data[i + 2]
      
      // Calculate luminance
      const luminance = 0.299 * r + 0.587 * g + 0.114 * b
      const originalLuminance = luminance
      
      let newR = r
      let newG = g
      let newB = b
      
      // Apply adjustments based on luminance
      if (luminance < 85) {
        // Shadows
        newR += colorSettings.shadows.red
        newG += colorSettings.shadows.green
        newB += colorSettings.shadows.blue
      } else if (luminance >= 85 && luminance < 170) {
        // Midtones
        newR += colorSettings.midtones.red
        newG += colorSettings.midtones.green
        newB += colorSettings.midtones.blue
      } else {
        // Highlights
        newR += colorSettings.highlights.red
        newG += colorSettings.highlights.green
        newB += colorSettings.highlights.blue
      }
      
      // Ensure values are within valid range
      newR = Math.max(0, Math.min(255, newR))
      newG = Math.max(0, Math.min(255, newG))
      newB = Math.max(0, Math.min(255, newB))
      
      // Preserve luminosity
      const newLuminance = 0.299 * newR + 0.587 * newG + 0.114 * newB
      const luminanceRatio = originalLuminance / (newLuminance || 1)
      
      newR = Math.max(0, Math.min(255, newR * luminanceRatio))
      newG = Math.max(0, Math.min(255, newG * luminanceRatio))
      newB = Math.max(0, Math.min(255, newB * luminanceRatio))
      
      // Update pixel data
      data[i] = newR
      data[i + 1] = newG
      data[i + 2] = newB
    }
    
    // Put processed image data back to canvas
    ctx.putImageData(imageData, 0, 0)
    
    // Update processed image
    processedImage.value = canvas.toDataURL('image/jpeg', 0.92)
    
    // Save current image settings
    if (uploadedImages.value[selectedImageIndex.value]) {
      uploadedImages.value[selectedImageIndex.value].processed = processedImage.value
      uploadedImages.value[selectedImageIndex.value].settings = JSON.parse(JSON.stringify(colorSettings))
    }
    
    // 完成处理
    if (showLoading) {
      isProcessing.value = false
    }
  }
  
  img.src = uploadedImage.value
}

// Function: Apply to all
const applyToAll = () => {
  if (uploadedImages.value.length === 0) return
  
  // Apply current settings to all images
  uploadedImages.value.forEach((image, index) => {
    // Save current settings
    image.settings = JSON.parse(JSON.stringify(colorSettings))
    
    // Process image
    const img = new Image()
    img.onload = function() {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0)
      
      // Get image data
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imageData.data
      
      // Apply color balance algorithm to each pixel
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i]
        const g = data[i + 1]
        const b = data[i + 2]
        
        // Calculate luminance
        const luminance = 0.299 * r + 0.587 * g + 0.114 * b
        const originalLuminance = luminance
        
        let newR = r
        let newG = g
        let newB = b
        
        // Apply adjustments based on luminance
        if (luminance < 85) {
          // Shadows
          newR += colorSettings.shadows.red
          newG += colorSettings.shadows.green
          newB += colorSettings.shadows.blue
        } else if (luminance >= 85 && luminance < 170) {
          // Midtones
          newR += colorSettings.midtones.red
          newG += colorSettings.midtones.green
          newB += colorSettings.midtones.blue
        } else {
          // Highlights
          newR += colorSettings.highlights.red
          newG += colorSettings.highlights.green
          newB += colorSettings.highlights.blue
        }
        
        // Ensure values are within valid range
        newR = Math.max(0, Math.min(255, newR))
        newG = Math.max(0, Math.min(255, newG))
        newB = Math.max(0, Math.min(255, newB))
        
        // Preserve luminosity
        const newLuminance = 0.299 * newR + 0.587 * newG + 0.114 * newB
        const luminanceRatio = originalLuminance / (newLuminance || 1)
        
        newR = Math.max(0, Math.min(255, newR * luminanceRatio))
        newG = Math.max(0, Math.min(255, newG * luminanceRatio))
        newB = Math.max(0, Math.min(255, newB * luminanceRatio))
        
        // Update pixel data
        data[i] = newR
        data[i + 1] = newG
        data[i + 2] = newB
      }
      
      // Put processed image data back to canvas
      ctx.putImageData(imageData, 0, 0)
      
      // Update processed image
      image.processed = canvas.toDataURL('image/jpeg', 0.92)
      
      // If this is the currently selected image, update display
      if (index === selectedImageIndex.value) {
        processedImage.value = image.processed
      }
    }
    
    img.src = image.original
  })
}

// Function: Download image
const downloadImage = () => {
  if (!processedImage.value) return
  
  // If only one image, download directly
  if (uploadedImages.value.length === 1) {
    const link = document.createElement('a')
    link.href = processedImage.value
    link.download = 'reshaped_' + (uploadedImages.value[0].filename || 'image.jpg')
    link.click()
    return
  }
  
  // If multiple images, prompt user for single download or batch download
  if (window.confirm('You have multiple images. Do you want to download the current image? Click "Cancel" to batch download all images later.')) {
    const link = document.createElement('a')
    link.href = processedImage.value
    link.download = 'reshaped_' + (uploadedImages.value[selectedImageIndex.value].filename || 'image.jpg')
    link.click()
  }
}

// 设置页面布局
definePageMeta({
  layout: 'app'
});

// Watch color settings changes, automatically reprocess current image
watch(colorSettings, () => {
  if (uploadedImage.value) {
    processImage(false) // 参数调整时不显示加载状态
  }
}, { deep: true })
</script>

<style scoped>
/* Custom scrollbar styles */
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* Range slider styles */
input[type="range"] {
  -webkit-appearance: none;
  height: 4px;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.1);
  outline: none;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: linear-gradient(to right, #FF5F6D, #FFC371);
  cursor: pointer;
  transition: all 0.3s ease;
}

input[type="range"]::-webkit-slider-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 0 10px rgba(255, 95, 109, 0.5);
}

input[type="range"]::-moz-range-thumb {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: linear-gradient(to right, #FF5F6D, #FFC371);
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
}

input[type="range"]::-moz-range-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 0 10px rgba(255, 95, 109, 0.5);
}
</style> 