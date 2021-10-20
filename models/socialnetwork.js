'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SocialNetwork extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SocialNetwork.init({
    social_network_id: {
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
    linkedin: DataTypes.STRING,
    github: DataTypes.STRING,
    stackoverflow: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SocialNetwork',
    tableName: 'social_networks',
    timestamps: false
  });
  return SocialNetwork;
};