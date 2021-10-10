const express = require('express')
const router = express.Router()

router.get(("/"), (req, res)=>{
    res.send(users)
})

router.post("/", (req, res)=>{
    const user = req.body
    
    console.log(user)
})