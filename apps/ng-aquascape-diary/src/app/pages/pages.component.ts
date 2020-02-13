import { Component, OnDestroy } from '@angular/core';
import { tap } from 'rxjs/operators';

import { LayoutService } from '../@core/services/layout.service';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout [showSideBar]="showSideBar$ | async">
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `
})
export class PagesComponent implements OnDestroy {
  public menu = MENU_ITEMS;

  public readonly showSideBar$ = this.layoutService.getShowSideBar$();
  public constructor(public layoutService: LayoutService) {}

  public ngOnDestroy() {
    this.layoutService.hostDestroyed();
  }
}
