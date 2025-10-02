import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async createUser(user: Prisma.UserCreateInput) {
    const newUser = await this.databaseService.user.create({
      data: user,
    });
    return newUser;
  }s
}
