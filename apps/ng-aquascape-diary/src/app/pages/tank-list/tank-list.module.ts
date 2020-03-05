import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { TankListModule } from '@aquascape-diary/ui';
import { TankListWrapperComponent } from './tank-list-wrapper.component';

@NgModule({
  declarations: [TankListWrapperComponent],
  imports: [TankListModule, CommonModule],
  entryComponents: [TankListWrapperComponent]
})
export class TankListWrapperModule {}
