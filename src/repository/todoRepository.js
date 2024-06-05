const fp = require('fastify-plugin');
class TodoRepository {
    constructor(db) {
        this.db = db;
    }

    async postNewToDo(text) {
        const todoList = this.db.todos;
        this.db.todos.push({
            "id": todoList.length,
            "text": text
        })

        return this.db.todos;
    }

    async getAllTodos() {
        return this.db.todos;
    }

    async getTodoById(id) {
        const todoList = this.db.todos;
        for (let index = 0; index < todoList.length; index++) {
            if (index == id) {
                return todoList[index].text;
            }
        }
        return "No todo found for this id";
    }
};


async function todoAppRepository(fastify, options) {
    const {
        db
    } = fastify;
    fastify.decorate('toDoAppRepository', new TodoRepository(db));
}

module.exports = fp(todoAppRepository);