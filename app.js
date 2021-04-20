const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const userRoutes = require('./routes/user.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// User
app.use('/', userRoutes);

module.exports = app;
