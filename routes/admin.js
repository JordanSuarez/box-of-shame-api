const express = require('express');

const adminRouter = express.Router();

const {
  deleteShame, updateShame, createShame,
} = require('../controllers/admin');

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

// Create shame
adminRouter.post('/shames/new', createShame);
// Update shame
adminRouter.put('/shames/update/:id', updateShame);
// Delete shame
adminRouter.delete('/shames/delete/:id', deleteShame);

module.exports = adminRouter;
