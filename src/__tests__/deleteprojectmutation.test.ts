import request from 'supertest';
import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import context from '../context';
import schema from '../schema';
import database from '../database';

afterAll(() => {
  return database.destroy();
});

test('deleteProject mutation', async () => {
  const app = express();

  app.use('/graphql', graphqlHTTP({
    context,
    schema,
  }));

  const id = (await database.insert({ name: 'Teste Teste', price: 13.13, userId: 1 }).into('project'))[0];

  const query = `
    mutation {
      deleteProject(input: {
        id: ${id}
      }) {
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
      deleteProject: {
        id: id,
        name: 'Teste Teste',
        price: 13.13
      }
    }
  });
});
