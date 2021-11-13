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
        description: 'Functions\n' +
            'Classes and Objects\n' +
            'Templates\n' +
            'Standard Library\n' +
            'Standard Template Library (STL)',
        link: 'https://www.linkedin.com',
        date: '2020-01-01 00:00:00'
      },
      {
        profile_id: result.profile_id,
        title: 'Learning Data Visualization D3.js',
        reference: 'Linkedin',
        description: 'SVG Graphics\n' +
            'D3 Models',
        link: 'https://www.linkedin.com',
        date: '2020-01-01 00:00:00'
      },
      {
        profile_id: result.profile_id,
        title: 'Learning Vue.js',
        reference: 'Linkedin',
        description: 'Essintial Directices, Options and Tools\n' +
            'Enhancing User Interfaces\n' +
            'Vue Components',
        link: 'https://www.linkedin.com',
        date: '2020-01-01 00:00:00'
      },
      {
        profile_id: result.profile_id,
        title: 'Go Essential Training',
        reference: 'Linkedin',
        description: 'Functions\n' +
            'Object-Oriented\n' +
            'Error Handling\n' +
            'Project Management\n' +
            'Networking',
        link: 'https://www.linkedin.com',
        date: '2020-01-01 00:00:00'
      },
      {
        profile_id: result.profile_id,
        title: 'Learning Vim',
        reference: 'Linkedin',
        description: 'Moving around\n' +
            'Changing Text\n' +
            'Buffers\n' +
            'Configuration',
        link: 'https://www.linkedin.com',
        date: '2020-01-01 00:00:00'
      },
      {
        profile_id: result.profile_id,
        title: 'Learning PHP CodeIgniter',
        reference: 'Lynda.com',
        description: 'MVC\n' +
            'Work with Data, Logs, Forms and Headers\n' +
            'View\n' +
            'Controller\n' +
            'Model',
        link: 'https://www.linkedin.com',
        date: '2018-01-01 00:00:00'
      },
      {
        profile_id: result.profile_id,
        title: 'Python 3 Essential Training',
        reference: 'Lynda.com',
        description: 'Structure Data\n' +
            'Classes\n' +
            'Exceptions\n' +
            'String Objects\n' +
            'File I/O\n' +
            'Build-in Functions\n' +
            'Modules\n' +
            'Databases',
        link: 'https://www.linkedin.com',
        date: '2018-01-01 00:00:00'
      },
      {
        profile_id: result.profile_id,
        title: 'Creating an HTML5 Banner Ad with GreenSock (GSAP)',
        reference: 'Lynda.com',
        description: 'Setting Up the Ad Layout with HTML and CSS\n' +
            'Animating the Ad with GSAP',
        link: 'https://www.linkedin.com',
        date: '2017-01-01 00:00:00'
      },
      {
        profile_id: result.profile_id,
        title: 'Building a Web Interface with React.js',
        reference: 'Lynda.com',
        description: 'React Fundamentals\n' +
            'Adding Items\n' +
            'Sorting and Searching',
        link: 'https://www.linkedin.com',
        date: '2017-01-01 00:00:00'
      },
      {
        profile_id: result.profile_id,
        title: 'AUTOMATISM',
        reference: 'Technological Educational Institute of Piraeus',
        description: 'Computer Programming\n' +
            'Electronic Engineering\n' +
            'Digital Systems\n' +
            'Automatic Control Systems\n' +
            'Industrial Automation\n' +
            'Computer Networks\n' +
            'Microprocessors\n' +
            'Robotics\n' +
            'Industrial Controllers\n' +
            'Computational Intelligence\n' +
            'Mechatronics',
        link: 'https://www.linkedin.com',
        date: '2009-01-01 00:00:00'
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
