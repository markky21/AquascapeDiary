import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  NB_WINDOW,
  NbBadgePosition,
  NbComponentSize,
  NbComponentStatus,
  NbMenuService
} from '@nebular/theme';
import { NbMenuItem } from '@nebular/theme/components/menu/menu.service';
import { filter, map } from 'rxjs/operators';

import { UserProfileMenuService } from './user-profile-menu.service';

@Component({
  selector: 'aquascape-diary-user-profile-menu',
  templateUrl: './user-profile-menu.component.html',
  styleUrls: ['./user-profile-menu.component.scss']
})
export class UserProfileMenuComponent implements OnInit {
  @Input() public menuItems: NbMenuItem[] = this.userProfileMenuService.getMenuItems();
  @Input() public size: NbComponentSize = 'medium';
  @Input() public name: string = this.userProfileMenuService.getName();
  @Input() public title: string = this.userProfileMenuService.getTitle();
  @Input() public badgeText: string = this.userProfileMenuService.getBadgeText();
  @Input() public badgeStatus: NbComponentStatus = 'success';
  @Input() public badgePosition: NbBadgePosition = 'bottom right';
  @Input() public picture: string = this.userProfileMenuService.getPicture();
  @Input() public color: string = '#cccccc';

  public constructor(
    private userProfileMenuService: UserProfileMenuService,
    private nbMenuService: NbMenuService,
    @Inject(NB_WINDOW) private window
  ) {}

  public ngOnInit() {
    this.nbMenuService
      .onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'my-context-menu'),
        map(({ item: { title } }) => title)
      )
      .subscribe(title => this.window.alert(`${title} was clicked!`));
  }
}
