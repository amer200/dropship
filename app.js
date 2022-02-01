require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


app.use(bodyParser.json());

// router
const adminRoutes = require('./routes/users/admin');
const sellerRoutes = require('./routes/users/seller');
const markterRoutes = require('./routes/users/markter');

app.use('/admin', adminRoutes);
app.use('/seller', sellerRoutes);
app.use('/markter', markterRoutes);



mongoose.connect(process.env.DB_URL)
    .then(result => {
        app.listen(process.env.PORT)
        console.log(`connected on port ${process.env.PORT}`)
    })
    .catch(err => {
        console.log(err)
    })