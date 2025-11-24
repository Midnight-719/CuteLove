/**
 * 头部导航组件
 */

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { Link, useLocation } from "@tanstack/react-router";
import { FiMenu } from "react-icons/fi";
import { ColorModeButton } from "../ui/color-mode";

interface HeaderProps {
  onMenuClick?: () => void;
}

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/schedule", label: "Schedule" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export function Header({ onMenuClick }: HeaderProps) {
  const location = useLocation();
  const animateNav = location.pathname === "/";

  return (
    <Box
      as="header"
      bg="bg.card"
      borderBottomWidth="1px"
      borderColor="border"
      position="sticky"
      top={0}
      zIndex={10}
      data-nav-animated={animateNav}
    >
      <Box className="nav-glow-ring" aria-hidden pointerEvents="none" />
      <Container maxW="full" position="relative" zIndex={1}>
        <Flex h={16} align="center" justify="space-between" gap={4}>
          {/* 左侧：菜单和Logo */}
          <Flex align="center" gap={4}>
            <IconButton
              aria-label="打开菜单"
              variant="ghost"
              onClick={onMenuClick}
              display={{ base: "flex", lg: "none" }}
            >
              <FiMenu />
            </IconButton>
            <Link to="/">
              <Heading size="lg" fontWeight="bold" color="purple.500">
                ThaiLand GL CPS
              </Heading>
            </Link>
          </Flex>

          {/* 中间：主导航 */}
          <HStack
            as="nav"
            gap={1}
            display={{ base: "none", md: "flex" }}
            px={2}
            py={1}
            borderRadius="full"
            bg="bg.surface"
            borderWidth="1px"
            borderColor="border"
          >
            {NAV_LINKS.map((link, index) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  to={link.href}
                  key={link.href}
                  className="nav-link-wrapper"
                >
                  <Button
                    variant={isActive ? "solid" : "ghost"}
                    size="md"
                    colorPalette={isActive ? "purple" : "pink"}
                    className={animateNav ? "nav-link-pop" : undefined}
                    style={
                      animateNav
                        ? { animationDelay: `${index * 120}ms` }
                        : undefined
                    }
                  >
                    {link.label}
                  </Button>
                </Link>
              );
            })}
          </HStack>

          {/* 右侧：操作按钮 */}
          <Flex align="center" gap={3}>
            <Link to="/work">
              <Button
                size="sm"
                variant="solid"
                colorPalette="purple"
                className={animateNav ? "nav-link-pop" : undefined}
                style={animateNav ? { animationDelay: "480ms" } : undefined}
              >
                <Text>Start Journey</Text>
              </Button>
            </Link>
            <ColorModeButton />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
