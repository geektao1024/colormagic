<template>
  <div>
    <VDropdown :distance="5" :skidding="0" placement="bottom-start" theme="dark" :triggers="['click']" :disabled="isUpdating" @apply-show="onShow">
      <UButton
        icon="i-heroicons-paint-brush"
        class="text-white bg-transparent"
        size="xs"
        :style="{
          background: color,
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }"
      />
      
      <template #popper="{ hide }">
        <div class="border border-white/20 bg-gray-900 rounded-lg shadow-xl sketch-custom-container">
          <div class="relative p-1">
            <button 
              class="absolute top-1 right-1 text-white z-10 p-1 bg-white/10 rounded-full hover:bg-white/20"
              @click="hide"
            >
              <UIcon name="i-heroicons-x-mark-20-solid" class="w-3 h-3" />
            </button>
            <Sketch
              v-model="color"
              @update:model-value="item => update(item.hex as HexColor, hide)"
            />
          </div>
        </div>
      </template>
    </VDropdown>
  </div>
</template>

<script setup lang="ts">
import { Sketch } from '@ckpack/vue-color';
import { VDropdown } from 'floating-vue';
import 'floating-vue/dist/style.css';

export interface Props {
  initialColor: string
}

export type HexColor = `#${string}`;

const props = defineProps<Props>();
const emits = defineEmits<(e: 'select', value: HexColor) => void>();

const color = ref(props.initialColor);
const isUpdating = ref(false);

function onShow() {
  // 确保打开时颜色值是最新的
  color.value = props.initialColor;
}

function update(hex: HexColor, hideDropdown: () => void): void {
  isUpdating.value = true;
  
  // 更新颜色
  color.value = hex;
  emits('select', hex);
  
  // 短暂延迟以防止在选择颜色后立即关闭
  setTimeout(() => {
    isUpdating.value = false;
  }, 50);
}

// 重置颜色
watch(() => props.initialColor, (newValue) => {
  color.value = newValue;
});
</script>

<style>
/* 确保颜色选择器样式正确 */
.sketch-custom-container .vc-sketch {
  background: #2d3748 !important;
  border: none !important;
  box-shadow: none !important;
}

.sketch-custom-container .vc-sketch-field span {
  color: #f7fafc !important;
}

.sketch-custom-container .vc-sketch-field input {
  background: rgba(255, 255, 255, 0.1) !important;
  color: white !important;
  box-shadow: none !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
}

.sketch-custom-container .vc-sketch-presets {
  border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
}

/* 自定义浮动Vue样式 */
.v-popper--theme-dark .v-popper__inner {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
}

.v-popper--theme-dark .v-popper__arrow-outer {
  border-color: rgba(255, 255, 255, 0.2) !important;
}

.v-popper--theme-dark .v-popper__arrow-inner {
  border-color: #2d3748 !important;
}
</style>


