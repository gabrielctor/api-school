// const database = require('../models')

const Services = require('../services/Services');

const levelsServices = new Services('Levels');

class LevelController {
  static async selectAllLevels(req, res) {
    try {
      const allLevels = await levelsServices.selectAllRegistrations();
      return res.status(200).json(allLevels);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async selectLevel(req, res) {
    const { id } = req.params;
    try {
      const level = await database.Levels.findOne({ where: { id: Number(id) } });
      return res.status(200).json(level);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async createLevel(req, res) {
    const newLevel = req.body;
    try {
      const newLevelCreated = await database.Levels.create(newLevel);
      return res.status(200).json(newLevelCreated);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateLevel(req, res) {
    const { id } = req.params;
    const newInfo = req.body;
    try {
      await database.Levels.update(newInfo, { where: { id: Number(id) } });
      const updatedLevel = await database.Levels.findOne({ where: { id: Number(id) } });
      return res.status(200).json(updatedLevel);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteLevel(req, res) {
    const { id } = req.params;
    try {
      await database.Levels.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ message: `Registro de id ${id} deletado com sucesso` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async restoreLevel(req, res) {
    const { id } = req.params;
    try {
      await database.Levels.restore({ where: { id: Number(id) } });
      return res.status(200).json({ message: `Registro de id ${id} restaurado com sucesso` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = LevelController;
