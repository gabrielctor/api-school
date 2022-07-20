'use strict'

const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class People extends Model {
    static associate(models) {
      People.hasMany(models.Enrollments, {
        foreignKey: 'student_id'
      })
      People.hasMany(models.Teams, {
        foreignKey: 'teacher_id'
      })
    }
  }
  
  People.init({
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    occup: DataTypes.STRING
  }, 
  {
    sequelize,
    modelName: 'People',
    paranoid: true
  })
  
  return People
}