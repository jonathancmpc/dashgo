import { createServer, Factory, Model, Response } from 'miragejs';
import faker from 'faker';
import { ActiveModelSerializer } from 'miragejs/serializer';

interface User {
  name: string;
  email: string;
  created_at: string;
}

//O Partial é do typescript e quer dizer que os campos da interface podem ser esses ou podem vir outros campos sem ser esses. O Diego pegou na documentação do mirage
//O faker é uma lib para gerar informações fakes para alimentar nossa api fake

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },

    models: {
      user: Model.extend<Partial<User>>({})
    },

    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        created_at() {
          return faker.date.recent(10);
        }
      })
    },

    //Todas as informações passadas para o seed são mostradas assim que a aplicação é inicializada
    seeds(server) {
      server.createList('user', 200) //Cria 200 usuários conforme as configurações da factory
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750; // Faz com que toda vez que chamemos a api demore 750 milisegundos, apenas para simular uma chamada de api verdadeira

      // Passamos como segundo parâmetro a configuração da paginação
      this.get('/users', function(schema, request) {
        const { page = 1, per_page = 10} = request.queryParams

        const total = schema.all('user').length

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const users = this.serialize(schema.all('user'))
          .users.slice(pageStart, pageEnd)

        return new Response(
          200,
          { 'x-total-count': String(total) },
          { users }
        )
      });

      this.get('/users/:id');
      this.post('/users');

      this.namespace = ''; // Passado para resetar o namespace e não prejudicar o caminho default do Next, que é a pasta api que passamos no src
      this.passthrough(); // Faz com que todas as chamadas /api passem pelo mirage, e caso não for detectado rota no mirage ele passa adiate
    }
  })

  return server;
}