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

    await queryInterface.bulkInsert('educations', [
      {
        profile_id: result.profile_id,
        title: 'C++ Essential Training',
        reference: 'Linkedin',
        description: 'Standard Library',
        link: 'https://www.linkedin.com',
        date: '2020'
      },
      {
        profile_id: result.profile_id,
        title: 'Learning Data Visualization D3.js',
        reference: 'Linkedin',
        description: 'SVG Graphics, D3 Models',
        link: 'https://www.linkedin.com',
        date: '2020',
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
  }
};
