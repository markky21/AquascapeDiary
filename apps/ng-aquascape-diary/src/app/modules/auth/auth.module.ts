import { NgModule } from '@angular/core';
import { UiAuthModule } from '@aquascape-diary/ui';

import { AuthService } from './auth.service';

@NgModule({
  imports: [UiAuthModule],
  providers: [AuthService]
})
export class AuthModule {}
