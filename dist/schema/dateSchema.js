import Joi from "joi";
var dateRegex = /^([0-9]{2})\/?([0-9]{2})\/([0-9]{4})$/;
var dateSchema = Joi.object({
    date: Joi.string().pattern(dateRegex).required()
});
export default dateSchema;
