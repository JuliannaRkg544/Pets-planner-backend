import Joi from "joi";
// import { UserData } from "../repository/authRepository.js";

export const authSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(5).required(),
  passswordConfirmation: Joi.valid(Joi.ref('password'))
});