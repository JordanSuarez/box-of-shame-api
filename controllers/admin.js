const models = require('../models');

class AdminController {
  // TODO admin methods for delete/update shames and users (try to make it dynamically)
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
  async createShame(req, res) {
    try {
      const shameCreated = await models.shame.create(req.body);
      if (shameCreated) {
        return res.status(201).json(shameCreated);
      }
      return res.status(400).send({ error: 'Data not formatted properly' });
    } catch (err) {
      return res.status(500).send({ message: err });
    }
  }

  async updateShame(req, res) {
    try {
      // Todo check if inputs are not empties
      const { id } = req.params;
      const [isUpdated] = await models.shame.update(req.body, { where: { id } });
      if (isUpdated === 0) {
        return res.status(400).send({ message: 'Unknown shame' });
      }
      const shameUpdated = await models.shame.findOne({ where: { id } });
      return res.status(200).json({ shameUpdated });
    } catch (err) {
      return res.status(500).send({ message: err });
    }
  }

  async deleteShame(req, res) {
    try {
      const { id } = req.params;
      const isDeleted = await models.shame.destroy({ where: { id } });
      if (isDeleted === 0) {
        return res.status(400).send({ message: 'Unknown shame' });
      }
      return res.status(200).send({ message: 'Shame has been deleted' });
    } catch (err) {
      return res.status(500).send({ message: err });
    }
  }
}

const adminController = new AdminController();

module.exports = adminController;
