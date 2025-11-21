/**
 * 全局主题样式配置
 * 提供统一的深色/浅色主题样式，避免重复代码
 */

/**
 * 卡片样式 - 根据激活状态返回不同样式
 * @param isActive - 是否激活状态
 */
export function getCardStyles(isActive: boolean) {
  return {
    borderWidth: 2,
    borderColor: isActive ? 'green.300' : 'gray.300',
    bg: isActive ? 'green.50' : 'gray.50',
    _dark: {
      borderColor: isActive ? 'green.500' : 'gray.600',
      bg: isActive ? 'green.950' : 'gray.900',
    },
    _hover: { shadow: 'md' },
    transition: 'all 0.2s',
  }
}

/**
 * Accordion 触发器的 hover 样式
 */
export const accordionTriggerHover = {
  bg: 'gray.50',
  _dark: { bg: 'gray.800' },
}

/**
 * Accordion 内容区域背景样式
 */
export const accordionContentBg = {
  bg: 'gray.50',
  _dark: { bg: 'gray.900' },
}

/**
 * 文本颜色样式
 */
export const textColors = {
  // 主要文本
  primary: {
    color: 'gray.900',
    _dark: { color: 'gray.100' },
  },
  // 次要文本
  secondary: {
    color: 'gray.600',
    _dark: { color: 'gray.400' },
  },
  // 三级文本
  tertiary: {
    color: 'gray.500',
    _dark: { color: 'gray.500' },
  },
  // 高亮文本 - 紫色
  highlightPurple: {
    color: 'purple.700',
    _dark: { color: 'purple.300' },
  },
  // 高亮文本 - 蓝色
  highlightBlue: {
    color: 'blue.700',
    _dark: { color: 'blue.300' },
  },
  // 高亮文本 - 绿色
  highlightGreen: {
    color: 'green.600',
    _dark: { color: 'green.400' },
  },
}

/**
 * 图标颜色样式
 */
export const iconColors = {
  // 主要图标（蓝色）
  primary: {
    color: 'blue.500',
    _dark: { color: 'blue.400' },
  },
  // 次要图标
  secondary: {
    color: 'gray.500',
    _dark: { color: 'gray.400' },
  },
}

/**
 * 获取标题样式
 * @param colorPalette - 'purple' | 'blue' | 'green' | 'gray'
 */
export function getTitleStyles(colorPalette: 'purple' | 'blue' | 'green' | 'gray' = 'gray') {
  const colorMap = {
    purple: textColors.highlightPurple,
    blue: textColors.highlightBlue,
    green: textColors.highlightGreen,
    gray: textColors.primary,
  }
  return colorMap[colorPalette]
}

/**
 * 空状态文本样式
 */
export const emptyStateText = {
  color: 'gray.500',
  _dark: { color: 'gray.400' },
}

/**
 * 加载状态文本样式
 */
export const loadingText = textColors.secondary
