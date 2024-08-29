import { Injectable } from "@nestjs/common";
import { title } from "process";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class TaskRepository{
    constructor(private prisma: PrismaService){}

    async createTask(body: any){
        return await this.prisma.task.create({
            data: {
                title: body.title,
                userId: body.user.id,
                description: body.description
            }
        })
    }

    async findTask(){
        return await this.prisma.task.findMany()
    }

    async updateTask(body: any) {
        return await this.prisma.task.update({
            data: {
                title: body.title,
                description: body.description,
                completed: body.completed
            },
            where: {
                id: body.id,  
            },
        });
    }

    async deleteTask(body: any){
        return await this.prisma.task.delete({
            where: {
                id: body.id
            }
        })
    }

}