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

    await queryInterface.bulkInsert('social_networks', [
      {
        profile_id: result.profile_id,
        linkedin: 'https://www.linkedin.com',
        github: 'https://www.github.com',
        stackoverflow: 'https://www.stackoverflow.com'
      }
    ])

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('social_networks', null, {});
  }
};
