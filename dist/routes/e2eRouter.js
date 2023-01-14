import { Router } from "express";
import { deleteAllFromUser } from "../controllers/e2eController";
var e2eRouter = Router();
e2eRouter.post("/user/delete-all", deleteAllFromUser);
