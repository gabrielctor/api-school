'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Levels', [
      {
        desc_level: 'iniciante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        desc_level: 'intermediário',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        desc_level: 'avançado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Levels', null, {});
  },
};
