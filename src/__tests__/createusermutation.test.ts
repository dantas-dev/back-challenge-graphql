import request from 'supertest';
import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import context from '../context';
import schema from '../schema';
import database from '../database';

afterAll(() => {
  return database.destroy();
});

test('createUser mutation', async () => {
  const app = express();

  app.use('/graphql', graphqlHTTP({
    context,
    schema,
  }));

  const query = `
    mutation {
      createUser(input: {
        name: "Matej Jellus"
        email: "matej@email.com"
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

  const res = JSON.parse(response.text);
  const idCreated = res?.data?.createUser?.id;

  expect(response.statusCode).toEqual(200);
  expect(res).toEqual({
    data: {
      createUser: {
        id: idCreated,
        name: 'Matej Jellus',
        email: 'matej@email.com',
      }
    }
  });

  await database('user').where('id', idCreated).del();
});
