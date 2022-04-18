'use strict';
const config = require('config')
const bcrypt = require('bcrypt');

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

    const password = config.get('dimipak.password') + config.get('jwt_secret')

    const hashed = await bcrypt.hash(password, 10).then(hash => hash).catch(err => err)

    await queryInterface.bulkInsert('users', [
        {
          username: 'dimipak',
          password: hashed,
          email: 'jimpak13@gmail.com',
          activated: true
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
