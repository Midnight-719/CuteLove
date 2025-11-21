import { defineRecipe } from '@chakra-ui/react'

/**
 * Toast 通知样式配置
 * 提供统一的 toast 样式，应用主题中的颜色和字体
 */
export const toastRecipe = defineRecipe({
  base: {
    fontSize: '0.875rem',
    fontFamily: 'body',
    borderRadius: 'md',
    boxShadow: 'lg',
    padding: '4',
    gap: '3',
  },
  variants: {
    type: {
      info: {
        bg: 'bg.surface',
        color: 'fg',
        borderColor: 'blue.border',
      },
      success: {
        bg: 'bg.surface',
        color: 'fg',
        borderColor: 'green.border',
      },
      error: {
        bg: 'bg.surface',
        color: 'fg',
        borderColor: 'red.border',
      },
      warning: {
        bg: 'bg.surface',
        color: 'fg',
        borderColor: 'orange.border',
      },
      loading: {
        bg: 'bg.surface',
        color: 'fg',
        borderColor: 'blue.border',
      },
    },
  },
  defaultVariants: {
    type: 'info',
  },
})

