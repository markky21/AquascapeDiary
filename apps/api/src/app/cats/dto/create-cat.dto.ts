import { Cat } from '../interfaces/cats.interface';

export class CreateCatDto implements Cat {
  public readonly name: string;
  public readonly age: number;
  public readonly breed: string;
}
