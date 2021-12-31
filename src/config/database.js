module.exports = {
    dialect: 'mysql',
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: 'graphql_sql',
    define: {
        timestamps: false,
        underscored: true,
        underscoredAll: true,
    }
}