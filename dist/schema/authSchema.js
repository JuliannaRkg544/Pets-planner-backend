import Joi from "joi";
// import { UserData } from "../repository/authRepository.js";
export var authSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
    passwordConfirmation: Joi.valid(Joi.ref('password'))
});
