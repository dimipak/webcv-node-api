const GetUserDetailsValidation = require('../validations/GetUserDetailsValidation')
const GetUserSkillsValidation = require('../validations/GetUserSkillsValidation')
const UserRepository = require('../repositories/UserRepository')
const GetUserSkillsResource = require('../resources/GetUserSkillsResource')
const GetUserDetailsResource = require('../resources/GetUserDetailsResource')
const response = require('../traits/responses')

class UserController {

    async getUserDetails(req, res) {

        // Validation
        GetUserDetailsValidation.validate(req, res);

        // Repository
        const data = await UserRepository.UserDetails(req, res).then(result => result).catch(err => response.error(res, err));

        // Empty Response
        if (data === null) response.notFound(res, data);

        // Response
        response.success(res, GetUserDetailsResource.response(res, data));
    }

    getUserSkills(req, res) {

        // Validation
        GetUserSkillsValidation.validate(req, res);

        // Repository
        UserRepository.UserSkills(req, res);
    }
}

module.exports = new UserController;
