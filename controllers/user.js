const models = require('../models');
const userService = require('../services/user');

class UserController {
  async getUsers(req, res) {
    try {
      const users = await models.user.findAll({ raw: true });
      return res.status(200).json(users);
    } catch (err) {
      return res.status(500).send({ message: err });
    }
  }

  async createUser(req, res) {
    try {
      const toto = {
        name: req.body.name,
      };
      const user = await models.user.create(toto);
      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).send({ message: err });
    }
  }
}

const userController = new UserController();
module.exports = userController;
