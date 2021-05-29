import dotenv from "dotenv";
import { ConnectionOptions } from "typeorm";

dotenv.config();

const { DB_USER, DB_HOST, DB_PASSWORD, DB_PORT, DEV_DB } = process.env;

const config: ConnectionOptions = {
  type: "postgres",
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DEV_DB,
  synchronize: true,
  entities: ["src/modules/**/entities/**/*.ts"],
  migrations: ["src/database/migrations/**/*.ts"],
  subscribers: ["src/database/subscribers/**/*.ts"],
  cli: {
    migrationsDir: "src/database/migrations",
    entitiesDir: "src/modules/**/entities",
    subscribersDir: "src/database/subscribers",
  },
};

export = config;
