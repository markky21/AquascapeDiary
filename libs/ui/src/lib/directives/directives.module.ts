import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleSignInDirective } from './google-sign-in.directive';

const directives = [GoogleSignInDirective];

@NgModule({
  declarations: [...directives],
  imports: [CommonModule],
  exports: [...directives]
})
export class DirectivesModule {}
