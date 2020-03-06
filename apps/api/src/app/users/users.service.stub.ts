import { Model } from 'mongoose';
import { Doc } from '../../interfaces/api.model';
import { User } from '../../interfaces/users.model';
import { UserCreateDto } from './dto/user-create.dto';
import { UserDoc } from './users.interfaces';
import { UsersServiceInterface } from './users.service';

export class UsersServiceStub implements UsersServiceInterface {
  public getModel: Model<UserDoc>;

  public create(createUserDto: UserCreateDto): Promise<Doc<User>> {
    return Promise.resolve(null);
  }

  public findAll(): Promise<Doc<User>[]> {
    return Promise.resolve(null);
  }

  public findOne(conditions: any): Promise<Doc<User>> {
    return Promise.resolve(null);
  }
}
