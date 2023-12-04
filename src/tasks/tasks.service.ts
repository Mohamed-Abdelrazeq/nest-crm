import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/task.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
 
    constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

    async findAll(): Promise<Task[] | {error: string}> {
        try {
            return await this.taskModel.find();
        } catch (error) {
            return { error: error.message };
        }
    }

    async findById(id: string): Promise<Task | { error: string }> {
        try {
            return await this.taskModel.findById(id);
        } catch (error) {
            return { error: error.message };
        }
    }

   async create(createTaskDTO: CreateTaskDto): Promise<Task | { error: string }> {
        try {
            const newTask =  new this.taskModel(createTaskDTO);
            return await newTask.save();
        } catch (error) {
            return { error: error.message };
        }
    }

    async delete(id: string): Promise<{ message: string } | { error: string }> {
        try {
            await this.taskModel.findByIdAndDelete(id);
            return { message: "Task deleted successfully" };
        } catch (error) {
            return { error: error.message };
        }
    }

    async update(id: string, updateTaskDTO: UpdateTaskDto): Promise<Task | { error: string }> {
        try {
            const updatedTask = await this.taskModel.findByIdAndUpdate(id, updateTaskDTO, { new: true });
            return updatedTask;
        } catch (error) {
            return { error: error.message };
        }
    }
}
