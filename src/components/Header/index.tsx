import { Flex, useBreakpointValue } from '@chakra-ui/react';

import { Logo } from './Logo';
import { Notifications } from './Notifications';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';


export function Header() {
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