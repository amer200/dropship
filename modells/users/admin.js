const mongoose = require('mongoose');
const adminSchema = mongoose.Schema({
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
    }
})

module.exports = mongoose.model('Admin', adminSchema)