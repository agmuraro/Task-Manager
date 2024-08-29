import { Injectable } from "@nestjs/common";
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

}