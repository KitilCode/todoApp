const todoListController = require("../controllers/todoListController");

const todoRoutes = (app) => {
  app.get("/todoList", todoListController.twilioCreateList);
};

module.exports = todoRoutes;
