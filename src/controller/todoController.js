async function getAllTodos(req, res) {
    const {
        todoAppService
    } = this;
    const response = await todoAppService.getAllTodos();
    return res.status(200).send(response);
}

async function getTodoByIdController(req, res) {
    const {
        todoAppService
    } = this;
    console.log("printing the req.params.id " , req.params.id);
    const response = await todoAppService.getTodoById(req.params.id);
    return res.status(200).send(response);
}

async function postNewToDo(req, res) {
    const {
        todoAppService
    } = this;

    console.log("printing the req to do ", req.body);
    const response = await todoAppService.postNewToDo(req.body);
    console.log("printing the req to do 2", response);

    return res.status(201).send(response);
}

module.exports = {
    getAllTodos,
    getTodoByIdController,
    postNewToDo
}