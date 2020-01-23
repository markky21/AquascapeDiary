import { Component, Inject, Input, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { NB_WINDOW, NbMenuService } from '@nebular/theme';
import { NbMenuItem } from '@nebular/theme/components/menu/menu.service';
import { NbComponentSize } from '@nebular/theme/components/component-size';
import { NbComponentStatus } from '@nebular/theme/components/component-status';
import { NbBadgePosition } from '@nebular/theme/components/badge/badge.component';

@Component({
  selector: 'aquascape-diary-user-profile-menu',
  templateUrl: './user-profile-menu.component.html',
  styleUrls: ['./user-profile-menu.component.scss']
})
export class UserProfileMenuComponent implements OnInit {
  @Input() menuItems: NbMenuItem[];
  @Input() size: NbComponentSize;
  @Input() name: string;
  @Input() title: string;
  @Input() badgeText: string;
  @Input() badgeStatus:NbComponentStatus;
  @Input() badgePosition: NbBadgePosition;
  @Input() picture: string;
  @Input() color: string;


  constructor(
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
