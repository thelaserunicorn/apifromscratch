const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan')

// Routes
const bootcamps = require('./routes/bootcamps')


dotenv.config({ path: './config/config.env' })
const app = express();
const PORT = process.env.PORT || 5000


//dev logger
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.use('/api/v1/bootcamps', bootcamps)






app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`))