import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  const connection = Object.assign(defaultOptions, {
    database:
      process.env.NODE_ENV === 'test'
        ? 'challenge_tests'
        : defaultOptions.database,
  });

  return createConnection(connection);
};
