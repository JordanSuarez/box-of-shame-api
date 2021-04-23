const models = require('../models');
const jwtService = require('../services/jwt');
const blameService = require('../services/blame');

class UserBlameController {
  async getRandomBlame(req, res) {
    try {
      const userId = (await jwtService.getUserFromJwt(req)).id;
      const filteredBlame = await blameService.getFilteredBlames(userId);
      const randomBlame = blameService.getRandomBlame(filteredBlame);
      // Save withdrawn blame
      if (filteredBlame.length > 0) {
        await models.userBlame.create({
          userId,
          blameId: randomBlame.id,
        });
        return res.status(200).send({ blames: randomBlame });
      }
      return res.status(400).json({ message: 'All the blames have been withdrawn' });
    } catch (err) {
      return res.status(500).json({ message: 'Blame not found', err });
    }
  }
}

const userBlameController = new UserBlameController();

module.exports = userBlameController;
