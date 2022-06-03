'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuperPower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SuperPower.belongsToMany(models.SuperHero, {
        through: 'heroes_to_powers',
        foreignKey: 'superHeroId'
      })
    }
  }
  SuperPower.init({
    superPower: {
      field: 'super_power',
      allowNull: false,
      type: DataTypes.STRING}
  }, {
    sequelize,
    modelName: 'SuperPower',
    tableName: 'superpowers',
    underscored: true
  });
  return SuperPower;
};