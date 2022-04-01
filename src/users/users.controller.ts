import { Body, Controller, Get, Post, Put, Req } from '@nestjs/common';
import { UserService } from './users.service';
import {User} from './users.entity'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('userById') 
  async userById(@Body() args):Promise<User> {
    return await this.userService.userById(args.id);
  }

  @Put('addUser')
  async addUser(@Body() args):Promise<User>{
    return await this.userService.addUser(args)
  }

  @Post('startQuiz')
  async startQuiz(@Body() args){
    return await this.userService.startQuiz(args)
  }
}
