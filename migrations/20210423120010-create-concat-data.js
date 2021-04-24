'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('concat_data', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      country: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      capital: {
        type: Sequelize.STRING
      },
      continent: {
        type: Sequelize.STRING
      },
      area_km2: {
        type: Sequelize.DECIMAL
      },
      population: {
        type: Sequelize.INTEGER
      },
      density_pop_km2: {
        type: Sequelize.DECIMAL
      },
      phones_per_1000: {
        type: Sequelize.DECIMAL
      },
      restaurant_price_index: {
        type: Sequelize.DECIMAL
      },
      crime_index: {
        type: Sequelize.DECIMAL
      },
      quality_of_life_index: {
        type: Sequelize.DECIMAL
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
    await queryInterface.dropTable('concat_data');
  }
};