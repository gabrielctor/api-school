'use strict'

const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class People extends Model {
    static associate(models) {
      People.hasMany(models.Enrollments, {
        foreignKey: 'student_id',
        scope: { status: 'confirmado' },
        as: 'enrolledClasses'
      })
      People.hasMany(models.Teams, {
        foreignKey: 'teacher_id'
      })
    }
  }
  
  People.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        nameValidator: function(data) {
          if(data.length < 3) throw new Error("O campo 'name' deve ter mais de 3 caracteres")
        }
      }
    },
    active: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'E-mail inválido'
        }
      }
    },
    occup: DataTypes.STRING
  }, 
  {
    sequelize,
    modelName: 'People',
    paranoid: true,
    defaultScope: {
      where: { active: true }
    },
    scopes: {
      all: { where: {} }
    }
  })
  
  return People
}