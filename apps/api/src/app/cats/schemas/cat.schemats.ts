import * as mongoose from 'mongoose';

import { Schema } from '../../../interfaces/api.model';
import { Cat } from '../interfaces/cats.interface';

const cat: Schema<Cat> = {
  name: String,
  age: Number,
  breed: String
};

export const CatSchema = new mongoose.Schema(cat);
