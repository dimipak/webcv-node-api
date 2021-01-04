const Sequelize = require('sequelize')
const sequelize = require('../utils/database')


const UserModel = sequelize
    .define(
        'user',
        {
            user_id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            username: {
                type: Sequelize.STRING
            },
            name: {
                type: Sequelize.STRING
            },
            surname: {
                type: Sequelize.STRING
            },
            quote: {
                type: Sequelize.STRING
            },
            quote2: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            phone: {
                type: Sequelize.STRING
            },
            about: {
                type: Sequelize.TEXT
            }
        })

module.exports = UserModel;