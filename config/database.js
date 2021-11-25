require('dotenv').config({path: `${process.cwd()}/.env.production`});
const config = require('config')

module.exports = {
  "development": {
    "username": config.get('database.mysql_user'),
    "password": config.get('database.mysql_pass'),
    "database": config.get('database.mysql_db'),
    "host": config.get('database.mysql_host'),
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": config.get('database.mysql_user'),
    "password": config.get('database.mysql_pass'),
    "database": config.get('database.mysql_db'),
    "host": config.get('database.mysql_host'),
    "dialect": "mysql"
  }
}