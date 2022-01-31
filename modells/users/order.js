const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    code:{
        type: Number,
        unique: true
    },
    date: {
        type: Date
    },
    items:{
        type: mongoose.Schema.Types.ObjectId, ref: 'Product'
    },
    price: {
        type: Number
    },
    status:{
        type: String
    }
})