import { Injectable } from '@angular/core';
import { NbMenuItem } from '@nebular/theme/components/menu/menu.service';
import { Observable, of } from 'rxjs';

import { UserProfileMenuAbstractService } from './user-profile-menu.abstract.service';

@Injectable()
export class UserProfileMenuStubService extends UserProfileMenuAbstractService {
  public onMenuItemClick(menuItem: string): void {
    alert('clicked: ' + menuItem);
  }

  public getBadgeText$(): Observable<string> {
    return of(null);
  }

  public getMenuItems$(): Observable<NbMenuItem[]> {
    return of([{ title: 'Profile' }, { title: 'Logout' }]);
  }

  public getName$(): Observable<string> {
    return of('John Doe');
  }

  public getPicture$(): Observable<string> {
    return of(null);
  }

  public getTitle$(): Observable<string> {
    return of(null);
  }
}
