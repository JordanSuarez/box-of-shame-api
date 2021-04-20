const models = require('../models');

class UserController {
  async getUsers(req, res) {
    try {
      const usersResponse = [];
      const users = await models.user.findAll({ raw: true });
      const toto = false;
      if (toto) {
        return res.status(200).json('tototototo');
      }
      return res.status(200).json('tototototo');
    } catch (ex) {
      return res.status(500).send({ message: 'toto' });
    }
  }
}

const userController = new UserController();
module.exports = userController;
