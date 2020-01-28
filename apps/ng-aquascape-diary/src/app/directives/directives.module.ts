import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleSignInDirective } from './google-sign-in.directive';



@NgModule({
  declarations: [GoogleSignInDirective],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
