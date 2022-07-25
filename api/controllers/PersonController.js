const database = require('../models')
const Sequelize = require('sequelize')

class PersonController {
    static async selectActivePeople(req, res) {
        try {
            const activePeople = await database.People.findAll()
            return res.status(200).json(activePeople)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async selectAllPeople(req, res) {
        try {
            const allPeople = await database.People.scope('all').findAll()
            return res.status(200).json(allPeople)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async selectPerson(req, res) {
        const { id } = req.params
        try {
            const person = await database.People.findOne({ where: { id: Number(id)}})
            return res.status(200).json(person)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async createPerson(req, res) {
        const newPerson = req.body
        try {
            const newPersonCreated = await database.People.create(newPerson)
            return res.status(200).json(newPersonCreated)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async updatePerson(req, res) {
        const { id } = req.params
        const newInfo = req.body
        try {
            await database.People.update(newInfo, { where: { id: Number(id)}})
            const updatedPerson = await database.People.findOne({ where: { id: Number(id)}})
            return res.status(200).json(updatedPerson)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }
    
    static async deletePerson(req, res) {
        const { id } = req.params
        try {
            await database.People.destroy({ where: { id: Number(id)}})
            return res.status(200).json({ message: `Registro de id ${id} deletado com sucesso`})
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async restorePerson(req, res) {
        const { id } = req.params
        try {
            await database.People.restore( { where: { id: Number(id)}})
            return res.status(200).json({message: `Registro de id ${id} restaurado com sucesso`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async selectEnrollment(req, res) {
        const { studentId, enrollmentId } = req.params
        try {
            const enrollment = await database.Enrollments.findOne({ where: {
                id: Number(enrollmentId), 
                student_id: Number(studentId) 
            }})
            return res.status(200).json(enrollment)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }
    
    static async createEnrollment(req, res) {
        const { studentId } = req.params
        const newEnrollment = { ...req.body, student_id: Number(studentId) }
        try {
            const newEnrollmentCreated = await database.Enrollments.create(newEnrollment)
            return res.status(200).json(newEnrollmentCreated)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateEnrollment(req, res) {
        const { studentId, enrollmentId } = req.params
        const newInfo = req.body
        try {
            await database.Enrollments.update(newInfo, { where: {
                id: Number(enrollmentId),
                student_id: Number(studentId)
            }})
            const updatedEnrollment = await database.Enrollments.findOne({ where: { id: Number(enrollmentId)}})
            return res.status(200).json(updatedEnrollment)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteEnrollment(req, res) {
        const { studentId, enrollmentId } = req.params
        try {
            await database.Enrollments.destroy({ where: { id: Number(enrollmentId)}})
            return res.status(200).json({message: `Registro de id ${enrollmentId} deletado com sucesso`})
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async restoreEnrollment(req, res) {
        const { studentId, enrollmentId } = req.params
        try {
            await database.Enrollments.restore({ where: { 
                id: Number(enrollmentId), 
                student_id: Number(studentId)
            }})
            return res.status(200).json({message: `Registro de id ${enrollmentId} restaurado com sucesso`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async selectEnrollments(req, res) {
        const { studentId } = req.params
        try {
            const person = await database.People.findOne({ where: { id: Number(studentId)}})
            const enrollments = await person.getEnrolledClasses()
            return res.status(200).json(enrollments)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async selectEnrollmentsByTeam(req, res) {
        const { teamId } = req.params
        try {
            const allEnrollments = await database.Enrollments.findAndCountAll({
                where: {
                    team_id: Number(teamId),
                    status: 'confirmado'
                },
                limit: 30,
                order: [['student_id', 'ASC']]
            })
            return res.status(200).json(allEnrollments)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async selectCrowdedTeams(req, res) {
        const teamLimit = 30
        try {
            const crowdedTeams = await database.Enrollments.findAndCountAll({
                where: {
                    status: 'confirmado'
                },
                attributes: ['team_id'],
                group: ['team_id'],
                having: Sequelize.literal(`count(team_id) >= ${teamLimit}`)
            })
            return res.status(200).json(crowdedTeams)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async cancelPerson(req, res) {
        const { studentId } = req.params
        try {
            database.sequelize.transaction(async inactivate => {
                await database.People.update({ active: false }, { where: { id: Number(studentId)}}, {transaction: inactivate})
                await database.Enrollments.update({ status: 'cancelado' }, { where: { student_id: Number(studentId)}}, {transaction: inactivate})
                return res.status(200).json({message: `Estudante de id ${studentId} inativado`})
            })
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PersonController