import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NbSidebarService, NbThemeService } from '@nebular/theme';
import { UITheme } from '../ui.model';

@Component({
  selector: 'aquascape-diary-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseLayoutComponent {
  @Input() routes: string[];

  currentTheme: UITheme = UITheme.light;

  constructor(
    private sidebarService: NbSidebarService,
    private themeService: NbThemeService
  ) {}

  toggleSideNav(): boolean {
    this.sidebarService.toggle(true);
    return false;
  }

  toggleTheme(): void {
    this.currentTheme =
      this.currentTheme === UITheme.light ? UITheme.dark : UITheme.light;
    this.themeService.changeTheme(this.currentTheme);
  }
}
