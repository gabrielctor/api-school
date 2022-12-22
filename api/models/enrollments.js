'use strict'

const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Enrollments extends Model {
    static associate(models) {
      Enrollments.belongsTo(models.People, {
        foreignKey: 'student_id',
      });
      Enrollments.belongsTo(models.Teams, {
        foreignKey: 'team_id',
      });
    }
  }

  Enrollments.init(
    {
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Enrollments',
      paranoid: true,
    },
  );

  return Enrollments;
};
