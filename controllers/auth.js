const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const userService = require('../services/user');

const jwtSecretKey = process.env.JWT_SECRET_KEY;

class AuthController {
  async register(req, res) {
    try {
      const isEmailExist = await userService.getUserByParam({ email: req.body.email });
      if (!isEmailExist) {
        const userCreated = await userService.createUser(req.body);
        if (userCreated) {
          return res.status(201).json(userCreated);
        }
        return res.status(400).send({ error: 'Data not formatted properly' });
      }
      return res.status(400).send({ error: 'Email address already taken' });
    } catch (err) {
      return res.status(500).send({ message: err });
    }
  }

  async login(req, res) {
    const { email, password } = req.body;
    if (email && password) {
      const user = await userService.getUserByParam({ email });
      if (user && await bcrypt.compare(password, user.password)) {
        const payload = { id: user.id };
        const token = jwt.sign(payload, jwtSecretKey);
        return res.status(200).json({ user: userService.formatUser(user), token });
      }
      return res.status(403).json({ message: 'Password or email is incorrect' });
    }
    return res.status(403).json({ message: 'Missing Credentials' });
  }

  // async logout(req, res, err, user, info) {
  //   if (err || !user) {
  //     return res.status(400).json({
  //       message: info ? info.message : 'Logout failed',
  //       user,
  //     });
  //   }
  //   const payload = { id: '' };
  //   const token = await jwt.sign(payload, jwtSecretKey);
  //   console.log('token', token);
  //   req.logout();
  //   return res.status(200).json({ message: 'Logout successfull' });
  // }

  // async login(req, res) {
  //   // if (err || !user) {
  //   //   return res.status(400).json({
  //   //     message: info ? info.message : 'Login failed',
  //   //     user,
  //   //   });
  //   // }
  //   // return await req.login(user, { session: false }, async (error) => {
  //   //   if (error) {
  //   //     res.send(error);
  //   //   }
  //   console.log(req)
  //     // const payload = { id: user.id };
  //     // const token = await jwt.sign(payload, jwtSecretKey);
  //     // return res.status(200).json({ user, token });
  //   // });
  // }
}

const authController = new AuthController();

module.exports = authController;
