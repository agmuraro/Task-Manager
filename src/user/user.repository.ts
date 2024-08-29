import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class UserRepository{
    constructor(private prisma: PrismaService){}

    async createUser(body: any){
        return await this.prisma.user.create({
            data: body
        })
    }

}