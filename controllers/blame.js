const models = require('../models');

class BlameController {
  async getBlameById(req, res) {
    const { id } = req.params;
    try {
      const blame = await models.blame.findByPk(id);
      return res.status(200).json(blame);
    } catch (err) {
      return res.status(500).json({ message: 'Blame not found', err });
    }
  }

  async getBlames(req, res) {
    try {
      const blames = await models.blame.findAll({ raw: true });
      return res.status(200).json(blames);
    } catch (err) {
      return res.status(500).send({ message: err });
    }
  }
}

const blameController = new BlameController();

module.exports = blameController;
