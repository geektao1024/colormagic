<template>
  <div class="language-switcher" ref="switcherRef">
    <div 
      class="switcher-button" 
      @click="toggleDropdown"
      ref="buttonRef"
    >
      <span class="flag">{{ currentLocaleInfo.flag }}</span>
      <span class="code">{{ selected.toUpperCase() }}</span>
      <UIcon name="i-heroicons-chevron-down-20-solid" class="icon" />
    </div>

    <div 
      v-if="isOpen" 
      class="dropdown-menu"
      ref="dropdownRef"
      :style="dropdownStyle"
    >
      <div 
        v-for="option in options" 
        :key="option" 
        class="menu-item"
        :class="{ 'selected': option === selected }"
        @click="selected = option"
      >
        <span class="flag">{{ locales.find(v => v.code === option)?.flag }}</span>
        <span class="name">{{ locales.find(v => v.code === option)?.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue';

const { locales, locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const options = computed(() => locales.value.map(v => v.code));
const selected = ref(locale.value);
const isOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);
const buttonRef = ref<HTMLElement | null>(null);
const switcherRef = ref<HTMLElement | null>(null);

// 下拉菜单样式
const dropdownStyle = computed(() => {
  return {
    top: 'auto',
    left: 'auto'
  };
});

const currentLocaleInfo = computed(() => {
  return locales.value.find(v => v.code === selected.value) || { flag: '🌐', name: 'Language' };
});

// 处理点击外部关闭下拉菜单
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as Node;
  if (isOpen.value) {
    const dropdown = dropdownRef.value;
    const switcher = switcherRef.value;
    
    if (dropdown && switcher && !switcher.contains(target)) {
      isOpen.value = false;
    }
  }
};

// 切换下拉菜单显示状态
const toggleDropdown = (event: MouseEvent) => {
  event.stopPropagation();
  isOpen.value = !isOpen.value;
  
  if (isOpen.value) {
    nextTick(() => {
      updateDropdownPosition();
    });
  }
};

// 更新下拉菜单位置
const updateDropdownPosition = () => {
  const button = buttonRef.value;
  const dropdown = dropdownRef.value;
  
  if (button && dropdown) {
    const rect = button.getBoundingClientRect();
    dropdown.style.top = `${rect.bottom + 8}px`;
    dropdown.style.left = `${rect.left}px`;
  }
};

// 监听语言变化
watch(locale, (newValue) => {
  selected.value = newValue;
});

// 监听选择变化，切换语言
watch(selected, async (newValue) => {
  const path = switchLocalePath(newValue);
  if (path) {
    isOpen.value = false;
    await navigateTo(path);
  }
});

// 在窗口调整大小时更新下拉菜单位置
const handleResize = () => {
  if (isOpen.value) {
    updateDropdownPosition();
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
.language-switcher {
  position: relative;
  display: inline-block;
  z-index: 50;
}

.switcher-button {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.75rem;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(4px);
  cursor: pointer;
  transition: all 0.3s;
  color: rgba(255, 255, 255, 0.7);
}

.switcher-button:hover {
  color: white;
  border-color: rgba(255, 255, 255, 0.3);
}

.flag {
  font-size: 1rem;
  flex-shrink: 0;
}

.code {
  font-size: 0.875rem;
  font-weight: 500;
}

.icon {
  width: 0.875rem;
  height: 0.875rem;
  opacity: 0.7;
  transition: opacity 0.3s;
}

.switcher-button:hover .icon {
  opacity: 1;
}

.dropdown-menu {
  position: fixed;
  z-index: 9999;
  min-width: 9rem;
  background-color: rgba(17, 24, 39, 0.9);
  backdrop-filter: blur(8px);
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  overflow: hidden;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  transition: all 0.3s;
  color: rgba(255, 255, 255, 0.7);
}

.menu-item:hover {
  background-color: rgba(255, 255, 255, 0.05);
  color: white;
}

.menu-item.selected {
  background: linear-gradient(to right, rgba(255, 95, 109, 0.2), rgba(255, 195, 113, 0.2));
  color: white;
}

.name {
  font-size: 0.875rem;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style> 