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
import connection from "../config/connection.js";
function insertPet(petData) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("inderi o pet ", petData);
                    return [4 /*yield*/, connection.pets.create({ data: petData })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function getAllPets(userId) {
    return __awaiter(this, void 0, void 0, function () {
        var pets;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.pets.findMany({ where: { userId: userId } })];
                case 1:
                    pets = _a.sent();
                    return [2 /*return*/, pets];
            }
        });
    });
}
function getDogById(petId) {
    return __awaiter(this, void 0, void 0, function () {
        var dog;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.pets.findMany({
                        where: { id: petId },
                        include: { Dog: true }
                    })];
                case 1:
                    dog = _a.sent();
                    return [2 /*return*/, dog];
            }
        });
    });
}
function getCatById(petId) {
    return __awaiter(this, void 0, void 0, function () {
        var cat;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.pets.findMany({
                        where: { id: petId },
                        include: { Cat: true }
                    })];
                case 1:
                    cat = _a.sent();
                    return [2 /*return*/, cat];
            }
        });
    });
}
function getPetById(id) {
    return __awaiter(this, void 0, void 0, function () {
        var pet;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.pets.findFirst({ where: { id: id } })];
                case 1:
                    pet = _a.sent();
                    return [2 /*return*/, pet];
            }
        });
    });
}
function createTask(taskdata) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.tasks.create({ data: taskdata })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function findTasksByUserId(userId) {
    return __awaiter(this, void 0, void 0, function () {
        var tasks;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.tasks.findMany({ where: { userId: userId } })];
                case 1:
                    tasks = _a.sent();
                    return [2 /*return*/, tasks];
            }
        });
    });
}
function deletTaskById(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.tasks["delete"]({ where: { id: id } })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function deletePetById(petid) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.pets["delete"]({ where: { id: petid } })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function updateTask(taskid, isDone) {
    return __awaiter(this, void 0, void 0, function () {
        var bool;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    bool = !isDone;
                    return [4 /*yield*/, connection.tasks.update({
                            where: { id: taskid },
                            data: { done: bool }
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function healthDogPost(data) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.healthDog.create({ data: data })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function healthCatPost(data) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.healthCat.create({ data: data })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function healthDogGet(id) {
    return __awaiter(this, void 0, void 0, function () {
        var pet;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.healthDog.findMany({ where: { petId: id } })];
                case 1:
                    pet = _a.sent();
                    return [2 /*return*/, pet];
            }
        });
    });
}
function healthCatGet(id) {
    return __awaiter(this, void 0, void 0, function () {
        var cat;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.healthCat.findMany({ where: { petId: id } })];
                case 1:
                    cat = _a.sent();
                    return [2 /*return*/, cat];
            }
        });
    });
}
//DOG
function updateDogDateV8V10(date, petId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.healthDog.update({
                        where: { petId: petId },
                        data: { V8_V10_date: date, V8_V10: true }
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function updateDogDateGripe(date, petId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(date);
                    return [4 /*yield*/, connection.healthDog.update({
                            where: { petId: petId },
                            data: { gripe_date: date, gripe: true }
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function updateDogDateAntiRabica(date, petId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.healthDog.update({
                        where: { petId: petId },
                        data: { antirabica_date: date, antirabica: true }
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function updateDogDateVerm1(date, petId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.healthDog.update({
                        where: { petId: petId },
                        data: { verm1_date: date, verm1: true }
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function updateDogDateVerm2(date, petId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.healthDog.update({
                        where: { petId: petId },
                        data: { verm2_date: date, verm2: true }
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
//CAT
function updateCatDateAntiRabica(date, petId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.healthCat.update({
                        where: { petId: petId },
                        data: { antirabica_date: date, antirabica: true }
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function updateCatDateQuadrupla(date, petId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.healthCat.update({
                        where: { petId: petId },
                        data: { quadrupla_date: date, quadrupla: true }
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function updateCatDateVerm1(date, petId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.healthCat.update({
                        where: { petId: petId },
                        data: { verm1_date: date, verm1: true }
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function updateCatDateVerm2(date, petId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.healthCat.update({
                        where: { petId: petId },
                        data: { verm2_date: date, verm2: true }
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
export { insertPet, getAllPets, getPetById, createTask, findTasksByUserId, deletTaskById, updateTask, deletePetById, getDogById, getCatById, healthDogPost, healthCatPost, healthCatGet, healthDogGet, updateDogDateV8V10, updateDogDateGripe, updateDogDateAntiRabica, updateDogDateVerm1, updateDogDateVerm2, updateCatDateAntiRabica, updateCatDateQuadrupla, updateCatDateVerm1, updateCatDateVerm2 };
