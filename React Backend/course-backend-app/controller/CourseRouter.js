const express = require("express")
const router = express.Router()
const courseModel = require("../models/CourseModel")

router.post("/add", async (req, res) => {
    let data = req.body
    let course = new CourseModel(data)
    let result = await student.save()
    res.json({
        status:"success"
    })
    res.send("Add course")
})

router.get("/view",async(req,res)=>{
    let output = await courseModel.find()
    res.json({
        output
    })
})
module.exports = router