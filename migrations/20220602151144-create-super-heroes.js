'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('superheroes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nickName: {
        field: 'nick_name',
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      realName: {
        field: 'real_name',
        allowNull: false,
        type: Sequelize.STRING
      },
      originDescription: {
        field: 'origin_description',
        type: Sequelize.TEXT
      },
      catchphrase: {
        field: 'catch_phrase',
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('superheroes');
  }
};