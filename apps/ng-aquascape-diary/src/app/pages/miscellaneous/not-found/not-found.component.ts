import { Component } from '@angular/core';
import { NbMenuService } from '@nebular/theme';

@Component({
  selector: 'ngx-not-found',
  styleUrls: ['./not-found.component.scss'],
  templateUrl: './not-found.component.html'
})
export class NotFoundComponent {
  public constructor(private menuService: NbMenuService) {}

  public goToHome() {
    this.menuService.navigateHome();
  }
}
