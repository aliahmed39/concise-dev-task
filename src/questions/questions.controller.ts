import { Body, Controller, Get, Put} from '@nestjs/common';
import { QuestionService } from './questions.service';
import {Question} from './questions.entity'

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Put('addQuestion')
  async addQuestion(@Body() args):Promise<Question>{
    return await this.questionService.addQuestion(args)
  }
  //we can add further api here 

}
