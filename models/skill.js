'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Skill.init({
    skill_id: {
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
    progress: DataTypes.INTEGER,
    description: DataTypes.STRING,
    order: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Skill',
    tableName: 'skills',
    timestamps: false
  });
  return Skill;
};