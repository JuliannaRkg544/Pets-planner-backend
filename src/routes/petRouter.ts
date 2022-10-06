import { Router } from "express";
import { addPet, addTask, getAllPets, getOnePet, getTasks } from "../controllers/petsController.js";
import schemaValidator from "../middleware/schemaValidator.js";
import { petsSchema } from "../schemas/petSchema.js";
import upload from "../config/multer.js";
import { tokenValidator } from "../schemas/tokenValidator.js";

const petsRouter = Router()


// petsRouter.post("/pet/new",schemaValidator(petsSchema) ,addPet)
petsRouter.post("/pet/new", upload.single("uploaded_file") )
petsRouter.get("/pet/get",getAllPets)
petsRouter.get("/pet/get/:id", getOnePet)
petsRouter.post("/pet/task/add", tokenValidator,addTask)
petsRouter.get("/pet/task",tokenValidator,getTasks )

export default petsRouter