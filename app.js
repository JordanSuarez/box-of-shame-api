const express = require('express');
const bodyParser = require('body-parser');
const passport = require('./utils/passport');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const shameRoutes = require('./routes/shame');
const adminRoutes = require('./routes/admin');
const jwtService = require('./services/jwt');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Auth
app.use('/', authRoutes);
// User
app.use('/users', passport.authenticate('jwt', { session: false }), userRoutes);
// User
app.use('/shames', passport.authenticate('jwt', { session: false }), shameRoutes);
// Admin
app.use('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
  const isAdmin = await jwtService.getUserRoleFromJwt(req);
  if (isAdmin) {
    return adminRoutes(req, res);
  }
  return res.status(403).send({ error: 'Permission refused' });
});

app.use(passport.initialize());

module.exports = app;
