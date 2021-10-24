const GetUserSkillsValidation = require('../validations/GetUserSkillsValidation')
const ProfileRepository = require('../repositories/ProfileRepository')
const ProfileDetailsResource = require('../resources/ProfileDetailsResource')
const ProfileSkillsResource = require('../resources/ProfileSkillsResource')
const response = require('../traits/responses')
const ProfilePortfolioResource = require('../resources/ProfilePortfolioResource')
const ProfileExperienceResource = require('../resources/ProfileExperienceResource')
const ProfileEducationResource = require('../resources/ProfileEducationResource')

class ProfileController {

    async getActiveProfile(req, res) {

        // Repository
        const data = await ProfileRepository.getActiveProfile(req, res);

        // Empty Response
        if (data === null) {
            response.notFound(res, data);
            return;
        }

        // Error Response
        if (data.error === true) {
            console.log(data.message)
            response.error(res, data.message.parent.code);
            return;
        }

        // Success Response
        response.success(res, {
            'profile_id': data.profile_id,
            'username': data.username,
            'active': data.active
        });
    }

    async getProfileDetails(req, res) {

        // Repository
        const data = await ProfileRepository.ProfileDetails(req, res);

        // Empty Response
        if (data === null) {
            response.notFound(res, data);
            return;
        }

        // Error Response
        if (data.error === true) {
            response.error(res, data.message.parent.code);
            return;
        }

        // Success Response
        response.success(res, ProfileDetailsResource.response(res, data));

    }

    async getProfileSkills(req, res) {

        // Repository
        const data = await ProfileRepository.ProfileSkills(req, res);

        // Empty Response
        if (data === null) {
            response.notFound(res, data);
            return;
        }

        // Error Response
        if (data.error === true) {
            response.error(res, data.message.parent.code);
            return;
        }

        // Success Response
        response.success(res, ProfileSkillsResource.response(res, data));
    }

    async getProfilePortfolio(req, res)
    {
        const data = await ProfileRepository.ProfilePortfolio(req, res)

        // Empty Response
        if (data === null) {
            response.notFound(res, data);
            return;
        }

        // Error Response
        if (data.error === true) {
            response.error(res, data.message.parent.code);
            return;
        }

        // Success Response
        response.success(res, ProfilePortfolioResource.response(res, data));
    }

    async getProfileExperience(req, res)
    {
        const data = await ProfileRepository.ProfileExperience(req, res)

        // Empty Response
        if (data === null) {
            response.notFound(res, data);
            return;
        }

        // Error Response
        if (data.error === true) {
            response.error(res, data.message.parent.code);
            return;
        }

        // Success Response
        response.success(res, ProfileExperienceResource.response(res, data));
    }

    async getProfileEducation(req, res)
    {
        const data = await ProfileRepository.ProfileEducation(req, res)

        // Empty Response
        if (data === null) {
            response.notFound(res, data);
            return;
        }

        // Error Response
        if (data.error === true) {
            response.error(res, data.message.parent.code);
            return;
        }

        // Success Response
        response.success(res, ProfileEducationResource.response(res, data));
    }
}

module.exports = new ProfileController;
