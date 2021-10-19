const {password, host, database, username} = require('../../.env')

module.exports = {
    dialect: 'mysql',
    host,
    username,
    password,
    database,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    }
};