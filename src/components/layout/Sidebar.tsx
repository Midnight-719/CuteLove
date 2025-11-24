import { Link, useLocation } from "@tanstack/react-router";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { Box, Text, Stack, Icon } from "@chakra-ui/react";
import { FiHeart, FiTable, FiCalendar } from "react-icons/fi";


export const Sidebar = memo(function Sidebar() {
  const location = useLocation();
  const pathname = location.pathname;

  const isActive = useCallback(
    (path: string) => pathname === path || pathname.startsWith(path + "/"),
    [pathname]
  );

  return (
    <Box>
      <Stack gap={1}>

      </Stack>
    </Box>
  );
});
