import knex from 'knex';
import config from './config';

const database = knex({
  client: 'mysql2',
  ...config.database,
});

export default database;
