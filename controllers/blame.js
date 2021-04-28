const models = require('../models');

class BlameController {
  async getBlameById(req, res) {
    const { id } = req.params;
    try {
      const blame = await models.blame.findByPk(id);
      if (blame) {
        return res.status(200).json(blame);
      }
      return res.status(404).json({ message: 'Blame not found' });
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }

  async getBlames(req, res) {
    try {
      const blames = await models.blame.findAll({ raw: true });
      if (blames.length > 0) {
        return res.status(200).json(blames);
      }
      return res.status(404).json({ message: 'Blames not found' });
    } catch (err) {
      return res.status(500).send({ message: err });
    }
  }
}

const blameController = new BlameController();

module.exports = blameController;
