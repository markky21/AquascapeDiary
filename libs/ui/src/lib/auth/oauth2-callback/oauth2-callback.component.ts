import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthResult, NbAuthService } from '@nebular/auth';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'aquascape-diary-oauth2-callback',
  templateUrl: './oauth2-callback.component.html',
  styleUrls: ['./oauth2-callback.component.css']
})
export class Oauth2CallbackComponent implements OnDestroy {
  public alive = true;

  public constructor(
    private authService: NbAuthService,
    private router: Router
  ) {
    this.authService
      .authenticate('google')
      .pipe(takeWhile(() => this.alive))
      .subscribe((authResult: NbAuthResult) => {
        if (authResult.isSuccess()) {
          this.router.navigateByUrl('/');
        }
      });
  }

  public ngOnDestroy(): void {
    this.alive = false;
  }
}
