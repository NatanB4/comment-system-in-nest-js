import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/module';
import { UserController } from './modules/users/controller';
import { UserService } from './modules/users/service';
import { UserRepositories } from './modules/users/repositories';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [
    UserService,
    UserRepositories,
  ],
})
export class AppModule {}
