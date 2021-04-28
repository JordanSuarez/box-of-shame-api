const express = require('express');

const authRouter = express.Router();

const { register, login } = require('../controllers/auth');

/**
 * @swagger
 * definitions:
 *  Login:
 *    type: object
 *    properties:
 *     email:
 *      type: string
 *      description: User email
 *      example: 'john@doe.fr'
 *     password:
 *      type: string
 *      description: User password
 *      example: 'myPassword'
 */

/**
 * @swagger
 * /register:
 *  post:
 *   summary: Create user
 *   description: Create user
 *   tags:
 *     - Auth
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *        $ref: '#/definitions/User'
 *   responses:
 *    201:
 *     description: User created successfully
 *    400:
 *     description: Data not formatted properly
 *    409:
 *     description: Email address already taken
 *    500:
 *     description: Error
 */
authRouter.post('/register', register);

/**
 * @swagger
 * /login:
 *  post:
 *   summary: Login to user account
 *   description: Login to user account
 *   tags:
 *     - Auth
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *        $ref: '#/definitions/Login'
 *   responses:
 *    200:
 *     description: User logged successfully
 *    403:
 *     description: Password or email is incorrect
 *    400:
 *     description: Missing Credentials
 */
authRouter.post('/login', login);

// authRouter.post('/login', (req, res) => {
//   passport.authenticate('local', { session: false }, (err, user, info) => {
//     login(req, res, err, user, info);
//   })(req, res);
// });

// authRouter.get('/logout', (req, res) => {
//   passport.authenticate('jwt', { session: false }, (err, user, info) => {
//     logout(req, res, err, user, info)
//   })(req, res);
// });

module.exports = authRouter;
