const express = require("express")
const app = express()
const tasks = require("./routes/tasks")
const connectDB = require("./db/connect")
require('dotenv').config()
const notFound = require('./middleware/not-found')


//middleware
app.use(express.json())
app.use(express.static("./public"))
//routes


app.use('/api/v1/tasks', tasks)

app.use(notFound)


const port = 3000

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`listening in port ${port}`))
        console.log("DB CONNECTED")
    }
    catch(err){
        console.log(err)
    }
}

start()

