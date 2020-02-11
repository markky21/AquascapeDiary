import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat, CatModel } from './interfaces/cats.interface';
import { Model } from 'mongoose';

@Injectable()
export class CatsService {
  public constructor(@InjectModel('Cat') private readonly catModel: CatModel) {}

  public async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  public async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }
}
