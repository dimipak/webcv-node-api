'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.hasMany(models.Skill, {
        foreignKey: 'profile_id',
        as: 'profileSkills',
        onDelete: 'CASCADE'
      })

      Profile.hasOne(models.SocialNetwork, {
        foreignKey: 'profile_id',
        as: 'socialNetworks',
        onDelete: 'CASCADE'
      })

    }
  }
  Profile.init({
    profile_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    user_id: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN,
    username: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    first_quote: DataTypes.STRING,
    second_quote: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    about: DataTypes.TEXT,
    profile_image: DataTypes.STRING,
    cover_image: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Profile',
    tableName: 'profiles',
    timestamps: false
  });

  return Profile;
};