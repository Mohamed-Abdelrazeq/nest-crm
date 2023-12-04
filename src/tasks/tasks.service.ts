import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/task.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
 
    constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

    async findAll(): Promise<Task[]> {
        return await this.taskModel.find();
    }

    async findById(id: string): Promise<Task> {
        return await this.taskModel.findById(id);
    }

    create(createTaskDTO: CreateTaskDto): Task | PromiseLike<Task> {
        const newTask = new this.taskModel(createTaskDTO);
        return newTask.save();
    }
}
