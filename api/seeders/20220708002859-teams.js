'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Teams', [
      {
        start_date: "2021-01-01",
				level_id: 3,
				teacher_id: 3,
				createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        start_date: "2021-07-01",
				level_id: 2,
				teacher_id: 2,
				createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        start_date: "2022-01-01",
				level_id: 1,
				teacher_id: 1,
				createdAt: new Date(),
				updatedAt: new Date()
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Teams', null, {})
  }
}