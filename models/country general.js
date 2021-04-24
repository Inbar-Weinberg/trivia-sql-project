"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CountryGeneral extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CountryGeneral.init(
    {
      country: { type: DataTypes.STRING, allowNull: false },
      phonesPer1000: { type: DataTypes.DECIMAL, field: 'phones_per_1000' },
    },
    {
      sequelize,
      modelName: "CountryGeneral",
      tableName: "countries_general",
      indexes: [{ unique: true, fields: ["country"] }],
    }
  );
  return CountryGeneral;
};
