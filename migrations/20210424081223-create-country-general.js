"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("countries_general", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phones_per_1000: {
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
      region: {
        type: Sequelize.STRING,
      },
      "coastline_coast/area_ratio": {
        type: Sequelize.DECIMAL,
      },
      net_migration: {
        type: Sequelize.DECIMAL,
      },
      infant_mortality_per_1000_births: {
        type: Sequelize.DECIMAL,
      },
      GDP_$_per_capital: {
        type: Sequelize.DECIMAL,
      },
      "literacy_%": {
        type: Sequelize.DECIMAL,
      },
      "arable_%": {
        type: Sequelize.DECIMAL,
      },
      "crops_%": {
        type: Sequelize.DECIMAL,
      },
      "literacy_%": {
        type: Sequelize.DECIMAL,
      },

      "other_%": {
        type: Sequelize.DECIMAL,
      },
      climate: {
        type: Sequelize.DECIMAL,
      },
      birthrate: {
        type: Sequelize.DECIMAL,
      },
      deathrate: {
        type: Sequelize.DECIMAL,
      },
      agriculture: {
        type: Sequelize.DECIMAL,
      },

      industry: {
        type: Sequelize.DECIMAL,
      },
      service: {
        type: Sequelize.DECIMAL,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("countries_general");
  },
};
