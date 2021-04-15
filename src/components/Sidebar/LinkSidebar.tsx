import { Icon, Link as ChakraLink, LinkProps as ChakraLinkProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface LinkSidebarProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

export function LinkSidebar({ icon, children, href, ...rest }: LinkSidebarProps) {
  
  //O passHref força ele a ser passado como um atributo dentro do link do chakra, fazendo com que ao passar o mouse aparece o link de destino no browser
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" { ...rest }>
        <Icon as={ icon } fontSize="20" />
        <Text ml="4" fontWeight="medium">{ children }</Text>
      </ChakraLink>
    </ActiveLink>
  );
}