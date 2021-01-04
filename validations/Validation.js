const Joi = require('joi')

class Validation
{
    validate(req, res) {
        this.req = req;
        this.res = res;

        this.methodValidation().schema(this.rules());
    }

    schema(rules) {
        let schemaData = {};
        let validateData = {};

        Object.keys(rules).map(key => {
            schemaData[key] = rules[key].rule
            validateData[key] = rules[key].value
        })

        const schema = Joi.object(schemaData)

        const result = schema.validate(validateData)

        if (result.error) {
            this.res.status(400).json({
                'error': result.error.details[0].message
            })
        }
    }

    methodValidation() {
        if (typeof this.methods === 'function') {
            if (!this.methods().includes(this.req.method)) {
                this.res.status(400).json({
                    'error': 'This method does not apply for this endpoint.'
                })
            }
        }

        return this;
    }
}

module.exports = Validation;