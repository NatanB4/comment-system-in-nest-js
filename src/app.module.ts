import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UserController } from './users/user.controller';
import { UserService } from './users/user.service';
import { usersProviders } from './users/user.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [
    UserService,
    ...usersProviders,
  ],
})
export class AppModule {}
