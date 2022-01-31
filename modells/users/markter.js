const mongoose = require('mongoose');

const markterSchema = mongoose.Schema({
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
    wallet: {
        withdrawable: {
            type: Number,
            default: 0
        },
        pending: {
            type: Number,
            default: 0
        }
    },
    orders: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Order'
    }
})