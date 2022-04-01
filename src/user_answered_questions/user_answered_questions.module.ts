import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAnswerController } from './user_answered_questions.controller';
import { UserAnswersQuestion } from './user_answered_questions.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserAnswersQuestion]),
  ],
  controllers: [UserAnswerController],
})
export class UserAnswerModule {}
