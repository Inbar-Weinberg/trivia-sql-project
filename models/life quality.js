"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class LifeQuality extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LifeQuality.init(
    {
      country: DataTypes.STRING,
      qualityOfLifeIndex: DataTypes.DECIMAL,
      purchasingPowerIndex: DataTypes.DECIMAL,
      safetyIndex: DataTypes.DECIMAL,
      healthCareIndex: DataTypes.DECIMAL,
      costOfLivingIndex: DataTypes.DECIMAL,
      propertyPriceToIncomeRatio: DataTypes.DECIMAL,
      trafficCommuteTimeIndex: DataTypes.DECIMAL,
      pollutionIndex: DataTypes.DECIMAL,
      climateIndex: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "LifeQuality",
      tableName: "quality_of_life_index_by_countries_2020",
      indexes: [{ unique: true, fields: ["country"] }],
    }
  );
  return LifeQuality;
};
