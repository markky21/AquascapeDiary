import * as mongoose from 'mongoose';

import { Schema } from '../../interfaces/api.model';
import { User } from '../../interfaces/user.model';

const user: Schema<User> = {
  email: String,
  name: String,
  password: String,
  userId: Number,
  username: String
};

export const UserSchema = new mongoose.Schema(user);
