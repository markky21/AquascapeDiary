import { JWT_SECRET } from '@aquascape-diary/secrets';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';

import { UserLogged } from '../../interfaces/users.model';

export interface JwtStrategyServiceInterface {
  name: string;
  authenticate(req: any, options?: any): void | any;
  error(err: Error): void;
  fail(challenge: any | number, status?: number): void;
  pass(): void;
  redirect(url: string, status?: number): void;
  success(user: any, info?: any): void;
  validate(
    payload: { username: string; sub: string; iat: number; exp: number },
    done: VerifiedCallback
  ): Promise<Pick<UserLogged, '_id' | 'email'>>;
}

@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy) implements JwtStrategyServiceInterface {
  public constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: JWT_SECRET.secret
    });
  }

  public async validate(
    payload: {
      username: string;
      sub: string;
      iat: number;
      exp: number;
    },
    done: VerifiedCallback
  ): Promise<Pick<UserLogged, '_id' | 'email'>> {
    return { _id: payload.sub, email: payload.username };
  }
}
