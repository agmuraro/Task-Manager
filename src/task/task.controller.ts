import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { TaskService } from './task.service';


@Controller('task')
export class TaskController {
    constructor(private service: TaskService){}

    @Post()
    async createTask(@Body() body: any){
        return await this.service.createTask(body)
    }

    @Get()
    async findTask(){
        return await this.service.findTask()
    }

    @Put()
    async updateTask(@Body() body: any){
        return await this.service.updateTask(body)
    }

    @Delete()
    async deleteTask(@Body() body: any){
        return await this.service.deleteTask(body)
    }
}
