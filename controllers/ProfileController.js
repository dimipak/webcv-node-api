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
        const profileId = req.params.id

        // Get html mapper
        const html = fs.readFileSync("./html/cv.html", "utf8");

        // Set pdf options
        const options = {
            width: "300mm",
            height: "400mm"
        }

        const profileDetails = await ProfileRepository.getProfile(profileId)

        const skills = await ProfileRepository.getSkills(profileId)

        const experiences = await ProfileRepository.getExperiences(profileId)

        const educations = await ProfileRepository.getEducations(profileId);

        const image = await axios.get(profileDetails.profile_image, {responseType: 'arraybuffer'});

        const imgB64 = Buffer.from(image.data).toString('base64');

        const document = {
            html,
            data: {
                profile: profileDetails.toJSON(),
                skills,
                experiences: experiences.map((node) => {
                    let exp = node.toJSON()

                    if (exp["start_date"] !== undefined) {
                        const date = new Date(exp["start_date"])
                        const year = date.getFullYear()
                        const month = date.getMonth() + 1

                        exp["start_date"] = month + '/' + year
                    }

                    if (exp["end_date"] !== undefined) {
                        const date = new Date(exp["end_date"])
                        const year = date.getFullYear()
                        const month = date.getMonth() + 1

                        exp["end_date"] = exp["end_date"] == null ? 'Current' : month + '/' + year
                    }

                    return exp
                }),
                educations: educations.map((node) => {
                    let edu = node.toJSON()

                    if (edu["date"] !== undefined) {
                        const date = new Date(edu["date"])
                        edu["date"] = date.getFullYear()
                    }

                    return edu
                }),
                image: "data:image/jpeg;base64," + imgB64
            },
            path: "./tmp/temp.pdf",
            type: ""
        }

        pdf.create(document, options)
            .then((fileRes) => {
                res.setHeader('Content-disposition', 'attachment; filename=temp.pdf')
                res.setHeader('Content-type', 'application/pdf')
                res.download(fileRes.filename)
            })
            .catch((error) => {
                console.error(error);
                response.error(res, error.message)
            });
    }
}

module.exports = new ProfileController;
