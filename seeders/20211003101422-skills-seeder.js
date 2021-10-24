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
         description: 'PHP is my main language when it comes to web development',
         order: 1
       },
       {
         profile_id: result.profile_id,
         name: 'C / C++',
         progress: '70',
         description: 'Using C and C++ for developing firmware on IoT',
         order: 2
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
