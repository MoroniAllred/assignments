const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const PORT = process.env.PORT || 7000;

app.use(express.json())
app.use(morgan("dev"))

mongoose.connect("mongodb://localhost:27017/bountydb",
    {
        useNewUrlParser: true
    })
    .then(() =>console.log("conected to the bountydb"))
    .catch(err =>console.log(err))

app.use("/bounty", require("./routs/bountyRouter.js"))


// app.get("/bounties", (req, res)=>{
//     res.send(bounties)
// })

// app.get("/bounties/:_id", (req, res) =>{
//     const bounty = bounties.find( bounty => bounty._id === req.params._id)
//     res.send(bounty)
// })

// app.post("/bounties", (req, res)=>{
//     const newBounty = req.body
//     newBounty._id = uuidv1()
//     bounties.push(newBounty)
//     res.send(newBounty)
// })

// app.put("/bounties/:_id", (req, res) =>{
//     const findBounty = bounties.find(bounty => bounty._id === req.params._id)
//     const updatObj = req.body
//     const updateBounty = Object.assign(findBounty, updatObj)
//     const updateDB = bounties.map(bounty => bounty._id === req.params._id ? updateBounty : bounty)
//     bounties = updateDB
//     res.send(updateBounty)
// })

// app.delete("/bounties/:_id", (req, res) =>{
//     const findBounty = bounties.find(bounty => bounty._id === req.params._id)
//     const removeBounty = bounties.filter(bounty => bounty._id !== req.params._id)
//     bounties = removeBounty
//     res.send(`you have removed ${findBounty.title}.`)
// })

app.listen(PORT, () =>{
    console.log(`server is runing on ${PORT}`)
})