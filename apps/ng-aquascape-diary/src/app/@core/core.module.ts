import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { NbAuthModule } from '@nebular/auth';
import { NbRoleProvider, NbSecurityModule } from '@nebular/security';
import { of as observableOf } from 'rxjs';

import { environment } from '../../environments/environment';

import { NB_AUTH_OPTIONS } from './auth/auth.config';
import { AnalyticsService } from './services/analytics.service';
import { LayoutService } from './services/layout.service';
import { SeoService } from './services/seo.service';
import { StateService } from './services/state.service';
import { throwIfAlreadyLoaded } from './utils/module-import-guard';

const DATA_SERVICES = [];

export class NbSimpleRoleProvider extends NbRoleProvider {
  public getRole() {
    // here you could provide any role based on any auth flow
    return observableOf('user');
  }
}

export const NB_CORE_PROVIDERS = [
  ...DATA_SERVICES,
  ...NbAuthModule.forRoot(NB_AUTH_OPTIONS).providers,
  NbSecurityModule.forRoot({
    accessControl: {
      guest: {
        view: '*'
      },
      user: {
        parent: 'guest',
        create: '*',
        edit: '*',
        remove: '*'
      }
    }
  }).providers,

  {
    provide: NbRoleProvider,
    useClass: NbSimpleRoleProvider
  },
  AnalyticsService,
  SeoService,
  StateService
];

@NgModule({
  imports: [CommonModule, environment.production ? [] : AkitaNgDevtools.forRoot()],
  exports: [NbAuthModule],
  providers: [LayoutService, ...NB_CORE_PROVIDERS]
})
export class CoreModule {
  public constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
