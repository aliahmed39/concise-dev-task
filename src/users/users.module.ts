import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './users.service';
import { UserController } from './users.controller';
import { User } from './users.entity';
import {Question} from '../questions/questions.entity'

@Module({
  exports: [UserService],
  providers: [UserService],
  controllers: [UserController],
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Question]),
  ],
})
export class UsersModule {}
