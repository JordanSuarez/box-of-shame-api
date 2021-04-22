const express = require('express');
const bodyParser = require('body-parser');
const passport = require('./utils/passport');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const shameRoutes = require('./routes/shame');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Auth
app.use('/', authRoutes);
// User
app.use('/users', passport.authenticate('jwt', {session: false}), userRoutes);
// User
app.use('/shames', passport.authenticate('jwt', {session: false}), shameRoutes);

app.use(passport.initialize());

module.exports = app;
