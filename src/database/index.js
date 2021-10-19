import Sequelize from 'sequelize';

import User from '../app/models/User';
import Project from '../app/models/Project';

import dataBaseConfig from '../config/database';

const models = [User, Project];

class Database{
    constructor() {
        this.init();
    }

    init(){
        this.connection = new Sequelize(dataBaseConfig);

        models.map(model => {
            model.init(this.connection)
        });
    }
}

export default new Database();