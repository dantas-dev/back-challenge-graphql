import request from 'supertest';
import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import context from '../context';
import schema from '../schema';
import database from '../database';

afterAll(() => {
  return database.destroy();
});

test('Users query', async () => {
  const app = express();

  app.use('/graphql', graphqlHTTP({
    context,
    schema,
  }));

  const query = `
    query {
      users(first: 3) {
        edges {
          node {
            id
            name
            email
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
      users: {
        edges: [
          {
            node: {
              id: 1,
              name: 'Aline Torres',
              email: 'alinet@email.com'
            }
          },
          {
            node: {
              id: 2,
              name: 'Mateus Santos',
              email: 'mateuss@email.com'
            }
          },
          {
            node: {
              id: 3,
              name: 'Jacson Souza',
              email: 'jacsons@email.com'
            }
          },
        ]
      }
    }
  });
});

test('Users query with filter by name and email', async () => {
  const app = express();

  app.use('/graphql', graphqlHTTP({
    context,
    schema,
  }));

  const query = `
    query {
      users(name:"line", email:"line") {
        edges {
          node {
            id
            name
            email
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
      users: {
        edges: [
          {
            node: {
              id: 1,
              name: 'Aline Torres',
              email: 'alinet@email.com'
            }
          },
        ]
      }
    }
  });
});
