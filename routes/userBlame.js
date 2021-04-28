const express = require('express');

const userBlameRouter = express.Router();

const { getRandomBlame } = require('../controllers/userBlame');

/**
 * @swagger
 * /pick-a-blame:
 *  get:
 *   summary: Pick a random blame
 *   description: Pick a random blame
 *   tags:
 *     - Blame
 *   security:
 *     - BearerAuth: [read]
 *   content:
 *    application/json:
 *     schema:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: Blame id.
 *        title:
 *          type: string
 *          description: Blame title.
 *        content:
 *          type: string
 *          description: Blame content.
 *   responses:
 *    200:
 *     description: Blame
 *    400:
 *      description: All the blames have been withdrawn
 *    401:
 *     description: Unauthorized
 *    500:
 *     description: Error
 */
userBlameRouter.get('/', getRandomBlame);

module.exports = userBlameRouter;
