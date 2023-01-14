import { Router } from "express";
import { login, logup } from "../controllers/authController.js";
import schemaValidator from "../middleware/schemaValidator.js";
import { authSchema } from "../schema/authSchema.js";
var authRouter = Router();
authRouter.post("/logup", schemaValidator(authSchema), logup);
authRouter.post("/login", login);
export default authRouter;
