import connection from "../config/connection.js";
import {Pets} from "@prisma/client"

export type PetData = Omit<Pets,"id"> 


async function insertPet(petData: PetData) {
    console.log("inderi o pet ", petData)
    await connection.pets.create({data:petData,})
} 

export {
    insertPet
}
