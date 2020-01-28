import { Injectable } from '@angular/core';
import { NbMenuItem } from '@nebular/theme/components/menu/menu.service';

@Injectable({
  providedIn: 'root'
})
export class UserProfileMenuService {
  getMenuItems(): NbMenuItem[] {
    return [{ title: 'Profile' }, { title: 'Logout' }];
  }

  getName(): string {
    return 'John Doe';
  }

  getTitle(): string {
    return '';
  }

  getBadgeText(): string {
    return;
  }

  getPicture(): string {
    return 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG';
  }
}
