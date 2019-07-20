const express = require("express")
const app = express()
const PORT = process.env.PORT || 7000

app.use(express.json())

app.use("/invetory", require("./routs/inventoryRouter.js"))

app.listen(PORT, () =>{
    console.log(`this server is running on ${PORT}`)
})