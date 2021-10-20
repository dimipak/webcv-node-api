'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('social_networks', {
      social_network_id: {
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
      linkedin: {
        type: Sequelize.STRING
      },
      github: {
        type: Sequelize.STRING
      },
      stackoverflow: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('social_networks');
  }
};