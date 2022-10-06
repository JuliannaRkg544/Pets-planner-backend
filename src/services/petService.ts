import { PetData } from "../repositories/petRepository.js";
import * as petsRepository from "../repositories/petRepository.js"


async function addPet( name: string, birthdate: string, genre: string, breed: string) {
    const petdata:PetData ={
        name,
        birthdate,
        genre,
        breed
    } 
    await petsRepository.insertPet(petdata)
}

async function getAllPets() {
    const pets = await petsRepository.getAllPets()
    return pets
}

async function getOnePet(id:number) {
    const pet  = await  petsRepository.getPetById(id)
    return pet 
    
}

async function addTask(id:number, description:string) {
    const taskdata:petsRepository.TaskData = {
        description,
        userId:id
    }
    await petsRepository.createTask(taskdata)
    
}

async function getTasks(id:number) {
    const tasks = await petsRepository.findTasksByUserId(id)
    return tasks
}

export {
    addPet, getAllPets, getOnePet, addTask, getTasks
}