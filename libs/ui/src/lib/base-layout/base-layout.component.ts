import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NbSidebarService, NbThemeService } from '@nebular/theme';
import { Observable } from 'rxjs';

import { UITheme } from '../ui.model';

import { BaseLayoutService } from './base-layout.service';

@Component({
  selector: 'aquascape-diary-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseLayoutComponent {
  public showSubheader$: Observable<boolean> = this.baseLayoutService.showSubheader$;
  public showSideNav$: Observable<boolean> = this.baseLayoutService.showSideNav$;

  public constructor(
    private baseLayoutService: BaseLayoutService,
    private sidebarService: NbSidebarService
  ) {}

  public toggleSideNav(): void {
    this.sidebarService.toggle(true);
  }

  public toggleTheme(): void {
    this.baseLayoutService.toggleTheme();
  }
}
