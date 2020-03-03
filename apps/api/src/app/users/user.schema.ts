import * as mongoose from 'mongoose';

import { Schema } from '../../interfaces/api.model';
import { User } from '../../interfaces/users.model';

const user: Schema<User> = {
  resetToken: String,
  resetTokenExpiration: Number,
  email: String,
  password: String,
  fullName: String
};

export const UserSchema = new mongoose.Schema(user);
