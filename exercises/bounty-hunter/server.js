const express = require("express");
const app = express();
const uuidv1 = require("uuid/v1");




let bounties = [
    { 
        firstName: "Luke",
        lastName: "Skywalker",
        living: true,
        bounty: "3485097257",
        type: "Jedi",
        _id: uuidv1()
    }
]

app.use(express.json())

app.get("/bounties", (req, res)=>{
    res.send(bounties)
})

app.get("/bounties/:_id", (req, res) =>{
    const bounty = bounties.find( bounty => bounty._id === req.params._id)
    res.send(bounty)
})

app.post("/bounties", (req, res)=>{
    const newBounty = req.body
    newBounty._id = uuidv1()
    bounties.push(newBounty)
    res.send(newBounty)
})

app.put("/bounties/:_id", (req, res) =>{
    const findBounty = bounties.find(bounty => bounty._id === req.params._id)
    const updatObj = req.body
    const updateBounty = Object.assign(findBounty, updatObj)
    const updateDB = bounties.map(bounty => bounty._id === req.params._id ? updateBounty : bounty)
    bounties = updateDB
    res.send(updateBounty)
})

app.delete("/bounties/:_id", (req, res) =>{
    const findBounty = bounties.find(bounty => bounty._id === req.params._id)
    const removeBounty = bounties.filter(bounty => bounty._id !== req.params._id)
    bounties = removeBounty
    res.send(`you have removed ${findBounty.title}.`)
})

app.listen(5425, () =>{
    console.log("server is runing on PORT 5425")
})