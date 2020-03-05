import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { Observable, Subject } from 'rxjs';

import { Theme } from '../../../@core/models/core.model';
import { LayoutService } from '../../../@core/services/layout.service';
import { UiQuery } from '../../../@core/store/ui';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, OnDestroy {
  public showSideBar$: Observable<boolean> = this.uiQuery.layout_showSideBar$;
  private readonly destroy$: Subject<void> = new Subject();

  public constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private layoutService: LayoutService,
    private uiQuery: UiQuery
  ) {}

  public ngOnInit() {}

  public ngOnDestroy() {
    this.destroy$.next();
  }

  public toggleThemeClick(): void {
    this.themeService.changeTheme(this.themeService.currentTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }

  public toggleSidebar(): false {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();
    return false;
  }

  public navigateHome(): false {
    this.menuService.navigateHome();
    return false;
  }
}
