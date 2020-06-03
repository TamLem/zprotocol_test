const Sequelize = require('sequelize')
const sequelize = require('../util/database')

const User  = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING,
  surname: Sequelize.STRING,
  birthDate: Sequelize.DATE,
  email: Sequelize.STRING, 
  password: Sequelize.STRING
})

module.exports = User;