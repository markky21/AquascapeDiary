import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

import { UserLogged } from '../../interfaces/users.model';

import { AuthService } from './auth.service';

export interface LocalStrategyServiceInterface {
  name: string;
  authenticate(req: any, options?: any): void | any;
  error(err: Error): void;
  fail(challenge: any | number, status?: number): void;
  pass(): void;
  redirect(url: string, status?: number): void;
  success(user: any, info?: any): void;
  validate(email: string, password: string): Promise<UserLogged>;
}

@Injectable()
export class LocalStrategyService extends PassportStrategy(Strategy) implements LocalStrategyServiceInterface {
  public constructor(private readonly authService: AuthService) {
    super({ usernameField: 'email' });
  }

  public async validate(email: string, password: string): Promise<UserLogged> {
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
