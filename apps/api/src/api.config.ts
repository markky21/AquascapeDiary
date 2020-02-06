import { JwtModuleOptions } from '@nestjs/jwt/dist/interfaces/jwt-module-options.interface';

import { JWT_SECRET } from '../../../libs/secrets/src/api/auth.secret';

/*********************************
  AUTH
*********************************/

export const jwtModuleOptions: JwtModuleOptions = {
  secret: JWT_SECRET.secret,
  signOptions: { expiresIn: '600s' }
};
