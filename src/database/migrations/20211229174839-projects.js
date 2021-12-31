'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('projects', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false 
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false 
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false 
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false ,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('projects');
  }
};