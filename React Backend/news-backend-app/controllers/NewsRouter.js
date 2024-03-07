const express = require("express")
const router = express.Router()
const NewsModels = require("../models/NewsModels")


router.get("/", (req, res) => {
    res.send("hello")
})

router.post("/add", async (req, res) => {
    let data = req.body
    let news = new NewsModels(data)
    let result = await news.save()
    res.json({
        status: "success"
    })
    res.send("this is add page")
})

router.get("/view", async (req, res) => {
    let output = await NewsModels.find()
    res.json({
        output
    })

})


module.exports = router