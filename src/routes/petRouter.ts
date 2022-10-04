import { Router } from "express";
import { addPet } from "../controllers/petsController.js";
import schemaValidator from "../middleware/schemaValidator.js";
import { petsSchema } from "../schemas/petSchema.js";

const petsRouter = Router()

petsRouter.post("/new-baby", schemaValidator(petsSchema) ,addPet )

export default petsRouter