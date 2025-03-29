<template>
  <div class="lang-switcher-debug !border-2 !border-red-500">
    <USelectMenu
      v-model="selected"
      size="sm"
      :options="options"
      class="text-white !important-classes"
      :ui="{
        button: {
          base: 'flex items-center gap-1.5 rounded-full border border-white/10 backdrop-blur-sm bg-white/5 text-white/70 hover:text-white hover:border-white/30 transition-all duration-300 !important-button',
          padding: 'px-3 py-1.5',
          size: 'text-sm',
          active: 'text-white'
        },
        menu: {
          base: 'z-30 overflow-hidden rounded-xl shadow-xl backdrop-blur-xl focus:outline-none border border-white/10 !important-menu',
          background: 'bg-[#111827]/90',
          width: 'w-36'
        },
        option: {
          base: 'flex cursor-pointer items-center gap-2 px-3 py-2 text-sm text-left transition-colors duration-300 !important-option',
          rounded: 'rounded-none',
          active: 'bg-white/10 text-white',
          selected: 'bg-gradient-to-r from-[#FF5F6D]/20 to-[#FFC371]/20 text-white',
          disabled: 'cursor-not-allowed opacity-50',
          default: 'text-white/70 hover:bg-white/5 hover:text-white'
        }
      }"
    >
      <!-- label -->
      <template #label>
        <span class="flex items-center gap-1.5">
          <span class="text-base flex-shrink-0">
            {{ locales.find(v => v.code === selected)?.flag }}
          </span>
          <span class="text-sm font-medium">
            {{ selected.toUpperCase() }}
          </span>
          <UIcon
            name="i-heroicons-chevron-down-20-solid"
            class="h-3.5 w-3.5 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
          />
        </span>
      </template>

      <!-- option -->
      <template #option="{ option }">
        <span class="flex items-center gap-2">
          <span class="text-base flex-shrink-0">
            {{ locales.find(v => v.code === option)?.flag }}
          </span>
          <span class="truncate text-sm font-medium">
            {{ locales.find(v => v.code === option)?.name }}
          </span>
        </span>
      </template>
    </USelectMenu>
  </div>
</template>

<script setup lang="ts">
const { locales, locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const options = locales.value.map(v => v.code);
const selected = ref(locale.value);

watch(locale, (newValue) => {
  selected.value = newValue;
});

watch(selected, async (newValue) => {
  await navigateTo(switchLocalePath(newValue));
});
</script>

<style>
/* 强制应用的样式，查看是否被覆盖 */
.lang-switcher-debug {
  display: inline-block !important;
  position: relative !important;
}

.important-classes {
  /* 强制样式 */
  color: white !important;
}

.important-button {
  /* 强制的按钮样式 */
  border-radius: 9999px !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  background-color: rgba(255, 255, 255, 0.05) !important;
  backdrop-filter: blur(4px) !important;
}

.important-menu {
  /* 强制的菜单样式 */
  border-radius: 0.75rem !important;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
  backdrop-filter: blur(8px) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
}

.important-option {
  /* 强制的选项样式 */
  transition: all 0.3s !important;
}
</style>
