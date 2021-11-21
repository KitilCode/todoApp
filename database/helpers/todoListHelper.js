const TodoList = require('../models/todolist')

const findAllTodoLists = async (theirPN) => {
    const todoLists = await TodoList.findAll({where: {userPhoneNumber: theirPN}});
    console.log(todoLists);
    return todoLists;
}

const findOneTodoList = async (thierPN, listName) => {
    const todoList = await TodoList.findOne({where: {
        userPhoneNumber: thierPN,
        title: listName,
    }});
    console.log(todoList);
    return todoList
}