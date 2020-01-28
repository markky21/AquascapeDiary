import { Component, Inject, Input, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import {
  NB_WINDOW,
  NbBadgePosition,
  NbMenuService,
  NbComponentSize,
  NbComponentStatus
} from '@nebular/theme';
import { NbMenuItem } from '@nebular/theme/components/menu/menu.service';
import { UserProfileMenuService } from './user-profile-menu.service';

@Component({
  selector: 'aquascape-diary-user-profile-menu',
  templateUrl: './user-profile-menu.component.html',
  styleUrls: ['./user-profile-menu.component.scss']
})
export class UserProfileMenuComponent implements OnInit {
  @Input() menuItems: NbMenuItem[] = this.userProfileMenuService.getMenuItems();
  @Input() size: NbComponentSize = 'medium';
  @Input() name: string = this.userProfileMenuService.getName();
  @Input() title: string = this.userProfileMenuService.getTitle();
  @Input() badgeText: string = this.userProfileMenuService.getBadgeText();
  @Input() badgeStatus: NbComponentStatus = 'success';
  @Input() badgePosition: NbBadgePosition = 'bottom right';
  @Input() picture: string = this.userProfileMenuService.getPicture();
  @Input() color: string = '#cccccc';

  constructor(
    private userProfileMenuService: UserProfileMenuService,
    private nbMenuService: NbMenuService,
    @Inject(NB_WINDOW) private window
  ) {}

  ngOnInit() {
    this.nbMenuService
      .onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'my-context-menu'),
        map(({ item: { title } }) => title)
      )
      .subscribe(title => this.window.alert(`${title} was clicked!`));
  }
}
