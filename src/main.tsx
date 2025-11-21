/**
 * 应用入口文件
 */

import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { ThemeProvider } from 'next-themes'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// 导入路由配置
import { routeTree } from './routeTree.gen'

// 创建 QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5分钟内数据被认为是新鲜的
      gcTime: 10 * 60 * 1000, // 10分钟后从缓存中清除
      refetchOnReconnect: true, // 网络重连时自动刷新
    },
    mutations: {
      retry: 0, // mutations 通常不应重试,避免重复操作
    },
  },
})

// 创建路由实例
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
})

// 为类型声明扩展路由
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// 渲染应用
const rootElement = document.getElementById('root')

if (rootElement) {
  const root = createRoot(rootElement)
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider value={defaultSystem}>
          <ThemeProvider 
            attribute="class" 
            disableTransitionOnChange
            defaultTheme="dark"
          >
            <RouterProvider router={router} />
          </ThemeProvider>
        </ChakraProvider>
      </QueryClientProvider>
    </StrictMode>
  )
}
