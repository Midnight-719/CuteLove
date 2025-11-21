/**
 * Chakra UI主题配置
 */

import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'
import { buttonRecipe } from './button.recipe'
import { dialogRecipe } from './dialog.recipe'
import { inputRecipe } from './input.recipe'
import { toastRecipe } from './toast.recipe'

const customConfig = defineConfig({
  globalCss: {
    html: {
      fontSize: '16px',
    },
    body: {
      fontSize: '0.875rem',
      margin: 0,
      padding: 0,
    },
    '.main-link': {
      color: 'ui.main',
      fontWeight: 'bold',
    },
  },
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: '#e3f2fd' },
          100: { value: '#bbdefb' },
          200: { value: '#90caf9' },
          300: { value: '#64b5f6' },
          400: { value: '#42a5f5' },
          500: { value: '#2196f3' },
          600: { value: '#1e88e5' },
          700: { value: '#1976d2' },
          800: { value: '#1565c0' },
          900: { value: '#0d47a1' },
        },
        ui: {
          main: { value: '#009688' },
        },
      },
      fonts: {
        body: { value: 'system-ui, sans-serif' },
        heading: { value: 'system-ui, sans-serif' },
        mono: { value: 'Menlo, monospace' },
      },
    },
    semanticTokens: {
      colors: {
        'bg.canvas': {
          value: {
            _light: 'white',
            _dark: 'gray.900',
          },
        },
        'bg.surface': {
          value: {
            _light: 'gray.50',
            _dark: 'gray.800',
          },
        },
        'bg.card': {
          value: {
            _light: 'white',
            _dark: 'gray.800',
          },
        },
      },
    },
    recipes: {
      dialog: dialogRecipe,
      button: buttonRecipe,
      input: inputRecipe,
      toast: toastRecipe,
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)
