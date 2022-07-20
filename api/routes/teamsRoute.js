const { Router } = require('express')
const TeamController = require('../controllers/TeamController')

const router = Router()

router.get('/teams', TeamController.selectAllTeams)
router.get('/teams/:id', TeamController.selectTeam)
router.post('/teams', TeamController.createTeam)
router.put('/teams/:id', TeamController.updateTeam)
router.delete('/teams/:id', TeamController.deleteTeam)
router.post('/teams/:id/restore', TeamController.restoreTeam)

module.exports = router