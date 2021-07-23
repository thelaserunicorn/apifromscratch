const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors')
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' })
connectDB()

// Routes
const bootcamps = require('./routes/bootcamps')


// Main
const app = express();
app.use(express.json())
const PORT = process.env.PORT || 5000



//dev logger
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}





app.use('/api/v1/bootcamps', bootcamps)


const server = app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red)
    server.close(()=>process.exit(1))
})