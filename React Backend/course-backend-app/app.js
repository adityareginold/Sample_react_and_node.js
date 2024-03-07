const express =require("express")
const cors =require("cors")
const mongoose = require("mongoose")
const CourseRoute=require("./controller/CourseRouter")


const app=express()


app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://adityareginold:Aditya2000@cluster0.furmlvp.mongodb.net/courseDB?retryWrites=true&w=majority")
{
    useNewUrlParser:true
}
app.use("/api/course",CourseRoute)

app.listen(3001,()=>{
    console.log("Server Running")
})