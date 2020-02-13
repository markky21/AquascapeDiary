import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  NbMenuService,
  NbSidebarService,
  NbThemeService
} from '@nebular/theme';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Theme } from '../../../@core/models/core.model';
import { LayoutService } from '../../../@core/services/layout.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, OnDestroy {
  public showSideBar$: Observable<boolean>;
  private readonly destroy$: Subject<void> = new Subject();

  public constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private layoutService: LayoutService
  ) {}

  public ngOnInit() {
    this.showSideBar$ = this.layoutService
      .getShowSideBar$()
      .pipe(tap(console.log));
  }

  public ngOnDestroy() {
    this.destroy$.next();
  }

  public toggleThemeClick(): void {
    this.themeService.changeTheme(
      this.themeService.currentTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    );
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
