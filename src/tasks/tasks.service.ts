import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/task.interface';

@Injectable()
export class TasksService {
    private readonly tasks: Task[] = [
        {
            id: '1',
            title: 'Task 1',
            description: 'Description 1',
            assignedTo: 'John Doe',
        },
        {
            id: '2',
            title: 'Task 2',
            description: 'Description 2',
            assignedTo: 'Jane Doe',
        },
        {
            id: '3',
            title: 'Task 3',
            description: 'Description 3',
            assignedTo: 'John Doe',
        },
    ];

    create(task: Task) {
        this.tasks.push(task);
    }

    findAll(): Task[] {
        return this.tasks;
    }

    findById(id: string): Task{
        return this.tasks.find(task=>task.id === id);
    }
}
