const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const comproute=require("./controller/CompanyRouter")
const offrouter = require("./controller/Officers")
//aliasname
const app=express() 

//middleware
app.use(express.json())
app.use(cors())

//routing
app.use("/api/company",comproute)
app.use("/api/officers",offrouter)

app.listen(3001,()=>{
    console.log("server running")
})