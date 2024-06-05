const fp = require('fastify-plugin');
class TodoService {
    constructor(todoAppRepository) {
        this.todoAppRepository = todoAppRepository;
    }

    async postNewToDo(text) {
        const res =  await this.todoAppRepository.postNewToDo(text);
        return res;
    }

    async getAllTodos() {
        const res = await this.todoAppRepository.getAllTodos();
        return res;
    }

    async getTodoById(id) {
        const res = await this.todoAppRepository.getTodoById(id);
        return res;
    }
};


async function todoAppService(fastify, options) {
    const {
        toDoAppRepository
    } = fastify;
    fastify.decorate('todoAppService', new TodoService(toDoAppRepository));
}

module.exports = fp(todoAppService);