import { Model } from 'mongoose';

import { Doc } from '../../../interfaces/api.model';

export interface Cat {
  name: String;
  age: Number;
  breed: String;
}

export type CatDoc = Doc<Cat>;
export type CatModel = Model<CatDoc>;
