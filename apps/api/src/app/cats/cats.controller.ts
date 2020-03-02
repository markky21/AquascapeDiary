import { Body, Controller, Get, Post } from '@nestjs/common';

import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cats.interface';

@Controller('cats')
export class CatsController {
  public constructor(private readonly catsService: CatsService) {}

  @Post()
  public async create(@Body() createCatDto: CreateCatDto) {
    console.log({ createCatDto });
    await this.catsService.create(createCatDto);
  }

  @Get()
  public async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
