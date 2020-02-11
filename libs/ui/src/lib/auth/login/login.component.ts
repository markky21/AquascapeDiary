import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';


@Component({
  selector: 'aquascape-diary-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent extends NbLoginComponent {

}
