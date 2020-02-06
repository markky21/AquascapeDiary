import { Document } from 'mongoose';

export type Schema<T> = {
  [P in keyof T]: new () => T[P];
};

export type Doc<T> = T & Document;
