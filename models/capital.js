"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Capital extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Capital.init(
    {
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capital: DataTypes.STRING,
      continent: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Capital",
      tableName: "capitals",
      indexes: [{ unique: true, fields: ["country"] }],
    }
  );
  return Capital;
};
