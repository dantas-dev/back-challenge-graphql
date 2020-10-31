import 'reflect-metadata';
import 'dotenv/config';

import express from 'express';
import 'express-async-errors';

import { createConnection } from 'typeorm';

import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';

import UserResolver from '@modules/users/graphql/resolver';
import ProjectResolver from '@modules/projects/graphql/resolver';

const app = express();

(async () => {
  await createConnection();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, ProjectResolver],
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  apolloServer.applyMiddleware({ app, cors: false });
})();

export default app;
