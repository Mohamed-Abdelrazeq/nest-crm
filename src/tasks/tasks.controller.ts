import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    @Get()
    findAll(): string {
        return 'This action returns all cats';
    }

    @Get(':id')
    findById(@Param() param) : string{
        return `task with id: ${param.id}`
    }

    @Post()
    create(@Body() createTaskDTO: CreateTaskDto): string {
        return `Title: ${createTaskDTO.title} Description: ${createTaskDTO.description} Assigned to: ${createTaskDTO.assignedTo}`;
    }
}


