const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class userBlame extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, {
        foreignKey: {
          allowNull: false,
        },
        onDelete: 'cascade',
        hooks: true,
      });
      this.belongsTo(models.blame, {
        foreignKey: {
          allowNull: false,
        },
        onDelete: 'cascade',
        hooks: true,
      });
    }
  }
  userBlame.init({
    userId: DataTypes.INTEGER,
    blameId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'userBlame',
  });
  return userBlame;
};
