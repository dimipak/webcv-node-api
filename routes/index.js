const profile = require('./profile')
const webhook = require('./webhook')

module.exports = function(app) {

    profile(app);

    webhook(app);
}