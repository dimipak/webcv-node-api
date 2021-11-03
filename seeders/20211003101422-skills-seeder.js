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
         name: 'Laravel / CodeIgniter',
         progress: '90',
         description: 'My favorite php frameworks. Both of them having a lot of experience',
         order: 2
       },       {
         profile_id: result.profile_id,
         name: 'MySQL / Postgres / Redis',
         progress: '80',
         description: 'While i used MySQL most of the times Postgres seems a lot more interesting and a more advanced database',
         order: 3
       },
       {
         profile_id: result.profile_id,
         name: 'Docker / Vagrant',
         progress: '90',
         description: 'Docker when it comes with Vagrant is a powerful combination when working with different OS',
         order: 4
       },
       {
         profile_id: result.profile_id,
         name: 'Go',
         progress: '50',
         description: 'Powerful API server currently developing at home but soon enough will be used for a job project',
         order: 5
       },
       {
         profile_id: result.profile_id,
         name: 'C / C++',
         progress: '80',
         description: 'Using C and C++ for developing firmware on IoT',
         order: 6
       },       {
         profile_id: result.profile_id,
         name: 'RestFul APIs / SOAP / ERP',
         progress: '90',
         description: 'Integrate advanced functions and features into apps',
         order: 7
       },
       {
         profile_id: result.profile_id,
         name: 'Vue / Vuex',
         progress: '90',
         description: 'Vue is my comfort and fun front end framework',
         order: 8
       },       {
         profile_id: result.profile_id,
         name: 'Wordpress',
         progress: '90',
         description: 'Wordpress is the CMS that i have worked the most',
         order: 9
       },
       {
         profile_id: result.profile_id,
         name: 'HTML / CSS / SASS / Javascript / JQuery',
         progress: '90',
         description: 'Working with or without libraries gives the same excitement to me',
         order: 10
       },       {
         profile_id: result.profile_id,
         name: 'Photoshop',
         progress: '70',
         description: 'When i want to create some visuals for websites or a HTML5 animation banner Ad',
         order: 11
       },
       {
         profile_id: result.profile_id,
         name: 'Linux Debian - RedHat',
         progress: '90',
         description: 'Worked with many variants of both distributions. Very Familiar with Linux terminal and server scripting',
         order: 12
       },       {
         profile_id: result.profile_id,
         name: 'Node JS',
         progress: '90',
         description: 'I have used and developed Node API server',
         order: 13
       },
       {
         profile_id: result.profile_id,
         name: 'Apache / Nginx',
         progress: '70',
         description: 'Even though Apache is more common than Nginx i have worked with both technologies',
         order: 14
       },
       {
         profile_id: result.profile_id,
         name: 'MAC / Linux / Windows',
         progress: '90',
         description: 'Started as Windows user. Went through for many to years to linux. Currently working on mac',
         order: 15
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
