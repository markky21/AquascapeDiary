import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tank } from './tank-list.model';

@Component({
  selector: 'aquascape-diary-tank-list',
  templateUrl: './tank-list.component.html',
  styleUrls: ['./tank-list.component.scss']
})
export class TankListComponent implements OnInit {
  @Input() public tanks: Tank[] = new Array(100);

  @Output() public addNewTank = new EventEmitter<null>();

  public isFlippedCardNewTank: boolean = false;
  public constructor() {}

  public ngOnInit() {}

  public loadNextTanks(): void {
    console.log('loadNextTanks');
  }

  public setFlipCardNewTank(flipped: boolean): void {
    this.isFlippedCardNewTank = flipped;
  }
}
