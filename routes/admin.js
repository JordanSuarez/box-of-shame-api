const express = require('express');

const adminRouter = express.Router();

// const {
//   getUsers, getUserById, updateMyProfile, deleteMyProfile, getMyProfile
// } = require('../controllers/user');

// TODO only for admin shame and users routes
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

// // Update shame
// shameRouter.put('/update/me', updateShame);
// // Delete shame
// shameRouter.delete('/delete/me', deleteShame);

module.exports = adminRouter;
