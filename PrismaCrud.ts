import { PrismaClient } from '@prisma/client';

class PrismaCrud{
    private prisma: PrismaClient
    constructor(){
        this.prisma = new PrismaClient();
    }

    async createLogs(path:string, query:string){
        return await this.prisma.logs.create({
            data: {
                timestamp: new Date(),
                path: path,
                query: query
            }
        });
    }

    async getLogs(){
        return await this.prisma.logs.findMany()
    }

    async getLogById(id:number){
        return await this.prisma.logs.findUnique({
            where: {
                id: id
            }
        });
    }

    async deleteLogById(id:number){
        return await this.prisma.logs.delete({
            where: {
                id: id
            }
        });
    }

    async updateLogById(id:number, path:string, query:string){
        return await this.prisma.logs.update({
            where: {
                id: id
            },
            data: {
                path: path,
                query: query
            }
        });
    }
}