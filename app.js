const express = require('express');
const bodyParser = require('body-parser');
const passport = require('./utils/passport');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// User
app.use('/users', passport.authenticate('jwt', {session: false}), userRoutes);
// Auth
app.use('/', authRoutes);

app.use(passport.initialize());

module.exports = app;
