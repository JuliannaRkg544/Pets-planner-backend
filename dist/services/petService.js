var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as petsRepository from "../repositories/petRepository.js";
function addPet(name, birthdate, genre, breed, isCat, isDog, userId) {
    return __awaiter(this, void 0, void 0, function () {
        var petdata;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    petdata = {
                        name: name,
                        birthdate: birthdate,
                        genre: genre,
                        breed: breed,
                        isCat: isCat,
                        isDog: isDog,
                        userId: userId
                    };
                    return [4 /*yield*/, petsRepository.insertPet(petdata)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function getAllPets(userid) {
    return __awaiter(this, void 0, void 0, function () {
        var pets;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, petsRepository.getAllPets(userid)];
                case 1:
                    pets = _a.sent();
                    return [2 /*return*/, pets];
            }
        });
    });
}
// async function getOnePet(id:number) {
//     const pet  = await  petsRepository.getPetById(id)
//     return pet
// }
function getOneDog(id) {
    return __awaiter(this, void 0, void 0, function () {
        var dog;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, petsRepository.getDogById(id)];
                case 1:
                    dog = _a.sent();
                    return [2 /*return*/, dog];
            }
        });
    });
}
function getOneCat(id) {
    return __awaiter(this, void 0, void 0, function () {
        var cat;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, petsRepository.getCatById(id)];
                case 1:
                    cat = _a.sent();
                    return [2 /*return*/, cat];
            }
        });
    });
}
function addTask(id, description) {
    return __awaiter(this, void 0, void 0, function () {
        var taskdata;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    taskdata = {
                        description: description,
                        userId: id,
                        done: false
                    };
                    return [4 /*yield*/, petsRepository.createTask(taskdata)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function getTasks(id) {
    return __awaiter(this, void 0, void 0, function () {
        var tasks;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, petsRepository.findTasksByUserId(id)];
                case 1:
                    tasks = _a.sent();
                    return [2 /*return*/, tasks];
            }
        });
    });
}
function deleteTask(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, petsRepository.deletTaskById(id)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function deletePet(petid) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, petsRepository.deletePetById(petid)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function updateTask(taskid, isDone) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, petsRepository.updateTask(taskid, isDone)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function healthDogPost(petId) {
    return __awaiter(this, void 0, void 0, function () {
        var healthData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    healthData = {
                        gripe: false,
                        gripe_date: null,
                        antirabica: false,
                        antirabica_date: null,
                        V8_V10: false,
                        V8_V10_date: null,
                        petId: petId,
                        verm1: false,
                        verm1_date: null,
                        verm2: false,
                        verm2_date: null
                    };
                    return [4 /*yield*/, petsRepository.healthDogPost(healthData)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function healthCatPost(petId) {
    return __awaiter(this, void 0, void 0, function () {
        var healthData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    healthData = {
                        antirabica: false,
                        antirabica_date: null,
                        quadrupla: false,
                        quadrupla_date: null,
                        petId: petId,
                        verm1: false,
                        verm1_date: null,
                        verm2: false,
                        verm2_date: null
                    };
                    return [4 /*yield*/, petsRepository.healthCatPost(healthData)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function healthDogGet(id) {
    return __awaiter(this, void 0, void 0, function () {
        var dog;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, petsRepository.healthDogGet(id)];
                case 1:
                    dog = _a.sent();
                    return [2 /*return*/, dog];
            }
        });
    });
}
function healthCatGet(id) {
    return __awaiter(this, void 0, void 0, function () {
        var cat;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, petsRepository.healthCatGet(id)];
                case 1:
                    cat = _a.sent();
                    return [2 /*return*/, cat];
            }
        });
    });
}
//DOG
function setDateDogV8V10(date, petId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, petsRepository.updateDogDateV8V10(date, petId)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function setDateDogVerm1(date, petId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, petsRepository.updateDogDateVerm1(date, petId)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function setDateDogVerm2(date, petId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, petsRepository.updateDogDateVerm2(date, petId)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function setDateDogAntiRabica(date, petId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, petsRepository.updateDogDateAntiRabica(date, petId)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function setDateDogGripe(date, petId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, petsRepository.updateDogDateGripe(date, petId)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
//CAT
function setDateCatQuadrupla(date, petId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, petsRepository.updateCatDateQuadrupla(date, petId)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function setDateCatVerm1(date, petId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, petsRepository.updateCatDateVerm1(date, petId)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function setDateCatVerm2(date, petId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, petsRepository.updateCatDateVerm2(date, petId)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function setDateCatRabica(date, petId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, petsRepository.updateCatDateAntiRabica(date, petId)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
export { addPet, getAllPets, getOneDog, addTask, getTasks, deleteTask, updateTask, deletePet, setDateDogV8V10, setDateCatQuadrupla, getOneCat, healthDogPost, healthCatPost, healthDogGet, healthCatGet, setDateCatVerm1, setDateCatVerm2, setDateCatRabica, setDateDogVerm1, setDateDogVerm2, setDateDogAntiRabica, setDateDogGripe };
//fazer o tratamento do delete task
