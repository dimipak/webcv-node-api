const Sequelize = require('sequelize')
const sequelize = require('../utils/database')
const User = require('./UserModel')

const UserSkills = sequelize
    .define(
        'user_skill',
        {
            user_skill_id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            user_id: {
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING
            },
            progress: {
                type: Sequelize.INTEGER
            },
            description: {
                type: Sequelize.STRING
            },
            order: {
                type: Sequelize.INTEGER
            }
        },
        {
            tableName: 'user_skills'
        }
    )

UserSkills.belongsTo(User, {
    foreignKey: 'user_id',
})

module.exports = UserSkills;