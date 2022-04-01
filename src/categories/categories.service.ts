import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categories } from './categories.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Categories) private readonly categoryRepository: Repository<Categories>,
  ) {}

  async addCategory(args){
    try{
      const catogory = new Categories()
      catogory.name=args.name
      return await this.categoryRepository.save(catogory)

    }catch(error){
      return error
    }
  }
}
