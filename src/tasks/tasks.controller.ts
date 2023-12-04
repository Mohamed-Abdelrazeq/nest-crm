import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksService } from './tasks.service';
import { Task } from './interfaces/task.interface';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService){}

    @Get()
    async findAll(): Promise<Task[] | {error: string}> {
        return await this.tasksService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string) : Promise<Task | {error: string}>{
        return this.tasksService.findById(id);
    }

    @Post()
    async create(@Body() createTaskDTO: CreateTaskDto): Promise<Task | { error: string}> {
        return  await this.tasksService.create(createTaskDTO);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<{ message: string } | { error: string }>{
        return await this.tasksService.delete(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateTaskDTO: UpdateTaskDto): Promise<Task | { error: string }>{
       return await this.tasksService.update(id, updateTaskDTO);
    }
}



