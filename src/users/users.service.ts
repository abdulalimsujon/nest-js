/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

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
      const rolesArray = this.users.filter((user) => user.role === role);
      if (rolesArray.length === 0) {
        throw new NotFoundException('user role is not found');
        
      }
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.filter((user) => user.id === id);
    if (!user) {
      throw new NotFoundException('The user is not found');
    }
  }

  create(user: CreateUserDto) {
    const userByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = { id: userByHighestId[0].id + 1, ...user };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updatedUser: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUser };
      }
      return user;
    });
    return this.findOne(id);
  }

  delete(id: number) {
    const removeUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removeUser;
  }
}
