<template>
  <header class="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-[#111827]/80 border-b border-white/5">
    <div class="container mx-auto px-6 py-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-12">
          <!-- logo -->
          <NuxtLinkLocale
            to="/"
            aria-label="Home"
            class="flex items-center"
          >
            <div class="relative">
              <span class="text-2xl font-extrabold">
                <span class="text-white">Color</span>
                <span class="bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent">Magic</span>
              </span>
              <div class="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] rounded-full"></div>
            </div>
          </NuxtLinkLocale>

          <!-- 主导航链接 - 仅在非简化模式下显示 -->
          <div v-if="!simplified" class="hidden lg:flex space-x-8">
            <NuxtLinkLocale
              to="/home"
              class="text-sm text-white/70 hover:text-white transition-colors duration-300 relative group"
            >
              {{ t('nav.home') }}
              <span class="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] group-hover:w-full transition-all duration-300"></span>
            </NuxtLinkLocale>
            
            <NuxtLinkLocale
              v-for="(item, index) in links"
              :key="index"
              :to="item.to"
              class="text-sm text-white/70 hover:text-white transition-colors duration-300 relative group"
            >
              {{ item.label }}
              <span class="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] group-hover:w-full transition-all duration-300"></span>
            </NuxtLinkLocale>

            <!-- 工具下拉菜单 -->
            <UPopover
              v-model="isToolsMenuOpen"
              :ui="{
                container: 'z-50',
                width: 'max-w-sm',
                base: 'relative',
                panel: 'absolute z-50 mt-2 w-screen max-w-60 px-0 sm:px-0'
              }"
            >
              <button class="text-sm text-white/70 hover:text-white transition-colors duration-300 relative group cursor-pointer flex items-center">
                {{ $t('nav.tools') }}
                <UIcon name="i-heroicons-chevron-down-16-solid" class="ml-1 w-4 h-4" />
                <span class="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] group-hover:w-full transition-all duration-300"></span>
              </button>

              <template #panel>
                <div class="p-3 bg-[#111827]/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl">
                  <div class="grid gap-2">
                    <NuxtLinkLocale
                      v-for="link in toolsLinks" 
                      :key="link.to" 
                      :to="link.to"
                      class="flex items-start gap-3 p-2 hover:bg-white/5 rounded-lg transition-colors duration-200"
                      @click="isToolsMenuOpen = false"
                    >
                      <UIcon :name="link.icon" class="w-5 h-5 text-[#FF5F6D] mt-1 flex-shrink-0" />
                      <div>
                        <div class="text-white font-medium text-sm">{{ link.label }}</div>
                        <div class="text-xs text-white/60">{{ link.description }}</div>
                      </div>
                    </NuxtLinkLocale>
                  </div>
                </div>
              </template>
            </UPopover>
          </div>
        </div>

        <!-- 右侧工具区 -->
        <div class="flex items-center gap-4">
          <!-- 语言切换器 -->
          <CommonLangSwitcherV2 />

          <!-- 登录按钮 -->
          <NuxtLinkLocale
            v-if="!user"
            to="/login"
            class="px-5 py-2 text-sm text-[#111827] font-medium bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] rounded-full hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 transform hover:translate-y-[-2px] hidden sm:block"
          >
            {{ t('nav.login') }}
          </NuxtLinkLocale>

          <!-- 移动设备菜单按钮 -->
          <button
            class="lg:hidden text-white/70 hover:text-white transition-colors duration-300"
            aria-label="nav"
            @click="openModal()"
          >
            <UIcon name="i-heroicons-bars-3" class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- 移动设备菜单模态框 -->
    <UModal
      v-model="isModalOpen"
      fullscreen
    >
      <div class="p-0 overflow-auto bg-[#111827] min-h-screen">
        <div class="flex items-center justify-between mb-6 pl-6 pr-2 pt-4">
          <!-- logo -->
          <NuxtLinkLocale
            to="/"
            aria-label="Home"
          >
            <div class="relative">
              <span class="text-2xl font-extrabold">
                <span class="text-white">Color</span>
                <span class="bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent">Magic</span>
              </span>
              <div class="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] rounded-full"></div>
            </div>
          </NuxtLinkLocale>

          <!-- 关闭按钮 -->
          <button
            class="text-white/70 hover:text-white transition-colors duration-300 p-2"
            aria-label="Close menu"
            @click="isModalOpen = false"
          >
            <UIcon name="i-heroicons-x-mark" class="w-6 h-6" />
          </button>
        </div>

        <!-- 移动导航链接 -->
        <div class="px-6 space-y-6">
          <div class="space-y-4">
            <div v-for="link in getNavLinks[0]" :key="link.to" class="w-full">
              <NuxtLinkLocale
                :to="link.to"
                class="flex items-center gap-3 py-3 text-white/70 hover:text-white transition-colors duration-300"
                @click="isModalOpen = false"
              >
                <UIcon :name="link.icon" class="w-5 h-5" />
                <span>{{ link.label }}</span>
              </NuxtLinkLocale>
            </div>
          </div>
          
          <div class="pt-4 border-t border-white/10">
            <div class="text-xs text-white/50 font-semibold mb-4">{{ t('nav.tools') }}</div>
            <div v-for="link in toolsLinks" :key="link.to" class="mb-4">
              <NuxtLinkLocale
                :to="link.to"
                class="block"
                @click="isModalOpen = false"
              >
                <div class="flex items-start gap-3">
                  <UIcon :name="link.icon" class="w-5 h-5 text-[#FF5F6D] mt-1" />
                  <div>
                    <div class="text-white font-medium">{{ link.label }}</div>
                    <div class="text-xs text-white/60">{{ link.description }}</div>
                  </div>
                </div>
              </NuxtLinkLocale>
            </div>
          </div>
          
          <div class="pt-6">
            <NuxtLinkLocale
              v-if="!user"
              to="/login"
              class="w-full py-3 text-center text-[#111827] font-medium bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] rounded-full hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
              @click="isModalOpen = false"
            >
              {{ t('nav.login') }}
            </NuxtLinkLocale>
          </div>
        </div>
      </div>
    </UModal>
  </header>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const { data: user } = useUser();

const isOpen = ref(false);
const isToolsMenuOpen = ref(false);

const {
  isOpen: isModalOpen,
  open: openModal,
  close: closeModal
} = useModalV2();

// 接收简化模式参数
const props = defineProps({
  simplified: {
    type: Boolean,
    default: false
  }
});

const links = computed(() => [
  {
    label: t('nav.explore'),
    to: localePath('/palette/explore')
  },
  {
    label: t('nav.liked'),
    to: localePath('/palette/liked')
  }
]);

const toolsLinks = computed(() => [{
  to: props.simplified ? localePath('/palette-generator') : localePath('/'),
  label: t('nav.colorPaletteGenrator'),
  description: t('home.title'),
  icon: 'i-heroicons-paint-brush'
},
{
  to: props.simplified ? localePath('/random-color') : localePath('/random-color'),
  label: t('nav.randomColor'),
  description: t('randomColor.seoDescription'),
  icon: 'i-heroicons-arrow-path'
},
{
  to: props.simplified ? localePath('/image-color-picker') : localePath('/image-color-picker'),
  label: t('nav.imageColorPicker'),
  description: t('imageColorPicker.seoDescription'),
  icon: 'i-heroicons-photo'
},
{
  to: props.simplified ? localePath('/contrast-checker') : localePath('/contrast-checker'),
  label: t('nav.contrastChecker'),
  description: t('contrastChecker.seoDescription'),
  icon: 'i-heroicons-sun'
}]);

// 计算导航链接（添加工作台入口到移动导航中）
const getNavLinks = computed(() => {
  let navLinks = [];
  
  // 在非简化模式下添加工作台入口
  if (!props.simplified) {
    navLinks.push({
      label: t('nav.home'),
      to: localePath('/home'),
      icon: 'i-heroicons-home'
    });
  }
  
  // 添加其他常规导航链接
  navLinks = [...navLinks, ...links.value.map(link => ({
    ...link,
    icon: link.label === t('nav.explore') ? 'i-heroicons-globe-alt' : 'i-heroicons-heart'
  }))];
  
  return [navLinks, []];
});

// 关闭弹出菜单当路由变化时
watch(useRoute(), () => {
  isOpen.value = false;
  closeModal();
});
</script>
