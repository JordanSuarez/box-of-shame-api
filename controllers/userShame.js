const models = require('../models');
const jwtService = require('../services/jwt');
const shameService = require('../services/shame');

class UserShameController {
  async getRandomShame(req, res) {
    try {
      const userId = (await jwtService.getUserFromJwt(req)).id;
      const filteredShame = await shameService.getFilteredShames(userId);
      const randomShame = shameService.getRandomShame(filteredShame);
      // Save withdrawn shame
      if (filteredShame.length > 0) {
        await models.userShame.create({
          userId,
          shameId: randomShame.id,
        });
        return res.status(200).send({ shames: randomShame });
      }
      return res.status(400).json({ message: 'All the shames have been withdrawn' });
    } catch (err) {
      return res.status(500).json({ message: 'Shame not found', err });
    }
  }
}

const userShameController = new UserShameController();

module.exports = userShameController;
