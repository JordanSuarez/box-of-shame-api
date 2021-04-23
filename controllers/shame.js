const models = require('../models');

class ShameController {
  async getShameById(req, res) {
    const { id } = req.params;
    try {
      const shame = await models.shame.findByPk(id);
      return res.status(200).json(shame);
    } catch (err) {
      return res.status(500).json({ message: 'Shame not found', err });
    }
  }

  async getShames(req, res) {
    try {
      const shames = await models.shame.findAll({ raw: true });
      return res.status(200).json(shames);
    } catch (err) {
      return res.status(500).send({ message: err });
    }
  }
}

const shameController = new ShameController();

module.exports = shameController;
