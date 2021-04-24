"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CostOfLiving extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CostOfLiving.init(
    {
      country: { type: DataTypes.STRING, allowNull: false },
      costOfLivingIndex: DataTypes.DECIMAL,
      costOfLivingIndex: DataTypes.DECIMAL,
      rentIndex: DataTypes.DECIMAL,
      costOfLivingPlusRentIndex: DataTypes.DECIMAL,
      groceriesIndex: DataTypes.DECIMAL,
      restaurantPriceIndex: DataTypes.DECIMAL,
      localPurchasingPowerIndex: DataTypes.DECIMAL,

    },
    {
      sequelize,
      modelName: "CostOfLiving",
      tableName: "cost_of_living_index_by_country_2020",
      indexes: [{ unique: true, fields: ["country"] }],
    }
  );
  return CostOfLiving;
};
