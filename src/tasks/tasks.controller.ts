import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
    @Get()
    findAll(): string {
        return 'This action returns all cats';
    }

    @Get(':id')
    findById(@Param('id') id: number) : string{
        return `task with id: ${id}`
    }

    @Post()
    create(@Body() createTaskDTO: CreateTaskDto): string {
        return `Title: ${createTaskDTO.title} Description: ${createTaskDTO.description} Assigned to: ${createTaskDTO.assignedTo}`;
    }

    @Delete(':id')
    delete(@Param('id') id: number): string{
        return `Delete Task with id: ${id}`
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateTaskDTO: UpdateTaskDto): string{
        return `Title: ${updateTaskDTO.title} Description: ${updateTaskDTO.description} Assigned to: ${updateTaskDTO.assignedTo}`;
    }
}



