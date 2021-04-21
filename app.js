const express = require('express');
const bodyParser = require('body-parser');
const passport = require('./utils/passport');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// User
const userRoutes = require('./routes/user');

app.use('/', userRoutes);
// Auth
const authRoutes = require('./routes/auth');

app.use('/', authRoutes);

app.use(passport.initialize());

module.exports = app;
