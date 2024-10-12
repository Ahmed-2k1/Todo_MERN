const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://ahmeduddinyasar:ahmeduddin@tododb.5yqaa.mongodb.net/")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo: todo
}