const express = require("express")
const router = express.Router()
const studentModel = require("../models/StudentModels")

router.get("/", (req, res) => {
    res.send("hello")
})

router.post("/add", async(req,res) => {    
    let data = req.body  //value read
    let student = new studentModel(data)
    let result = await student.save()
    res.json({
        status:"success"
    })
    res.send("this is add page")
})

router.get("/view", async(req,res)=>{
    let output =await studentModel.find()
    res.json({
        output
    })
})

module.exports = router