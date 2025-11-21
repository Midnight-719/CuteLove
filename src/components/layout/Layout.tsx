import { Box } from '@chakra-ui/react'
import { Header } from './Header'
import { Sidebar } from './Sidebar'

export function Layout() {
  return (
    <Box>
      <Header />
      <Sidebar />
    </Box>
  )
}