import { Model } from 'mongoose';

import { Doc } from './api.model';

export interface User {
  email?: String;
  name?: String;
  password: String;
  userId: Number;
  username: String;
}

export type UserDoc = Doc<User>;
export type UserModel = Model<UserDoc>;
