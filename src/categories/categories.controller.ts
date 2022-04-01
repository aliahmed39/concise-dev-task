import { Body, Controller, Get, Put} from '@nestjs/common';
import { CategoryService } from './categories.service';
import {Categories} from './categories.entity'

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Put('addCategory')
  async addCategory(@Body() args):Promise<Categories>{
    return await this.categoryService.addCategory(args)
  }

}
