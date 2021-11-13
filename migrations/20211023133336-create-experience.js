'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('experiences', {
      experience_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      profile_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'profiles'
          },
          key: 'profile_id'
        },
        allowNull: false
      },
      company_name: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      country: {
        type: Sequelize.STRING,
        allowNull: true
      },
      city: {
        type: Sequelize.STRING,
        allowNull: true
      },
      start_date: {
        type: Sequelize.DATE,
        allowNull: null
      },
      end_date: {
        type: Sequelize.DATE,
        allowNull: true
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('experiences');
  }
};