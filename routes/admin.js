const express = require('express');

const adminRouter = express.Router();

const {
  deleteBlame, updateBlame, createBlame,
} = require('../controllers/admin');

// TODO
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
adminRouter.post('/blames/new', createBlame);
// Update shame
adminRouter.put('/blames/update/:id', updateBlame);
// Delete shame
adminRouter.delete('/blames/delete/:id', deleteBlame);

module.exports = adminRouter;
