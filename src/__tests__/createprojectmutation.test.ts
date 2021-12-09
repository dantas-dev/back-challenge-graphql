import request from 'supertest';
import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import context from '../context';
import schema from '../schema';
import database from '../database';

afterAll(() => {
  return database.destroy();
});

test('createProject mutation', async () => {
  const app = express();

  app.use('/graphql', graphqlHTTP({
    context,
    schema,
  }));

  const query = `
    mutation {
      createProject(input: {
        name: "PROJETO Y"
        price: 42.42,
        userId: 1
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

  const res = JSON.parse(response.text);
  const idCreated = res?.data?.createProject?.id;

  expect(response.statusCode).toEqual(200);
  expect(res).toEqual({
    data: {
      createProject: {
        id: idCreated,
        name: 'PROJETO Y',
        price: 42.42
      }
    }
  });

  await database('project').where('id', idCreated).del();
});
