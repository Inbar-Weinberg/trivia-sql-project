"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("cost_of_living_index_by_country_2020", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      country: {
        type: Sequelize.STRING,
      },
      cost_of_living_index: {
        type: Sequelize.DECIMAL,
      },
      restaurant_price_index: {
        type: Sequelize.DECIMAL,
      },
      groceries_index: {
        type: Sequelize.DECIMAL,
      },
      rent_index: {
        type: Sequelize.DECIMAL,
      },
      local_purchasing_power_index: {
        type: Sequelize.DECIMAL,
      },
      cost_of_living_plus_rent_index: {
        type: Sequelize.DECIMAL,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("cost_of_living_index_by_country_2020");
  },
};
