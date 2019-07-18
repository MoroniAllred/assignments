const express = require("express")
const app = express()

let todos = [
    {
        "completed": false,
        "_id": "5d0ba3bda35a90655026480e",
        "title": "Wash dishes",
        "price": 0,
        "description": "They got dirty",
        "imgUrl": "https://images.unsplash.com/photo-1515847049296-a281d6401047?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "sessionId": "moroniallred"
    },
    {
        "completed": false,
        "_id": "5d0ce69862cc2f157ed36f26",
        "title": "Fix car",
        "price": 700,
        "description": "Take to the mechanic",
        "imgUrl": "https://images.unsplash.com/photo-1523676060187-f55189a71f5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "sessionId": "moroniallred"
    },
    {
        "completed": false,
        "_id": "5d0ce6d562cc2f157ed36f27",
        "title": "shopping For the week",
        "price": 200,
        "description": "Need food",
        "imgUrl": "https://images.unsplash.com/photo-1515847049296-a281d6401047?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "sessionId": "moroniallred"
    },
    {
        "completed": false,
        "_id": "5d0ce70362cc2f157ed36f28",
        "title": "Do homework ",
        "price": null,
        "description": "You be paying for school!",
        "imgUrl": "https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2800&q=80",
        "sessionId": "moroniallred"
    }
]

app.use(express.json())

app.get("/todos", (req, res) =>{
    res.send(todos)
})

app.get("/todos/:_id", (req, res) =>{
    const singalTodo = todos.find(todo => todo._id === req.params._id)
    res.send(singalTodo)
})

app.post("/todos", (req, res) =>{
    const newTodo = req.body
    const randomNumber = Math.random() * 100000000000000000
    const idString = randomNumber.toString(36)
    const fullID = idString + idString
    newTodo._id = fullID.slice(-24)
    todos.push(newTodo)
    res.send(newTodo)
})

app.delete("/todos/:_id", (req,res)=>{
    const judgedTodo = todos.find(todo => todo._id === req.params._id)
    const removeTodo = todos.filter(todo => todo._id !== req.params)
    todos = removeTodo
    res.send(`You have sucessfully passed judgment on ${judgedTodo.title}!`)
})

app.put("/todos/:_id", (req,res) =>{
    const findTodo = todos.find(todo => todo._id === req.params._id)
    const updateObjesct = req.body
    const updateTodo = Object.assign(findTodo, updateObjesct)
    const updateDB = todos.map(todo =>todo._id === req.params._id ? updateTodo : todo)
    todos = updateDB
    res.send(updateTodo)
})

app.listen(3232, () => {
    console.log("server is runing on PORT 3232")
})