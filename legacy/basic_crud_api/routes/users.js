const express = require('express')
const router = express.Router()
let users = require("../user.json")
const uuid = require("uuid")

router.get(("/"), (req, res)=>{
    res.send(users)
})

router.post("/", (req, res)=>{
    const user = req.body
    const userWithID = {...user, id: uuid.v4()}
    console.log(user)
    users.push(userWithID)
    res.send(`user with username ${user.firstName} added`)
})

router.get(("/:id"), (req, res)=>{
    const {id} = req.params
    const userQuery = users.find((user)=>user.id === id)
    res.send(userQuery)
})

router.delete(("/:id"), (req, res)=>{
    const {id} = req.params
    users.filter((user)=>user.id != id)
    res.send(`user with id ${id} deleted`)
})

router.patch(("/:id"), (req, res)=>{
    const user = users.find((user) => user.id === req.params.id);
    
    user.username = req.body.username;
    user.age = req.body.age;

    console.log(`username has been updated to ${req.body.username}.age has been updated to ${req.body.age}`)
})
module.exports = router