import { Flex, Button, Stack} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../components/Form/Input';

interface SignInFormData {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });
  const { errors } = formState;

  console.log(errors);

  //Passamos o tipo SubmitHandler dessa forma apenas pq dentro do submit também vem o evento, e se não tiparmos dessa forma, não conseguimos acessar o tipo do event.
  const handleSignIn: SubmitHandler<SignInFormData> = (data) => {
    console.log(data);
  }

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        {/* O Stack faz uma pilha, e atribui os estilos para todos que estiverem envoltos nele, nesse caso estamos apenas colocando um espaço entre os elementos, como se fosse o wrap do flex */}
        <Stack spacing="4">

          <Input
            name="email"
            label="E-mail"
            type="email"
            error={errors.email}
            {...register('email')} 
          />
          <Input
            name="password"
            label="Senha"
            type="password"
            error={errors.password}
            {...register('password')} 
          />
      
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          //Passamos o isLoadind do chakra para mostrar um loading. A função formState vem do react-hook-form e informa se o formulário está sendo submetido.
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}