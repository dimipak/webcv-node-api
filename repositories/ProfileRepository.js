const {Profile} = require('../models')

module.exports.getActiveProfile = (req, res) => {
    return Profile.findOne({
        where: {
            active: true
        }
    }).catch(err => {
        return {
            'error': true,
            'message': err
        }
    });
}

module.exports.ProfileDetails = (req, res) => {

    return Profile.findOne({
        where: {
            profile_id: req.params.id
        },
        include: [
            'socialNetworks'
        ],
    }).catch(err => {
        return {
            'error': true,
            'message': err
        }
    });
}

module.exports.ProfileSkills = (req, res) => {

    return Profile.findOne({
        where: {
            active: true
        },
        include: [
            'profileSkills'
        ],
    }).catch(err => {
        return {
            'error': true,
            'message': err
        }
    });

}