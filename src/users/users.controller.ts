import { Controller, Get, Param, Post } from '@nestjs/common';
import { UserDTO, UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser({ id, name }: { id: string; name: string }) {
    return this.usersService.addUser(name, id);
  }

  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string): UserDTO | undefined {
    return this.usersService.getUserById(id);
  }
}
