import { Router } from "express";
import {
  addPet,
  addTask,
  changeTask,
  deletePet,
  deleteTask, 
  getAllPets,
  getOneCat,
  getOneDog,
  getTasks,
  healthCatGet,
  healthCatPost,
  healthDogGet,
  healthDogPost,
  setDateCatQuadrupla,
  setDateCatRabica,
  setDateCatVerm1,
  setDateCatVerm2,
  setDateDogAntiRabica,
  setDateDogGripe,
  setDateDogV8V10,
  setDateDogVerm1,
  setDateDogVerm2,
} from "../controllers/petsController.js";
import schemaValidator from "../middleware/schemaValidator.js";
import { petsSchema } from "../schemas/petSchema.js";
// import upload from "../config/multer.js";
import { tokenValidator } from "../schemas/tokenValidator.js";
import dateSchema from "../schemas/dateSchema.js";


const petsRouter = Router();



petsRouter.post("/pet/new",schemaValidator(petsSchema) ,addPet)
petsRouter.get("/pet/get", getAllPets);

petsRouter.get("/pet/get/dog/:id", getOneDog);
petsRouter.get("/pet/get/cat/:id", getOneCat);

petsRouter.post("/pet/task/add", tokenValidator, addTask);
petsRouter.get("/pet/task", tokenValidator, getTasks);
petsRouter.delete("/pet/delete/:id", tokenValidator, deletePet);
petsRouter.delete("/pet/task/delete/:id", tokenValidator, deleteTask);
petsRouter.patch("/pet/task/patch/:id",tokenValidator,changeTask )


petsRouter.patch("/pet/health-dog/patch/V8-V10/:id",schemaValidator(dateSchema), setDateDogV8V10 )
petsRouter.patch("/pet/health-dog/patch/verm1/:id",schemaValidator(dateSchema), setDateDogVerm1 )
petsRouter.patch("/pet/health-dog/patch/verm2/:id",schemaValidator(dateSchema), setDateDogVerm2 )
petsRouter.patch("/pet/health-dog/patch/gripe/:id",schemaValidator(dateSchema), setDateDogGripe )
petsRouter.patch("/pet/health-dog/patch/antirabica/:id",schemaValidator(dateSchema), setDateDogAntiRabica )


petsRouter.patch("/pet/health-cat/patch/verm1/:id",schemaValidator(dateSchema), setDateCatVerm1 )
petsRouter.patch("/pet/health-cat/patch/verm2/:id",schemaValidator(dateSchema), setDateCatVerm2 )
petsRouter.patch("/pet/health-cat/patch/quadrupla/:id",schemaValidator(dateSchema), setDateCatQuadrupla )
petsRouter.patch("/pet/health-cat/patch/antirabica/:id",schemaValidator(dateSchema), setDateCatRabica )


petsRouter.post("/pet/health-dog/post/:id", healthDogPost )
petsRouter.get("/pet/health-dog/get/:id", healthDogGet)

petsRouter.post("/pet/health-cat/post/:id", healthCatPost )
petsRouter.get("/pet/health-cat/get/:id", healthCatGet )


export default petsRouter;
