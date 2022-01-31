const express = require('express');
const route = express.Router();
const adminController = require('../../controller/users/admin');


route.get('/', adminController.getUserData);
route.post('/add-user', adminController.createUser);


module.exports = route;