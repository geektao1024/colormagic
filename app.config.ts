export default defineAppConfig({
  ui: {
    primary: 'default-blue',
    gray: 'cool',
    button: {
      rounded: 'rounded-full',
      default: {
        color: 'white',
        variant: 'ghost',
        border: 'none'
      },
      color: {
        white: {
          solid: 'bg-white text-gray-900 hover:bg-white/90 dark:ring-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800',
          ghost: 'text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 dark:border-gray-800',
          link: 'text-gray-900 dark:text-white underline-offset-4 hover:underline dark:hover:bg-gray-800',
          outline: 'text-white border-white/5 hover:bg-white/10 dark:border-white/5'
        }
      },
      size: {
        xl: 'text-xl'
      },
      padding: {
        xl: 'px-8 py-2.5'
      }
    },
    input: {
      default: {
        size: 'md',
        color: 'white',
        variant: 'outline'
      },
      color: {
        white: {
          outline: 'bg-white/5 border-white/5 text-white ring-white/5 focus:border-white/20 focus:ring-white/10 placeholder:text-white/40'
        }
      }
    },
    card: {
      rounded: 'rounded-xl',
      shadow: 'shadow-sm',
      default: {
        variant: 'ghost',
        ui: { background: 'bg-white dark:bg-white/5 backdrop-blur-md border border-white/5' }
      }
    },
    modal: {
      default: {
        ui: { 
          container: 'dark:bg-white/5 backdrop-blur-md border dark:border-white/5',
          overlay: 'dark:bg-gray-900/80',
          base: 'dark:bg-white/5 backdrop-blur-xl border dark:border-white/5'
        }
      }
    }
  }
});
