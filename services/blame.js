const models = require('../models');

class BlameService {
  formattedBlame({ id, title, content }) {
    return {
      id,
      title,
      content,
    };
  }

  getRandomBlame(blames) {
    const random = Math.floor(Math.random() * blames.length);
    return blames[random];
  }

  async getFilteredBlames(userId) {
    try {
      const blames = await models.blame.findAll({
        include: {
          model: models.userBlame,
          where: { userId },
          required: false,
        },
      });

      return blames.filter((blame) => (
        blame.userBlame !== null ? blame.userBlame.userId !== userId : blame
      ));
    } catch (err) {
      return [];
    }
  }
}

const blameService = new BlameService();

module.exports = blameService;
