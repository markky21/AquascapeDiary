import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NbSidebarService, NbThemeService } from '@nebular/theme';
import { UITheme } from '../ui.model';
import { BaseLayoutService } from './base-layout.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'aquascape-diary-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseLayoutComponent {
  showSubheader$: Observable<boolean> = this.baseLayoutService.showSubheader$;
  showSideNav$: Observable<boolean> = this.baseLayoutService.showSideNav$;

  constructor(
    private baseLayoutService: BaseLayoutService,
    private sidebarService: NbSidebarService
  ) {}

  toggleSideNav(): void {
    this.sidebarService.toggle(true);
  }

  toggleTheme(): void {
    this.baseLayoutService.toggleTheme();
  }
}
