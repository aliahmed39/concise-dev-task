import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionService } from './questions.service';
import { QuestionController } from './questions.controller';
import { Question } from './questions.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Question]),
  ],
  providers: [QuestionService],
  controllers: [QuestionController],
})
export class QuestionModule {}
