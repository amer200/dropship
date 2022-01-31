const mongoose = require('mongoose');
const user = require('../users/seller');

const productSchema = mongoose.Schema({
    name: {
        type: String
    },
    desc: {
        type: String
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'user'
    },
    imgurls: {
        type: Array
    },
    rate: {
        type: Number
    }
})