import { defineRecipe } from '@chakra-ui/react'

/**
 * 对话框样式配置
 * 提供统一的内边距规范和基础样式
 */
export const dialogRecipe = defineRecipe({
  base: {
    // Dialog Content 的基础样式
    fontSize: '1rem',
    letterSpacing: '0.01em',
    lineHeight: '1.5',
    // 统一内边距
    padding: 0,
  },
})
