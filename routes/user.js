const express = require('express');

const userRouter = express.Router();

const userController = require('../controllers/user');
const passport = require('../utils/passport');

userRouter.get('/users', passport.authenticate('jwt', { session: false }),
  (req, res) => {
    userController.getUsers(req, res);
  });
userRouter.get('/users/:id', passport.authenticate('jwt', { session: false }),
  (req, res) => {
    userController.getUserById(req, res);
  });

// userRouter.post('/users/new', passport.authenticate('jwt', { session: false }),
//   (req, res) => {
//   // TODO only for admin
//     userController.createUser(req, res);
//   });

module.exports = userRouter;
