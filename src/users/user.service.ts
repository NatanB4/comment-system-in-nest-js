// src/users/user.service.ts
import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private readonly userRepository: UserRepository
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.createUser(createUserDto);
  }

  async findUserById(id: number): Promise<User | null> {
    return this.userRepository.findUserById(id);
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.getAllUsers();
  }
}
