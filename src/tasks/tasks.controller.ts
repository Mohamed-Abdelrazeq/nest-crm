import { Controller, Get, Post, Put, Delete, Body, } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    @Get()
    findAll(): string {
        return 'This action returns all cats';
    }

    @Post()
    create(@Body() createTaskDTO: CreateTaskDto): string {
        return `Title: ${createTaskDTO.title} Description: ${createTaskDTO.description} Assigned to: ${createTaskDTO.assignedTo}`;
    }
}


