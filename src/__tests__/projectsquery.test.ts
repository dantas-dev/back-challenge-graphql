import request from 'supertest';
import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import context from '../context';
import schema from '../schema';
import database from '../database';

afterAll(() => {
  return database.destroy();
});

test('Projects query', async () => {
  const app = express();

  app.use('/graphql', graphqlHTTP({
    context,
    schema,
  }));

  const query = `
    query {
      projects(first: 3) {
        edges {
          node {
            id
            name
            price
          }
        }
      }
    }
  `;

  const response = await request(app)
    .post('/graphql')
    .type('json')
    .send(JSON.stringify({ query }));

  expect(response.statusCode).toEqual(200);

  expect(JSON.parse(response.text)).toEqual({
    data: {
      projects: {
        edges: [
          {
            node: {
              id: 1,
              name: 'MVP sistema financeiro.',
              price: 142.13,
            }
          },
          {
            node: {
              id: 2,
              name: 'MVP sistema faturamento.',
              price: 242.13,
            }
          },
          {
            node: {
              id: 3,
              name: 'Sistema de controle de estoque.',
              price: 342.13,
            }
          },
        ]
      }
    }
  });
});

test('Projects query with users', async () => {
  const app = express();

  app.use('/graphql', graphqlHTTP({
    context,
    schema,
  }));

  const query = `
    query {
      projects(first: 3) {
        edges {
          node {
            id
            name
            price
            user {
              id
              name
              email
            }
          }
        }
      }
    }
  `;

  const response = await request(app)
    .post('/graphql')
    .type('json')
    .send(JSON.stringify({ query }));

  expect(response.statusCode).toEqual(200);

  expect(JSON.parse(response.text)).toEqual({
    data: {
      projects: {
        edges: [
          {
            node: {
              id: 1,
              name: 'MVP sistema financeiro.',
              price: 142.13,
              user: {
                id: 1,
                name: 'Aline Torres',
                email: 'alinet@email.com'
              }
            }
          },
          {
            node: {
              id: 2,
              name: 'MVP sistema faturamento.',
              price: 242.13,
              user: {
                id: 2,
                name: 'Mateus Santos',
                email: 'mateuss@email.com'
              }
            }
          },
          {
            node: {
              id: 3,
              name: 'Sistema de controle de estoque.',
              price: 342.13,
              user: {
                id: 3,
                name: 'Jacson Souza',
                email: 'jacsons@email.com'
              }
            }
          },
        ]
      }
    }
  });
});

test('Projects query with filter', async () => {
  const app = express();

  app.use('/graphql', graphqlHTTP({
    context,
    schema,
  }));

  const query = `
    query {
      projects(first: 2, name: "MVP") {
        edges {
          node {
            id
            name
            price
          }
        }
      }
    }
  `;

  const response = await request(app)
    .post('/graphql')
    .type('json')
    .send(JSON.stringify({ query }));

  expect(response.statusCode).toEqual(200);

  expect(JSON.parse(response.text)).toEqual({
    data: {
      projects: {
        edges: [
          {
            node: {
              id: 1,
              name: 'MVP sistema financeiro.',
              price: 142.13,
            }
          },
          {
            node: {
              id: 2,
              name: 'MVP sistema faturamento.',
              price: 242.13,
            }
          },
        ]
      }
    }
  });
});
