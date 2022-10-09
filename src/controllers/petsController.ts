import { Request, Response } from "express";
import { PetData } from "../repositories/petRepository.js";
import * as petService from "../services/petService.js";


export async function addPet(req: Request, res: Response) {

  console.log("file do controller ",req.file)
  console.log("body ", req.body)
  const {
    name,
    birthdate,
    genre,
    breed,
    isCat,
    isDog
  }: { name: string; birthdate: string; genre: string; breed: string; isCat:boolean, isDog:boolean } =
    req.body;
  await petService.addPet(name,
    birthdate,
    genre,
    breed,
    isCat,
    isDog  )
  ;
  res.sendStatus(201);
}


export async function getAllPets(req:Request, res:Response){
  const petsArray = await petService.getAllPets()
   res.status(200).send(petsArray)
}

export async function getOneDog(req:Request, res:Response) {
  const id = parseInt(req.params.id)
  const pet = await petService.getOneDog(id)
  res.send(pet).status(200)
}

export async function getOneCat(req:Request, res:Response) {
  const id = parseInt(req.params.id)
  const pet = await petService.getOneCat(id)
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

export async function deleteTask(req:Request, res:Response){
  const id = parseInt(req.params.id)
  await petService.deleteTask(id)
  res.sendStatus(201)
}

export async function deletePet(req:Request, res:Response){
  const petid = parseInt(req.params.id)
  await petService.deletePet(petid)
  res.sendStatus(201)
}


export async function changeTask(req:Request, res:Response){
  const  { isDone}:{ isDone:boolean} = req.body
  console.log("body do pacth ", req.body)
  const taskid = parseInt(req.params.id)
  await petService.updateTask(taskid,isDone)
  res.sendStatus(201)
}


export async function healthDogPost(req:Request, res:Response) {
  const petId = parseInt(req.params.id)
  await petService.healthDogPost(petId)
  res.sendStatus(201)

}

export async function healthDogGet(req:Request, res:Response) {
  const id = parseInt(req.params.id)
  const dog = await petService.healthDogGet(id)
  res.status(200).send(dog)
}

export async function healthCatPost(req:Request, res:Response) {
  const petId = parseInt(req.params.id)
  await petService.healthCatPost(petId)
  res.sendStatus(201)

}

export async function healthCatGet(req:Request, res:Response) {
  const id = parseInt(req.params.id)
  const cat = await petService.healthCatGet(id)
  res.status(200).send(cat)

}


// DOG

export async function setDateDogV8V10(req:Request, res:Response) {
  const {date}: {date:string} = req.body
  
  const petId = parseInt(req.params.id)
  await petService.setDateDogV8V10(date,petId)
  res.sendStatus(201)
}

export async function setDateDogVerm1(req:Request, res:Response) {
  const {date}: {date:string} = req.body
  
  const petId = parseInt(req.params.id)
  await petService.setDateDogVerm1(date,petId)
  res.sendStatus(201)
}

export async function setDateDogAntiRabica(req:Request, res:Response) {
  const {date}: {date:string} = req.body
  
  const petId = parseInt(req.params.id)
  await petService.setDateDogAntiRabica(date,petId)
  res.sendStatus(201)
}

export async function setDateDogGripe(req:Request, res:Response) {
  const {date}: {date:string} = req.body
  
  const petId = parseInt(req.params.id)
  await petService.setDateDogGripe(date,petId)
  res.sendStatus(201)
}




export async function setDateDogVerm2(req:Request, res:Response) {
  const {date}: {date:string} = req.body
  
  const petId = parseInt(req.params.id)
  await petService.setDateDogVerm2(date,petId)
  res.sendStatus(201)
}

//CAT
export async function setDateCatQuadrupla(req:Request, res:Response) {
  const {date}: {date:string} = req.body
  const petId = parseInt(req.params.id)
  await petService.setDateCatQuadrupla(date,petId)
  res.sendStatus(201)
}

export async function setDateCatVerm1(req:Request, res:Response) {
  const {date}: {date:string} = req.body
  const petId = parseInt(req.params.id)
  await petService.setDateCatVerm1(date,petId)
  res.sendStatus(201)
}


export async function setDateCatVerm2(req:Request, res:Response) {
  const {date}: {date:string} = req.body
  const petId = parseInt(req.params.id)
  await petService.setDateCatVerm2(date,petId)
  res.sendStatus(201)
}


export async function setDateCatRabica(req:Request, res:Response) {
  const {date}: {date:string} = req.body
  const petId = parseInt(req.params.id)
  await petService.setDateCatRabica(date,petId)
  res.sendStatus(201)
}



