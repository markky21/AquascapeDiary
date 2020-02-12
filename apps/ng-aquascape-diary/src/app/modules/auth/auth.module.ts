import { NgModule } from '@angular/core';
import { UiAuthModule } from '@aquascape-diary/ui';

import { AppAuthService } from './app-auth.service';

@NgModule({
  imports: [UiAuthModule],
  providers: [AppAuthService]
})
export class AuthModule {}
