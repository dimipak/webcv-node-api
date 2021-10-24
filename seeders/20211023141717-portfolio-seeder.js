'use strict';

const {Profile} = require("../models");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    const result = await Profile.findOne({
      where: {
        username: 'dimipak'
      }
    });

    await queryInterface.bulkInsert('portfolios', [
        {
          profile_id: result.profile_id,
          name: 'Correct Creative Productions',
          type: 'Company',
          technology: 'Wordpress',
          customer: 'Company',
          image_url: 'https://picsum.photos/400/1500',
          website_url: 'https://www.example.com'
        },
        {
          profile_id: result.profile_id,
          name: 'GiaSite',
          type: 'Company',
          technology: 'CodeIgniter',
          customer: 'Company',
          image_url: 'https://picsum.photos/400/1500',
          website_url: 'https://www.example.com'
        }
      ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */

    await queryInterface.bulkDelete('portfolios', null, {});
  }
};
