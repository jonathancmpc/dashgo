import { Icon, Link, LinkProps as ChakraLinkProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";

interface LinkSidebarProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
}

export function LinkSidebar({ icon, children, ...rest }: LinkSidebarProps) {
  return (
    <Link display="flex" align="center" { ...rest }>
      <Icon as={ icon } fontSize="20" />
      <Text ml="4" fontWeight="medium">{ children }</Text>
    </Link>
  );
}