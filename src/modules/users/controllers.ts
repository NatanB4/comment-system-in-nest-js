// src/users/user.controller.ts
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './services';
import { User } from './contracts/models/user';
import { CreateUserDto } from './contracts/dto/create.ts';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @P
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  @Get(':id')
  async findUserById(@Param('id') id: number): Promise<User | null> {
    return this.userService.findUserById(id);
  }

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }
}
