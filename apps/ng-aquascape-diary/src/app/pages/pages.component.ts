import { Component, OnDestroy } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

import { LayoutService } from '../@core/services/layout.service';
import { UiQuery } from '../@core/store/ui';
import { copy } from '../@core/utils/deep-copy.operator';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout [showSideBar]="showSideBar$ | async">
      <nb-menu [items]="menuItems$ | async"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `
})
export class PagesComponent implements OnDestroy {
  public readonly menuItems$ = this.uiQuery.select('menu_items').pipe(copy());
  public readonly showSideBar$ = this.uiQuery.select('layout_showSideBar');

  public constructor(
    public layoutService: LayoutService,
    public uiQuery: UiQuery
  ) {}

  public ngOnDestroy() {
    this.layoutService.hostDestroyed();
  }
}
