const UserModel = require('../models/UserModel')
const GetUserDetailsResource = require('../resources/GetUserDetailsResource')
const UserSkillsModel = require('../models/UserSkillsModel')
const GetUserSkillsResource = require('../resources/GetUserSkillsResource')
const response = require('../traits/responses')

module.exports.UserDetails = (req, res) => {

    return UserModel.findOne({where: {user_id: req.params.id}})
        .then(result => result)
        .catch(err => response.error(res, err));
}

module.exports.UserSkills = (req, res) => {
    UserSkillsModel.findAll({
        where: {
            user_id: req.params.id
        }
    })
        .then(result => {

            if (result.length === 0) res.status(404).json({'error': 'not found'});

            GetUserSkillsResource.response(res, result);

        })
        .catch(err => {

            res.status(404).json({
                'error': 'not found',
                'message': err
            })

        })
}
