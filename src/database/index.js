const { Sequelize } = require('sequelize');
const dataBaseConfig = require('../config/database');
const User = require('../app/models/User');
const Project = require('../app/models/Project')

const models = [User, Project];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(dataBaseConfig);
        models.map(model => model.init(this.connection))
              .map( model => model.associate && model.associate(this.connection.models))
    }
}

module.exports = new Database();