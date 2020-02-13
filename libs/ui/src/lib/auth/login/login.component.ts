/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject
} from '@angular/core';
import { Router } from '@angular/router';
import {
  getDeepFromObject,
  NbAuthResult,
  NbAuthService,
  NbAuthSocialLink,
  NB_AUTH_OPTIONS
} from '@nebular/auth';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nb-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NbLoginSubComponent {
  public redirectDelay: number = 0;
  public showMessages: any = {};
  public strategy: string = '';

  public errors: string[] = [];
  public messages: string[] = [];
  public user: any = {};
  public submitted: boolean = false;
  public socialLinks: NbAuthSocialLink[] = [];
  public rememberMe = false;

  public constructor(
    protected service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    protected cd: ChangeDetectorRef,
    protected router: Router
  ) {
    this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
    this.showMessages = this.getConfigValue('forms.login.showMessages');
    this.strategy = this.getConfigValue('forms.login.strategy');
    this.socialLinks = this.getConfigValue('forms.login.socialLinks');
    this.rememberMe = this.getConfigValue('forms.login.rememberMe');
  }

  public login(): void {
    this.errors = [];
    this.messages = [];
    this.submitted = true;


    this.service
      .authenticate(this.strategy, this.user)
      .subscribe((result: NbAuthResult) => {

        this.submitted = false;

        if (result.isSuccess()) {
          this.messages = result.getMessages();
        } else {
          this.errors = result.getErrors();
        }

        const redirect = result.getRedirect();
        if (redirect) {
          setTimeout(() => {
            return this.router.navigateByUrl(redirect);
          }, this.redirectDelay);
        }
        this.cd.detectChanges();
      });
  }

  public getConfigValue(key: string): any {
    return getDeepFromObject(this.options, key, null);
  }
}
