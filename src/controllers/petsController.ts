import { Request, Response } from "express";
import { PetData } from "../repositories/petRepository.js";
import * as petService from "../services/petService.js";


export async function addPet(req: Request, res: Response) {

  console.log("file ",req.file)
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


export async function getAllPets(req:Request, res:Response){
  const petsArray = await petService.getAllPets()
   res.status(200).send(petsArray)
}

export async function getOnePet(req:Request, res:Response) {
  const id = parseInt(req.params.id)
  const pet = await petService.getOnePet(id)
  res.send(pet).status(200)
}

export async function addTask(req:Request, res:Response) {
  const id = res.locals.user
  const {description}:{description:string} = req.body
  await petService.addTask(id,description)
  res.sendStatus(201)
}

export async function getTasks(req:Request, res:Response) {
  const id = res.locals.user
  const tasks = await petService.getTasks(id)
  res.status(201).send(tasks)
}