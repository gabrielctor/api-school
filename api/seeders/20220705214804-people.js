'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('People', [
      {
        name: 'Marcos Silva',
        active: true,
        email: 'marcos.silva@email.com',
        occup: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Larissa Rodrigues',
        active: true,
        email: 'larissa.rodrigues@email.com',
        occup: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Michael Dias',
        active: true,
        email: 'michael.dias@email.com',
        occup: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jesse Pinkman',
        active: false,
        email: 'jesse.pinkman@email.com',
        occup: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Maria Miranda',
        active: true,
        email: 'maria.miranda@email.com',
        occup: 'docente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Walter White',
        active: false,
        email: 'walter.white@email.com',
        occup: 'docente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Paulo Souza',
        active: true,
        email: 'paulo.souza@email.com',
        occup: 'docente',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {})
  }
}