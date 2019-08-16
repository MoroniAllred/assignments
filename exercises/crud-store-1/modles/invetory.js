const mongoose = require("mongoose")
const Schema = mongoose.Schema

const invetorySchema = new Schema({
    sports: {
        type: String,
        enum: ["football", "soccor", "basketball", "tenis"]
    },
    gear: {
        type: String,
        require: true
    }
})
module.exports = mongoose.model("Invetory", invetorySchema)