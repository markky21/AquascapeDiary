import {
  NbOAuth2AuthStrategy,
  NbOAuth2ResponseType,
  NbPasswordAuthStrategy
} from '@nebular/auth';
import { NbAuthOptions } from '@nebular/auth/auth.options';

export const nbAuthOptions: NbAuthOptions = {
  strategies: [
    NbPasswordAuthStrategy.setup({
      name: 'email'
    }),
    NbOAuth2AuthStrategy.setup({
      name: 'google',
      clientId:
        '945901052792-g8qrq7qdeeusfticlf3uk0r62uulqdv5.apps.googleusercontent.com',
      clientSecret: 'ck_wXobY_CuMaU9Ku5u0uGgG',
      authorize: {
        endpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
        responseType: NbOAuth2ResponseType.TOKEN,
        scope: 'https://www.googleapis.com/auth/userinfo.profile',
        redirectUri: 'http://localhost:4200/auth/oauth2/callback'
      }
    })
  ],
  forms: {}
};
