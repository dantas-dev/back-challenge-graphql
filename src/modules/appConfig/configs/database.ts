import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  name: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  dialect: process.env.DATABASE_DIALECT,
  autoloadEntities: process.env.DATABASE_AUTOLOAD_ENTITIES,
  syncronyze: process.env.DATABASE_SYNCRONYZE,
}));
