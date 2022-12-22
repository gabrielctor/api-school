'use strict'

const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Teams extends Model {
    static associate(models) {
      Teams.hasMany(models.Enrollments, {
        foreignKey: 'team_id',
      });
      Teams.belongsTo(models.People, {
        foreignKey: 'teacher_id',
      });
      Teams.belongsTo(models.Levels, {
        foreignKey: 'level_id',
      });
    }
  }

  Teams.init(
    {
      start_date: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: 'Teams',
      paranoid: true,
    },
  );

  return Teams;
};
