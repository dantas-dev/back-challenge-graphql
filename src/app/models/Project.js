import Sequelize, { Model } from 'sequelize';

class Project extends Model {
    static init(sequelize){
        super.init({
            _id: Sequelize.INTEGER,
            name: Sequelize.STRING,
            price: Sequelize.STRING,
            userid: Sequelize.INTEGER,
        }, 
        {
            sequelize
        }
        );
    }    
}

export default Project;