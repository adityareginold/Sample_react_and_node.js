const express =require ("express")
const router =express.Router()

router.get("/",(req,res)=>{
    res.send("hello")
})
router.post("/view",(req,res)=>{
    res.send("View your employees")
})
router.post("/search",(req,res)=>{
    res.send("Search your employees")
})
router.post("/delete",(req,res)=>{
    res.send("delete your employees")
})


module.exports = router