import { Injectable } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppLocation } from '../services/app-location.service';
import { UITheme } from '../ui.model';

@Injectable({
  providedIn: 'root'
})
export class BaseLayoutService {
  public readonly showSubheader$ = this.handleShowSubheader();
  public readonly showSideNav$ = this.handleSideNav();

  public currentTheme: UITheme = this.themeService.currentTheme as UITheme;

  public constructor(
    private themeService: NbThemeService,
    private appLocation: AppLocation
  ) {}

  public toggleTheme(): void {
    this.currentTheme =
      this.currentTheme === UITheme.light ? UITheme.dark : UITheme.light;
    this.themeService.changeTheme(this.currentTheme);
  }

  public handleShowSubheader(): Observable<boolean> {
    return this.appLocation.url$.pipe(
      map(route => {
        switch (route) {
          case '/diary':
            return true;
          default:
            return false;
        }
      })
    );
  }

  public handleSideNav(): Observable<boolean> {
    return this.appLocation.url$.pipe(
      map(route => {
        switch (route) {
          case '/diary':
            return true;
          default:
            return false;
        }
      })
    );
  }
}
