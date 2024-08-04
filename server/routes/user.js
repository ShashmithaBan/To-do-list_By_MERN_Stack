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

router.get("/getuser/:id", async(req,res)=>{
    const _id = req.params.id;

    try {
     const user = await User.findById(_id)
     if(!user){
        return res.status(404).send()
     }   
     res.status(200).send(user)
    } catch (error) {
        res.status(400),send(error)
    }
})

router.patch("/updateuser/:id", async(req,res)=>{
    try {
        const updateuser = await User.findByIdAndUpdate(req.params.id , req.body , {
            new:true
        })
        if(!updateuser){
            return res.status(404).send()
         }   
         res.status(200).send(updateuser)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete("/deleteuser/:id", async(req,res)=>{
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id)

        if(!deleteUser){
            res.status(404).send()
        }
        res.status(200).send(deleteUser)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router;