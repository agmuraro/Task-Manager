import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';


@Controller('task')
export class TaskController {
    constructor(private service: TaskService){}

    @Post()
    async createTask(@Body() body: any){
        return await this.service.createTask(body)
    }
}
