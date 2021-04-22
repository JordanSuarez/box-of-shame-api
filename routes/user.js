const express = require('express');

const userRouter = express.Router();

const {
  getUsers, getUserById, updateMyProfile, deleteMyProfile, getMyProfile
} = require('../controllers/user');

// Get users list
userRouter.get('/', getUsers);
// Get user
userRouter.get('/:id', getUserById);
// Get me
userRouter.get('/profile/me', getMyProfile);
// Update user
userRouter.put('/update/me', updateMyProfile);
// Delete me
userRouter.delete('/delete/me', deleteMyProfile);

// TODO only for admin
// Update user
// userRouter.put('/users/:id', passport.authenticate('jwt', { session: false }),
//   (req, res) => {
//     updateUser(req, res);
//   });
// Delete user
// userRouter.delete('/users/:id', passport.authenticate('jwt', { session: false }),
//   (req, res) => {
//     deleteUser(req, res);
//   });
// Create User
// userRouter.post('/users/new', passport.authenticate('jwt', { session: false }),
//   (req, res) => {
//     userController.createUser(req, res);
//   });

module.exports = userRouter;
