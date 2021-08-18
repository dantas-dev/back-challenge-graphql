import "reflect-metadata";
//import "dotenv/config";

import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";

import { schema } from "@modules/graphql/index";

import { graphqlHTTP } from "express-graphql";

import AppError from "@shared/errors/AppError";

import { createConnection } from "typeorm";
import { Users } from '../../../modules/graphql/users/typeorm/entities/Users';
import { Projects } from "../../../modules/graphql/projects/typeorm/entities/Projects";

const app = express();

const main = async () => {
  await createConnection({
        type: "mysql",
	      host: "localhost",
        port: 3306,
        username: "root",
        password: "12345",
        logging: true,
        synchronize: true,
        database: "graph",
        entities: [ Users, Projects ],
  })
}


const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(express.json());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

//app.use(errors());

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

app.listen(5000, () => {
  console.log("🚀 Server started on port 5000!");
});

main().catch((err) => { console.log(err) })
