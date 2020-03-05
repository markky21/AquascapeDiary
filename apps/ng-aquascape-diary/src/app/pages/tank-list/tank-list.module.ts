import { NgModule } from '@angular/core';

import { TankListModule } from '@aquascape-diary/ui';
import { TankListWrapperComponent } from './tank-list-wrapper.component';

@NgModule({
  declarations: [TankListWrapperComponent],
  imports: [TankListModule],
  entryComponents: [TankListWrapperComponent]
})
export class TankListWrapperModule {}
