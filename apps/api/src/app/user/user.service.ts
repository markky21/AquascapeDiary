import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

import { UserModel } from '../users/interfaces/users.interfaces';

@Injectable()
export class UserService {
  public constructor(
    // @InjectModel('User') private readonly userModel: UserModel,
    @InjectConnection() private readonly connection: Connection
  ) {}
}
