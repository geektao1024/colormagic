<template>
  <div class="min-h-screen bg-gradient-to-b from-[#111827] to-[#1F2937] text-white p-6">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
      <!-- 左侧工具输入区域 -->
      <div class="lg:col-span-5 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-xl relative overflow-hidden">
        <div class="absolute -top-10 -left-10 w-40 h-40 bg-[#FF5F6D]/10 rounded-full blur-[60px] -z-10"></div>
        <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-[#FFC371]/10 rounded-full blur-[60px] -z-10"></div>
        
        <div class="relative mb-3">
          <h1 class="text-2xl font-bold bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent inline-block">Image Color Picker</h1>
          <div class="absolute -bottom-2 left-0 w-16 h-[2px] bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] rounded-full"></div>
        </div>
        
        <p class="text-white/70 mb-4">
          Extract and pick a beatiful color scheme from any image with AI.
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
            label="Upload an Image"
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
                <p class="text-white/70 mb-1 group-hover:text-white transition-colors duration-300">Upload an Image</p>
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
            <span>Generate</span>
          </UButton>
        </UForm>

        <!-- 示例图片 -->
        <div class="mt-6 relative rounded-lg bg-transparent">
          <h3 class="text-lg font-medium mb-3 text-white">Try an example:</h3>
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
          <h2 class="text-2xl font-bold bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent inline-block">Extracted Colors</h2>
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
          <p class="text-lg text-white/70">Extracting colors...</p>
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
            Upload an image to extract colors
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
              <span>Save as Palette</span>
            </UButton>
            <UButton
              variant="soft"
              class="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300"
              @click="copyAllColors"
            >
              <span>Copy All</span>
            </UButton>
          </div>
        </div>
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