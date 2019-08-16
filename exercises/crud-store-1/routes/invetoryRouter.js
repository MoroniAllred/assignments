const express = require("express")
const invtoryRouter = express()
const Invetory = require("../modles/invetory.js")

invtoryRouter.route("/")
    .get((req, res, next)=>{
        Invetory.find((err, item) =>{
            if(err){
                res.status(500)
                return res.send(err)
            }
            return res.status(200).send(item)
        })
    })
    .post((req, res, next)=>{
        const newItem = new Invetory(req.body)
        newItem.save((err,item)=>{
            if(err){
                res.status(500)
                return res.send(err)
            }
            return res.status(201).send(item)
        })
    })

invtoryRouter.route("/:_id")
    .delete((req, res, next)=>{
        Invetory.findOneAndRemove({_id: req.params._id}, (err, deletedItem)=>{
            if(err){
                res.status(500)
                return res.send(err)
            }
            return res.status(202).send({
                item: deletedItem,
                msg: `you have deleted ${deletedItem.sports} ${deletedItem.gear}`
            })
        })
    })
    .put((req, res, next)=>{
        Invetory.findByIdAndUpdate({_id: req.params._id}, 
                                    req.body,
                                    {new: true},
                                    (err, updatedItem)=>{
                                        if(err){
                                            res.status(200)
                                            return res.send(err)
                                        }
                                        return res.status(201).send(updatedItem)
                                    })
    })
    .get((req, res, next)=>{
        Invetory.findOne({_id: req.params._id}, (err, foundThing)=>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(foundThing)
        })
    })

module.exports = invtoryRouter;