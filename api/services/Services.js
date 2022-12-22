const database = require('../models');

class Services {
  constructor(modelName) {
    this.modelName = modelName;
  }

  async selectAllRegistrations() {
    return database[this.modelName].findAll();
  }

  async selectOneRegister(id) {

  }

  async createRegister(data) {

  }

  async updateRegister(updatedData, id, transaction = {}) {
    return database[this.modelName]
      .update(updatedData, { where: { id } }, transaction);
  }

  async updateRegistrations(updatedData, where, transaction = {}) {
    return database[this.modelName]
      .update(updatedData, { where: { ...where } }, transaction);
  }

  async deleteRegister(id) {

  }
}

module.exports = Services;
