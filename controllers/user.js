const models = require('../models');
const userService = require('../services/user');
const jwtService = require('../services/jwt');

class UserController {
  async getUserById(req, res) {
    const { id } = req.params;
    try {
      const user = await models.user.findByPk(id);
      const userFormatted = userService.formatUser(user);
      return res.status(200).json(userFormatted);
    } catch (err) {
      return res.status(500).json({ message: 'User not found', err });
    }
  }

  async getUsers(req, res) {
    try {
      const users = await models.user.findAll({ raw: true });
      const usersFormatted = users.map((user) => userService.formatUser(user));
      return res.status(200).json(usersFormatted);
    } catch (err) {
      return res.status(500).send({ message: err });
    }
  }

  async getMyProfile(req, res) {
    try {
      const user = await jwtService.getUserFromJwt(req);
      if (user) {
        return res.status(200).json({ user: userService.formatUser(user) });
      }
      return res.status(400);
    } catch (err) {
      return res.status(500).send({ message: err });
    }
  }

  async updateMyProfile(req, res) {
    // Todo check if user input is not empty
    try {
      const user = await jwtService.getUserFromJwt(req);
      if (user) {
        await models.user.update(req.body, { where: { id: user.id } });
        const userUpdated = await userService.getUserByParam({ id: user.id });
        return res.status(200).json({ user: userService.formatUser(userUpdated) });
      }
      return res.status(400);
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
      return res.status(400);
    } catch (err) {
      return res.status(500).send({ message: err });
    }
  }

  // TODO admin methods
  // async updateUser(req, res) {
  //   try {
  //     const { id } = req.params;
  //     await models.user.update(req.body, { where: { id } });
  //     const userUpdated = await userService.getUserByParam({ id });
  //     const user = userService.formatUser(userUpdated);
  //     return res.status(200).json({ user });
  //   } catch (err) {
  //     return res.status(500).send({ message: err });
  //   }
  // }

  // async createUser(req, res) {
  //   try {
  //     const userCreated = await userService.createUser(req.body);
  //     if (userCreated) {
  //       return res.status(201).json(userCreated);
  //     }
  //     return res.status(400).send({ error: 'Data not formatted properly' });
  //   } catch (err) {
  //     return res.status(500).send({ message: err });
  //   }
  // }
}

const userController = new UserController();

module.exports = userController;
