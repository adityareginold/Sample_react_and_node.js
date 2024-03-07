const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema(
    {
        name: String,
        admno: String,
        rollno:String,
        College:String

    }
)
module.exports=mongoose.model('student',studentSchema)
