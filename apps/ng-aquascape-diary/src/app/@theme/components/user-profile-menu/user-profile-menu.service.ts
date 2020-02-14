import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { NbMenuItem } from '@nebular/theme';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { MenuItem } from './user-profile-menu.model';

@Injectable({ providedIn: 'root' })
export class UserProfileMenuService {
  private menuItemsWhenAuth: NbMenuItem[] = [
    { title: MenuItem.PROFILE },
    { title: MenuItem.LOGOUT }
  ];
  private menuItemsWhenNotAuth: NbMenuItem[] = [
    { title: MenuItem.LOGIN },
    { title: MenuItem.REGISTER }
  ];

  public constructor(
    private nbAuthService: NbAuthService,
    private router: Router
  ) {}

  public getMenuItems$(): Observable<NbMenuItem[]> {
    return this.nbAuthService
      .onAuthenticationChange()
      .pipe(
        map(isAuth =>
          isAuth ? this.menuItemsWhenAuth : this.menuItemsWhenNotAuth
        )
      );
  }
  public getName$(): Observable<string> {
    return of(null);
  }
  public getTitle$(): Observable<string> {
    return of(null);
  }
  public getBadgeText$(): Observable<string> {
    return of(null);
  }
  public getPicture$(): Observable<string> {
    return of(null);
  }

  public onMenuItemClick(menuItem: MenuItem): void {
    switch (menuItem) {
      case MenuItem.LOGOUT:
        this.router.navigate(['auth/logout']);
        break;
      case MenuItem.LOGIN:
        this.router.navigate(['auth/login']);
        break;
      case MenuItem.REGISTER:
        this.router.navigate(['auth/register']);
        break;
    }
  }
}
