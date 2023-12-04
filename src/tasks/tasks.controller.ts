import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksService } from './tasks.service';
import { Task } from './interfaces/task.interface';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService){}

    @Get()
    findAll(): Task[] {
        return this.tasksService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string) : Task{
        return this.tasksService.findById(id);
    }

    @Post()
    create(@Body() createTaskDTO: CreateTaskDto): string {
        return `Title: ${createTaskDTO.title} Description: ${createTaskDTO.description} Assigned to: ${createTaskDTO.assignedTo}`;
    }

    @Delete(':id')
    delete(@Param('id') id: string): string{
        return `Delete Task with id: ${id}`
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateTaskDTO: UpdateTaskDto): string{
        return `Title: ${updateTaskDTO.title} Description: ${updateTaskDTO.description} Assigned to: ${updateTaskDTO.assignedTo}`;
    }
}



