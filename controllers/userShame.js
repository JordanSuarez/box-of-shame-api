const models = require('../models');
const jwtService = require('../services/jwt');

class UserShameController {
  async getRandomShame(req, res) {
    try {
      const userId = (await jwtService.getUserFromJwt(req)).id;
      const filteredShames = await models.shame.findAll({
        include: {
          model: models.userShame,
          where: {
            userId,
          },
          required: false,
        },
        required: true,
      }).then((shames) => shames.filter((shame) => (
        shame.userShame !== null ? shame.userShame.userId !== userId : shame
      )));

      // Get random shame
      const random = Math.floor(Math.random() * filteredShames.length);
      const randomShame = filteredShames[random];

      // Save withdraw shame to userShame
      await models.userShame.create({
        userId,
        shameId: randomShame.id,
      });
      return res.status(200).json({ shame: randomShame });
    } catch (err) {
      return res.status(500).json({ message: 'Shame not found', err });
    }
  }
}

const userShameController = new UserShameController();

module.exports = userShameController;
