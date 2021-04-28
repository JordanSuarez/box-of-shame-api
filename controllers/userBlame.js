const models = require('../models');
const jwtService = require('../services/jwt');
const blameService = require('../services/blame');

class UserBlameController {
  async getRandomBlame(req, res) {
    try {
      const userId = (await jwtService.getUserFromJwt(req)).id;
      const filteredBlames = await blameService.getFilteredBlames(userId);
      const randomBlame = blameService.getRandomBlame(filteredBlames);
      // Save withdrawn blame
      if (filteredBlames.length > 0) {
        await models.userBlame.create({
          userId,
          blameId: randomBlame.id,
        });
        return res.status(200).send(blameService.formattedBlame(randomBlame));
      }
      return res.status(404).json({ message: 'All the blames have been withdrawn' });
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }
}

const userBlameController = new UserBlameController();

module.exports = userBlameController;
