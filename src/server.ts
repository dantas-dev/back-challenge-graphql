import "reflect-metadata"


import { ApolloServer } from "apollo-server";
import "./database";

import newSchema from "./schemas";

const app = async() => {
  const schema = await newSchema();

  const server = new ApolloServer({schema});

  server.listen({port: 3333}, () => console.log("Server is Running!"))

}

app();