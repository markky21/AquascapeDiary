import { Document } from 'mongoose';

export type Schema<T> = {
  [P in keyof T]: new () => T[P];
};

export type Doc<T> = T & Document;

export interface ApiPath {
  [key: string]: { [key2: string]: ApiPath } | string;
  name: string;
}
