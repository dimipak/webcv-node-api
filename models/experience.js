'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Experience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Experience.init({
    experience_id: {
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
    company_name: DataTypes.STRING,
    role: DataTypes.STRING,
    description: {
      type: DataTypes.TEXT,
      get() {
        const rawValue = this.getDataValue('description')
        return rawValue ? rawValue.split('\n') : null
      }
    },
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Experience',
    tableName: 'experiences',
    timestamps: false
  });
  return Experience;
};