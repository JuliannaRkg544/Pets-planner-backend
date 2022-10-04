import { Request, Response } from "express";
import * as authService from "../services/authService.js";

export async function logup(req: Request, res: Response) {
  const {name ,email, password }:{ name: string, email: string; password: string } = req.body;

  await authService.logupUser(name,email, password);

  res.sendStatus(201);
}

export async function login(req: Request, res: Response) {
  const { email, password }: { email: string; password: string } = req.body;

  const userLoged = await authService.loginUser(email, password);

  res.status(200).send(userLoged);
}