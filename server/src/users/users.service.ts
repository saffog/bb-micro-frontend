import { Injectable } from '@nestjs/common';

export type User = {
  userId: number;
  email: string;
  password: string;
  accountType: string;
};

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      email: 'san',
      password: '123',
      accountType: 'PERSONAL',
      
    },
    {
      userId: 2,
      email: 'Alejandro@gmail.com',
      password: 'prueba123',
      accountType: 'ENTERPRISE',
      
    },
    {
      userId: 3,
      email: 'Alfonso@gmail.com',
      password: '1234',
      accountType: 'PERSONAL',
      
    },
    {
      userId: 4,
      email: 'Freddy@gmail.com',
      password: '123',
      accountType: 'ENTERPRISE',
      
    },
  ];

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }
}
