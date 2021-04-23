const express = require('express');

const blameRouter = express.Router();

const { getBlameById, getBlames } = require('../controllers/blame');

// Get shames list
blameRouter.get('/', getBlames);
// Get shame
blameRouter.get('/:id', getBlameById);

module.exports = blameRouter;
