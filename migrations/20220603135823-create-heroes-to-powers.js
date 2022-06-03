'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('heroes_to_powers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      superHeroId: {
        field: 'super_hero_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'superheroes',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      superPowerId: {
        field: 'super_power_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'superpowers',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
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
    await queryInterface.dropTable('heroes_to_powers');
  }
};