const express = require ("express")
const bountyRouter = express.Router()
const Bounty = require("../modles/bounty.js")

// let bounties = [
//     { 
//         firstName: "Luke",
//         lastName: "Skywalker",
//         living: true,
//         bounty: "3485097257",
//         type: "Jedi",
//         _id: uuidv1()
//     },{
//         firstName: "Carth",
//         lastName: "Onasi",
//         living: true,
//         bounty: 10,
//         type: "Jedi",
//         _id: uuidv1()
//     },{
//         firstName: "Darth",
//         lastName: "Revan",
//         living: true,
//         bounty: 20000,
//         type: "Sith",
//         _id: uuidv1()
//     },{
//         firstName: "Darth",
//         lastName: "Malak",
//         living: false,
//         bounty: 10000,
//         type: "Sith",
//         _id: uuidv1()
//     },{
//         firstName: "Darth",
//         lastName: "Stroyer",
//         living: true,
//         bounty: 500,
//         type: "Sith",
//         _id: uuidv1()
//     },{
//         firstName: "Mission",
//         lastName: "Vao",
//         living: true,
//         bounty: 1000,
//         type: "Jedi",
//         _id: uuidv1()
//     }
// ]
bountyRouter.route("/")
    .get((req, res, next)=>{
    Bounty.find((err, bounty)=>{
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(bounty)
    })
})
    .post((req,res,next)=>{
    const newBounty = new Bounty(req.body)
    newBounty.save((err, savedBounty)=>{
        if(err){
        res.status(500)
        return res.send(err)
        }
        return res.status(201).send(savedBounty)
    })
    
})


module.exports = bountyRouter