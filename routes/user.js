const express = require('express');

const userRouter = express.Router();

const {
  getUsers, getUserById, updateMyProfile, deleteMyProfile, getMyProfile,
} = require('../controllers/user');

/**
 * @swagger
 * /users/list:
 *  get:
 *   summary: Get users list
 *   description: Get users list
 *   tags:
 *     - User
 *   security:
 *     - BearerAuth: [read]
 *   content:
 *    application/json:
 *     schema:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: User id.
 *        username:
 *          type: string
 *          description: User name.
 *        email:
 *          type: string
 *          description: User email.
 *   responses:
 *    200:
 *     description: Users list
 *    401:
 *     description: Unauthorized
 *    404:
 *     description: Users not found
 *    500:
 *     description: Error
 */
userRouter.get('/list', getUsers);

/**
 * @swagger
 * /users/{user_id}:
 *  get:
 *   summary: Get user by id
 *   description: Get user by id
 *   tags:
 *     - User
 *   security:
 *     - BearerAuth: [read]
 *   parameters:
 *    - in: path
 *      name: user_id
 *      schema:
 *        type: integer
 *        required: true
 *        description: Id of the user
 *        example: 2
 *   content:
 *    application/json:
 *     schema:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: User id.
 *        username:
 *          type: string
 *          description: User name.
 *        email:
 *          type: string
 *          description: User email.
 *   responses:
 *    200:
 *     description: User
 *    401:
 *     description: Unauthorized
 *    404:
 *     description: User not found
 *    500:
 *     description: Error
 */
userRouter.get('/:id', getUserById);

/**
 * @swagger
 * /users/profile/me:
 *  get:
 *   summary: Get my profile
 *   description: Get my profile
 *   tags:
 *     - User
 *   security:
 *     - BearerAuth: [read]
 *   content:
 *    application/json:
 *     schema:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: User Id.
 *        username:
 *          type: string
 *          description: User name.
 *        email:
 *          type: string
 *          description: User email.
 *   responses:
 *    200:
 *     description: User
 *    401:
 *     description: Unauthorized
 *    404:
 *     description: User not found
 *    500:
 *     description: Error
 */
userRouter.get('/profile/me', getMyProfile);

/**
 * @swagger
 * /users/update/me:
 *  put:
 *   summary: Update my profile
 *   description: Update my profile
 *   tags:
 *     - User
 *   security:
 *     - BearerAuth: [read]
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        username:
 *          type: string
 *          description: User name.
 *          example: 'toto'
 *        email:
 *          type: string
 *          description: User email.
 *          example: 'john@doe.fr'
 *        password:
 *          type: string
 *          description: User password
 *          example: 'toto'
 *   responses:
 *    200:
 *     description: User has been updated
 *    401:
 *     description: Unauthorized
 *    404:
 *     description: User not found
 *    500:
 *     description: Error
 */
userRouter.put('/update/me', updateMyProfile);

/**
 * @swagger
 * /users/delete/me:
 *  delete:
 *   summary: Delete my profile
 *   description: Delete my profile
 *   tags:
 *     - User
 *   security:
 *     - BearerAuth: [read]
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
userRouter.delete('/delete/me', deleteMyProfile);

module.exports = userRouter;
