const { createTodo, updateTodo } = require("./types");
const express = require("express");
const app = express();
const cors = require("cors");
const { todo } = require("./db")

app.use(express.json());
app.use(cors());

app.post("/todo", async (req, res) => {
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You've entered the worng input"
        })
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo created"
    })
})

app.get("/todos", async (req, res) => {
    const todos = await todo.find();
    res.json({
        todos
    })
})

app.put("/completed", async (req, res) => {
    const setCompleted = req.body
    const parsedSetCompleted = updateTodo.safeParse(setCompleted);

    if (!parsedSetCompleted.success){
        res.status(411).json({
            msg: "todo updation failed!"
        })
    }
    await todo.update({
        _id: req.body.id
    },
    {
        completed: true
    })
    res.json({
        msg: "todo marked as completed!"
    })
})

app.listen(3000);