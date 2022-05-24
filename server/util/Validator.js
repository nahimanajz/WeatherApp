const Joi = require('joi')
class Validate {
    weatherInfo(data) {
        const validator = require('express-joi-validation').createValidator({})
        const schema = Joi.object({
            region: Joi.string().required(),
            degrees: Joi.number().max(30),
            measure: Joi.string().optional()
        })
        return validator.body(schema);
    }
}
export default new Validate();