const express = require("express")
const router = express.Router()
const User = require("../modals/user")

router.post("/users", async(req,res)=>{
    console.log(req.body)
    const user = new User(req.body)
    try {
        await user.save()
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
    
})

router.get("/getusers", async(req,res)=>{
    try {
        const users = await User.find({})
        res.status(200).send(users)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router;