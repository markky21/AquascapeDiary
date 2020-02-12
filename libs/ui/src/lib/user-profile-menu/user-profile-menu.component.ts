import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  NbBadgePosition,
  NbComponentSize,
  NbComponentStatus,
  NbMenuService,
  NB_WINDOW
} from '@nebular/theme';
import { NbMenuItem } from '@nebular/theme/components/menu/menu.service';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

import { UserProfileMenuAbstractService } from './user-profile-menu.abstract.service';

@Component({
  selector: 'aquascape-diary-user-profile-menu',
  templateUrl: './user-profile-menu.component.html',
  styleUrls: ['./user-profile-menu.component.scss']
})
export class UserProfileMenuComponent implements OnInit {
  @Input() public menuItems$: Observable<NbMenuItem[]>;
  @Input() public name$: Observable<string>;
  @Input() public title$: Observable<string>;
  @Input() public badgeText$: Observable<string>;
  @Input() public picture$: Observable<string>;

  @Input() public size: NbComponentSize = 'medium';
  @Input() public badgeStatus: NbComponentStatus = 'success';
  @Input() public badgePosition: NbBadgePosition = 'bottom right';
  @Input() public color: string = '#cccccc';

  public constructor(
    private userProfileMenuService: UserProfileMenuAbstractService,
    private nbMenuService: NbMenuService,
    @Inject(NB_WINDOW) private window
  ) {
    this.menuItems$ = this.userProfileMenuService.getMenuItems$();
    this.name$ = this.userProfileMenuService.getName$();
    this.title$ = this.userProfileMenuService.getTitle$();
    this.badgeText$ = this.userProfileMenuService.getBadgeText$();
    this.picture$ = this.userProfileMenuService.getPicture$();
  }

  public ngOnInit() {
    this.nbMenuService
      .onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'my-context-menu'),
        map(({ item: { title } }) => title),
        tap(title => this.userProfileMenuService.onMenuItemClick(title))
      )
      .subscribe();
  }
}
