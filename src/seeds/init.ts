import {Knex} from 'knex';

export async function seed(knex: Knex): Promise<any> {
  return knex('user').del()
    .then(() => {
      return knex('user').insert([
        {
          id: 1,
          name: 'Aline Torres',
          email: 'alinet@email.com',
          createdAt: '2020-07-02 11:06:01',
        },
        {
          id: 2,
          name: 'Mateus Santos',
          email: 'mateuss@email.com',
          createdAt: '2020-07-02 11:06:02',
        },
        {
          id: 3,
          name: 'Jacson Souza',
          email: 'jacsons@email.com',
          createdAt: '2020-07-02 11:06:03',
        },
        {
          id: 4,
          name: 'Leonardo Silva',
          email: 'leonardos@email.com',
          createdAt: '2020-07-02 11:06:04',
        },
        {
          id: 5,
          name: 'Roberto Ramos',
          email: 'robertor@email.com',
          createdAt: '2020-07-02 11:06:05',
        },
        {
          id: 6,
          name: 'Bruno Vargas',
          email: 'bruno@email.com',
          createdAt: '2020-07-02 11:06:06',
        },
        {
          id: 7,
          name: 'Felipe Fortes',
          email: 'felipef@email.com',
          createdAt: '2020-07-02 11:06:07',
        },
        {
          id: 8,
          name: 'Fernando Ferreira',
          email: 'fernandof@email.com',
          createdAt: '2020-07-02 11:06:08',
        },
        {
          id: 9,
          name: 'Jesica Ribeiro',
          email: 'jesicar@email.com',
          createdAt: '2020-07-02 11:06:09',
        },
      ]);
    }).then(() => {
      return knex('project').del().then(() => {
        return knex('project').insert([
          {
            id: 1,
            userId: 1,
            name: 'MVP sistema financeiro.',
            createdAt: '2020-07-02 12:43:00',
          },
          {
            id: 2,
            userId: 2,
            name: 'MVP sistema faturamento.',
            createdAt: '2020-07-02 12:43:01',
          },
          {
            id: 3,
            userId: 3,
            name: 'Sistema de controle de estoque.',
            createdAt: '2020-07-02 12:43:02',
          },
          {
            id: 4,
            userId: 4,
            name: 'Sistema para emissão de notas fiscais de serviço.',
            createdAt: '2020-07-02 12:43:03',
          },
          {
            id: 5,
            userId: 4,
            name: 'Sistema para emissão de notas fiscais de serviço.',
            createdAt: '2020-07-02 12:43:04',
          },
          {
            id: 6,
            userId: 4,
            name: 'Rastreador de Encomendas',
            createdAt: '2020-07-02 12:43:05',
          },
          {
            id: 7,
            userId: 4,
            name: 'Sistema service desk.',
            createdAt: '2020-07-02 12:43:06',
          },
          {
            id: 8,
            userId: 4,
            name: 'Sistema de auditoria contábil',
            createdAt: '2020-07-02 12:43:07',
          },
          {
            id: 9,
            userId: 5,
            name: 'Sistema para recursos humanos.',
            createdAt: '2020-07-02 12:43:08',
          },
          {
            id: 10,
            userId: 6,
            name: 'Sistema armazenador de arquivos.',
            createdAt: '2020-07-02 12:43:09',
          },
          {
            id: 11,
            userId: 6,
            name: 'Sistema armazenador de arquivos.',
            createdAt: '2020-07-02 12:43:10',
          },
          {
            id: 12,
            userId: 7,
            name: 'Sistema de chat.',
            createdAt: '2020-07-02 12:43:11',
          },
          {
            id: 13,
            userId: 8,
            name: 'Sistema para agendamento de consultas médicas.',
            createdAt: '2020-07-02 12:43:12',
          },
          {
            id: 14,
            userId: 9,
            name: 'Sistema para integração com eSocial SST',
            createdAt: '2020-07-02 12:43:13',
          },
        ]);
      });
    });
}
