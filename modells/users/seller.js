const mongoose = require('mongoose');
const sellerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    rate: {
        type: Number
    },
    wallet: {
        withdrawable: {
            type: Number,
            default: 0
        },
        pending: {
            type: Number,
            default: 0
        }
    }
})
module.exports = mongoose.model('Seller', sellerSchema)