'use strict';
const {Profile} = require('../models')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     */

    const result = await Profile.findOne({
      where: {
        username: 'dimipak'
      }
    });

     await queryInterface.bulkInsert('skills', [
       {
         profile_id: result.profile_id,
         name: 'PHP',
         progress: '90',
         description: 'I like php',
         order: 1
       }
     ]);
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
