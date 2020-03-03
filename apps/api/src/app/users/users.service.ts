import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { EncryptService } from '../services/encrypt.service';
import { UserCreateDto } from './dto/user-create.dto';
import { UserModel } from './users.interfaces';

@Injectable()
export class UsersService {
  public constructor(@InjectModel('User') private readonly userModel: UserModel) {}

  public get getModel(): UserModel {
    return this.userModel;
  }

  public async create(createUserDto: UserCreateDto) {
    return EncryptService.hash(createUserDto.password).then(password => {
      const toSave: UserCreateDto = { ...createUserDto, password };
      return new this.userModel(toSave).save();
    });
  }

  public async findOne(conditions: any) {
    return this.userModel.findOne(conditions);
  }

  public async findAll() {
    return this.userModel.find().exec();
  }
}
