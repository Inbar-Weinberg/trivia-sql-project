"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "question_generator",
      [
        {
          type: 1,
          template: "Which country is most populous?",
          column: "Population",
          max: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          type: 1,
          template: "Which country is least populous?",
          column: "Population",
          max: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          type: 1,
          template: "Which country is the largest by total area?",
          column: "Area_km2",
          max: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          type: 1,
          template: "Which country is the smallest by total area?",
          column: "Area_km2",
          max: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          type: 1,
          template: "Which country is the most densely populated?",
          column: "Density_pop_km2",
          max: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          type: 1,
          template: "Which country is the most least populated?",
          column: "Density_pop_km2",
          max: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          type: 1,
          template: "Which country has the most cell phones per person",
          column: "Phones_per_1000",
          max: true,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          type: 2,
          template: "What is the capital of ",
          column: "Capital",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          type: 2,
          template: "How many people live in ",
          column: "Population",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          type: 2,
          template: "In what continent is ",
          column: "Continent",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      { validate: true }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("question_generator", null, {});
  },
};
