const { Sequelize, Model } = require('sequelize');

class Project extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                price: Sequelize.STRING,
            },
            {
                sequelize,
                modelName: 'Project',
                tableName: 'projects'
            }
        )

        return this
    }

    static associate(model) {
        this.belongsTo(model.User, { foreignKey: 'user_id', as: 'user' })
    }
}

module.exports = Project;