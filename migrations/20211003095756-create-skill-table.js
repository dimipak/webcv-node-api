'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('skills', {
      skill_id: {
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
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      progress: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      order: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('skills');
  }
};