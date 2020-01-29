import { Injectable } from '@angular/core';
import { NbMenuItem } from '@nebular/theme/components/menu/menu.service';

@Injectable({
  providedIn: 'root'
})
export class UserProfileMenuService {
  public getMenuItems(): NbMenuItem[] {
    return [{ title: 'Profile' }, { title: 'Logout' }];
  }

  public getName(): string {
    return 'John Doe';
  }

  public getTitle(): string {
    return '';
  }

  public getBadgeText(): string {
    return;
  }

  public getPicture(): string {
    return 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG';
  }
}
