/**
 * 头部导航组件
 */

import { Box, Container, Flex, Heading, IconButton } from '@chakra-ui/react'
import { Link } from '@tanstack/react-router'
import { FiMenu } from 'react-icons/fi'
import { ColorModeButton } from '../ui/color-mode'

interface HeaderProps {
  onMenuClick?: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <Box
      as="header"
      bg="bg.card"
      borderBottomWidth="1px"
      borderColor="border"
      position="sticky"
      top={0}
      zIndex={10}
    >
      <Container maxW="full">
        <Flex h={16} align="center" justify="space-between">
          {/* 左侧：菜单和Logo */}
          <Flex align="center" gap={4}>
            <IconButton
              aria-label="打开菜单"
              variant="ghost"
              onClick={onMenuClick}
              display={{ base: 'flex', lg: 'none' }}
            >
              <FiMenu />
            </IconButton>
            <Link to="/">
              <Heading size="lg" fontWeight="bold" color="brand.600">
                ThaiLand GL CPS 
              </Heading>
            </Link>
          </Flex>

          {/* 右侧：操作按钮 */}
          <Flex align="center" gap={4}>
            {/* <DatabaseSelector mode="badge" /> */}
            <ColorModeButton />
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}
