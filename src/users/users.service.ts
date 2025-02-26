/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      role: 'ENGINEER',
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob.smith@example.com',
      role: 'ADMIN',
    },
    {
      id: 3,
      name: 'Charlie Davis',
      email: 'charlie.davis@example.com',
      role: 'ADMIN',
    },
    {
      id: 4,
      name: 'David Clark',
      email: 'david.clark@example.com',
      role: 'ENGINEER',
    },
    {
      id: 5,
      name: 'Eva Taylor',
      email: 'eva.taylor@example.com',
      role: 'INTERN',
    },
  ];

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    } else {
      return this.users;
    }
  }

  findOne(id: number) {
    if (id) {
      return this.users.filter((user) => user.id === id);
    }
  }

  create(user: {
    name: string;
    email: string;
    role: 'INTERN' | 'ENGINEER' | 'ADMIN';
  }) {
    const userByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = { id: userByHighestId[0].id + 1, ...user };
    this.users.push(newUser);
  }
}
