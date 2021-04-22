const express = require('express');

const authRouter = express.Router();
const passport = require('../utils/passport');

const { register, login, logout } = require('../controllers/auth');

authRouter.post('/register', register);
authRouter.post('/login', login);

// authRouter.post('/login', (req, res) => {
//   passport.authenticate('local', { session: false }, (err, user, info) => {
//     login(req, res, err, user, info);
//   })(req, res);
// });

// authRouter.get('/logout', (req, res) => {
//   passport.authenticate('jwt', { session: false }, (err, user, info) => {
//     logout(req, res, err, user, info)
//   })(req, res);
// });

module.exports = authRouter;
