import request from 'supertest';
import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import context from '../context';
import schema from '../schema';
import database from '../database';

afterAll(() => {
  return database.destroy();
});

test('Project query', async () => {
  const app = express();

  app.use('/graphql', graphqlHTTP({
    context,
    schema,
  }));

  const query = `
    query {
      project(id: 1) {
        id
        name
        price
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
      project: {
        id: 1,
        name: 'MVP sistema financeiro.',
        price: 142.13,
      }
    }
  });
});

test('Project query with user', async () => {
  const app = express();

  app.use('/graphql', graphqlHTTP({
    context,
    schema,
  }));

  const query = `
    query {
      project(id: 1) {
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
  `;

  const response = await request(app)
    .post('/graphql')
    .type('json')
    .send(JSON.stringify({ query }));

  expect(response.statusCode).toEqual(200);

  expect(JSON.parse(response.text)).toEqual({
    data: {
      project: {
        id: 1,
        name: 'MVP sistema financeiro.',
        price: 142.13,
        user: {
          id: 1,
          name: 'Aline Torres',
          email: 'alinet@email.com'
        }
      }
    }
  });
});
