import { NgModule } from '@angular/core';
import { NbAuthModule, NbOAuth2AuthStrategy, NbOAuth2ResponseType, NbPasswordAuthStrategy } from '@nebular/auth';



@NgModule({
  declarations: [],
  imports: [
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email'
        }),
        // NbOAuth2AuthStrategy.setup({
        //   name: 'google',
        //   clientId: '945901052792-a6a6j8r967famng9m3r501m4ipedmprb.apps.googleusercontent.com',
        //   clientSecret: '',
        //   authorize: {
        //     endpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
        //     responseType: NbOAuth2ResponseType.TOKEN,
        //     scope: 'https://www.googleapis.com/auth/userinfo.profile',
        //   }
        // }),
      ],
      forms: {}
    })
  ]
})
export class AuthModule {}
