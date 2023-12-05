import { Injectable } from '@nestjs/common';
import User from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      username: 'John Doe',
      email: 'John@gmail.com',
      password: 'password123',
      roles: ['admin', 'user'],
    },
    {
      id: 2,
      username: 'Jane Doe',
      email: 'Jane@gmail.com',
      password: 'password123',
      roles: ['user'],
    },
  ];

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }
}
