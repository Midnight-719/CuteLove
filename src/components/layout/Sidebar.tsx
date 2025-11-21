import { Link, useLocation } from "@tanstack/react-router";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { Box } from "@chakra-ui/react";

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  to: string;
  isActive?: boolean;
}


export function Sidebar() {
    return (
        <Box>
            {/* <SidebarContent /> */}
        </Box>
    )
}