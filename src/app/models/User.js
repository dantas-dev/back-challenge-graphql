import Sequelize, { Model } from 'sequelize';

class User extends Model {
    static init(sequelize){
        super.init({
            _id: Sequelize.INTEGER,
            name: Sequelize.STRING,
            email: Sequelize.STRING,
        }, 
        {
            sequelize
        }
        );
    }    
}

export default User;