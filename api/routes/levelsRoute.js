const { Router } = require('express');
const LevelController = require('../controllers/LevelController');

const router = Router();

router.get('/levels', LevelController.selectAllLevels);
router.get('/levels/:id', LevelController.selectLevel);
router.post('/levels', LevelController.createLevel);
router.post('/levels/:id/restore', LevelController.restoreLevel);
router.put('/levels/:id', LevelController.updateLevel);
router.delete('/levels/:id', LevelController.deleteLevel);

module.exports = router;
