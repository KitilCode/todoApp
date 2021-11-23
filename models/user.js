const config = require('../config/config.json').development;
const {Sequelize, DataTypes, Model} = require('sequelize');

const sequelize = new Sequelize( config.database, config.username, config.password, {
  host: 'localhost',
  dialect: 'postgres'
});

class User extends Model {};

User.init({
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'User'
});

module.exports = User;