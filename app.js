const express = require('express');
const bodyParser = require('body-parser');
const passport = require('./utils/passport');
const jwtService = require('./services/jwt');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());

// Routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const shameRoutes = require('./routes/shame');
const userShameRoutes = require('./routes/userShame');
const adminRoutes = require('./routes/admin');
// Auth
app.use('/', authRoutes);
// User
app.use('/users', passport.authenticate('jwt', { session: false }), userRoutes);
// Shame
app.use('/shames', passport.authenticate('jwt', { session: false }), shameRoutes);
// User shame
app.use('/random', passport.authenticate('jwt', { session: false }), userShameRoutes);
// Admin
app.use('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
  const isAdmin = await jwtService.getUserRoleFromJwt(req);
  if (isAdmin) {
    return adminRoutes(req, res);
  }
  return res.status(403).send({ error: 'Permission refused' });
});

module.exports = app;
