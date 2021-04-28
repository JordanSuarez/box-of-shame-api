const express = require('express');

const blameRouter = express.Router();

const { getBlameById, getBlames } = require('../controllers/blame');

/**
 * @swagger
 * /blames/list:
 *  get:
 *   summary: Get blames list
 *   description: Get blames list
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
 *          description: Blame ID.
 *        title:
 *          type: string
 *          description: Blame title.
 *        content:
 *          type: string
 *          description: Blame content.
 *   responses:
 *    200:
 *     description: Blames list
 *    401:
 *     description: Unauthorized
 *    404:
 *     description: Blames not found
 *    500:
 *     description: Error
 */
blameRouter.get('/list', getBlames);

/**
 * @swagger
 * /blames/{blame_id}:
 *  get:
 *   summary: Get a blame by id
 *   description: Get a blame by id
 *   tags:
 *     - Blame
 *   security:
 *     - BearerAuth: [read]
 *   parameters:
 *    - in: path
 *      name: blame_id
 *      schema:
 *        type: integer
 *        required: true
 *        description: Id of the blame
 *        example: 2
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
 *     description: Success
 *    401:
 *     description: Unauthorized
 *    404:
 *     description: Blames not found
 *    500:
 *     description: Error
 */
blameRouter.get('/:id', getBlameById);

module.exports = blameRouter;
