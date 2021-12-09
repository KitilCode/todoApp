const { Sequelize, Model, DataTypes } = require("sequelize");
const config = require("../config/config.json").development;
const User = require("./user");

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: "localhost",
    dialect: "postgres",
  }
);

class TodoList extends Model {}

TodoList.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "TodoList",
  }
);

TodoList.belongsTo(User, {
  foreignKey: {
    type: DataTypes.STRING,
    name: "userPhoneNumber",
  },
  as: "todoLists",
  onDelete: "CASCADE",
});

module.exports = TodoList;
