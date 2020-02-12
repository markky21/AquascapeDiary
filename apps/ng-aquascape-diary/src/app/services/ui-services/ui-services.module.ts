import { NgModule } from '@angular/core';
import { UserProfileMenuAbstractService } from '@aquascape-diary/ui';

import { UserProfileMenuService } from './user-profile-menu.service';

@NgModule({
  providers: [
    {
      provide: UserProfileMenuAbstractService,
      useClass: UserProfileMenuService
    }
  ]
})
export class UiServicesModule {}
