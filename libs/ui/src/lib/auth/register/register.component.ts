import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component
} from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService, NbRegisterComponent } from '@nebular/auth';

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
}
