const mongoose=require("mongoose")

const studentSchema = new mongoose.Schema(
{
    title : String,
    venue : String,
    duration : String,
    date : String
}
)