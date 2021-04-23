const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class shame extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.userShame, { onDelete: 'cascade', hooks: true });
    }
  }
  shame.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'shame',
  });
  return shame;
};
