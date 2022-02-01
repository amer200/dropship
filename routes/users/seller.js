const express = require('express');
const route = express.Router();
const sellerController = require('../../controller/users/seller');


route.get('/', sellerController.getUsersData);
route.get('/:id', sellerController.getUserData);
route.post('/add-user', sellerController.createUser);
route.put('/update-user/:id', sellerController.updateUser);

module.exports = route;