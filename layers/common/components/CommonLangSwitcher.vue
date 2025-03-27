<template>
  <USelectMenu
    v-model="selected"
    size="sm"
    :options="options"
    class="text-gray-300"
    :ui="{
      button: {
        base: 'flex items-center gap-1.5 rounded-md border border-gray-700/50 bg-gray-800/70 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors',
        padding: 'px-2.5 py-1.5',
        size: 'text-sm',
        active: 'text-white'
      },
      menu: {
        base: 'z-30 overflow-hidden rounded-md shadow-lg ring-1 ring-gray-700/70 backdrop-blur-sm focus:outline-none',
        background: 'bg-gray-800/85',
        width: 'w-32'
      },
      option: {
        base: 'flex cursor-pointer items-center gap-2 px-3 py-2 text-sm text-left transition-colors',
        rounded: 'rounded-none',
        active: 'bg-gray-700/90 text-white',
        selected: 'bg-gray-700/90 text-primary-400',
        disabled: 'cursor-not-allowed opacity-50',
        default: 'text-gray-300 hover:bg-gray-700/80 hover:text-white'
      }
    }"
  >
    <!-- label -->
    <template #label>
      <span class="flex items-center gap-1.5">
        <span class="text-base">
          {{ locales.find(v => v.code === selected)?.flag }}
        </span>
        <span class="text-sm font-medium">
          {{ selected.toUpperCase() }}
        </span>
        <UIcon
          name="i-heroicons-chevron-down-20-solid"
          class="h-3.5 w-3.5 opacity-70"
        />
      </span>
    </template>

    <!-- option -->
    <template #option="{ option }">
      <span class="flex items-center gap-2">
        <span class="text-base flex-shrink-0">
          {{ locales.find(v => v.code === option)?.flag }}
        </span>
        <span class="truncate text-sm">
          {{ locales.find(v => v.code === option)?.name }}
        </span>
      </span>
    </template>
  </USelectMenu>
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
