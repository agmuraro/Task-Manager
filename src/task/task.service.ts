import { Injectable } from '@nestjs/common';
import { TaskRepository } from './task.repository';

@Injectable()
export class TaskService {
    constructor(private repository: TaskRepository){}

    async createTask(body: any){
        return await this.repository.createTask(body)
    }

    async findTask(){
        return await this.repository.findTask()
    }

    async updateTask(body: any){
        return await this.repository.updateTask(body)
    }

    async deleteTask(body: any){
        return await this.repository.deleteTask(body)
    }
}