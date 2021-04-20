const express = require('express');

const userRouter = express.Router();

const userController = require('../controllers/user');

userRouter.get('/toto', userController.getUsers);

module.exports = userRouter;
