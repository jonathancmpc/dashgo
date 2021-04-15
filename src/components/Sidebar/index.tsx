import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from "@chakra-ui/react";

import { SidebarNav } from "./SidebarNav";

import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";

export function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer(); //Pegando a informação se é para abrir ou fechar a Sidebar do contexto. Essa informação vem do Header. Além disso pegamos a função de fechar do contexto também

  //Por padrão a sidebar será escondida e quando passar para telas largas não.
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  //A sidebar padrão do chakra que será apresentada em telas menores, por isso separamos o componente com o conteúdo da sidebar no SidebarNav
  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} >
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Nabegação</DrawerHeader>

            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return(
    <Box as="aside" w="64" ml="8">
      <SidebarNav />
    </Box>
  )
}