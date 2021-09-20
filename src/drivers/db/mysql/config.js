module.exports = {
  dialect: 'mysql',
  host: process.env.MYSQL_HOSTNAME,
  database: process.env.MYSQL_DATABASE,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD
}
