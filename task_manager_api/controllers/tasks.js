const getAllTasks = (req, res) => {
    res.send("all items from list")
}

const getTask = (req, res) => {
    res.send("get one task from list")
}

const createTask = (req, res) => {
    res.send("create task")
}

const deleteTask = (req, res) => {
    res.send("delete a task")
}

const updateTask = (req, res) => {
    res.send("update task")
}


module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}