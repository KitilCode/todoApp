const todoListController = require('../controllers/todoListController');

const todoRoutes = (app) => {
    app.get('todoList/create', todoListController.twilioCreateList)
}

module.exports = todoRoutes;