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
        company_name: 'RoadCube',
        role: 'Back end Developer',
        description: 'Used custom PHP for managing Loyalty Digital Platform\n' +
            'Member of the team created RestAPI for internal and external use, with Laravel as backend\n' +
            'Docker and Vagrant for team working\n' +
            'Created and managed IoT for business using C/C++ language communicating with Laravel and Go API\n' +
            'Member of the team creating Go API for mobile usage\n' +
            'Worked on NodeJs API\n' +
            'Used Vue Js as front end\n' +
            'Managed Linux Server and making sure is up to date on a daily bases',
        country: 'Greece',
        city: 'Athens',
        start_date: '2019-10-01 00:00:00',
        end_date: null
      },
      {
        profile_id: result.profile_id,
        company_name: 'Correct Creative Productions',
        role: 'Web Developer - IT',
        description: 'Creating Websites for customers (Wordpress)\n' +
            'Creating Websites for Company (Wordpress, CodeIgniter)\n' +
            'Creating Banner Ads in multiple dimensions and for multiple platforms (Sizmek, Google Platform, Adman). Using mainly “GSAP”(javascript) for animation or “animation.css”\n' +
            'Be responsible for running computers (Windows-Mac) and server in the company in order and in a smooth way. (Local Network, Server - NAS - BACKUP SERVER)\n' +
            'Be responsible for hosting server (Bluehost - Cpanel), Websites (Backup - UpToDate), Emails (Receive - Send issues)\n' +
            'Digital Archiving on old Hard disks in a correct and an -easy to find- way',
        country: 'Greece',
        city: 'Athens',
        start_date: '2017-09-01 00:00:00',
        end_date: '2019-10-01 00:00:00'
      },
      {
        profile_id: result.profile_id,
        company_name: 'Restaurant, Chiltern Firehouse',
        role: 'Runner-Waiter',
        description: 'Assisted diners with obtaining food from buffet/serving table as needed.\n' +
            'Took food orders and relayed orders to kitchens or serving counters.\n' +
            'Trained new employees.\n' +
            'Guided guests through menus while demonstrating thorough knowledge of the food, beverages and ingredients.\n' +
            'Provided excellent service on supervising Private Events in the PDR',
        country: 'UK',
        city: 'London',
        start_date: '2015-04-01 00:00:00',
        end_date: '2017-03-01 00:00:00'
      },
      {
        profile_id: result.profile_id,
        company_name: 'Restaurant, Kazarma',
        role: 'Waiter',
        description: 'Summer Seasonal work as a waiter\n' +
            'Precisely described menu items and special offerings and appropriately identified wine pairings\n' +
            'Assisted on the menu construction and the website of the new restaurant promoting through social media',
        country: 'Greece',
        city: 'Mykonos',
        start_date: '2014-06-01 00:00:00',
        end_date: '2014-10-01 00:00:00'
      },
      {
        profile_id: result.profile_id,
        company_name: 'Restaurant, Nammos',
        role: 'Waiter',
        description: 'Summer Seasonal work as a waiter\n' +
            'Precisely described menu items and special offerings and appropriately identified wine pairings',
        country: 'Greece',
        city: 'Mykonos',
        start_date: '2014-04-01 00:00:00',
        end_date: '2014-06-01 00:00:00'
      },
      {
        profile_id: result.profile_id,
        company_name: 'Greek Army',
        role: 'Military Officer',
        description: 'Supervised all logistical functions supporting a battalion of 120 Army Reserve Soldiers\n' +
            'Prepared daily, weekly and monthly situational reports for higher headquarters.\n' +
            'Identified and resolved equipment shortages\n' +
            'Trained 5 personnel on basic router configurations and LAN switch troubleshooting\n' +
            'Performed as a fire team member during situational training exercises and all infantry dismounted battle drills\n' +
            'Communicated urgent orders and directions effectively to team of 5 personnel\n' +
            'Tracked and filed administrative paperwork and personnel folders',
        country: 'Greece',
        city: '',
        start_date: '2013-05-01 00:00:00',
        end_date: '2014-02-01 00:00:00'
      },
      {
        profile_id: result.profile_id,
        company_name: 'Tuition School, Stamatis Tsetos',
        role: 'ECDL Tutor',
        description: 'Teaching ECDL for children ages between 11 and 15 years old\n' +
            'Responsibly for children progress learning ECDL\n' +
            'Responsible for ECDL exams in school facilities. Making sure server and computers of examined are working correctly',
        country: 'Greece',
        city: 'Athens',
        start_date: '2011-10-01 00:00:00',
        end_date: '2013-09-01 00:00:00'
      },
      {
        profile_id: result.profile_id,
        company_name: 'Hellenic American Union',
        role: 'Post office crew',
        description: 'Being a part of a crew assembling posts to be send to customers the company',
        country: 'Greece',
        city: 'Athens',
        start_date: '2009-10-01 00:00:00',
        end_date: '2011-09-01 00:00:00'
      },
      {
        profile_id: result.profile_id,
        company_name: 'Liqueur Store, John Pakos',
        role: 'Employer',
        description: 'Cashier\n' +
            'Responsible in warehouse products coming at store\n' +
            'Talking with customers and helping them choosing what they want',
        country: 'Greece',
        city: 'Athens',
        start_date: '2007-10-01 00:00:00',
        end_date: '2009-09-01 00:00:00'
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
