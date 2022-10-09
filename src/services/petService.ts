import { PetData } from "../repositories/petRepository.js";
import * as petsRepository from "../repositories/petRepository.js";

async function addPet(
  name: string,
  birthdate: string,
  genre: string,
  breed: string,
  isCat: boolean,
  isDog: boolean
) {
  const petdata: PetData = {
    name,
    birthdate,
    genre,
    breed,
    isCat,
    isDog,
  };
  await petsRepository.insertPet(petdata);
}

async function getAllPets() {
  const pets = await petsRepository.getAllPets();
  return pets;
}

// async function getOnePet(id:number) {
//     const pet  = await  petsRepository.getPetById(id)
//     return pet

// }

async function getOneDog(id: number) {
  const dog = await petsRepository.getDogById(id);
  return dog;
}

async function getOneCat(id: number) {
  const cat = await petsRepository.getCatById(id);
  return cat;
}

async function addTask(id: number, description: string) {
  const taskdata: petsRepository.TaskData = {
    description,
    userId: id,
    done: false,
  };
  await petsRepository.createTask(taskdata);
}

async function getTasks(id: number) {
  const tasks = await petsRepository.findTasksByUserId(id);
  return tasks;
}
async function deleteTask(id: number) {
  await petsRepository.deletTaskById(id);
}

async function deletePet(petid: number) {
  await petsRepository.deletePetById(petid);
}

async function updateTask(taskid: number, isDone: boolean) {
  await petsRepository.updateTask(taskid, isDone);
}
async function healthDogPost(petId:number) {
  const healthData:petsRepository.HealthDogData = {
     gripe:false,
     gripe_date:null,
     antirabica:false,
     antirabica_date:null,
     V8_V10:false,
     V8_V10_date:null,
     petId,
     verm1:false,
     verm1_date:null,
     verm2:false,
     verm2_date:null
  }
  await petsRepository.healthDogPost(healthData);
}

async function healthCatPost(petId:number) {
  const healthData:petsRepository.HealthCatData = {
     antirabica:false,
     antirabica_date:null,
     quadrupla:false,
     quadrupla_date:null,
     petId,
     verm1:false,
     verm1_date:null,
     verm2:false,
     verm2_date:null
  }
  await petsRepository.healthCatPost(healthData);
}


async function healthDogGet(id:number) {
  const dog = await petsRepository.healthDogGet(id)
  return dog
  
}

async function healthCatGet(id:number) {
  const cat = await petsRepository.healthCatGet(id)
  return cat
}

//DOG

async function setDateDogV8V10(date: string, petId: number ) {
  await petsRepository.updateDogDateV8V10(date, petId);
}

async function setDateDogVerm1(date: string, petId: number ) {
  await petsRepository.updateDogDateVerm1(date, petId);
}

async function setDateDogVerm2(date: string, petId: number ) {
  await petsRepository.updateDogDateVerm2(date, petId);
}

async function setDateDogAntiRabica(date: string, petId: number ) {
  await petsRepository.updateDogDateAntiRabica(date, petId);
}

async function setDateDogGripe(date: string, petId: number ) {
  await petsRepository.updateDogDateGripe(date, petId);
}




//CAT
async function setDateCatQuadrupla(date: string, petId: number ) {

  await petsRepository.updateCatDateQuadrupla(date,petId);
}
async function setDateCatVerm1(date: string, petId: number ) {

  await petsRepository.updateCatDateVerm1(date,petId);
}

async function setDateCatVerm2(date: string, petId: number ) {

  await petsRepository.updateCatDateVerm2(date,petId);
}
async function setDateCatRabica(date: string, petId: number ) {

  await petsRepository.updateCatDateAntiRabica(date,petId);
}




export {
  addPet,
  getAllPets,
  getOneDog,
  addTask,
  getTasks,
  deleteTask,
  updateTask,
  deletePet,
  setDateDogV8V10,
  setDateCatQuadrupla,
  getOneCat,
  healthDogPost,
  healthCatPost,
  healthDogGet,
  healthCatGet,
  setDateCatVerm1,
  setDateCatVerm2,
  setDateCatRabica,
  setDateDogVerm1,
  setDateDogVerm2,
  setDateDogAntiRabica,
  setDateDogGripe
  
};

//fazer o tratamento do delete task
