import * as mongoose from 'mongoose';

import { UserSchema } from '../user/user.schema';

export const UsersSchema = new mongoose.Schema({
  users: [UserSchema]
});
