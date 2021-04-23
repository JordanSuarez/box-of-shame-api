const express = require('express');

const userBlameRouter = express.Router();

const { getRandomBlame } = require('../controllers/userBlame');

// Get random shame
userBlameRouter.get('/', getRandomBlame);

module.exports = userBlameRouter;
