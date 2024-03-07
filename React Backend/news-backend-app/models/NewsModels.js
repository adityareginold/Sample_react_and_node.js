const mongoose = require("mongoose")

const newsSchema =new mongoose.Schema(
    {
        Title : String,
        Content : String,
        Reporter :String
    }
)

module.exports = mongoose.model('news',newsSchema)