import { defineRecipe } from '@chakra-ui/react'

/**
 * 统一的输入框样式系统
 * 确保所有输入框（Input, NumberInput, Select）具有一致的视觉样式
 */
export const inputRecipe = defineRecipe({
  base: {
    // 统一边框
    borderWidth: '1px',
    borderColor: 'gray.300',
    // 统一圆角
    borderRadius: 'md', // 6px
    // 统一字体大小
    fontSize: '0.875rem', // 14px (sm)
    lineHeight: '1.5',
    // 统一内边距
    paddingX: '1rem', // px={4} = 16px
    paddingY: '0.625rem', // py={2.5} = 10px
    // 统一背景色
    bg: 'white',
    _dark: {
      borderColor: 'gray.600',
      bg: 'gray.800',
    },
    // 统一过渡效果
    transition: 'all 0.2s ease',
    // 聚焦状态
    _focus: {
      borderColor: 'blue.500',
      boxShadow: '0 0 0 1px var(--chakra-colors-blue-500)',
      _dark: {
        borderColor: 'blue.400',
        boxShadow: '0 0 0 1px var(--chakra-colors-blue-400)',
      },
    },
    // 禁用状态
    _disabled: {
      opacity: 0.6,
      cursor: 'not-allowed',
      bg: 'gray.50',
      _dark: {
        bg: 'gray.700',
      },
    },
    // 错误状态
    _invalid: {
      borderColor: 'red.500',
      _focus: {
        borderColor: 'red.500',
        boxShadow: '0 0 0 1px var(--chakra-colors-red-500)',
      },
      _dark: {
        borderColor: 'red.400',
        _focus: {
          borderColor: 'red.400',
          boxShadow: '0 0 0 1px var(--chakra-colors-red-400)',
        },
      },
    },
  },
  variants: {
    size: {
      sm: {
        paddingX: '0.75rem', // px={3} = 12px
        paddingY: '0.5rem', // py={2} = 8px
        fontSize: '0.75rem', // 12px
        minHeight: '2rem', // 32px
      },
      md: {
        paddingX: '1rem', // px={4} = 16px
        paddingY: '0.625rem', // py={2.5} = 10px
        fontSize: '0.875rem', // 14px
        minHeight: '2.5rem', // 40px
      },
      lg: {
        paddingX: '1.25rem', // px={5} = 20px
        paddingY: '0.75rem', // py={3} = 12px
        fontSize: '1rem', // 16px
        minHeight: '3rem', // 48px
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
