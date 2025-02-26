/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.userService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post()
  create(@Body() user: {}) {
    return user;
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateBody: {}) {
    return { id, ...updateBody };
  }
}
