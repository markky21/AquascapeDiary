import { OAUTH2_SECRET } from '@aquascape-diary/secrets';
import {
  NbAuthJWTToken,
  NbOAuth2AuthStrategy,
  NbOAuth2ResponseType,
  NbPasswordAuthStrategy
} from '@nebular/auth';
import { NbAuthOptions } from '@nebular/auth/auth.options';

export const nbAuthOptions: NbAuthOptions = {
  strategies: [
    NbPasswordAuthStrategy.setup({
      name: 'email',
      login: {
        redirect: {
          success: '/diary',
          failure: null
        }
      },
      logout: {
        method: 'post',
        redirect: {
          success: '/',
          failure: null
        }
      },
      token: {
        class: NbAuthJWTToken,
        key: 'access_token'
      }
    }),
    NbOAuth2AuthStrategy.setup({
      name: 'google',
      clientId:
        '945901052792-g8qrq7qdeeusfticlf3uk0r62uulqdv5.apps.googleusercontent.com',
      clientSecret: OAUTH2_SECRET.clientSecret,
      authorize: {
        endpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
        responseType: NbOAuth2ResponseType.TOKEN,
        scope: 'https://www.googleapis.com/auth/userinfo.profile',
        redirectUri: 'http://localhost:4200/auth/oauth2/callback'
      }
    })
  ],
  forms: { login: { redirectDelay: 3000 } }
};
