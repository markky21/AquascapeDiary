import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TankListComponent } from './tank-list.component';
import { NbButtonModule, NbCardModule, NbIconModule, NbListModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TankListComponent],
  imports: [CommonModule, NbCardModule, NbListModule, NbIconModule, NbButtonModule, RouterModule],
  exports: [TankListComponent]
})
export class TankListModule {}
