const { Router } = require('express')
const PersonController = require('../controllers/PersonController')

const router = Router()

router.get('/people', PersonController.selectActivePeople)
router.get('/people/all', PersonController.selectAllPeople)
router.get('/people/:id', PersonController.selectPerson)
router.get('/people/:studentId/enrollment/:enrollmentId', PersonController.selectEnrollment)
router.get('/people/:studentId/enrollment', PersonController.selectEnrollments)
router.get('/people/enrollment/:teamId/confirmed', PersonController.selectEnrollmentsByTeam)
router.get('/people/enrollment/crowded', PersonController.selectCrowdedTeams)
router.post('/people', PersonController.createPerson)
router.post('/people/:id/restore', PersonController.restorePerson)
router.post('/people/:studentId/enrollment', PersonController.createEnrollment)
router.post('/people/:studentId/enrollment/:enrollmentId/restore', PersonController.restoreEnrollment)
router.put('/people/:id', PersonController.updatePerson)
router.put('/people/:studentId/enrollment/:enrollmentId', PersonController.updateEnrollment)
router.delete('/people/:id', PersonController.deletePerson)
router.delete('/people/:studentId/enrollment/:enrollmentId', PersonController.deleteEnrollment)

module.exports = router