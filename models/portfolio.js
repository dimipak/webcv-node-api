'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class portfolio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  portfolio.init({
    portfolio_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    profile_id: {
      type: DataTypes.INTEGER,
      references: {
        tableName: 'profiles'
      },
      key: 'profile_id'
    },
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    technology: DataTypes.STRING,
    customer: DataTypes.STRING,
    image_url: DataTypes.STRING,
    website_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Portfolio',
    tableName: 'portfolios',
    timestamps: false
  });
  return portfolio;
};