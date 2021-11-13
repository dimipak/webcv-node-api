const GetUserSkillsValidation = require('../validations/GetUserSkillsValidation')
const ProfileRepository = require('../repositories/ProfileRepository')
const ProfileDetailsResource = require('../resources/ProfileDetailsResource')
const ProfileSkillsResource = require('../resources/ProfileSkillsResource')
const response = require('../traits/responses')
const ProfilePortfolioResource = require('../resources/ProfilePortfolioResource')
const ProfileExperienceResource = require('../resources/ProfileExperienceResource')
const ProfileEducationResource = require('../resources/ProfileEducationResource')

const pdf = require("pdf-creator-node");
const fs = require("fs");

const axios = require('axios')

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
        const data = await ProfileRepository.ProfileDetails(req, res)

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

    async getPdf(req, res)
    {
        // Get html mapper
        const html = fs.readFileSync("./html/cv.html", "utf8");

        // Set pdf options
        const options = {
            width: "300mm",
            height: "500mm"
        }

        const profileDetails = await ProfileRepository.ProfileDetails(req, res)

        const activeProfile = await ProfileRepository.getActiveProfile(req, res)

        const skills = await ProfileRepository.getSkills(activeProfile.profile_id)

        const experiences = await ProfileRepository.getExperiences(activeProfile.profile_id)

        const image = await axios.get(profileDetails.profile_image, {responseType: 'arraybuffer'});
        const imgB64 = Buffer.from(image.data).toString('base64');

        const document = {
            helper:[
                {
                    name: "list",
                    function: function(paragraph, options) {
                        return options.fn(paragraph.split('\n'))
                    }
                }
            ],
            html: html,
            data: {
                skills,
                experiences,
                about: profileDetails.about,
                image: "data:image/jpeg;base64," + imgB64
            },
            path: "./tmp/temp.pdf",
            type: ""
        }

        pdf.create(document, options)
            .then((ress) => {
                console.log('success')
                res.setHeader('Content-disposition', 'attachment; filename=temp.pdf')
                res.setHeader('Content-type', 'application/pdf')
                res.download(ress.filename)
            })
            .catch((error) => {
                console.error(error);
                response.error(res, error.message)
            });
    }
}

module.exports = new ProfileController;
