const express = require('express');
const route = express.Router();
const markterController = require('../../controller/users/markter');


route.get('/', markterController.getUsersData);
route.get('/:id', markterController.getUserData);
route.post('/add-user', markterController.createUser);
route.put('/update-user/:id', markterController.updateUser);

module.exports = route;