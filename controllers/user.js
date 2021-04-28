const models = require('../models');
const userService = require('../services/user');
const jwtService = require('../services/jwt');

class UserController {
  async getUserById(req, res) {
    const { id } = req.params;
    try {
      const user = await models.user.findByPk(id);
      if (user) {
        const userFormatted = userService.formatUser(user);
        return res.status(200).json(userFormatted);
      }
      return res.status(404).json({ message: 'User not found' });
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }

  async getUsers(req, res) {
    try {
      const users = await models.user.findAll({ raw: true });
      if (users.length > 0) {
        const usersFormatted = users.map((user) => userService.formatUser(user));
        return res.status(200).json(usersFormatted);
      }
      return res.status(404).json({ message: 'Users not found' });
    } catch (err) {
      return res.status(500).send({ message: err });
    }
  }

  async getMyProfile(req, res) {
    try {
      const user = await jwtService.getUserFromJwt(req);
      if (user) {
        return res.status(200).json(userService.formatUser(user));
      }
      return res.status(404).json({ message: 'My profile not found' });
    } catch (err) {
      return res.status(500).send({ message: err });
    }
  }

  async updateMyProfile(req, res) {
    // Todo check if inputs are not empties
    try {
      const user = await jwtService.getUserFromJwt(req);
      if (user) {
        await models.user.update(req.body, { where: { id: user.id } });
        const userUpdated = await userService.getUserByParam({ id: user.id });
        return res.status(200).json(userService.formatUser(userUpdated));
      }
      return res.status(404).json({ message: 'My profile not found' });
    } catch (err) {
      return res.status(500).send({ message: err });
    }
  }

  async deleteMyProfile(req, res) {
    try {
      const user = await jwtService.getUserFromJwt(req);
      if (user) {
        await models.user.destroy({ where: { id: user.id } });
        return res.status(200).send({ message: 'User has been deleted' });
      }
      return res.status(404).json({ message: 'My profile not found' });
    } catch (err) {
      return res.status(500).send({ message: err });
    }
  }
}

const userController = new UserController();

module.exports = userController;
