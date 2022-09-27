import { Controller, Get, Param } from '@nestjs/common';
import { UserDTO, UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string): UserDTO | undefined {
    return this.usersService.getUserById(id);
  }
}
