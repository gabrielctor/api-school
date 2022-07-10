const { Router } = require('express')
const PersonController = require('../controllers/PersonController')

const router = Router()

router.get('/people', PersonController.selectAllPeople)
router.get('/people/:id', PersonController.selectPerson)
router.post('/people', PersonController.createPerson)
router.put('/people/:id', PersonController.updatePerson)
router.delete('/people/:id', PersonController.deletePerson)
router.get('/people/:studentId/enrollment/:enrollmentId', PersonController.selectEnrollment)
router.post('/people/:studentId/enrollment', PersonController.createEnrollment)
router.put('/people/:studentId/enrollment/:enrollmentId', PersonController.updateEnrollment)
router.delete('/people/:studentId/enrollment/:enrollmentId', PersonController.deleteEnrollment)

module.exports = router