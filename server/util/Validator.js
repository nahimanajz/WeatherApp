import joi from "joi";
class Validate {
    weatherInfo(data) {
        const schema = {
            region: joi.unique().required().string(),
            degrees: joi.required().integer().max(30),
            measure: joi.required().string().optional(),

        }
        return joi.validate(data, schema);
    }
}
export default new Validate();