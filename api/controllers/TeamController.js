const database = require('../models')

class TeamController {
    static async selectAllTeams(req, res) {
        try {
            const allTeams = await database.Teams.findAll()
            return res.status(200).json(allTeams)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async selectTeam(req, res) {
        const { id } = req.params
        try {
            const team = await database.Teams.findOne({ where: { id: Number(id) }})
            return res.status(200).json(team)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async createTeam(req, res) {
        const newTeam = req.body
        try {
            const newTeamCreated = await database.Teams.create(newTeam)
            return res.status(200).json(newTeamCreated)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateTeam(req, res) {
        const { id } = req.params
        const newInfo = req.body
        try {
            await database.Teams.update(newInfo, { where: { id: Number(id) } })
            const updatedTeam = await database.Teams.findOne({ where: { id: Number(id) } })
            return res.status(200).json(updatedTeam)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }
    
    static async deleteTeam(req, res) {
        const { id } = req.params
        try {
            await database.Teams.destroy({ where: { id: Number(id) }})
            return res.status(200).json({ status: `Registro de id ${id} deletado com sucesso.` })
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = TeamController