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
  NbInputModule
} from '@nebular/theme';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  imports: [
    AuthRoutingModule,
    CommonModule,
    FormsModule,
    NbAlertModule,
    NbAuthModule.forRoot(),
    NbButtonModule,
    NbCheckboxModule,
    NbInputModule,
    RouterModule,
    DirectivesModule,
    NbIconModule
  ],
  declarations: [LoginComponent]
})
export class UiAuthModule {}
