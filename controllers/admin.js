const models = require('../models');

class AdminController {
  // TODO admin methods for delete/update blames and users (try to make it dynamically)
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
  async createBlame(req, res) {
    try {
      const blameCreated = await models.blame.create(req.body);
      if (blameCreated) {
        return res.status(201).json(blameCreated);
      }
      return res.status(400).send({ error: 'Data not formatted properly' });
    } catch (err) {
      return res.status(500).send({ message: err });
    }
  }

  async updateBlame(req, res) {
    try {
      // Todo check if inputs are not empties
      const { id } = req.params;
      const [isUpdated] = await models.blame.update(req.body, { where: { id } });
      if (isUpdated === 0) {
        return res.status(400).send({ message: 'Unknown blame' });
      }
      const blameUpdated = await models.blame.findOne({ where: { id } });
      return res.status(200).json({ blameUpdated });
    } catch (err) {
      return res.status(500).send({ message: err });
    }
  }

  async deleteBlame(req, res) {
    try {
      const { id } = req.params;
      const isDeleted = await models.blame.destroy({ where: { id } });
      if (isDeleted === 0) {
        return res.status(400).send({ message: 'Unknown blame' });
      }
      return res.status(200).send({ message: 'Blame has been deleted' });
    } catch (err) {
      return res.status(500).send({ message: err });
    }
  }
}

const adminController = new AdminController();

module.exports = adminController;
