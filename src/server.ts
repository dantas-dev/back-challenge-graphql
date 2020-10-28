import 'reflect-metadata';

import express from 'express';
import 'express-async-errors';

import { createConnection } from 'typeorm';

import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';

import UserResolver from './graphql/resolvers/UserResolver';
import ProjectResolver from './graphql/resolvers/ProjectResolver';

(async () => {
  const app = express();

  await createConnection();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, ProjectResolver],
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(3333, () => {
    console.log('express server started!!');
  });
})();
