"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ConcatData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ConcatData.init(
    {
      country: DataTypes.STRING,
      capital: DataTypes.STRING,
      continent: DataTypes.STRING,
      areaKm2: { type: DataTypes.DECIMAL, field: "area_km2" },
      population: DataTypes.INTEGER,
      densityPopKm2: { type: DataTypes.DECIMAL, field: "density_pop_km2" },
      phonesPer1000: { type: DataTypes.DECIMAL, field: "phones_per_1000" },
      restaurantPriceIndex: DataTypes.DECIMAL,
      crimeIndex: DataTypes.DECIMAL,
      qualityOfLifeIndex: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "ConcatData",
      tableName: "concat_data",
    }
  );
  return concatData;
};
