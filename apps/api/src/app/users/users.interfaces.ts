import { Model } from 'mongoose';

import { Doc } from '../../interfaces/api.model';
import { User } from '../../interfaces/users.model';

export type UserDoc = Doc<User>;
export type UserModel = Model<UserDoc>;
