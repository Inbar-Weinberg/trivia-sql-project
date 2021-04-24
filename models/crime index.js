"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CrimeIndex extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CrimeIndex.init(
    {
      country: { type: DataTypes.STRING, allowNull: false },
      crimeIndex: DataTypes.DECIMAL,
      safetyIndex: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "CrimeIndex",
      tableName: "crime_index_by_countries_2020",
      indexes: [{ unique: true, fields: ["country"] }],

    }
  );
  return CrimeIndex;
};
