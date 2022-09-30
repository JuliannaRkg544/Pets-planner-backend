import { Request, Response } from "express";
import * as authService from "../services/authService.js";

export async function logup(req: Request, res: Response) {
  const { email, password, passswordConfirmation }:{ email: string; password: string, passswordConfirmation: string } = req.body;

  await authService.logupUser(email, password, passswordConfirmation);

  res.sendStatus(201);
}

export async function login(req: Request, res: Response) {
  const { email, password, passswordConfirmation }: { email: string; password: string, passswordConfirmation:string } = req.body;

  const userLoged = await authService.loginUser(email, password, passswordConfirmation);

  res.status(200).send(userLoged);
}