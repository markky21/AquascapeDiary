import { Injectable } from '@angular/core';
import { UserProfileMenuAbstractService } from '@aquascape-diary/ui';
import { NbAuthService } from '@nebular/auth';
import { NbMenuItem } from '@nebular/theme';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Route, Router } from '@angular/router';
import { AppAuthService } from '../../modules/auth/app-auth.service';

enum MenuItem {
  PROFILE = 'Profile',
  LOGOUT = 'Logout',
  LOGIN = 'Log in'
}

@Injectable()
export class UserProfileMenuService extends UserProfileMenuAbstractService {
  private menuItemsWhenAuth: NbMenuItem[] = [
    { title: MenuItem.PROFILE },
    { title: MenuItem.LOGOUT }
  ];
  private menuItemsWhenNotAuth: NbMenuItem[] = [{ title: MenuItem.LOGIN }];

  public constructor(
    private appAuthService: AppAuthService,
    private router: Router
  ) {
    super();
  }

  public getMenuItems$(): Observable<NbMenuItem[]> {
    return this.appAuthService
      .isAuthenticated()
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
        this.appAuthService.logout('email').subscribe(console.log);
        break;
      case MenuItem.LOGIN:
        this.router.navigate(['auth/login']);
        break;
    }
  }
}
