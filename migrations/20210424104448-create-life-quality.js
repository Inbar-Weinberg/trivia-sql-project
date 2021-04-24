'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('quality_of_life_index_by_countries_2020', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      country: {
        type: Sequelize.STRING
      },
      quality_of_life_index: {
        type: Sequelize.DECIMAL
      },
      purchasing_power_index: {
        type: Sequelize.DECIMAL
      },
      safety_index: {
        type: Sequelize.DECIMAL
      },
      health_care_index: {
        type: Sequelize.DECIMAL
      },
      cost_of_living_index: {
        type: Sequelize.DECIMAL
      },
      property_price_to_income_ratio: {
        type: Sequelize.DECIMAL
      },
      traffic_commute_time_index: {
        type: Sequelize.DECIMAL
      },
      pollution_index: {
        type: Sequelize.DECIMAL
      },
      climate_index: {
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
    await queryInterface.dropTable('quality_of_life_index_by_countries_2020');
  }
};