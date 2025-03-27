<template>
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
    <!-- 左侧工具输入区域 -->
    <div class="lg:col-span-5 bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
      <h1 class="text-2xl font-bold mb-4">{{ $t('nav.colorPaletteGenrator') }}</h1>
      <p class="text-lg mb-6 text-gray-300">{{ $t('home.seoDescription') }}</p>
      
      <!-- 表单 -->
      <UForm
        :state="state"
        :schema="FormSchema"
        class="space-y-4"
        @submit="onSubmit"
      >
        <!-- 提示词 -->
        <UFormGroup name="prompt">
          <UButtonGroup
            size="xl"
            class="w-full"
          >
            <UInput
              v-model="state.prompt"
              size="xl"
              class="w-full bg-gray-700 border-gray-600 text-white"
              :placeholder="$t('generate.placeholder')"
            />
            <UButton
              icon="i-heroicons-arrow-path"
              class="bg-gray-700 border-gray-600 text-white"
              aria-label="Generate Sample Prompt"
              @click="generateSamplePrompt()"
            />
          </UButtonGroup>
        </UFormGroup>

        <!-- 提交按钮 -->
        <UButton
          type="submit"
          block
          size="xl"
          class="mt-4"
          color="primary"
          :label="$t('generate.label')"
          :loading="isPending"
        />
      </UForm>

      <!-- 样例提示词 -->
      <div class="mt-6">
        <p class="text-sm font-medium mb-2">{{ $t('home.exampleLabel') }}</p>
        <div class="flex flex-wrap gap-2">
          <UButton
            v-for="(example, index) in samplePrompts"
            :key="index"
            size="xs"
            variant="soft"
            @click="state.prompt = example"
          >
            {{ example }}
          </UButton>
        </div>
      </div>

      <!-- 调色板数量 -->
      <p class="italic text-xs text-center mt-8 text-gray-400">
        {{ count?.count.toLocaleString() ?? 0 }} {{ $t('app.palette.palettesGenerated') }}
      </p>
    </div>

    <!-- 右侧结果显示区域 -->
    <div class="lg:col-span-7 bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
      <!-- 结果标题 -->
      <h2 class="text-xl font-bold mb-4">{{ $t('app.palette.result') }}</h2>

      <!-- 加载状态 -->
      <div v-if="isPending" class="flex flex-col items-center justify-center py-12">
        <UIcon name="i-heroicons-arrow-path" class="animate-spin text-primary h-12 w-12 mb-4" />
        <p>{{ $t('app.palette.generating') }}</p>
      </div>

      <!-- 空状态 -->
      <div v-else-if="!currentPalette" class="flex flex-col items-center justify-center py-12 border border-dashed border-gray-700 rounded-lg bg-gray-850">
        <UIcon name="i-heroicons-paint-brush" class="text-gray-400 h-12 w-12 mb-4" />
        <p class="text-gray-400">{{ $t('app.palette.emptyState') }}</p>
      </div>

      <!-- 调色板结果 -->
      <div v-else class="space-y-6">
        <!-- 调色板颜色显示 -->
        <div>
          <div class="flex overflow-hidden rounded-lg mb-2 h-32">
            <div
              v-for="(color, index) in currentPalette.colors"
              :key="index"
              class="flex-1 h-full"
              :style="{ backgroundColor: color }"
            ></div>
          </div>

          <!-- 颜色值展示 -->
          <div class="grid grid-cols-5 gap-2">
            <UPopover
              v-for="(color, index) in currentPalette.colors"
              :key="index"
              :popper="{ placement: 'top' }"
            >
              <UButton
                :style="{ backgroundColor: color }"
                class="w-full h-10 rounded"
                @click="copyColorToClipboard(color)"
              />
              <template #panel>
                <div class="p-2 text-center bg-gray-800 border border-gray-700">
                  <p class="text-sm">{{ color }}</p>
                  <p class="text-xs text-gray-400">{{ $t('app.palette.clickToCopy') }}</p>
                </div>
              </template>
            </UPopover>
          </div>
        </div>

        <!-- 调色板名称 -->
        <div>
          <p class="font-medium mb-1">{{ $t('app.palette.paletteName') }}:</p>
          <p class="text-gray-300">{{ currentPalette.text }}</p>
        </div>

        <!-- 调整选项 -->
        <div class="bg-gray-850 p-4 rounded-lg border border-gray-700">
          <UFormGroup :label="$t('palette.brightness')">
            <URange
              v-model="arrange.brightness"
              :min="-100"
              :max="100"
              :step="10"
            />
          </UFormGroup>
          <UFormGroup :label="$t('palette.saturation')">
            <URange
              v-model="arrange.saturation"
              :min="-100"
              :max="100"
              :step="10"
            />
          </UFormGroup>
          <UFormGroup :label="$t('palette.warmth')">
            <URange
              v-model="arrange.warmth"
              :min="-100"
              :max="100"
              :step="10"
            />
          </UFormGroup>

          <div class="flex justify-between mt-4">
            <!-- 重置按钮 -->
            <UButton
              variant="soft"
              :label="$t('palette.resetLabel')"
              :disabled="!hasChanges"
              @click="resetArrange"
            />

            <!-- 保存按钮 -->
            <UButton
              color="primary"
              :label="$t('palette.saveLabel')"
              @click="savePalette"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { object, type InferType, string } from 'yup';
import type { FormSubmitEvent } from '#ui/types';

definePageMeta({
  layout: 'app'
});

const { t, locale } = useI18n();
const localePath = useLocalePath();
const notifications = useNotifications();

// SEO元数据
const title = computed(() => t('home.seoTitle'));
const description = computed(() => t('home.seoDescription'));

useSeoMeta({
  title,
  description,
  ogTitle: title.value,
  ogDescription: description,
  ogImageUrl: `${useRuntimeConfig().public.siteUrl}/img/og.png`
});

// 获取调色板数量
const { data: count, suspense } = usePaletteCount();
await suspense();

// 表单状态
const state = ref({
  prompt: ''
});

// 表单验证
const FormSchema = object({
  prompt: string().required()
});

export type Form = InferType<typeof FormSchema>;

// 示例提示词
const samplePrompts = ref(getSamplePrompt(getLocale(locale.value)));

// 生成随机示例提示词
function generateSamplePrompt(): void {
  state.value.prompt = samplePrompts.value[Math.floor(Math.random() * samplePrompts.value.length)];
}

// 调色板生成相关
const { mutate: create, isPending } = useCreatePalette();
const currentPalette = ref<{ id: string; text: string; colors: string[] } | null>(null);

// 颜色调整
const arrange = ref({
  brightness: 0,
  saturation: 0,
  warmth: 0
});

// 检查是否有变更
const hasChanges = computed(() => {
  return arrange.value.brightness !== 0 ||
  arrange.value.saturation !== 0 ||
  arrange.value.warmth !== 0 ||
  (currentPalette.value !== null && JSON.stringify(currentPalette.value.colors) !== JSON.stringify(arrangedColors.value));
});

// 计算调整后的颜色
const arrangedColors = computed(() => {
  if (!currentPalette.value) return [];
  return arrangeColors(currentPalette.value.colors, {
    brightness: arrange.value.brightness,
    saturation: arrange.value.saturation,
    warmth: arrange.value.warmth
  });
});

// 重置调整
function resetArrange(): void {
  arrange.value.brightness = 0;
  arrange.value.saturation = 0;
  arrange.value.warmth = 0;
}

// 复制颜色到剪贴板
function copyColorToClipboard(color: string): void {
  navigator.clipboard.writeText(color);
  notifications.addSuccess(t('app.palette.colorCopied'));
}

// 保存调色板
function savePalette(): void {
  if (!currentPalette.value) return;
  
  // 实际保存逻辑需要根据应用需求实现
  notifications.addSuccess(t('app.palette.paletteSaved'));
}

// 提交表单
function onSubmit(event: FormSubmitEvent<Form>): void {
  create({ prompt: event.data.prompt }, {
    onError: (err) => {
      notifications.addError(err.message ?? 'Error creating palette.');
    },
    onSuccess: (value) => {
      currentPalette.value = value;
      resetArrange();
      notifications.addSuccess(`${t('app.palette.successGenerated')} "${value.text}"`);
    }
  });
}
</script> 