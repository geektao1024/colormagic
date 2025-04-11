<template>
  <div class="relative color-picker-container">
    <UButton
      icon="i-heroicons-paint-brush"
      class="text-white border-0 shadow-none ring-0 outline-none overflow-hidden"
      size="xs"
      :style="{
        background: color,
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }"
      @click="handleToggle"
      ref="buttonRef"
    />
    
    <Teleport to="body">
      <div 
        v-if="isOpen" 
        class="fixed z-50"
        :style="{ top: `${position.y}px`, left: `${position.x}px` }"
      >
        <div 
          class="p-1 border border-white/20 bg-gray-900 rounded-lg shadow-xl"
          ref="pickerPanelRef"
        >
          <div class="relative">
            <button 
              class="absolute top-1 right-1 text-white z-10 p-1 bg-white/10 rounded-full hover:bg-white/20"
              @click="isOpen = false"
            >
              <UIcon name="i-heroicons-x-mark-20-solid" class="w-3 h-3" />
            </button>
            <Sketch
              v-model="color"
              @update:model-value="item => update(item.hex as HexColor)"
            />
          </div>
        </div>
      </div>
    </Teleport>
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
const isOpen = ref(false);
const position = ref({ x: 0, y: 0 });
const pickerPanelRef = ref<HTMLElement | null>(null);
const buttonRef = ref<HTMLElement | null>(null);

// 处理按钮点击事件，显示/隐藏颜色选择器并更新位置
function handleToggle() {
  // 切换显示状态
  isOpen.value = !isOpen.value;
  
  // 如果打开，则立即计算位置
  if (isOpen.value && buttonRef.value) {
    updatePosition();
  }
}

// 更新调色板位置
function updatePosition() {
  if (!buttonRef.value) return;
  
  // 获取按钮位置
  const rect = buttonRef.value.getBoundingClientRect();
  
  // 设置默认位置在按钮下方偏左
  position.value = {
    x: rect.left,
    y: rect.bottom + 5
  };
  
  // 防止溢出窗口
  nextTick(() => {
    if (pickerPanelRef.value) {
      const panelRect = pickerPanelRef.value.getBoundingClientRect();
      const rightOverflow = window.innerWidth - (position.value.x + panelRect.width);
      
      if (rightOverflow < 0) {
        position.value.x = Math.max(0, window.innerWidth - panelRect.width);
      }
      
      const bottomOverflow = window.innerHeight - (position.value.y + panelRect.height);
      if (bottomOverflow < 0) {
        position.value.y = Math.max(0, rect.top - panelRect.height - 5);
      }
    }
  });
}

function update(hex: HexColor): void {
  color.value = hex;
  emits('select', hex);
}

// 点击外部关闭面板
onMounted(() => {
  document.addEventListener('mousedown', (event) => {
    if (isOpen.value && pickerPanelRef.value && 
        !pickerPanelRef.value.contains(event.target as Node) && 
        buttonRef.value && !buttonRef.value.contains(event.target as Node)) {
      isOpen.value = false;
    }
  });
});

// 重置颜色
watch(() => props.initialColor, (newValue) => (color.value = newValue));
</script>

<style scoped>
.color-picker-container {
  position: relative;
  z-index: 1;
}
</style>


