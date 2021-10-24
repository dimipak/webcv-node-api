'use strict';

const {User} = require('../models')
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
    
    const result = await User.findOne({
      where: {
        username: 'dimipak'
      }
    })

    await queryInterface.bulkInsert('profiles', [
      {
        user_id: result.user_id,
        active: true,
        username: "dimipak",
        first_name: "Dimitris",
        last_name: "Pakos",
        first_quote: "Hello and welcome to my personal website",
        second_quote: "#webapps #backend #restAPI #IoT",
        email: "jimpak13@gmail.com",
        phone: "6984172841",
        about: "Programming is my passion. I love writing code and when i am not, i truly miss it. I started by myself watching lessons on the internet mainly at lynda.com and later on at linkedin learning. I have learned a lot in the past years in both work and personal experience. I always try to be up to date with new technologies that come up every day. I found myself enjoying better being a backend developer using various languages but frontend is something that does not go without notice. I am a teamwork player, cooperative and i always take responsibilities without any hesitation. I am keen on writing clean and readable code as much as possible. If i am not coding, i like to work out in the gym or watch movies.",
        profile_image: 'https://picsum.photos/200',
        cover_image: 'https://picsum.photos/1200/500'
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

    await queryInterface.bulkDelete('profiles', null, {})
  }
};
