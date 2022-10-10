import connection from "../config/connection";

export async function deleteAllUserRepo() {
    await connection.users.deleteMany()
 }

 export async function deleteAllPetsRepo() {
    await connection.pets.deleteMany()
 }