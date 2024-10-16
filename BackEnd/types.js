const zod = require("zod");

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodo = zod.object({
    completed: zod.string()
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo 
}