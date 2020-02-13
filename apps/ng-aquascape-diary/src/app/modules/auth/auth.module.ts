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

import { nbAuthOptions } from './auth.config';
import { Oauth2CallbackComponent } from './oauth2-callback/oauth2-callback.component';
import { OAuth2LoginComponent } from './oauth2-login/oauth2-login.component';

@NgModule({
  imports: [
    FormsModule,
    NbAlertModule,
    NbAuthModule.forRoot(nbAuthOptions),
    NbButtonModule,
    NbCheckboxModule,
    NbInputModule,
    RouterModule,
    NbIconModule,
    NbLayoutModule
  ],
  declarations: [OAuth2LoginComponent, Oauth2CallbackComponent],
  providers: [],
  exports: [NbAuthModule]
})
export class AuthModule {}
