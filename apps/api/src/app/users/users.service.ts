import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Doc } from '../../interfaces/api.model';
import { User } from '../../interfaces/users.model';

import { EncryptService } from '../services/encrypt.service';
import { UserCreateDto } from './dto/user-create.dto';
import { UserDoc, UserModel } from './users.interfaces';

export interface UsersServiceInterface {
  getModel: Model<UserDoc>;
  create(createUserDto: UserCreateDto): Promise<Doc<User>>;
  findAll(): Promise<Doc<User>[]>;
  findOne(conditions: any): Promise<Doc<User>>;
}

@Injectable()
export class UsersService implements UsersServiceInterface {
  public constructor(@InjectModel('User') private readonly userModel: UserModel) {}

  public get getModel(): UserModel {
    return this.userModel;
  }

  public async create(createUserDto: UserCreateDto): Promise<Doc<User>> {
    return EncryptService.hash(createUserDto.password).then(password => {
      const toSave: UserCreateDto = { ...createUserDto, password };
      return new this.userModel(toSave).save();
    });
  }

  public async findOne(conditions: any): Promise<Doc<User>> {
    return this.userModel.findOne(conditions);
  }

  public async findAll() {
    return this.userModel.find().exec();
  }
}
