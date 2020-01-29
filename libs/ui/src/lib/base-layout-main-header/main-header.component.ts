import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output
} from '@angular/core';

import { BaseLayoutService } from '../base-layout/base-layout.service';

@Component({
  selector: 'aquascape-diary-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainHeaderComponent {
  @Output() public sideNavClick = new EventEmitter();
  @Output() public toggleThemeClick = new EventEmitter();
  public showSideNavButton$ = this.baseLayoutService.showSideNavButton$;

  public constructor(private baseLayoutService: BaseLayoutService) {}
}
