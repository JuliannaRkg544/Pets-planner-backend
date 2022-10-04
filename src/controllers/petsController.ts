import { Request, Response } from "express";
import { PetData } from "../repositories/petRepository.js";
import * as petService from "../services/petService.js";

export async function addPet(req: Request, res: Response) {
  const {
    name,
    birthdate,
    genre,
    breed,
  }: { name: string; birthdate: string; genre: string; breed: string } =
    req.body;
  await petService.addPet(name,
    birthdate,
    genre,
    breed,);
  res.sendStatus(201);
}
