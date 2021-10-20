const Joi = require('joi')
const Validation = require('./Validation')

class GetUserDetailsValidation extends Validation {


    methods() {
        return [
            'GET'
        ];
    }

    rules() {
        return {
            id: {
                rule: Joi.required(),
                value: this.req.params.id
            }
        }
    }
}

module.exports = new GetUserDetailsValidation();
