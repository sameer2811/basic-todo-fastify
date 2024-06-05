const fp = require('fastify-plugin');
const todoController = require('./../../../controller/todoController');
async function todoRoutes(fastify, options) {
    fastify.get('/todo', async function (req, rep) {
        return "todo-world";
    });

    fastify.get("/todo/:id", todoController.getTodoByIdController);
    fastify.get("/todo/all", todoController.getAllTodos);
    fastify.post("/todo/create", todoController.postNewToDo);

}

module.exports = todoRoutes;