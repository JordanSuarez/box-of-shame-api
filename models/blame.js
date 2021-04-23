const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class blame extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.userBlame, { onDelete: 'cascade', hooks: true });
    }
  }
  blame.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'blame',
  });
  return blame;
};
