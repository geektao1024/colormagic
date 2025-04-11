<template>
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
    <!-- 左侧工具输入区域 -->
    <div class="lg:col-span-5 bg-white rounded-lg p-6 shadow-sm">
      <h1 class="text-2xl font-bold mb-4">{{ $t('imageColorPicker.title') }}</h1>
      <p class="text-lg mb-6">{{ $t('imageColorPicker.seoDescription') }}</p>
      
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
          <div class="border border-gray-200 rounded-lg p-4 bg-gray-50 mb-4">
            <img
              v-if="state.dataUrl !== ''"
              :src="state.dataUrl"
              class="w-full h-48 object-contain bg-white rounded mb-4 shadow-sm"
            >
            <UInput
              type="file"
              size="xl"
              accept="image/*"
              icon="i-heroicons-photo"
              @change="files = $event"
            />
          </div>
        </UFormGroup>

        <!-- 提交按钮 -->
        <UButton
          type="submit"
          block
          size="xl"
          class="mt-4"
          color="primary"
          :label="$t('generate.label')"
          :loading="isPending || isFetchingImage"
          :disabled="!hasImage"
        />
      </UForm>

      <!-- 示例图片 -->
      <div class="mt-6">
        <h2 class="text-lg font-medium mb-3">{{ $t('home.exampleLabel') }}</h2>
        <div class="grid grid-cols-2 gap-3">
          <div
            v-for="(item, index) in getSampleImages().slice(0, 4)"
            :key="index"
          >
            <ImageButton
              :thumbnail-url="item"
              :name="`Example ${index + 1}`"
              :disabled="isPending || isFetchingImage"
              @click="onClickExample(item)"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- 右侧结果显示区域 -->
    <div class="lg:col-span-7 bg-white rounded-lg p-6 shadow-sm">
      <!-- 结果标题 -->
      <h2 class="text-xl font-bold mb-4">{{ $t('app.imageColorPicker.result') }}</h2>

      <!-- 加载状态 -->
      <div v-if="isPending || isFetchingImage" class="flex flex-col items-center justify-center py-12">
        <UIcon name="i-heroicons-arrow-path" class="animate-spin text-primary h-12 w-12 mb-4" />
        <p>{{ $t('app.imageColorPicker.extracting') }}</p>
      </div>

      <!-- 空状态 -->
      <div v-else-if="!extractedColors.length" class="flex flex-col items-center justify-center py-12 border border-dashed border-gray-200 rounded-lg">
        <UIcon name="i-heroicons-photo" class="text-gray-400 h-12 w-12 mb-4" />
        <p class="text-gray-500">{{ $t('app.imageColorPicker.emptyState') }}</p>
      </div>

      <!-- 提取的颜色结果 -->
      <div v-else class="space-y-6">
        <!-- 颜色显示 -->
        <div>
          <div class="flex overflow-hidden rounded-lg mb-2 h-32">
            <div
              v-for="(color, index) in extractedColors"
              :key="index"
              class="flex-1 h-full"
              :style="{ backgroundColor: color }"
            ></div>
          </div>

          <!-- 颜色值展示 -->
          <div class="grid grid-cols-5 gap-2">
            <UPopover
              v-for="(color, index) in extractedColors"
              :key="index"
              :popper="{ placement: 'top' }"
            >
              <UButton
                :style="{ backgroundColor: color }"
                class="w-full h-10 rounded"
                @click="copyColorToClipboard(color)"
              />
              <template #panel>
                <div class="p-2 text-center">
                  <p class="text-sm">{{ color }}</p>
                  <p class="text-xs text-gray-500">{{ $t('app.palette.clickToCopy') }}</p>
                </div>
              </template>
            </UPopover>
          </div>
        </div>

        <!-- 操作按钮 -->
        <div class="flex gap-3">
          <UButton
            block
            color="primary"
            :label="$t('app.imageColorPicker.savePalette')"
            @click="savePalette"
          />
          <UButton
            variant="soft"
            :label="$t('app.imageColorPicker.copyAll')"
            @click="copyAllColors"
          />
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
</script> 