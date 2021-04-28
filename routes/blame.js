const express = require('express');

const blameRouter = express.Router();

const { getBlameById, getBlames } = require('../controllers/blame');

/**
 * @swagger
 * definitions:
 *  Blame:
 *    type: object
 *    properties:
 *     title:
 *       type: string
 *       description: Blame title
 *       example: 'My blame title'
 *     content:
 *       type: string
 *       description: Blame content
 *       example: 'My blame content'
 *  Blame_id:
 *    type: integer
 *    required: true
 *    description: Id of the blame
 *    example: 3
 */

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
 *        $ref: '#/definitions/Blame_id'
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
