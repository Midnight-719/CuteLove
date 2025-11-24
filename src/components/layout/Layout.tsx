import { Box, Flex } from "@chakra-ui/react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import React, { useState } from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <Flex direction="column" h="100vh">
      <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      {/* 侧边栏 */}
      <Box
        display={{ base: isSidebarOpen ? "block" : "none", lg: "block" }}
        position={{ base: "fixed", lg: "relative" }}
        left={0}
        top={16}
        bottom={0}
        zIndex={9}
        w={{ base: "64", lg: "64" }}
        bg="bg.card"
        borderRightWidth="1px"
        borderColor="border"
        overflowY="auto"
      >
        <Sidebar />
      </Box>
      {/* 主内容区 */}
      <Box flex={1} overflowY="auto" bg="bg.surface">
        {children}
      </Box>
    </Flex>
  );
}
