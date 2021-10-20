const GetUserSkillsValidation = require('../validations/GetUserSkillsValidation')
const ProfileRepository = require('../repositories/ProfileRepository')
const ProfileDetailsResource = require('../resources/ProfileDetailsResource')
const ProfileSkillsResource = require('../resources/ProfileSkillsResource')
const response = require('../traits/responses')

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
}

module.exports = new ProfileController;
