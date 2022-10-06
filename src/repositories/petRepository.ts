import connection from "../config/connection.js";
import {Pets} from "@prisma/client"
import { Tasks } from "@prisma/client";

export type PetData = Omit<Pets,"id"> 
export type TaskData = Omit<Tasks,"id">


async function insertPet(petData: PetData) {
    console.log("inderi o pet ", petData)
    await connection.pets.create({data:petData,})
} 

async function getAllPets(){
    const pets = await connection.pets.findMany()
    return pets
}

async function getPetById(id:number) {
    const pet = await connection.pets.findFirst({where:{id:id}})
    return pet
}

async function createTask(taskdata:any){
    await connection.tasks.create({data:taskdata})
}

async function findTasksByUserId(userId:number) {
    const tasks = await connection.tasks.findMany({where:{userId}})
    return tasks
}

export {
    insertPet, getAllPets, getPetById, createTask, findTasksByUserId
}
