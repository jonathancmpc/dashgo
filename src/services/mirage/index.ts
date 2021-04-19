import { createServer, Model } from 'miragejs';

interface User {
  name: string;
  email: string;
  created_at: string;
}

//O Partial é do typescript e quer dizer que os campos da interface podem ser esses ou podem vir outros campos sem ser esses. O Diego pegou na documentação do mirage

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({})
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750; // Faz com que toda vez que chamemos a api demore 750 milisegundos, apenas para simular uma chamada de api verdadeira

      this.get('/users');
      this.post('/users');

      this.namespace = ''; // Passado para resetar o namespace e não prejudicar o caminho default do Next, que é a pasta api que passamos no src
      this.passthrough(); // Faz com que todas as chamadas /api passem pelo mirage, e caso não for detectado rota no mirage ele passa adiate
    }
  })

  return server;
}