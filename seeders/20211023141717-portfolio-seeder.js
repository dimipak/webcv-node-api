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
        type: 'Business',
        technology: 'Wordpress',
        customer: 'Company',
        image_url: 'https://dimipak.gr/img/correct.a80f3081.jpg',
        website_url: 'https://www.correctproductions.com/'
      },
      {
        profile_id: result.profile_id,
        name: 'GiaSite',
        type: 'Business',
        technology: 'CodeIgniter',
        customer: 'Company',
        image_url: 'https://dimipak.gr/img/giasite.ea173165.jpg',
        website_url: 'https://www.giasite.gr'
      },
      {
        profile_id: result.profile_id,
        name: 'Natasha Triantafylli',
        type: 'CV',
        technology: 'Wordpress',
        customer: 'Personal',
        image_url: 'https://dimipak.gr/img/triantafylli.4acc6ac1.jpg',
        website_url: 'https://www.natashatriantafylli.com'
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
