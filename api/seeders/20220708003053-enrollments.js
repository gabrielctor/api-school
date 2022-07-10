'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Enrollments', [
      {
        status: "confirmado",
				student_id: 1,
				team_id: 2,
				createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        status: "cancelado",
				student_id: 4,
				team_id: 1,
				createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        status: "confirmado",
				student_id: 3,
				team_id: 2,
				createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        status: "confirmado",
				student_id: 2,
				team_id: 3,
				createdAt: new Date(),
				updatedAt: new Date()
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Enrollments', null, {})
  }
}