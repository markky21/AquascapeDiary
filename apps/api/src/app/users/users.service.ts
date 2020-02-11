import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { User } from '../../interfaces/users.model';

import { UserCreateDto } from './dto/user-create.dto';
import { UserModel } from './interfaces/users.interfaces';
import { EncryptService } from '../services/encrypt.service';

@Injectable()
export class UsersService {
  public constructor(
    @InjectModel('User') private readonly userModel: UserModel
  ) {}

  public async create(createUserDto: UserCreateDto): Promise<User> {
    return EncryptService.hash(createUserDto.password).then(password => {
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
