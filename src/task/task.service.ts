import { Injectable } from '@nestjs/common';
import { TaskRepository } from './task.repository';

@Injectable()
export class TaskService {
    constructor(private repository: TaskRepository){}

    async createTask(body: any){
        return await this.repository.createTask(body)
    }
}