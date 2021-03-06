const path = require('path')
const express = require('express');
const fileUpload = require('express-fileupload')
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const errorHandler = require('./middleware/errorHandler')
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' })
connectDB()

// Routes
const bootcamps = require('./routes/bootcamps')
const courses = require('./routes/courses')


// Main
const app = express();
app.use(express.json())
const PORT = process.env.PORT || 5000



//dev logger
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.use(fileUpload());
app.use(express.static(path.join(__dirname, 'public')))





app.use('/api/v1/bootcamps', bootcamps);
app.use('/api/v1/courses', courses);
app.use(errorHandler);


const server = app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red)
    server.close(()=>process.exit(1))
})