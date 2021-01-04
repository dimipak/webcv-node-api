const {Sequelize} = require('sequelize')
const config = require('config')

const sequelize = new Sequelize(
    config.get('database.mysql.database'),
    config.get('database.mysql.user'),
    config.get('database.mysql.password'),
    {
        dialect: 'mysql',
        host: config.get('database.mysql.host')
    }
);

module.exports = sequelize;