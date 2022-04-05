const { Profile , Skill, Experience, Education} = require('../models')

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
        include: {
            association: 'profileSkills',
            separate: true,
            order: [
                ['order', 'asc']
            ]
        }
    }).catch(err => {
        return {
            'error': true,
            'message': err
        }
    });

}

module.exports.getProfile = async (profileId) => {

    return await Profile.findOne({
        where: {
            profile_id: profileId
        }
    })
}

module.exports.getSkills = async (profileId) => {

    return await Skill.findAll({
        where: {
            profile_id: profileId
        },
        raw: true
    })
}

module.exports.getExperiences = async (profileId) => {

    return await Experience.findAll({
        where: {
            profile_id: profileId
        }
    })
}

module.exports.getEducations = async (profileId) => {

    return await Education.findAll({
        where: {
            profile_id: profileId
        }
    })
}

module.exports.ProfilePortfolio = (req, res) => {

    return Profile.findOne({
        where: {
            active: true
        },
        include: [
            'portfolios'
        ],
    }).catch(err => {
        return {
            'error': true,
            'message': err
        }
    });

}

module.exports.ProfileExperience = (req, res) => {

    return Profile.findOne({
        where: {
            active: true
        },
        include: [
            'experiences'
        ],
    }).catch(err => {
        return {
            'error': true,
            'message': err
        }
    });

}

module.exports.ProfileEducation = (req, res) => {

    return Profile.findOne({
        where: {
            active: true
        },
        include: [
            'educations'
        ],
    }).catch(err => {
        return {
            'error': true,
            'message': err
        }
    });

}
