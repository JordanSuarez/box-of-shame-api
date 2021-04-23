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
const blameRoutes = require('./routes/blame');
const userBlameRoutes = require('./routes/userBlame');
const adminRoutes = require('./routes/admin');
// Auth
app.use('/', authRoutes);
// User
app.use('/users', passport.authenticate('jwt', { session: false }), userRoutes);
// Blame
app.use('/blames', passport.authenticate('jwt', { session: false }), blameRoutes);
// User blame
app.use('/pick-a-blame', passport.authenticate('jwt', { session: false }), userBlameRoutes);
// Admin
app.use('/protected', passport.authenticate('jwt', { session: false }), async (req, res) => {
  const isAdmin = await jwtService.getUserRoleFromJwt(req);
  if (isAdmin) {
    return adminRoutes(req, res);
  }
  return res.status(403).send({ error: 'Permission refused' });
});

module.exports = app;
