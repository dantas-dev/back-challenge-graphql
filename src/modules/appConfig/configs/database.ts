import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  port: process.env.DATABASE_PORT,
  type: process.env.DATABASE_TYPE,
  name: process.env.DATABASE_NAME,
  autoloadEntities: process.env.DATABASE_AUTOLOAD_ENTITIES,
  syncronyze: process.env.DATABASE_SYNCRONYZE,
}));
