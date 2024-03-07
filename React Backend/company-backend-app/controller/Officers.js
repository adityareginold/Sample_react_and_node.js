const express =require ("express")
const offrouter =express.Router()

offrouter.post("/",(req,res)=>{
    res.send("hello")
})
offrouter.post("/add",(req,res)=>{
    res.send("add your employees")
})
offrouter.post("/view",(req,res)=>{
    res.send("View your employees")
})
offrouter.post("/search",(req,res)=>{
    res.send("Search your employees")
})
offrouter.post("/delete",(req,res)=>{
    res.send("delete your employees")
})


module.exports = offrouter