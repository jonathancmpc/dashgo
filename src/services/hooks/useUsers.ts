import { useQuery } from 'react-query';
import { api } from '../api';

interface User {
  id: string;
  name: string;
  email: string;
  created_at: string;
}

interface GetUsersResponse {
  totalCount: number;
  users: User[];
}

export async function getUsers(page: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get('users', {
    params: {
      page,
    }
  });

  const totalCount = Number(headers['x-total-count'])

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

  return {
    users,
    totalCount
  }
}

export function useUsers(page: number) {
    // Montando a query para salvar nossos dados em fetch, o users passado é o nome do cach onde irá ficar armazenado os dados
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10 // O dado deve atualizar a cada 10 minutos assim que o foco estiver na tela. Ou seja, em 5 segundos ele fica obssoleto
  })
}