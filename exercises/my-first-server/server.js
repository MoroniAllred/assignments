// your sefer is going to do:
    // listen for a request
    // send a response

//to fist set up this file you need to run npm init -y
  //then npm i express

//express exports a function that when called will give you an object


const express = require("express")
//app is our server
const app = express()

        //Mount Path // callback with request and reponse objects
app.get("/",(req, res) =>{
    res.send("I can see this because I am both runing my server and I am sending back a response/res")
})

//when you are console login or debuggin you will only be able to see in in the file terminal
console.log("right here!")

        //PORT
// keep your PORTS somwere inbetween 3000 and 9000 
    //don't use 3000 because that is react
//this ih hosting a local server 
app.listen(7000, () => {
    console.log("server is running on port 7000")
})