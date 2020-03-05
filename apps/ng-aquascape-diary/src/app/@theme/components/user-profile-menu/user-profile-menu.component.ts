import { Component, Inject, Input, OnInit } from '@angular/core';
import { NbAuthService } from '@nebular/auth';
import { NB_WINDOW, NbBadgePosition, NbComponentSize, NbComponentStatus, NbMenuService } from '@nebular/theme';
import { NbMenuItem } from '@nebular/theme/components/menu/menu.service';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

import { MenuItem } from './user-profile-menu.model';
import { UserProfileMenuService } from './user-profile-menu.service';

@Component({
  selector: 'aquascape-diary-user-profile-menu',
  templateUrl: './user-profile-menu.component.html',
  styleUrls: ['./user-profile-menu.component.scss']
})
export class UserProfileMenuComponent implements OnInit {
  public badgeText$: Observable<string>;
  public isAuthenticated$: Observable<boolean>;
  public menuItems$: Observable<NbMenuItem[]>;
  public name$: Observable<string>;
  public picture$: Observable<string>;
  public title$: Observable<string>;

  @Input() public size: NbComponentSize = 'medium';
  @Input() public badgeStatus: NbComponentStatus = 'success';
  @Input() public badgePosition: NbBadgePosition = 'bottom right';
  @Input() public color: string = '#cccccc';

  public constructor(
    private userProfileMenuService: UserProfileMenuService,
    private nbMenuService: NbMenuService,
    private nbAuthService: NbAuthService,
    @Inject(NB_WINDOW) private window
  ) {}

  public ngOnInit() {
    this.badgeText$ = this.userProfileMenuService.getBadgeText$();
    this.isAuthenticated$ = this.nbAuthService.onAuthenticationChange();
    this.menuItems$ = this.userProfileMenuService.getMenuItems$();
    this.name$ = this.userProfileMenuService.getName$();
    this.picture$ = this.userProfileMenuService.getPicture$();
    this.title$ = this.userProfileMenuService.getTitle$();

    this.nbMenuService
      .onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'my-context-menu'),
        map(({ item: { title } }) => title),
        tap(title => this.userProfileMenuService.onMenuItemClick(title as MenuItem))
      )
      .subscribe();
  }
}
