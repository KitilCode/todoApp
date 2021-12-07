const {Sequelize, Model, DataTypes} = require('sequelize');
const config = require('../config/config.json').development;
const TodoList = require('./todolist');

const sequelize = new Sequelize(config.database, config.username, config.password,{
  host: 'localhost',
  dialect: 'postgres',
});

class TodoItem extends Model {};

TodoItem.init('TodoItem', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  complete: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }
}, {
  sequelize,
  modelName: 'TodoItem'
});

TodoItem.belongsTo( TodoList, {
  foreignKey: {
    type: DataTypes.INTEGER,
    name: 'todoListId',
  },
  as: 'todoItems',
  onDelete: 'CASCADE',
  }
);

module.exports = TodoItem; 