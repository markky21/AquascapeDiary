import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbAuthModule } from '@nebular/auth';
import {
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule
} from '@nebular/theme';

import { DirectivesModule } from '../directives/directives.module';

import { AuthRoutingModule } from './auth-routing.module';
import { nbAuthOptions } from './auth.config';
import { LoginComponent } from './login/login.component';
import { Oauth2CallbackComponent } from './oauth2-callback/oauth2-callback.component';
import { OAuth2LoginComponent } from './oauth2-login/oauth2-login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    AuthRoutingModule,
    CommonModule,
    FormsModule,
    NbAlertModule,
    NbAuthModule.forRoot(nbAuthOptions),
    NbButtonModule,
    NbCheckboxModule,
    NbInputModule,
    RouterModule,
    DirectivesModule,
    NbIconModule,
    NbLayoutModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    OAuth2LoginComponent,
    Oauth2CallbackComponent
  ],
  exports: [NbAuthModule]
})
export class UiAuthModule {}
