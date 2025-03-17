"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaCrud = void 0;
const client_1 = require("@prisma/client");
class PrismaCrud {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    createLogs(path, query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prisma.logs.create({
                data: {
                    timestamp: new Date(),
                    path: path,
                    query: query
                }
            });
        });
    }
    getLogs() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prisma.logs.findMany();
        });
    }
    getLogById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prisma.logs.findUnique({
                where: {
                    id: id
                }
            });
        });
    }
    deleteLogById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prisma.logs.delete({
                where: {
                    id: id
                }
            });
        });
    }
    updateLogById(id, path, query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prisma.logs.update({
                where: {
                    id: id
                },
                data: {
                    path: path,
                    query: query
                }
            });
        });
    }
}
exports.PrismaCrud = PrismaCrud;
