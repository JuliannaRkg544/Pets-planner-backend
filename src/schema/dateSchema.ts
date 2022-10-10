

import Joi from "joi"


const dateRegex = /^([0-9]{2})\/?([0-9]{2})\/([0-9]{4})$/

const dateSchema = Joi.object({
    date: Joi.string().pattern(dateRegex).required()
})

export default dateSchema