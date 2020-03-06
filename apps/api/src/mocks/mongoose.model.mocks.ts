import { getModelToken } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { UserSchema } from '../app/users/user.schema';

/*
Users
 */
export const UserModelMock = mongoose.model('User', UserSchema);

export const ModelsMocksArray = [{ provide: getModelToken('User'), useValue: UserModelMock }];
