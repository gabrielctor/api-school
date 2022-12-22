'use strict'

const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Levels extends Model {
    static associate(models) {
      Levels.hasMany(models.Teams, {
        foreignKey: 'level_id',
      });
    }
  }

  Levels.init(
    {
      desc_level: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Levels',
      paranoid: true,
    },
  );

  return Levels;
};
