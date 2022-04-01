import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './questions.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question) private readonly questionRepository: Repository<Question>,
  ) {}


  async addQuestion(args){
    try{
      const question = new Question()
      question.body=args.body
      question.answer_1=args.answer_1
      question.answer_2=args.answer_2
      question.answer_3=args.answer_3
      question.answer_4=args.answer_4
      question.correct_answer=args.correct_answer
      return await this.questionRepository.save(question)

    }catch(error){
      return error
    }
  }
}
