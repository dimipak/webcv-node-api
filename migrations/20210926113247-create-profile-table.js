'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('profiles', {
      profile_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'users'
          },
          key: 'user_id'
        },
      },
      active: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      first_quote: {
        type: Sequelize.STRING
      },
      second_quote: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING,
      },
      about: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      profile_image: {
        type: Sequelize.STRING
      },
      cover_image: {
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
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('profiles');
  }
};