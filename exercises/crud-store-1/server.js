const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
const PORT = process.env.PORT || 7000

app.use(express.json())
app.use(morgan("dev"))

mongoose.connect("mongodb://localhost:27017/invetorydb",
{
    useNewUrlParser: true
})
.then(()=> console.log("conscted to the DB"))
.catch(err => console.log(err))

app.use("/invetory", require("./routes/invetoryRouter.js"))

app.listen(PORT, () =>{
    console.log(`server is on ${PORT}`)
})