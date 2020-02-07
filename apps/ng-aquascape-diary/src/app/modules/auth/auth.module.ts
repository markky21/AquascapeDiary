import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  NbAuthComponent,
  NbAuthModule,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent
} from '@nebular/auth';

import { nbAuthOptions } from './auth.config';

@NgModule({
  declarations: [],
  imports: [
    // UiAuthModule
    RouterModule.forChild([
      {
        path: 'auth',
        component: NbAuthComponent,
        children: [
          {
            path: '',
            component: NbLoginComponent
          },
          {
            path: 'login',
            component: NbLoginComponent
          },
          {
            path: 'register',
            component: NbRegisterComponent
          },
          {
            path: 'logout',
            component: NbLogoutComponent
          },
          {
            path: 'request-password',
            component: NbRequestPasswordComponent
          },
          {
            path: 'reset-password',
            component: NbResetPasswordComponent
          }
        ]
      }
    ]),
    NbAuthModule.forRoot(nbAuthOptions)
  ]
})
export class AuthModule {}
