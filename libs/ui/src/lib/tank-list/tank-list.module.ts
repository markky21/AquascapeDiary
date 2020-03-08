import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NbButtonModule, NbCardModule, NbIconModule, NbListModule } from '@nebular/theme';
import { TankListComponent } from './tank-list.component';

@NgModule({
  declarations: [TankListComponent],
  imports: [CommonModule, NbCardModule, NbListModule, NbIconModule, NbButtonModule, RouterModule],
  exports: [TankListComponent]
})
export class TankListModule {}
