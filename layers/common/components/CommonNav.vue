<template>
  <nav class="border-b border-gray-800 bg-gray-900 shadow-md">
    <div class="w-full flex items-center justify-between h-16 pl-6 pr-4">
      <div class="flex items-center">
        <!-- logo -->
        <NuxtLinkLocale
          to="/"
          aria-label="Home"
          class="flex-shrink-0"
        >
          <img
            width="170px"
            height="27px"
            src="/img/HorizontalLogo.svg?v=2"
            alt="ColorMagic - AI Color Palette generator"
            class="text-white"
          >
        </NuxtLinkLocale>

        <!-- 主导航链接 - 仅在非简化模式下显示 -->
        <div v-if="!simplified" class="hidden lg:flex ml-8 items-center space-x-1">
          <!-- Home、探索和喜欢链接 -->
          <ul class="flex items-center space-x-1">
            <li>
              <UButton
                :to="localePath('/workspace')"
                :label="t('nav.home')"
                active-class="text-primary bg-gray-800"
                variant="ghost"
                class="hover:text-primary font-medium text-gray-300 transition-colors"
                size="md"
              />
            </li>
            <li
              v-for="(item, index) in links"
              :key="index"
            >
              <UButton
                :to="item.to"
                :label="item.label"
                active-class="text-primary bg-gray-800"
                variant="ghost"
                class="hover:text-primary font-medium text-gray-300 transition-colors"
                size="md"
              />
            </li>
          </ul>

          <!-- 工具下拉菜单 -->
          <UPopover
            v-model:open="isOpen"
            mode="hover"
            class="relative"
          >
            <UButton
              variant="ghost"
              class="hover:text-primary font-medium text-gray-300 transition-colors"
              size="md"
              icon="i-heroicons-chevron-down-16-solid"
              trailing
            >
              {{ $t('nav.tools') }}
            </UButton>

            <template #panel>
              <div class="p-2 bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
                <UHeaderPopoverLinks
                  :links="toolsLinks"
                  :ui="{
                    base: 'text-left',
                    wrapper: 'grid gap-2 max-w-xs space-y-0 items-start justify-start text-left',
                    icon: {
                      base: 'text-primary w-4 h-4 mt-2'
                    },
                    label: {
                      base: 'font-medium text-gray-200'
                    },
                    description: {
                      base: 'text-xs text-gray-400'
                    }
                  }"
                />
              </div>
            </template>
          </UPopover>
        </div>
      </div>

      <!-- 右侧工具区 -->
      <div class="flex items-center gap-3 sm:gap-4">
        <!-- 语言切换器 -->
        <CommonLangSwitcher />

        <!-- 登录按钮 -->
        <UButton
          v-if="!user"
          :to="localePath('/login')"
          :label="t('nav.login')"
          class="hidden sm:flex"
          size="sm"
          variant="outline"
          color="white"
        />

        <!-- 移动设备菜单按钮 -->
        <UButton
          icon="i-heroicons-bars-3"
          class="lg:hidden text-gray-300 hover:text-white transition-colors"
          aria-label="nav"
          variant="ghost"
          size="sm"
          @click="openModal()"
        />
      </div>
    </div>

    <!-- 移动设备菜单模态框 -->
    <UModal
      v-model="isModalOpen"
      fullscreen
    >
      <div class="p-0 overflow-auto bg-gray-900 min-h-screen">
        <div class="flex items-center justify-between mb-6 pl-6 pr-2">
          <!-- logo -->
          <NuxtLinkLocale
            to="/"
            aria-label="Home"
          >
            <img
              width="170px"
              height="27px"
              src="/img/HorizontalLogo.svg?v=2"
              alt="ColorMagic - AI Color Palette generator"
              class="text-white"
            >
          </NuxtLinkLocale>

          <!-- 关闭按钮 -->
          <UButton
            icon="i-heroicons-x-mark"
            variant="ghost"
            class="text-gray-300 hover:text-white transition-colors"
            aria-label="Close menu"
            @click="isModalOpen = false"
          />
        </div>

        <!-- 移动导航链接 -->
        <UVerticalNavigation 
          :links="getNavLinks" 
          :ui="{
            base: 'space-y-2',
            wrapper: 'space-y-4',
            container: 'space-y-4',
            grouped: {
              container: 'space-y-2'
            },
            divider: 'my-3 border-gray-700',
            item: {
              base: 'group/item flex items-center gap-2 rounded-md px-3 py-2 text-sm',
              active: 'bg-gray-800 text-white font-medium',
              inactive: 'text-gray-300 hover:bg-gray-800 hover:text-white',
              label: 'truncate font-medium',
              icon: {
                base: 'flex-shrink-0 w-4 h-4'
              }
            }
          }"
        />
      </div>
    </UModal>
  </nav>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const { data: user } = useUser();

const isOpen = ref(false);

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
      to: localePath('/workspace'),
      icon: 'i-heroicons-home'
    });
  }
  
  // 添加其他常规导航链接
  navLinks = [...navLinks, ...links.value];
  
  // 为移动菜单添加图标
  const navLinksWithIcons = navLinks.map(link => {
    if (!link.icon) {
      if (link.label === t('nav.explore')) {
        return { ...link, icon: 'i-heroicons-globe-alt' };
      } else if (link.label === t('nav.liked')) {
        return { ...link, icon: 'i-heroicons-heart' };
      }
    }
    return link;
  });
  
  // 添加工具分组标题
  const toolsWithHeader = [
    {
      label: t('nav.tools'),
      disabled: true,
      class: 'text-xs text-gray-400 font-semibold px-3 pt-4'
    },
    ...toolsLinks.value
  ];
  
  return [navLinksWithIcons, toolsWithHeader];
});

// 关闭弹出菜单当路由变化时
watch(useRoute(), () => {
  isOpen.value = false;
  closeModal();
});
</script>
