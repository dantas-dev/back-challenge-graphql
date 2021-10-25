'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.addColumn('projects', 'userId', {
                type: Sequelize.INTEGER,
                references: {
                    model: 'users',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                defaultValue: null,
            }),
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return Promise.all([queryInterface.removeColumn('projects', 'userId')]);
    },
};