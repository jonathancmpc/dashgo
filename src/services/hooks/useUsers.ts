import { useQuery } from 'react-query';
import { api } from '../api';

interface User {
  id: string;
  name: string;
  email: string;
  created_at: string;
}

export async function getUsers(): Promise<User[]> {
  const { data } = await api.get('users');

  const users = data.users.map((user: User)=> {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: new Date(user.created_at).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    }
  })

  return users;
}

export function useUsers() {
    // Montando a query para salvar nossos dados em fetch, o users passado é o nome do cach onde irá ficar armazenado os dados
  return useQuery('users', getUsers, {
    staleTime: 1000 * 5 // O dado deve atualizar a cada 5 segundos assim que o foco estiver na tela. Ou seja, em 5 segundos ele fica obssoleto
  })
}