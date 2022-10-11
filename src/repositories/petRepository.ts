import connection from "../config/connection.js";
import { HealthCat, Pets } from "@prisma/client";
import { Tasks } from "@prisma/client";
import { HealthDog } from "@prisma/client";

export type PetData = Omit<Pets, "id">;
export type TaskData = Omit<Tasks, "id">;
export type HealthDogData = Omit<HealthDog, "id">;
export type HealthCatData = Omit<HealthCat, "id">;

async function insertPet(petData: PetData) {
  console.log("inderi o pet ", petData);
  await connection.pets.create({ data: petData });
}

async function getAllPets(userId:number) {
  const pets = await connection.pets.findMany({where:{userId}});
  return pets;
}

async function getDogById(petId:number) {
  const dog = await connection.pets.findMany({
    where:{id:petId},
    include:{Dog:true}
  });
  return dog;
}

async function getCatById(petId:number) {
  const cat = await connection.pets.findMany({
    where:{id:petId},
    include:{Cat:true}
  });
  return cat;
}

async function getPetById(id: number) {
  const pet = await connection.pets.findFirst({ where: { id: id } });
  return pet;
}

async function createTask(taskdata: any) {
  await connection.tasks.create({ data: taskdata });
}

async function findTasksByUserId(userId: number) {
  const tasks = await connection.tasks.findMany({ where: { userId } });
  return tasks;
}

async function deletTaskById(id: number) {
  await connection.tasks.delete({ where: { id } });
}

async function deletePetById(petid: number) {
 
  await connection.pets.delete({ where: { id:petid } });
}

async function updateTask(taskid: number, isDone:boolean) {
  let bool = !isDone
  await connection.tasks.update({
    where: { id:taskid },
    data: { done: bool }, 
  });
}

async function healthDogPost(data:HealthDogData){
  await connection.healthDog.create({data:data})
}
 
async function healthCatPost(data:HealthCatData){
  await connection.healthCat.create({data:data})
}

async function healthDogGet(id:number) {
  const pet = await connection.healthDog.findMany({where:{petId:id}})
  return pet
}

async function healthCatGet(id:number) {
  const cat = await connection.healthCat.findMany({where:{petId:id}})
  return cat
}



//DOG

async function updateDogDateV8V10(date:string,petId:number){
  await connection.healthDog.update({
    where:{petId},
    data:{V8_V10_date:date, V8_V10:true },
  });
}


async function updateDogDateGripe(date:string,petId:number){
  console.log(date)
  await connection.healthDog.update({
    where:{petId},
    data:{gripe_date:date, gripe:true}
  })
}

async function updateDogDateAntiRabica(date:string,petId:number){
  await connection.healthDog.update({
    where:{petId},
    data:{antirabica_date:date, antirabica:true}
  })
}

async function updateDogDateVerm1(date:string,petId:number){
  await connection.healthDog.update({
    where:{petId},
    data:{verm1_date:date, verm1:true}
  })
}
async function updateDogDateVerm2(date:string,petId:number){
  await connection.healthDog.update({
    where:{petId},
    data:{verm2_date:date, verm2:true}
  })
}





//CAT
async function updateCatDateAntiRabica(date:string,petId:number){
  
  await connection.healthCat.update({
    where:{petId},
    data:{antirabica_date: date, antirabica:true }
  })
}

async function updateCatDateQuadrupla(date:string,petId:number){
  await connection.healthCat.update({
    where:{petId},
    data:{quadrupla_date :date, quadrupla:true}
  })
}

async function updateCatDateVerm1(date:string,petId:number){
  await connection.healthCat.update({
    where:{petId},
    data:{verm1_date:date, verm1:true}
  })
}
async function updateCatDateVerm2(date:string,petId:number){
  await connection.healthCat.update({
    where:{petId},
    data:{verm2_date:date, verm2:true}
  })
}



export {
  insertPet,
  getAllPets,
  getPetById,
  createTask,
  findTasksByUserId,
  deletTaskById,
  updateTask,
  deletePetById,
  getDogById,
  getCatById,

  healthDogPost,
  healthCatPost,
  healthCatGet,
  healthDogGet,

  updateDogDateV8V10,
  updateDogDateGripe,
  updateDogDateAntiRabica,
  updateDogDateVerm1,
  updateDogDateVerm2,

  updateCatDateAntiRabica,
  updateCatDateQuadrupla,
  updateCatDateVerm1,
  updateCatDateVerm2

};
