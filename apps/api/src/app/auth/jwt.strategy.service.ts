import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { JWT_SECRET } from '../../../../../libs/secrets/src/api/auth.secret';


@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy) {
  public constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: JWT_SECRET.secret,
    });
  }

  public async validate(payload: any) {
    // TODO add more image, name, nickname. etc
    return { userId: payload.sub, username: payload.username };
  }
}
