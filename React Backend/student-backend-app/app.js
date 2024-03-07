//import
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const StudentRoute=require("./controllers/StudentRouter")

//aliasname
const app = express()

//middleware
app.use(express.json())
app.use(cors())    //only for local use. not used for cloud purpose

mongoose.connect("mongodb+srv://adityareginold:Aditya2000@cluster0.furmlvp.mongodb.net/studentDB?retryWrites=true&w=majority")
{
    useNewUrlParser:true
}
 

//routingmethod1
// app.get("/", (req, res) => {
//     res.send("hello")
// })

// app.get("/gallery", (req, res) => {
//     res.send("hello gallery")
// })

// app.post("/contact", (req, res) => {
//     res.send("hello contact")
// })

//routingmethod2
app.use("/api/student",StudentRoute)


app.listen(3001, () => {
    console.log("Server running")
})