<template>
  <div class="min-h-screen bg-gradient-to-b from-[#111827] to-[#1F2937] text-white font-sans">
    <!-- Header - Keeping existing structure -->
    <header class="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#111827]/70 border-b border-white/5">
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-12">
            <a href="#" class="flex items-center">
              <div class="relative">
                <span class="text-2xl font-extrabold">
                  <span class="text-white">Color</span>
                  <span class="bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent">Magic</span>
                </span>
                <div class="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] rounded-full"></div>
              </div>
            </a>
            <!-- Keeping existing navigation -->
          </div>
          <div class="flex items-center gap-4">
            <button class="px-5 py-2 text-sm text-[#111827] font-medium bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] rounded-full hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 transform hover:translate-y-[-2px]">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="pt-24 pb-10 px-6">
      <div class="flex">
        <!-- Left Sidebar - Keeping existing structure -->
        <div class="w-[220px] pr-6">
          <nav class="space-y-6">
            <div>
              <div class="space-y-2">
                <a href="#" class="flex items-center gap-3 px-4 py-2 text-white/70 hover:text-white rounded-lg transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Home
                </a>
                <a href="#" class="flex items-center gap-3 px-4 py-2 text-white/70 hover:text-white rounded-lg transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Explore
                </a>
                <a href="#" class="flex items-center gap-3 px-4 py-2 text-white/70 hover:text-white rounded-lg transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Liked
                </a>
              </div>
            </div>

            <div>
              <h3 class="text-xs font-semibold uppercase text-white/50 px-4 mb-3">Tools</h3>
              <div class="space-y-2">
                <a href="#" class="flex items-center gap-3 px-4 py-2 text-white/70 hover:text-white rounded-lg transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                  Color Palette Generator
                </a>
                <a href="#" class="flex items-center gap-3 px-4 py-2 text-white/70 hover:text-white rounded-lg transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Random Color Generator
                </a>
                <a href="#" class="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-[#FF5F6D]/10 to-[#FFC371]/10 text-white border-l-2 border-[#FF5F6D] rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#FF5F6D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Image Color Picker
                </a>
                <a href="#" class="flex items-center gap-3 px-4 py-2 text-white/70 hover:text-white rounded-lg transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Contrast Checker
                </a>
              </div>
            </div>
          </nav>
        </div>

        <!-- Main Content Area -->
        <div class="flex-1 flex gap-6">
          <!-- Left Panel - Upload Section -->
          <div class="w-1/2">
            <div class="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-xl h-full">
              <div class="relative mb-6">
                <h2 class="text-2xl font-bold">Image Color Picker</h2>
                <div class="absolute -bottom-2 left-0 w-16 h-[2px] bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] rounded-full"></div>
              </div>
              
              <p class="text-white/70 mb-8">
                Extract and pick a beautiful color scheme from any image with AI-powered analysis.
              </p>
              
              <!-- Upload Area -->
              <div class="mb-8">
                <div 
                  class="relative border-2 border-dashed border-white/20 rounded-xl p-6 transition-all duration-300 hover:border-[#FF5F6D]/50 group cursor-pointer overflow-hidden"
                  :class="{'border-[#FF5F6D]/50 bg-white/5': uploadedImage}"
                >
                  <!-- Background glow effect -->
                  <div class="absolute -inset-1 bg-gradient-to-r from-[#FF5F6D]/20 to-[#FFC371]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div class="relative z-10">
                    <div v-if="uploadedImage" class="mb-4 relative">
                      <img :src="uploadedImage" alt="Uploaded image" class="w-full h-auto rounded-lg shadow-lg max-h-[300px] object-contain mx-auto" />
                      
                      <!-- Remove button -->
                      <button 
                        @click.stop="removeImage" 
                        class="absolute top-2 right-2 w-8 h-8 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-[#FF5F6D] transition-colors duration-300"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    
                    <div v-if="!uploadedImage" class="text-center py-10">
                      <div class="w-16 h-16 bg-gradient-to-br from-[#FF5F6D]/20 to-[#FFC371]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-[#FF5F6D]/20 transition-all duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white/70 group-hover:text-[#FF5F6D] transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p class="text-white/70 mb-2 group-hover:text-white transition-colors duration-300">Drag and drop your image here</p>
                      <p class="text-white/50 text-sm group-hover:text-white/70 transition-colors duration-300">or click to browse</p>
                    </div>
                    
                    <input 
                      type="file" 
                      ref="fileInput" 
                      @change="handleFileUpload" 
                      accept="image/*" 
                      class="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
              
              <!-- Action Button -->
              <button 
                @click="createPalette" 
                :disabled="!uploadedImage"
                class="group relative w-full px-6 py-3 bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] rounded-lg text-white font-medium overflow-hidden shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span class="relative z-10">Create Palette</span>
                <span class="absolute inset-0 bg-gradient-to-r from-[#FFC371] to-[#FF5F6D] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </button>
              
              <!-- Example Images -->
              <div class="mt-10">
                <h3 class="text-lg font-medium mb-4 text-white/90">Try an example:</h3>
                <div class="grid grid-cols-2 gap-4">
                  <div 
                    v-for="(example, index) in exampleImages" 
                    :key="index" 
                    @click="selectExample(example)"
                    class="rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg hover:shadow-[#FF5F6D]/20 border border-white/10 hover:border-[#FF5F6D]/30"
                  >
                    <img :src="example" alt="Example image" class="w-full h-32 object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Right Panel - Results Section -->
          <div class="w-1/2">
            <div class="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-xl h-full">
              <div class="relative mb-6">
                <h2 class="text-2xl font-bold">Extracted Colors</h2>
                <div class="absolute -bottom-2 left-0 w-16 h-[2px] bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] rounded-full"></div>
              </div>
              
              <div v-if="extractedColors.length > 0" class="space-y-6">
                <!-- Primary Colors -->
                <div class="grid grid-cols-5 gap-3 mb-6">
                  <div 
                    v-for="(color, index) in extractedColors.slice(0, 5)" 
                    :key="index" 
                    :style="{ backgroundColor: color }" 
                    class="h-24 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer group relative"
                  >
                    <!-- Color code tooltip -->
                    <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 backdrop-blur-sm rounded-lg">
                      <span class="text-white font-mono text-sm">{{ color }}</span>
                    </div>
                  </div>
                </div>
                
                <!-- Secondary Colors -->
                <div class="grid grid-cols-5 gap-3">
                  <div 
                    v-for="(color, index) in extractedColors.slice(5, 10)" 
                    :key="index" 
                    :style="{ backgroundColor: color }" 
                    class="h-16 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer group relative"
                  >
                    <!-- Color code tooltip -->
                    <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 backdrop-blur-sm rounded-lg">
                      <span class="text-white font-mono text-sm">{{ color }}</span>
                    </div>
                  </div>
                </div>
                
                <!-- Color Information -->
                <div class="mt-8 space-y-6">
                  <!-- Harmony Type -->
                  <div class="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                    <h3 class="text-lg font-medium mb-2 text-white/90">Color Harmony</h3>
                    <p class="text-white/70">{{ colorHarmony }}</p>
                  </div>
                  
                  <!-- Mood Analysis -->
                  <div class="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                    <h3 class="text-lg font-medium mb-2 text-white/90">Mood Analysis</h3>
                    <div class="flex flex-wrap gap-2">
                      <span 
                        v-for="(mood, index) in moodTags" 
                        :key="index"
                        class="px-3 py-1 bg-gradient-to-r from-[#FF5F6D]/20 to-[#FFC371]/20 rounded-full text-sm text-white/90 border border-white/10"
                      >
                        {{ mood }}
                      </span>
                    </div>
                  </div>
                </div>
                
                <!-- Action Buttons -->
                <div class="flex gap-4 mt-8">
                  <button class="flex-1 px-5 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors duration-300">
                    Save as Palette
                  </button>
                  <button class="flex-1 px-5 py-3 bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] rounded-lg text-white font-medium hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
                    Copy Colors
                  </button>
                </div>
              </div>
              
              <!-- Empty State -->
              <div v-else class="h-full flex flex-col items-center justify-center py-10">
                <div class="w-20 h-20 bg-gradient-to-br from-[#FF5F6D]/10 to-[#FFC371]/10 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <p class="text-white/50 text-center max-w-xs">
                  Upload an image or select an example to extract a beautiful color palette
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

// State
const fileInput = ref(null);
const uploadedImage = ref(null);
const extractedColors = ref([]);
const colorHarmony = ref('Analogous with natural green tones');
const moodTags = ref(['Calm', 'Natural', 'Organic', 'Fresh', 'Serene']);

// Example images
const exampleImages = [
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n4qpEdUONyeSgAWAzpQE5adSKFXb1o.png', // Using the forest image from the screenshot
  'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?q=80&w=400&auto=format&fit=crop', // Sky
  'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=400&auto=format&fit=crop', // Pink flower
  'https://images.unsplash.com/photo-1551732998-9573f695fdbb?q=80&w=400&auto=format&fit=crop'  // Fire
];

// Methods
const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = (e) => {
      uploadedImage.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const removeImage = (event) => {
  event.preventDefault();
  uploadedImage.value = null;
  if (fileInput.value) {
    fileInput.value.value = '';
  }
  extractedColors.value = [];
};

const selectExample = (imageUrl) => {
  uploadedImage.value = imageUrl;
  // Simulate extracting colors
  if (imageUrl.includes('rlEcR')) { // Forest image
    extractedColors.value = [
      '#4c6b27', '#2d4314', '#3c5a1e', '#5a7d30', '#6b8e3d',
      '#567731', '#3e5c20', '#4a6925', '#5e8235', '#6a9339'
    ];
  } else if (imageUrl.includes('513002749550')) { // Sky
    extractedColors.value = [
      '#4a90e2', '#2c78d4', '#6ba5e9', '#87b7ed', '#a8c9f0',
      '#3b82d6', '#5a9ae6', '#7bacea', '#9cc0ee', '#c0d8f3'
    ];
  } else if (imageUrl.includes('526047932273')) { // Pink flower
    extractedColors.value = [
      '#e84a7f', '#d62d64', '#ec6b97', '#f08cad', '#f4adc3',
      '#db3d70', '#e35c8a', '#ea7ba3', '#f19bbc', '#f7bcd4'
    ];
  } else if (imageUrl.includes('551732998-9573')) { // Fire
    extractedColors.value = [
      '#e25822', '#c13b0b', '#f07339', '#f59666', '#f9b992',
      '#d44a14', '#e86b2d', '#ef8c56', '#f5ad7f', '#f9cea8'
    ];
    colorHarmony.value = 'Monochromatic with warm orange tones';
    moodTags.value = ['Energetic', 'Warm', 'Vibrant', 'Dynamic', 'Passionate'];
  }
};

const createPalette = () => {
  // Simulate extracting colors if not already done
  if (extractedColors.value.length === 0 && uploadedImage.value) {
    // Default to forest colors for demo
    extractedColors.value = [
      '#4c6b27', '#2d4314', '#3c5a1e', '#5a7d30', '#6b8e3d',
      '#567731', '#3e5c20', '#4a6925', '#5e8235', '#6a9339'
    ];
  }
};
</script>

<style>
/* Custom animations */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

/* Custom scrollbar */
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

/* Font smoothing */
html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>