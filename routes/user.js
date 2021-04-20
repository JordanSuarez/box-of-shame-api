const express = require('express');

const userRouter = express.Router();

const userController = require('../controllers/user.js');

userRouter.get('/users', userController.getUsers);
userRouter.post('/users/new', userController.createUser);

module.exports = userRouter;
