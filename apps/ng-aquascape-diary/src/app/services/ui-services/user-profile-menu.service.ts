import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileMenuAbstractService } from '@aquascape-diary/ui';
import { NbAuthService } from '@nebular/auth';
import { NbMenuItem } from '@nebular/theme';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

enum MenuItem {
  PROFILE = 'Profile',
  LOGOUT = 'Logout',
  LOGIN = 'Log in',
  REGISTER = 'Register'
}

@Injectable()
export class UserProfileMenuService extends UserProfileMenuAbstractService {
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
  ) {
    super();
  }

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
        this.nbAuthService.logout('email').subscribe(console.log);
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
