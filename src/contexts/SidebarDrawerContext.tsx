import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { createContext, ReactNode, useContext, useEffect } from "react";
import { useRouter } from "next/dist/client/router";

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure(); //Hook do chakra para abrir ou fechar a sidebar, nele vem os métodos isOpen e onOpen e onClose
  const router = useRouter(); //Pegando a informação da rota

  //Toda vez que a rota mudar, ou seja, toda vez que clicarmos em um link da sidebar, é para fechá-la
  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath])

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)