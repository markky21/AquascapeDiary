import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

import { User, UserModel } from '../../interfaces/user.model';

@Injectable()
export class UsersService {
  public users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme'
    },
    {
      userId: 2,
      username: 'chris',
      password: 'secret'
    },
    {
      userId: 3,
      username: 'maria',
      password: 'guess'
    }
  ];

  public constructor(
    @InjectModel('User') private readonly userModel: UserModel,
    @InjectConnection() private readonly connection: Connection
  ) {}

  public async addNewUser(user: User): Promise<User> {
    return this.userModel.create(user);
  }

  public async findOne(username: string): Promise<User> {
    return this.users.find(user => user.username === username);
  }

  public async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
