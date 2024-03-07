const express=require ("express")
const cors=require("cors")
const mongoose=require("mongoose")
const NeRoute=require("./controllers/NewsRouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://adityareginold:Aditya2000@cluster0.furmlvp.mongodb.net/NewsDB?retryWrites=true&w=majority")

app.use("/api/newslive",NeRoute)

app.listen(3001,()=>{
    console.log("Server is running")
})

