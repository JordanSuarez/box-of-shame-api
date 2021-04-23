const models = require('../models');

class ShameService {
  getRandomShame(shames) {
    const random = Math.floor(Math.random() * shames.length);
    return shames[random];
  }

  async getFilteredShames(userId) {
    try {
      const shames = await models.shame.findAll({
        include: {
          model: models.userShame,
          where: { userId },
          required: false,
        },
      });

      return shames.filter((shame) => (
        shame.userShame !== null ? shame.userShame.userId !== userId : shame
      ));
    } catch (err) {
      return [];
    }
  }
}

const shameService = new ShameService();

module.exports = shameService;
