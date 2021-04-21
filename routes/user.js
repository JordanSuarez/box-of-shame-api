const express = require('express');

const userRouter = express.Router();
const passport = require('../utils/passport');

const {
  getUsers, getUserById, updateUser, deleteUser,
} = require('../controllers/user');

// Get users list
userRouter.get('/users', passport.authenticate('jwt', { session: false }),
  (req, res) => {
    getUsers(req, res);
  });
// Get user
userRouter.get('/users/:id', passport.authenticate('jwt', { session: false }),
  (req, res) => {
    getUserById(req, res);
  });
// Update user
userRouter.put('/users/:id', passport.authenticate('jwt', { session: false }),
  (req, res) => {
    updateUser(req, res);
  });
// Delete user
userRouter.delete('/users/:id', passport.authenticate('jwt', { session: false }),
  (req, res) => {
    deleteUser(req, res);
  });

// userRouter.post('/users/new', passport.authenticate('jwt', { session: false }),
//   (req, res) => {
//   // TODO only for admin
//     userController.createUser(req, res);
//   });

module.exports = userRouter;
