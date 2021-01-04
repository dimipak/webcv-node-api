const Joi = require('joi')
const Validation = require('./Validation')

class GetUserSkillsValidation extends Validation {

    methods() {
        return [
            'GET'
        ]
    }

    rules() {
        return {
            id: {
                rule: Joi.number().integer().min(1).max(10).required(),
                value: this.req.params.id
            }
        }
    }
}

module.exports = new GetUserSkillsValidation();