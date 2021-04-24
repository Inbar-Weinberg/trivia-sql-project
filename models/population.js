"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Population extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Population.init(
    {
      rank: DataTypes.INTEGER,
      country: { type: DataTypes.STRING, allowNull: false },
      areaKm2: { type: DataTypes.DECIMAL, field: "area_km2" },
      areaMi2: { type: DataTypes.DECIMAL, field: "area_mi2" },
      population: DataTypes.INTEGER,
      densityPopKm2: { type: DataTypes.DECIMAL, field: "density_pop/km2" },
      densityPopMi2: { type: DataTypes.DECIMAL, field: "density_pop/mi2" },
      date: DataTypes.DATE,
      populationSource: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Population",
      indexes: [{ unique: true, fields: ["country"] }],
      tableName: "population_density_by_countries",
    }
  );
  return Population;
};
