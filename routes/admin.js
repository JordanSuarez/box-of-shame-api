const express = require('express');

const adminRouter = express.Router();

const {
  deleteBlame, updateBlame, createBlame,
} = require('../controllers/admin');

/**
 * @swagger
 * /protected/blames/new:
 *  post:
 *   summary: Create a blame
 *   description: Create a blame
 *   tags:
 *     - Admin
 *   security:
 *     - BearerAuth: [write]
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *        $ref: '#/definitions/Blame'
 *   responses:
 *    201:
 *     description: Blame created successfully
 *    400:
 *     description: Data not formatted properly
 *    500:
 *     description: Error
 */
adminRouter.post('/blames/new', createBlame);

/**
 * @swagger
 * /protected/blames/update/{blame_id}:
 *  put:
 *   summary: Update a blame
 *   description: Update a blame
 *   tags:
 *     - Admin
 *   security:
 *     - BearerAuth: [write]
 *   parameters:
 *    - in: path
 *      name: blame_id
 *      schema:
 *        $ref: '#/definitions/Blame_id'
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *        $ref: '#/definitions/Blame'
 *   responses:
 *    200:
 *     description: Blame has been updated
 *    401:
 *     description: Unauthorized
 *    404:
 *     description: Blame not found
 *    500:
 *     description: Error
 */
adminRouter.put('/blames/update/:id', updateBlame);

/**
 * @swagger
 * /protected/blames/delete/{blame_id}:
 *  delete:
 *   summary: Delete a blame
 *   description: Delete a blame
 *   tags:
 *     - Admin
 *   security:
 *     - BearerAuth: [write]
 *   parameters:
 *    - in: path
 *      name: blame_id
 *      schema:
 *        $ref: '#/definitions/Blame_id'
 *   responses:
 *    200:
 *     description: User has been deleted
 *    401:
 *     description: Unauthorized
 *    404:
 *     description: User not found
 *    500:
 *     description: Error
 */
adminRouter.delete('/blames/delete/:id', deleteBlame);

module.exports = adminRouter;
