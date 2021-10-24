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

    await queryInterface.bulkInsert('experiences', [
      {
        profile_id: result.profile_id,
        company_name: 'Correct Creative Productions',
        role: 'Web Developer - IT',
        description: 'Creating Websites for customers (Wordpress)',
        country: 'Greece',
        city: 'Athens',
        start_date: '2017-09-01 00:00:00',
        end_date: '2019-10-01 00:00:00'
      },
      {
        profile_id: result.profile_id,
        company_name: 'RoadCube',
        role: 'Back end Developer',
        description: 'Used custom PHP for managing Loyalty Digital Platform',
        country: 'Greece',
        city: 'Athens',
        start_date: '2019-10-01 00:00:00',
        end_date: '2021-11-01 00:00:00'
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
