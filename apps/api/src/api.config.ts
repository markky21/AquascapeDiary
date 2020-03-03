import { JWT_SECRET } from '@aquascape-diary/secrets';
import { JwtModuleOptions } from '@nestjs/jwt/dist/interfaces/jwt-module-options.interface';

/*********************************
  GENERAL
*********************************/

export const STATUS_OK = { status: 'OK' };

/*********************************
  AUTH
*********************************/

export const jwtModuleOptions: JwtModuleOptions = {
  secret: JWT_SECRET.secret,
  signOptions: { expiresIn: '600s' }
};

export const RESET_TOKEN_EXPIRATION_TIME = 3600000;

/*********************************
 EMAILS
 *********************************/

export const EMAIL_FROM = 'aquascape@diary.com';
