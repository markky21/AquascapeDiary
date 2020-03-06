import { UserLogged } from '../../interfaces/users.model';
import { LocalStrategyServiceInterface } from './local.strategy.service';

export class LocalStrategyServiceStub implements LocalStrategyServiceInterface {
  public name: string;

  public authenticate(req: any, options?: any): void | any {}

  public error(err: Error): void {}

  public fail(challenge: any | number, status?: number): void {}

  public pass(): void {}

  public redirect(url: string, status?: number): void {}

  public success(user: any, info?: any): void {}

  public validate(email: string, password: string): Promise<UserLogged> {
    return Promise.resolve(null);
  }
}
