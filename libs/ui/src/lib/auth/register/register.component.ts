import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component
} from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService, NbRegisterComponent } from '@nebular/auth';

import { AuthError, SubmitAction } from '../auth.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'aquascape-diary-register',
  templateUrl: './register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent extends NbRegisterComponent {
  public constructor(
    private authService: AuthService,
    protected nbAuthService: NbAuthService,
    protected changeDetectorRef: ChangeDetectorRef,
    protected router: Router
  ) {
    super(nbAuthService, {}, changeDetectorRef, router);
  }

  public register(): void {
    this.errors = this.messages = [];
    this.submitted = true;

    this.authService.onSubmit(this.user, SubmitAction.REGISTER).then(result => {
      this.submitted = false;

      this.cd.detectChanges();
    });
  }
}
