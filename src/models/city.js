'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  City.init({
   name: {
        type: DataTypes.STRING,
        allowNull: false, // Add this line to make the attribute non-nullable
        unique: true,
   }
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};