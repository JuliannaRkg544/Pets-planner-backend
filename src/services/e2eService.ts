import { deleteAllUserRepo } from "../repositories/e2erepository";


export async function deleteAllUser() {
     await deleteAllUserRepo()
  }