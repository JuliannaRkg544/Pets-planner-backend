import Joi from "joi"
import { PetData } from "../repositories/petRepository"

const genreType = ['macho','femea']
const dateRegex = /^([0-9]{2})\/?([0-9]{2})\/([0-9]{4})$/

export const petsSchema = Joi.object<PetData>({
    name: Joi.string().required(),
    birthdate: Joi.string().pattern(dateRegex),
    genre: Joi.string().valid('macho','femea').required(),
    breed: Joi.string().required()
})