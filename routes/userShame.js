const express = require('express');

const userShameRouter = express.Router();

const { getRandomShame } = require('../controllers/userShame');

// Get random shame
userShameRouter.get('/', getRandomShame);

module.exports = userShameRouter;
