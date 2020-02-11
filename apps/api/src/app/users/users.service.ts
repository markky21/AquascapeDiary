import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';

import { User } from '../../interfaces/users.model';

import { UserCreateDto } from './dto/user-create.dto';
import { UserModel } from './interfaces/users.interfaces';

@Injectable()
export class UsersService {
  public constructor(
    @InjectModel('User') private readonly userModel: UserModel
  ) {}

  public async create(createUserDto: UserCreateDto): Promise<User> {
    return bcrypt.hash(createUserDto.password, 12).then(password => {
      const toSave: UserCreateDto = { ...createUserDto, password };
      return new this.userModel(toSave).save();
    });
  }

  public async findOne(conditions: any): Promise<User> {
    return this.userModel.findOne(conditions);
  }

  public async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
