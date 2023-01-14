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
import * as petService from "../services/petService.js";
export function addPet(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userId, _a, name, birthdate, genre, breed, isCat, isDog;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    userId = res.locals.user;
                    console.log("userid  ", userId);
                    console.log("body ", req.body);
                    _a = req.body, name = _a.name, birthdate = _a.birthdate, genre = _a.genre, breed = _a.breed, isCat = _a.isCat, isDog = _a.isDog;
                    return [4 /*yield*/, petService.addPet(name, birthdate, genre, breed, isCat, isDog, userId)];
                case 1:
                    _b.sent();
                    res.sendStatus(201);
                    return [2 /*return*/];
            }
        });
    });
}
export function getAllPets(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userid, petsArray;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userid = res.locals.user;
                    return [4 /*yield*/, petService.getAllPets(userid)];
                case 1:
                    petsArray = _a.sent();
                    res.status(200).send(petsArray);
                    return [2 /*return*/];
            }
        });
    });
}
export function getOneDog(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, pet;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = parseInt(req.params.id);
                    return [4 /*yield*/, petService.getOneDog(id)];
                case 1:
                    pet = _a.sent();
                    res.send(pet).status(200);
                    return [2 /*return*/];
            }
        });
    });
}
export function getOneCat(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, pet;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = parseInt(req.params.id);
                    return [4 /*yield*/, petService.getOneCat(id)];
                case 1:
                    pet = _a.sent();
                    res.send(pet).status(200);
                    return [2 /*return*/];
            }
        });
    });
}
export function addTask(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, description;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = res.locals.user;
                    description = req.body.description;
                    return [4 /*yield*/, petService.addTask(id, description)];
                case 1:
                    _a.sent();
                    res.sendStatus(201);
                    return [2 /*return*/];
            }
        });
    });
}
export function getTasks(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, tasks;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = res.locals.user;
                    return [4 /*yield*/, petService.getTasks(id)];
                case 1:
                    tasks = _a.sent();
                    res.status(201).send(tasks);
                    return [2 /*return*/];
            }
        });
    });
}
export function deleteTask(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = parseInt(req.params.id);
                    return [4 /*yield*/, petService.deleteTask(id)];
                case 1:
                    _a.sent();
                    res.sendStatus(201);
                    return [2 /*return*/];
            }
        });
    });
}
export function deletePet(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var petid;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    petid = parseInt(req.params.id);
                    return [4 /*yield*/, petService.deletePet(petid)];
                case 1:
                    _a.sent();
                    res.sendStatus(201);
                    return [2 /*return*/];
            }
        });
    });
}
export function changeTask(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var isDone, taskid;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    isDone = req.body.isDone;
                    console.log("body do pacth ", req.body);
                    taskid = parseInt(req.params.id);
                    return [4 /*yield*/, petService.updateTask(taskid, isDone)];
                case 1:
                    _a.sent();
                    res.sendStatus(201);
                    return [2 /*return*/];
            }
        });
    });
}
export function healthDogPost(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var petId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    petId = parseInt(req.params.id);
                    return [4 /*yield*/, petService.healthDogPost(petId)];
                case 1:
                    _a.sent();
                    res.sendStatus(201);
                    return [2 /*return*/];
            }
        });
    });
}
export function healthDogGet(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, dog;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = parseInt(req.params.id);
                    return [4 /*yield*/, petService.healthDogGet(id)];
                case 1:
                    dog = _a.sent();
                    res.status(200).send(dog);
                    return [2 /*return*/];
            }
        });
    });
}
export function healthCatPost(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var petId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    petId = parseInt(req.params.id);
                    return [4 /*yield*/, petService.healthCatPost(petId)];
                case 1:
                    _a.sent();
                    res.sendStatus(201);
                    return [2 /*return*/];
            }
        });
    });
}
export function healthCatGet(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, cat;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = parseInt(req.params.id);
                    return [4 /*yield*/, petService.healthCatGet(id)];
                case 1:
                    cat = _a.sent();
                    res.status(200).send(cat);
                    return [2 /*return*/];
            }
        });
    });
}
// DOG
export function setDateDogV8V10(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var date, petId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    date = req.body.date;
                    petId = parseInt(req.params.id);
                    return [4 /*yield*/, petService.setDateDogV8V10(date, petId)];
                case 1:
                    _a.sent();
                    res.sendStatus(201);
                    return [2 /*return*/];
            }
        });
    });
}
export function setDateDogVerm1(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var date, petId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    date = req.body.date;
                    petId = parseInt(req.params.id);
                    return [4 /*yield*/, petService.setDateDogVerm1(date, petId)];
                case 1:
                    _a.sent();
                    res.sendStatus(201);
                    return [2 /*return*/];
            }
        });
    });
}
export function setDateDogAntiRabica(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var date, petId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    date = req.body.date;
                    petId = parseInt(req.params.id);
                    return [4 /*yield*/, petService.setDateDogAntiRabica(date, petId)];
                case 1:
                    _a.sent();
                    res.sendStatus(201);
                    return [2 /*return*/];
            }
        });
    });
}
export function setDateDogGripe(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var date, petId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    date = req.body.date;
                    petId = parseInt(req.params.id);
                    return [4 /*yield*/, petService.setDateDogGripe(date, petId)];
                case 1:
                    _a.sent();
                    res.sendStatus(201);
                    return [2 /*return*/];
            }
        });
    });
}
export function setDateDogVerm2(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var date, petId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    date = req.body.date;
                    petId = parseInt(req.params.id);
                    return [4 /*yield*/, petService.setDateDogVerm2(date, petId)];
                case 1:
                    _a.sent();
                    res.sendStatus(201);
                    return [2 /*return*/];
            }
        });
    });
}
//CAT
export function setDateCatQuadrupla(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var date, petId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    date = req.body.date;
                    petId = parseInt(req.params.id);
                    return [4 /*yield*/, petService.setDateCatQuadrupla(date, petId)];
                case 1:
                    _a.sent();
                    res.sendStatus(201);
                    return [2 /*return*/];
            }
        });
    });
}
export function setDateCatVerm1(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var date, petId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    date = req.body.date;
                    petId = parseInt(req.params.id);
                    return [4 /*yield*/, petService.setDateCatVerm1(date, petId)];
                case 1:
                    _a.sent();
                    res.sendStatus(201);
                    return [2 /*return*/];
            }
        });
    });
}
export function setDateCatVerm2(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var date, petId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    date = req.body.date;
                    petId = parseInt(req.params.id);
                    return [4 /*yield*/, petService.setDateCatVerm2(date, petId)];
                case 1:
                    _a.sent();
                    res.sendStatus(201);
                    return [2 /*return*/];
            }
        });
    });
}
export function setDateCatRabica(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var date, petId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    date = req.body.date;
                    petId = parseInt(req.params.id);
                    return [4 /*yield*/, petService.setDateCatRabica(date, petId)];
                case 1:
                    _a.sent();
                    res.sendStatus(201);
                    return [2 /*return*/];
            }
        });
    });
}
