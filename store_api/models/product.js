const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'product name required']
    },
    price:{
        type: Number,
        required: [true, 'product price must be provided']
    }
})