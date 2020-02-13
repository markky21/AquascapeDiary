import { Routes } from '@angular/router';
import {
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent
} from '@nebular/auth';

import { Oauth2CallbackComponent } from './oauth2-callback/oauth2-callback.component';
import { OAuth2LoginComponent } from './oauth2-login/oauth2-login.component';

export const authRoutes: Routes = [
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
  },
  {
    path: 'oauth2',
    component: OAuth2LoginComponent,
    children: [
      { path: '', component: OAuth2LoginComponent },
      { path: 'callback', component: Oauth2CallbackComponent }
    ]
  }
];
