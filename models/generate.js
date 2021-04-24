"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Generate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Generate.init(
    {
      type: DataTypes.INTEGER,
      template: DataTypes.STRING,
      column: DataTypes.STRING,
      max: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Generate",
      tableName: "Generator",
      validate: {
        typeOneHasMax() {
          if (type === 1 && typeof max !== "boolean")
            throw new Error(
              "All type 1 question need to have a max or min attribute"
            );
        },
      },
    }
  );
  return Generate;
};
