import { JWT_SECRET } from '@aquascape-diary/secrets';
import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import {
  ExtractJwt,
  Strategy,
  VerifiedCallback,
  VerifyCallback
} from 'passport-jwt';

import { AuthService } from './auth.service';
import { UserLogged, UserLogin } from '../../interfaces/users.model';

@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy) {
  public constructor(private authService: AuthService) {
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
