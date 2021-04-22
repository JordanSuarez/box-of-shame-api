const express = require('express');

const shameRouter = express.Router();

const { getShameById, getShames } = require('../controllers/shame');

// Get shames list
shameRouter.get('/', getShames);
// Get shame
shameRouter.get('/:id', getShameById);

module.exports = shameRouter;
