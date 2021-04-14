import { Flex, Button, Stack} from '@chakra-ui/react';
import { Input } from '../components/Form/Input';

export default function SignIn() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        direction="column"
      >
        {/* O Stack faz uma pilha, e atribui os estilos para todos que estiverem envoltos nele, nesse caso estamos apenas colocando um espaço entre os elementos, como se fosse o wrap do flex */}
        <Stack spacing="4">

          <Input name="email" label="E-mail" type="email" />
          <Input name="password" label="Senha" type="password" />
      
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink">
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}