import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';

import { Logo } from './Logo';
import { Notifications } from './Notifications';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';

import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { RiMenuLine } from 'react-icons/ri';


export function Header() {
  const { onOpen } = useSidebarDrawer() //Contexto que criamos para passar se a sidebar está aberta ou não

  //Chamando o hook do chakra para controlar se a foto vai aparecer ou não de acordo com o tamanho da tela Damos o nome que queremos para a constante.
  const isWideVersion = useBreakpointValue({
    base: false, //Padrão não fica visível
    lg: true, //Largo fica visível
  })


  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {/* Se a tela for do tamanho pequeno, então mostra o botão para abrir a sidebar */}
      { !isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen} //Se clicar no botão, abri a sidebar, essa informação é passada para o contexto que por sua vez passa para o componente Sidebar. A função onClose é passada no componente da Sidebar.
          mr="2"
        >

        </IconButton>
      )}

      <Logo />

      { isWideVersion && <SearchBox /> } {/* Se for mobile, não será mostrado o SearchBox */}
      
      {/* Notificações e Perfil do usuário */}
      <Flex align="center" ml="auto">
        <Notifications />

        <Profile showProfileData={isWideVersion} />
      </Flex>

    </Flex>
  );
}