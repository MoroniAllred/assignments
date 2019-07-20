const express = require("express")
const inventoryRouter=express.Router()
const uuid = require("uuid/v4")

let inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
        _id: uuid()
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
        _id: uuid()
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
        _id: uuid()
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
        _id: uuid()
    },{
        name: "soup",
        type: "food",
        price: 300,
        _id: uuid()
    },{
        name: "flour",
        type: "food",
        price: 100,
        _id: uuid()
    }
]

inventoryRouter.route("/search")
.get((req,res) => {
    console.log(req.query)
    const price = Number(req.query.price)
    if(req.query.name 
        && req.query.type 
        && req.query.maxprice 
        && req.query.minprice){
        const foundItem = inventoryItems.filter(item => {
            if(item.name === req.query.name 
                && item.type === req.query.type 
                && item.price < req.query.maxprice
                && item.price > req.query.minprice){
                    return item
                }
        })
        res.send(foundItem)
    } else if(req.query.name 
            && req.query.type 
            && req.query.price){
            const foundItem = inventoryItems.filter(item =>{
                if(item.name === req.query.name 
                && item.type === req.query.type 
                && item.price === price ){
                    return item
                }
            })
        res.send(foundItem)
    }else if(req.query.name 
        && req.query.type){
        const foundItem = inventoryItems.filter(item => {
            if(item.name === req.query.name 
                && item.type === req.query.type){
            return item
            }
        })
        res.send(foundItem)
    }else if(req.query.name 
        && req.query.price){
        const foundItem = inventoryItems.filter(item => {
            if(item.name === req.query.name && item.price === price){
                return item
            }
        })
        res.send(foundItem)
    }else if(req.query.price 
        && req.query.type){
        const foundItem = inventoryItems.filter(item=>{
            if(item.price === price 
                && item.type === req.query.type){
                return item
            }
        })
        res.send(foundItem)
    }else if (req.query.maxprice 
        && req.query.minprice){
        const foundItem = inventoryItems.filter(item =>{
            if(item.price < req.query.maxprice 
                && item.price > req.query.minprice)
            return item
        })
        res.send(foundItem)
    }else if(req.query.name 
        && req.query.maxprice 
        && req.query.minprice){
        const foundItem = inventoryItems.filter(item => {
            if(item.name === req.query.name 
                && item.price < req.query.maxprice 
                && item.price > req.query.minprice)
            return item
        })
        res.send(foundItem)
    }else if(req.query.type 
        && req.query.maxprice 
        && req.query.minprice){
        const foundItem = inventoryItems.filter(item =>{
            if(item.type === req.query.type 
                && item.price < req.query.maxprice 
                && item.price > req.query.minprice){
                return item
            }
        })
        res.send(foundItem)
    }else if(req.query.type 
        && req.query.maxprice){
        const foundItem = inventoryItems.filter(item =>{
            if(item.type === req.query.type 
                && item.price < req.query.maxprice){
                return item
            }
        })
        res.send(foundItem)
    }else if(req.query.type 
        && req.query.minprice){
        const foundItem = inventoryItems.filter(item=>{
            if(item.type === req.query.type 
                && item.price > req.query.minprice){
                return item
            }
        })
        res.send(foundItem)
    }else if (req.query.name 
        && req.query.maxprice){
        const foundItem = inventoryItems.filter(item => {
            if(item.name === req.query.name 
                && item.price < req.query.maxprice){
                return item
            }
        })
        res.send(foundItem)
    }else if(req.query.name 
        && req.query.minprice){
        const foundItem = inventoryItems.filter(item =>{
            if(item.name === req.query.name 
            && item.price > req.query.minprice){
                return item
            }
        })
        res.send(foundItem)
    }else if (req.query.maxprice){
        const foundItem = inventoryItems.filter(item => item.price < req.query.maxprice)
        res.send(foundItem)
    }else if (req.query.minprice){
            const foundItem = inventoryItems.filter(item => item.price > req.query.minprice)
        res.send(foundItem)
    }else if(req.query.name){
        const foundItem = inventoryItems.filter(item => item.name === req.query.name)
        res.send(foundItem)
    }else if (req.query.type){
        const foundItem = inventoryItems.filter(item => item.type === req.query.type)
        res.send(foundItem)
    }
}) 

inventoryRouter.route("/")
.get((req,res) =>{
    res.send(inventoryItems)
})

inventoryRouter.route("/:_id")
.get((req,res) =>{
    const findItem = inventoryItems.find(item => item._id === req.params._id)
    res.send(findItem)
})

module.exports = inventoryRouter