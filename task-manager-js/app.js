const express = require('express')
const tasks = require("./routes/tasks")
const app = express()
const port = 3000
const connectDB = require("./db/connect")
require("dotenv").config()

app.use(express.json())
app.use('/api/v1/tasks', tasks)

const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server listening on ${port}`))
        
    } catch (error) {
        console.log(error)
    }

}

start()