const ProfileController = require('../controllers/ProfileController')

module.exports = (app) => {

    app.get('/profile/active', ProfileController.getActiveProfile)

    app.get('/profile/:id/info', ProfileController.getProfileDetails)

    app.get('/profile/:id/skills', ProfileController.getProfileSkills)

}
