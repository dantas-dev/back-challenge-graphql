'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('projects', [
      {
        name: 'Migração da Base de dados para postgres',
        price: 12000.00,
        userId: 1
      },
      {
        name: 'Criação do novo aplicativo em flutter',
        price: 20000.00,
        userId: 1
      },
      {
        name: 'Implementação do gRPC nos microserviços',
        price: 50000.00,
        userId: 1
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('projects', null, {})
  }
}
