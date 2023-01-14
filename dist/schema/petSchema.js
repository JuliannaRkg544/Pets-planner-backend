import Joi from "joi";
var genreType = ['macho', 'femea'];
var dateRegex = /^([0-9]{2})\/?([0-9]{2})\/([0-9]{4})$/;
export var petsSchema = Joi.object({
    name: Joi.string().required(),
    birthdate: Joi.string().pattern(dateRegex),
    genre: Joi.string().valid('macho', 'femea', 'Macho', 'Fêmea', 'Femea').required(),
    breed: Joi.string().required(),
    isCat: Joi.boolean(),
    isDog: Joi.boolean()
});
