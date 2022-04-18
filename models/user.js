'use strict';
const {
  Model
} = require('sequelize');
const config = require("config");
const bcrypt = require("bcrypt");
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
    activated: DataTypes.BOOLEAN,
    password: {
      type: DataTypes.STRING,
      set(value) {
        const password = value + config.get('jwt_secret')
        const hashed = bcrypt.hashSync(password, 10)
        this.setDataValue('password', hashed)
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false
  });
  return User;
};