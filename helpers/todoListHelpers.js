const TodoList = require('../models/todolist')

const findAllTodoLists = async (theirPN) => {
    const todoLists = await TodoList.findAll({where: {userPhoneNumber: theirPN}});
    console.log(todoLists);
    return todoLists;
}

const findOneTodoList = async (listName, theirPN) => {
    const todoList = await TodoList.findOne({where: {
        title: listName,
        userPhoneNumber: theirPN,
    }});
    console.log(todoList);
    return todoList
}

const createList = async (listName, theirPN) => {
    console.log('listName in helper',listName)
    const todoList = await TodoList.create({
        title: listName,
        userPhoneNumber: theirPN,
    });
    console.log(todoList);
    return todoList;
}

module.exports = {
    findAllTodoLists,
    findOneTodoList,
    createList,
}