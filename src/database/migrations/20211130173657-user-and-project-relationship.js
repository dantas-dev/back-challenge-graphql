'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('projects', 'userId', {
          type: Sequelize.INTEGER,
          references: {
              model: 'users',
              key: 'id',
          },
          defaultValue: null,
      }),
  ]);
  },
  down: async (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.removeColumn('projects', 'userId')]);
  },
};