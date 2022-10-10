

import { Request, Response } from "express";
import { deleteAllUser } from "../services/e2eService";


export async function deleteAllFromUser(req: Request, res: Response) {
  
    await deleteAllUser()
    res.sendStatus(200);
  }