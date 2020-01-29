import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UITheme } from '../ui.model';
import { NbThemeService } from '@nebular/theme';
import { map } from 'rxjs/operators';
import { AppLocation } from '../../../../../apps/ng-aquascape-diary/src/services/app-location.service';

@Injectable({
  providedIn: 'root'
})
export class BaseLayoutService {
  public readonly showSubheader$ = this.handleShowSubheader();
  public readonly showSideNav$ = this.handleSideNav();

  public currentTheme: UITheme = this.themeService.currentTheme as UITheme;

  constructor(
    private themeService: NbThemeService,
    private appLocation: AppLocation
  ) {}

  toggleTheme(): void {
    this.currentTheme =
      this.currentTheme === UITheme.light ? UITheme.dark : UITheme.light;
    this.themeService.changeTheme(this.currentTheme);
  }

  handleShowSubheader(): Observable<boolean> {
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

  handleSideNav(): Observable<boolean> {
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
