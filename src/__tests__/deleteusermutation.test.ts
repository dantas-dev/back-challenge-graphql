import request from 'supertest';
import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import context from '../context';
import schema from '../schema';
import database from '../database';

afterAll(() => {
  return database.destroy();
});

test('deleteUser mutation', async () => {
  const app = express();

  app.use('/graphql', graphqlHTTP({
    context,
    schema,
  }));

  const id = (await database.insert({ name: 'Teste Teste', email: 'teste@email.com' }).into('user'))[0];

  const query = `
    mutation {
      deleteUser(input: {
        id: ${id}
      }) {
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
      deleteUser: {
        id: id,
        name: 'Teste Teste',
        email: 'teste@email.com',
      }
    }
  });
});
