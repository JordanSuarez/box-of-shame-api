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

module.exports = userRouter;
