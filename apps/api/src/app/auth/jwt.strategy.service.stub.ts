import { VerifiedCallback } from 'passport-jwt';
import { UserLogged } from '../../interfaces/users.model';
import { JwtStrategyServiceInterface } from './jwt.strategy.service';

export class JwtStrategyServiceStub implements JwtStrategyServiceInterface {
  public name: string;

  public authenticate(req: any, options?: any): void | any {}

  public error(err: Error): void {}

  public fail(challenge: any | number, status?: number): void {}

  public pass(): void {}

  public redirect(url: string, status?: number): void {}

  public success(user: any, info?: any): void {}

  public validate(
    payload: { username: string; sub: string; iat: number; exp: number },
    done: VerifiedCallback
  ): Promise<Pick<UserLogged, '_id' | 'email'>> {
    return Promise.resolve(null);
  }
}
