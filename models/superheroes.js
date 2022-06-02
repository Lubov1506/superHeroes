'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuperHeroes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SuperHeroes.init({
    nickName: {
      field: 'nick_name',
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    realName: {
      field: 'real_name',
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    originDescription: {
      field: 'origin_description',
      type: DataTypes.TEXT
    },
    catchPhrase: {
      field: 'catch_phrase',
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'SuperHeroes',
    tableName: 'superheroes',
    underscored: true
  });
  return SuperHeroes;
};