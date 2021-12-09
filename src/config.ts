export default {
  port: process.env.PORT || 3010,
  database: {
    type: 'mysql',
    connection: {
      host: process.env.DATABASE_HOST || '10.0.0.13',
      port: process.env.DATABASE_PORT || 3306,
      database: process.env.DATABASE_NAME || 'challenge',
      user: process.env.DATABASE_USER || 'challenge',
      password: process.env.DATABASE_PASSWORD || 'cforpradarvaidar',
    },
    migrations: {
      directory: __dirname + '/migrations',
    },
    seeds: {
      directory: __dirname + '/seeds',
    },
  },
  defaultQuery: `
  `,
};
