const ProfileController = require('../controllers/ProfileController')

module.exports = (app) => {

    app.get('/profile/active', ProfileController.getActiveProfile)

    app.get('/profile/:id/info', ProfileController.getProfileDetails)

    app.get('/profile/:id/skills', ProfileController.getProfileSkills)

    app.get('/profile/:id/portfolio', ProfileController.getProfilePortfolio)

    app.get('/profile/:id/experience', ProfileController.getProfileExperience)

    app.get('/profile/:id/education', ProfileController.getProfileEducation)

    app.get('/profile/:id/pdf', ProfileController.getPdf)
}
