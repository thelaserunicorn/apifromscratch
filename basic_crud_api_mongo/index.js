const express = require("express")
const app = express()
const PORT = 3000

app.use(express.json())
app.get("/", (req,res)=>{
    res.json({success: "true"})
})

app.listen(PORT,()=>{console.log(`listening in port ${PORT}`)})