import { Component, Inject, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { NB_WINDOW, NbMenuService } from '@nebular/theme';

@Component({
  selector: 'aquascape-diary-user-profile-menu',
  templateUrl: './user-profile-menu.component.html',
  styleUrls: ['./user-profile-menu.component.scss']
})
export class UserProfileMenuComponent implements OnInit {
  items = [{ title: 'Profile' }, { title: 'Logout' }];

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
