import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksService } from './tasks.service';
import { Task } from './interfaces/task.interface';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService){}

    @Get()
    async findAll(): Promise<Task[]> {
        return await this.tasksService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string) : Promise<Task>{
        return this.tasksService.findById(id);
    }

    @Post()
    async create(@Body() createTaskDTO: CreateTaskDto): Promise<Task> {
        return this.tasksService.create(createTaskDTO);
    }

    // @Delete(':id')
    // delete(@Param('id') id: string): string{
    //     return `Delete Task with id: ${id}`
    // }

    // @Put(':id')
    // update(@Param('id') id: string, @Body() updateTaskDTO: UpdateTaskDto): string{
    //     return `Title: ${updateTaskDTO.title} Description: ${updateTaskDTO.description} Assigned to: ${updateTaskDTO.assignedTo}`;
    // }
}



