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
 *        type: object
 *        properties:
 *          title:
 *            type: string
 *            description: Blame title
 *            example: 'My blame title'
 *          content:
 *            type: string
 *            description: Blame content
 *            example: 'My blame content'
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
 *        type: integer
 *        required: true
 *        description: Id of the blame
 *        example: 2
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        title:
 *          type: string
 *          description: Blame title
 *          example: 'My blame title'
 *        content:
 *          type: string
 *          description: Blame content
 *          example: 'My blame content'
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
 *        type: integer
 *        required: true
 *        description: Id of the blame
 *        example: 2
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

// TODO
// Update user
// userRouter.put('/users/:id', passport.authenticate('jwt', { session: false }),
//   (req, res) => {
//     updateUser(req, res);
//   });
// Delete user
// userRouter.delete('/users/:id', passport.authenticate('jwt', { session: false }),
//   (req, res) => {
//     deleteUser(req, res);
//   });
// Create User
// userRouter.post('/users/new', passport.authenticate('jwt', { session: false }),
//   (req, res) => {
//     userController.createUser(req, res);
//   });
