const Services = require('./Services')
const database = require('../models')

class PeopleServices extends Services {
    constructor() {
        super('People')
        this.enrollments = new Services('Enrollments')
    }

    async selectActiveRegistrations(where = {}) {
        return database[this.modelName].findAll({ where: { ...where}})
    }

    async selectAllRegistrations(where = {}) {
        return database[this.modelName]
            .scope('all')
            .findAll({where: { ...where}})
    }

    async cancelPeopleAndEnrollments(studentId) {
        return database.sequelize.transaction(async inactivate => {
            await super.updateRegistrations({ active: false }, studentId, { transaction: inactivate })
            await this.enrollments.updateRegistrations({ status: 'cancelado' }, { student_id: studentId }, { transaction: inactivate })
        })
    }
}

module.exports = PeopleServices