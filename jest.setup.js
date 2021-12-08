const { Sequelize } = require("sequelize");
const config = require("./config/config.json").test;
const User = require("./models/user.js");
const TodoList = require("./models/todolist.js");
// const TodoItem = require('./models/todoitem.js');

// create a sequelize that is configured to the test database
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: "localhost",
    dialect: "postgres",
  }
);
const queryInterface = sequelize.getQueryInterface();

// change models so will be sent to test database
User.sequelize = sequelize;
TodoList.sequelize = sequelize;
//TodoItem.sequelize = sequelize;

// create the tables
User.sync({ alter: true });
// need to create table first otherwise can not add foreign key column
// need to do .then so the program knows the sync is associated with the table just created
// queryInterface.createTable("TodoLists", {}, {}).then(
//   TodoList.sync({
//     alter:
//       true |
//       queryInterface.addColumn(
//         "TodoLists",
//         "userPhoneNumber",
//         Sequelize.STRING,
//         {
//           onDelete: "CASCADE",
//           refrences: {
//             model: "User",
//             key: "phoneNumber",
//             as: "userPhoneNumber",
//           },
//         }
//       ),
//   })
// );

// queryInterface.createTable("TodoItems", {}, {}).then(
//   TodoList.sync({
//     alter:
//       true |
//       queryInterface.addColumn("TodoItems", "todoListId", Sequelize.INTEGER, {
//         onDelete: "CASCADE",
//         refrences: {
//           model: "TodoList",
//           key: "id",
//           as: "todoListId",
//         },
//       }),
//   })
// );
