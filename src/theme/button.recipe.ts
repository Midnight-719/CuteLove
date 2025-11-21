import { defineRecipe } from '@chakra-ui/react'

export const buttonRecipe = defineRecipe({
  base: {
    fontWeight: 'medium', // 500，更柔和的字重
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.875rem', // 14px，统一字体大小
    lineHeight: '1.5',
    borderRadius: 'md', // 统一圆角
    transition: 'all 0.2s ease',
    _focusVisible: {
      outline: '2px solid',
      outlineColor: 'blue.500',
      outlineOffset: '2px',
    },
  },
  variants: {
    variant: {
      ghost: {
        bg: 'transparent',
        _hover: {
          bg: 'gray.100',
          _dark: {
            bg: 'gray.700',
          },
        },
      },
    },
    size: {
      xs: {
        paddingX: '0.75rem', // px={3} = 12px
        paddingY: '0.5rem', // py={2} = 8px
        fontSize: '0.75rem', // 12px
        minHeight: '1.75rem', // 28px
      },
      sm: {
        paddingX: '1rem', // px={4} = 16px
        paddingY: '0.5rem', // py={2} = 8px
        fontSize: '0.875rem', // 14px
        minHeight: '2rem', // 32px
      },
      md: {
        paddingX: '1.25rem', // px={5} = 20px
        paddingY: '0.625rem', // py={2.5} = 10px
        fontSize: '0.875rem', // 14px
        minHeight: '2.5rem', // 40px
      },
      lg: {
        paddingX: '1.5rem', // px={6} = 24px
        paddingY: '0.75rem', // py={3} = 12px
        fontSize: '1rem', // 16px
        minHeight: '3rem', // 48px
      },
    },
  },
})
