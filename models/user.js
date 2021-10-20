'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Profile, {
        foreignKey: 'user_id',
        as: 'profiles',
        onDelete: 'CASCADE'
      })
    }
  };
  User.init({
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    activate_key: DataTypes.STRING,
    recovery_key: DataTypes.STRING,
    activated: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false
  });
  return User;
};