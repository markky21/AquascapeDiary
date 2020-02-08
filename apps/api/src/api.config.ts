import { JWT_SECRET } from '@aquascape-diary/secrets';
import { JwtModuleOptions } from '@nestjs/jwt/dist/interfaces/jwt-module-options.interface';


/*********************************
  AUTH
*********************************/

export const jwtModuleOptions: JwtModuleOptions = {
  secret: JWT_SECRET.secret,
  signOptions: { expiresIn: '600s' }
};
