import { User } from './user.model';

export class UserRepository {
  async createUser(createUserDto): Promise<User> {
    return User.create(createUserDto);
  }

  async findUserById(id: number): Promise<User | null> {
    return User.findByPk(id);
  }

  async getAllUsers(): Promise<User[]> {
    return User.findAll();
  }
}