// src/routes/__root.tsx
/// <reference types="vite/client" />
import {
  Outlet,
  createRootRoute,
  Link,
  useLocation,
} from '@tanstack/react-router'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { system } from '../theme'
import { Toaster } from '../components/ui/toaster'
import '../styles.css'

// 创建 QueryClient 实例
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 分钟
      refetchOnWindowFocus: false,
    },
  },
})

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
})

function RootComponent() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider value={system}>
        <Outlet />
        <Toaster />
        <ReactQueryDevtools initialIsOpen={false} />
      </ChakraProvider>
    </QueryClientProvider>
  )
}


function NotFoundComponent() {
  return (
    <div>
      <h1>404 - 页面未找到</h1>
      <p>抱歉，您访问的页面不存在。</p>
    </div>
  )
}
