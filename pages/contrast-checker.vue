<template>
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
    <!-- 左侧工具输入区域 -->
    <div class="lg:col-span-5 bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
      <h1 class="text-2xl font-bold mb-4">{{ $t('contrastChecker.title') }}</h1>
      <p class="text-lg mb-6 text-gray-300">{{ $t('contrastChecker.seoDescription') }}</p>
      
      <!-- 表单 -->
      <UForm
        :state="state"
        :schema="FormSchema"
        class="space-y-4"
      >
        <!-- 前景色（文本） -->
        <UFormGroup
          name="primary"
          :label="$t('contrastChecker.primaryLabel')"
        >
          <div class="flex gap-2 items-center">
            <!-- 颜色选择器 -->
            <ColorPicker
              :initial-color="state.primary"
              @select="value => state.primary = value"
            />

            <!-- 文本输入 -->
            <UInput
              v-model="state.primary"
              placeholder="#000000"
              class="bg-gray-700 border-gray-600 text-white"
            />
          </div>
        </UFormGroup>

        <!-- 前景色调整 -->
        <div class="border border-gray-700 rounded-lg p-4 space-y-4 bg-gray-850">
          <ColorArrangeSliders v-model="arrangePrimary" />

          <!-- 重置按钮 -->
          <UButton
            v-if="primaryHasChanges"
            :label="$t('palette.resetLabel')"
            block
            @click="resetPrimaryArrange()"
          />
        </div>

        <!-- 背景色 -->
        <UFormGroup
          name="secondary"
          :label="$t('contrastChecker.secondaryLabel')"
        >
          <div class="flex gap-2 items-center">
            <!-- 颜色选择器 -->
            <ColorPicker
              :initial-color="state.secondary"
              @select="value => state.secondary = value"
            />

            <!-- 文本输入 -->
            <UInput
              v-model="state.secondary"
              placeholder="#000000"
              class="bg-gray-700 border-gray-600 text-white"
            />
          </div>
        </UFormGroup>

        <!-- 背景色调整 -->
        <div class="border border-gray-700 rounded-lg p-4 space-y-4 bg-gray-850">
          <ColorArrangeSliders v-model="arrangeSecondary" />

          <!-- 重置按钮 -->
          <UButton
            v-if="secondaryHasChanges"
            :label="$t('palette.resetLabel')"
            block
            @click="resetSecondaryArrange()"
          />
        </div>
      </UForm>
    </div>

    <!-- 右侧结果显示区域 -->
    <div class="lg:col-span-7 bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
      <!-- 结果标题 -->
      <h2 class="text-xl font-bold mb-4">{{ $t('app.contrastChecker.result') }}</h2>

      <!-- 颜色显示预览 -->
      <div class="overflow-hidden border border-gray-700 rounded-lg mb-4">
        <!-- 颜色块 -->
        <div
          class="h-44 w-full flex justify-center items-center"
          :style="{ background: arrangedSecondaryColor[0] }"
        >
          <p
            :style="{ color: arrangedPrimaryColor[0] }"
            class="font-semibold text-xl"
          >
            {{ $t('contrastChecker.exampleText') }}
          </p>
        </div>

        <!-- 对比度检查结果 -->
        <ul class="flex flex-wrap gap-4 p-4 border-t border-gray-700 bg-gray-850">
          <li>
            <p class="font-semibold text-sm">
              {{ $t('contrastChecker.contrastRatio') }}:
            </p>
            <UBadge
              color="gray"
              :label="contrastRatio.toFixed(2)"
            />
          </li>
          <li>
            <p class="font-semibold text-sm">
              {{ $t('contrastChecker.normalText') }}:
            </p>
            <UBadge
              :color="contrastRatio >= 4.5 ? 'green' : 'red'"
              :label="contrastRatio < 4.5 ? $t('contrastChecker.failText') : contrastRatio < 7 ? 'AA' : 'AAA'"
            />
          </li>
          <li>
            <p class="font-semibold text-sm">
              {{ $t('contrastChecker.largeText') }}:
            </p>
            <UBadge
              :color="contrastRatio >= 3 ? 'green' : 'red'"
              :label="contrastRatio < 3 ? $t('contrastChecker.failText') : contrastRatio < 4.5 ? 'AA' : 'AAA'"
            />
          </li>
          <li>
            <p class="font-semibold text-sm">
              {{ $t('contrastChecker.uiComponents') }}:
            </p>
            <UBadge
              :color="contrastRatio >= 3 ? 'green' : 'red'"
              :label="contrastRatio < 3 ? $t('contrastChecker.failText') : 'AA'"
            />
          </li>
        </ul>
      </div>

      <!-- 颜色块和复制按钮 -->
      <div class="grid grid-cols-2 gap-4 mb-6">
        <!-- 前景色 -->
        <div class="border border-gray-700 rounded-lg overflow-hidden">
          <div
            class="w-full h-20"
            :style="{ background: arrangedPrimaryColor[0] }"
          />
          <div class="p-3 flex items-center border-t border-gray-700 bg-gray-850">
            <div class="text-sm font-medium mr-2">{{ $t('app.contrastChecker.foreground') }}:</div>
            <ColorCopyButtons :hex="arrangedPrimaryColor[0]" />
          </div>
        </div>
        
        <!-- 背景色 -->
        <div class="border border-gray-700 rounded-lg overflow-hidden">
          <div
            class="w-full h-20"
            :style="{ background: arrangedSecondaryColor[0] }"
          />
          <div class="p-3 flex items-center border-t border-gray-700 bg-gray-850">
            <div class="text-sm font-medium mr-2">{{ $t('app.contrastChecker.background') }}:</div>
            <ColorCopyButtons :hex="arrangedSecondaryColor[0]" />
          </div>
        </div>
      </div>

      <!-- 无障碍说明 -->
      <div class="text-sm text-gray-300">
        <p class="mb-4">
          {{ $t('contrastChecker.legibilityDescription') }}
        </p>
        <ul class="list-disc list-inside pl-2 flex flex-col gap-2">
          <li>
            <UButton
              variant="link"
              :padded="false"
              to="https://www.w3.org/TR/WCAG21/#contrast-minimum"
              target="_blank"
              label="1.4.3 Minimum Contrast (AA)"
              class="text-primary"
            />
          </li>
          <li>
            <UButton
              variant="link"
              :padded="false"
              to="https://www.w3.org/TR/WCAG21/#contrast-enhanced"
              target="_blank"
              label="1.4.6 Enhanced Contrast (AAA)"
              class="text-primary"
            />
          </li>
          <li>
            <UButton
              variant="link"
              :padded="false"
              to="https://www.w3.org/TR/WCAG21/#non-text-contrast"
              target="_blank"
              label="1.4.11 Non-Text Contrast (AA)"
              class="text-primary"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { object, type InferType, string } from 'yup';
import ntc from '~/layers/palette/utils/ntc.util';

definePageMeta({
  layout: 'app'
});

const { t } = useI18n();

// SEO元数据
const title = computed(() => t('contrastChecker.seoTitle'));
const description = computed(() => t('contrastChecker.seoDescription'));

useSeoMeta({
  title,
  description,
  ogTitle: title.value,
  ogDescription: description,
  ogImageUrl: `${useRuntimeConfig().public.siteUrl}/img/og.png`
});

// 表单状态
const state = ref({
  primary: '#fae8c7',
  secondary: '#9a6acd'
});

// 表单验证
const FormSchema = object({
  primary: string().required(),
  secondary: string().required()
});

export type Form = InferType<typeof FormSchema>;

// 颜色调整状态
const arrangePrimary = ref({
  brightness: 0,
  saturation: 0,
  warmth: 0
});

const arrangeSecondary = ref({
  brightness: 0,
  saturation: 0,
  warmth: 0
});

// 计算调整后的颜色
const arrangedPrimaryColor = computed(() => arrangeColors([state.value.primary], {
  brightness: arrangePrimary.value.brightness,
  saturation: arrangePrimary.value.saturation,
  warmth: arrangePrimary.value.warmth
}));

const arrangedSecondaryColor = computed(() => arrangeColors([state.value.secondary], {
  brightness: arrangeSecondary.value.brightness,
  saturation: arrangeSecondary.value.saturation,
  warmth: arrangeSecondary.value.warmth
}));

// 计算对比度
const contrastRatio = computed(() => {
  return calculateContrastRatio(
    ntc.rgb(arrangedPrimaryColor.value[0]),
    ntc.rgb(arrangedSecondaryColor.value[0])
  );
});

// 检查是否有调整
const primaryHasChanges = computed(() => {
  return arrangePrimary.value.brightness !== 0 ||
  arrangePrimary.value.saturation !== 0 ||
  arrangePrimary.value.warmth !== 0;
});

const secondaryHasChanges = computed(() => {
  return arrangeSecondary.value.brightness !== 0 ||
  arrangeSecondary.value.saturation !== 0 ||
  arrangeSecondary.value.warmth !== 0;
});

// 重置调整
function resetPrimaryArrange(): void {
  arrangePrimary.value.brightness = 0;
  arrangePrimary.value.saturation = 0;
  arrangePrimary.value.warmth = 0;
}

function resetSecondaryArrange(): void {
  arrangeSecondary.value.brightness = 0;
  arrangeSecondary.value.saturation = 0;
  arrangeSecondary.value.warmth = 0;
}
</script> 