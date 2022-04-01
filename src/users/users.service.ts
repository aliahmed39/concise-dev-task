import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,In } from 'typeorm';
import { User } from './users.entity';
import { Question } from '../questions/questions.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Question) private readonly questionRepository: Repository<Question>,
  ) {}

  async userById(id){
    try{
      return await this.userRepository.findOneOrFail({
        where:{
          id
        }
      })
    }catch(error){
      return error
    }
    
  }

  async addUser(args){
    try{
      const user = new User()
      user.first_name=args.first_name
      user.last_name=args.last_name
      return await this.userRepository.save(user)

    }catch(error){
      return error
    }
  }

  async startQuiz(args){
    const {categories,totalNoOfQuestions,wishQuestions} = args
     return await this.questionRepository
    .createQueryBuilder('question')
    .where('category_id =:categories',{categories})
    // .andWhere() we can get all wish question here
    .take(totalNoOfQuestions)
    .getMany()

    //once we send all the question then frontend can handle all questions 
    // one by one or we can add pagination here as well

  }
}
