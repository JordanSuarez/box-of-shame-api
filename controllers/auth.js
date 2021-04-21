const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const userService = require('../services/user');

const jwtSecretKey = process.env.JWT_SECRET_KEY;
class AuthController {
  async register(req, res) {
    try {
      const userCreated = await userService.createUser(req.body);
      if (userCreated) {
        return res.status(200).json(userCreated);
      }
      return res.status(400).send({ error: 'Data not formatted properly' });
    } catch (err) {
      return res.status(500).send({ message: err });
    }
  }

  async login(req, res) {
    const { email, password } = req.body;
    if (email && password) {
      const user = await userService.getUserByParam({ email });
      if (!user) {
        res.status(401).json({ message: 'No such email found' });
      }
      if (await bcrypt.compare(password, user.password)) {
        const payload = { id: user.id };
        const token = jwt.sign(payload, jwtSecretKey);
        res.json({ user: userService.formatUser(user), token });
      } else {
        res.status(401).json({ msg: 'Password is incorrect' });
      }
    }
  }
}

const authController = new AuthController();

module.exports = authController;
