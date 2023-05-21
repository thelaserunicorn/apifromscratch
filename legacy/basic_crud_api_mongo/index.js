const express = require("express")
const mongoose = require("mongoose")
const app = express()
const PORT = 3000
require('dotenv/config')

app.use(express.json())
app.get("/", (req,res)=>{
    res.json({success: "true"})
})


mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true},()=>{
    console.log("db connected")
})
app.listen(PORT,()=>{console.log(`listening in port ${PORT}`)})