const express = require('express')
const app = express();
const PORT = 3000;

const userRoutes = require("./routes/users")

app.use(express.json())
app.use('/users', userRoutes)

app.get("/", (req, res)=>{
    console.log("hello")
    res.json({name : "hello"})
})


app.listen(PORT, ()=>{
    console.log(`Server running in port ${PORT}`)
})