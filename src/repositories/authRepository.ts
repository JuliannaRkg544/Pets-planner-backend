import connection from "../config/connection.js";
import { User } from "@prisma/client";

export type UserData = Omit<User,"id">


async function findUserByEmail(email:string) {
    const user = await connection.user.findMany({ where: { email: email } });
    return user
}

async function insertUser(userdata:UserData) {
    console.log("inderi o usuario")
    await connection.user.create({data:userdata,})
}

// async function findUserByEmail(email:string) {
//     console.log("no repository")
//     const user = await connection.user.findMany({ where: { email: email } });
//     return user
// }

export {
    findUserByEmail, insertUser
}