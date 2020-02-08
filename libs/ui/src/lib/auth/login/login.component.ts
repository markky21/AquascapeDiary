import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component
} from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService, NbLoginComponent } from '@nebular/auth';

import { AuthError, SubmitAction } from '../auth.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'aquascape-diary-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent extends NbLoginComponent {
  public redirectDelay: 2000;

  public constructor(
    private authService: AuthService,
    protected nbAuthService: NbAuthService,
    protected changeDetectorRef: ChangeDetectorRef,
    protected router: Router
  ) {
    super(nbAuthService, {}, changeDetectorRef, router);
  }
  public login(): void {
    this.errors = [];
    this.messages = [];
    this.submitted = true;

    this.authService.onSubmit(this.user, SubmitAction.LOGIN).then(result => {
      this.submitted = false;

     /* if ((result as UserCredential).user) {
        // TODO Toast Message
        this.messages = ['Successfully logged!'];

        setTimeout(() => {
          return this.router.navigateByUrl('/diary');
        }, this.redirectDelay);
      } else {
        this.errors = [(result as AuthError).message];
      }*/

      this.cd.detectChanges();
    });
  }
}
