const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class userShame extends Model {
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
      this.belongsTo(models.shame, {
        foreignKey: {
          allowNull: false,
        },
        onDelete: 'cascade',
        hooks: true,
      });
    }
  }
  userShame.init({
    userId: DataTypes.INTEGER,
    shameId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'userShame',
  });
  return userShame;
};
