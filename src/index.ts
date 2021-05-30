import "reflect-metadata";
import "./shared/container";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";

import initializeDB from "./database";
import { UserResolver } from "./modules/user/resolvers/usersResolvers";

const app = express();

async function main() {
  await initializeDB();
  const schema = await buildSchema({
    resolvers: [UserResolver],
    emitSchemaFile: true,
  });

  const server = new ApolloServer({
    schema,
  });

  server.applyMiddleware({ app });
  const port = process.env.PORT || 5000;

  app.listen(port, () =>
    console.log(`Server is running on http://localhost:${port}/graphql`)
  );
}

main();
