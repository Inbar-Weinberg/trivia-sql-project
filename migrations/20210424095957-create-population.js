'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('population_density_by_countries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      country: {
        type: Sequelize.STRING
      },
      rank: {
        type: Sequelize.INTEGER
      },
      area_km2: {
        type: Sequelize.DECIMAL
      },
      area_mi2: {
        type: Sequelize.DECIMAL
      },
      population: {
        type: Sequelize.INTEGER
      },
      "density_pop/km2": {
        type: Sequelize.DECIMAL
      },
      "density_pop/mi2": {
        type: Sequelize.DECIMAL
      },
      date: {
        type: Sequelize.DATE
      },
      population_source: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('population_density_by_countries');
  }
};