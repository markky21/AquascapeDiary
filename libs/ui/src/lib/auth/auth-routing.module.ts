import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  NbAuthComponent,
  NbLogoutComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent
} from '@nebular/auth';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OAuth2LoginComponent } from './oauth2-login/oauth2-login.component';
import { Oauth2CallbackComponent } from './oauth2-callback/oauth2-callback.component';

export const routes: Routes = [
  {
    path: '',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
