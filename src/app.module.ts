import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseFactory } from './config/database/database.factory';
import DatabaseConfiguration from './config/database/database';
import { UsersModule } from './users/users.module';
import { QuestionModule } from './questions/questions.module';
import {CategoryModule} from './categories/categories.module'
import { UserAnswerModule } from './user_answered_questions/user_answered_questions.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [DatabaseConfiguration],
    }),
    UsersModule,
    QuestionModule,
    CategoryModule,
    UserAnswerModule,
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      imports: [ConfigModule],
      useFactory: DatabaseFactory,
    }),
  ],
})
export class AppModule {}
