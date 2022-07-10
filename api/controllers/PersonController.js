const database = require('../models')

class PersonController {
    static async selectAllPeople(req, res) {
        try {
            const allPeople = await database.People.findAll()
            return res.status(200).json(allPeople)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async selectPerson(req, res) {
        const { id } = req.params
        try {
            const person = await database.People.findOne({ where: { id: Number(id) }})
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
            await database.People.update(newInfo, { where: { id: Number(id) } })
            const updatedPerson = await database.People.findOne({ where: { id: Number(id) } })
            return res.status(200).json(updatedPerson)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }
    
    static async deletePerson(req, res) {
        const { id } = req.params
        try {
            await database.People.destroy({ where: { id: Number(id) }})
            return res.status(200).json({ status: `Registro de id ${id} deletado com sucesso.` })
        } catch(error) {
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
                student_id: studentId
            }})
            const updatedEnrollment = await database.Enrollments.findOne({ where: { id: Number(enrollmentId) } })
            return res.status(200).json(updatedEnrollment)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteEnrollment(req, res) {
        const { studentId, enrollmentId } = req.params
        try {
            await database.Enrollments.destroy({ where: { id: Number(enrollmentId) }})
            return res.status(200).json({ status: `Registro de id ${enrollmentId} deletado com sucesso.` })
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PersonController