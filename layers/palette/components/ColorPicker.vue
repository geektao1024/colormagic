<template>
  <div class="flex">
    <UPopover>
      <UButton
        icon="i-heroicons-paint-brush"
        class="text-white border border-white/20"
        size="xs"
        :style="{
          background: color,
        }"
      />

      <template #panel="{ close }">
        <div class="color-picker-panel">
          <Sketch
            v-model="color"
            @update:model-value="item => update(item.hex as HexColor)"
          />
        </div>
      </template>
    </UPopover>
  </div>
</template>

<script setup lang="ts">
import { Sketch } from '@ckpack/vue-color';

export interface Props {
  initialColor: string
}

export type HexColor = `#${string}`;

const props = defineProps<Props>();
const emits = defineEmits<(e: 'select', value: HexColor) => void>();

const color = ref(props.initialColor);

function update(hex: HexColor): void {
  color.value = hex;

  emits('select', hex);
}

watch(() => props.initialColor, (newValue) => (color.value = newValue));
</script>

<style scoped>
.color-picker-panel {
  position: absolute;
  z-index: 999;
  top: 100%;
  left: 0;
}

/* 修复颜色选择器中黑色边框问题 */
:deep(.vc-sketch) {
  background: #2a2a2a !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4) !important;
}

:deep(.vc-sketch-field) {
  border-color: rgba(255, 255, 255, 0.1) !important;
}

:deep(.vc-sketch-presets-color) {
  border-color: rgba(255, 255, 255, 0.2) !important;
}
</style>
