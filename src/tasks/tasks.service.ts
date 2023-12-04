import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/task.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
 
    constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

    async findAll(): Promise<Task[]> {
        try {
            return await this.taskModel.find();
        } catch (error) {
            // Handle the error here
            console.error(error);
            throw new Error('Failed to fetch tasks');
        }
    }

    async findById(id: string): Promise<Task> {
        try {
            return await this.taskModel.findById(id);
        } catch (error) {
            // Handle the error here
            console.error(error);
            throw new Error('Failed to find task');
        }
    }

   async create(createTaskDTO: CreateTaskDto): Promise<Task | { error: string }> {
        try {
            const newTask =  new this.taskModel(createTaskDTO);
            return await newTask.save();
        } catch (error) {
            // Handle the error here
            console.error(error);
            return { error: 'Failed to create task' };
        }
    }

    async delete(id: string): Promise<string> {
        try {
            await this.taskModel.findByIdAndDelete(id);
            return "Task deleted successfully";
        } catch (error) {
            // Handle the error here
            console.error(error);
            throw new Error('Failed to delete task');
        }
    }

    async update(id: string, updateTaskDTO: UpdateTaskDto): Promise<Task | { error: string }> {
        try {
            const updatedTask = await this.taskModel.findByIdAndUpdate(id, updateTaskDTO, { new: true });
            return updatedTask;
        } catch (error) {
            // Handle the error here
            console.error(error);
            return { error: 'Failed to update task' };
        }
    }
}
