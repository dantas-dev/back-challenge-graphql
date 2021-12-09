import request from 'supertest';
import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import context from '../context';
import schema from '../schema';
import database from '../database';

afterAll(() => {
  return database.destroy();
});

test('User query', async () => {
  const app = express();

  app.use('/graphql', graphqlHTTP({
    context,
    schema,
  }));

  const query = `
    query {
      user(id: 1) {
        id
        name
        email
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
      user: {
        id: 1,
        name: 'Aline Torres',
        email: 'alinet@email.com',
      }
    }
  });
});

test('User query with project', async () => {
  const app = express();

  app.use('/graphql', graphqlHTTP({
    context,
    schema,
  }));

  const query = `
    query {
      user(id: 1) {
        id
        name
        email
        projects(first: 1) {
          edges {
            node {
              id
              name
              price
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
      user: {
        id: 1,
        name: 'Aline Torres',
        email: 'alinet@email.com',
        projects: {
          edges: [
            {
              node: {
                id: 1,
                name: 'MVP sistema financeiro.',
                price: 142.13,
              }
            }
          ]
        }
      }
    }
  });
});
