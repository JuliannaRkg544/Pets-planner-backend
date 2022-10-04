import connection from "../config/connection.js";
import { Users } from "@prisma/client";

export type UserData = Omit<Users,"id">

 
async function findUserByEmail(email:string) {
    const user = await connection.users.findMany({ where: { email: email } });
    return user
}

async function insertUser(userdata:UserData) {
    console.log("inderi o usuario", userdata)
    await connection.users.create({data:userdata,})
}

// async function findUserByEmail(email:string) {
//     console.log("no repository")
//     const user = await connection.user.findMany({ where: { email: email } });
//     return user
// }

export {
    findUserByEmail, insertUser
}