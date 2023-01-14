import { Router } from "express";
import authRouter from "./authRouter.js";
import petsRouter from "./petRouter.js";
var router = Router();
router.use(authRouter);
router.use(petsRouter);
export default router;
