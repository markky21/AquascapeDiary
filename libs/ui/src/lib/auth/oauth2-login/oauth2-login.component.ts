import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbAuthResult, NbAuthService } from '@nebular/auth';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'aquascape-diary-oauth2-login',
  templateUrl: './oauth2-login.component.html',
  styleUrls: ['./oauth2-login.component.css']
})
export class OAuth2LoginComponent implements OnDestroy {
  public alive = true;

  public constructor(private nbAuthService: NbAuthService) {}

  public login() {
    this.nbAuthService
      .authenticate('google')
      .pipe(takeWhile(() => this.alive))
      .subscribe((authResult: NbAuthResult) => {});
  }

  public ngOnDestroy(): void {
    this.alive = false;
  }
}
