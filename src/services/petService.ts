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

export {
    addPet
}