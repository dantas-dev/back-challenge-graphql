import 'reflect-metadata';

import '@shared/container';

import { GraphQLServer } from 'graphql-yoga';
import { container } from 'tsyringe';
import { resolve } from 'path';

import DatabaseRepository from '@shared/database/infra/typeorm/repositoryImplementation/DatabaseRepository';

import resolvers from '@shared/graphql/resolvers';

const typeDefs = resolve(
  __dirname,
  '..',
  'graphql',
  'schemas',
  'schema.graphql',
);

const runServer = async (): Promise<void> => {
  await container.resolve(DatabaseRepository).startDatabase();

  const server = new GraphQLServer({
    typeDefs,
    resolvers,
  });

  server.start(() => console.log('Graphql server started on port 4000.'));
};

runServer();
