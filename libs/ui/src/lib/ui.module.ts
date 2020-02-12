import { CommonModule } from '@angular/common';
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbActionsModule,
  NbContextMenuModule,
  NbIconModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
  NbThemeModule, NbToastrModule,
  NbUserModule
} from '@nebular/theme';

import { MainHeaderComponent } from './base-layout-main-header/main-header.component';
import { BaseLayoutSubheaderComponent } from './base-layout-subheader/base-layout-subheader.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { DirectivesModule } from './directives/directives.module';
import { UserProfileMenuAbstractService } from './user-profile-menu/user-profile-menu.abstract.service';
import { UserProfileMenuComponent } from './user-profile-menu/user-profile-menu.component';
import { UserProfileMenuStubService } from './user-profile-menu/user-profile-menu.stub.service';

export const nebularModules = [
  NbEvaIconsModule,
  NbIconModule,
  NbLayoutModule,
  NbSidebarModule,
  NbThemeModule,
  NbActionsModule,
  NbUserModule,
  NbContextMenuModule
];

@NgModule({
  imports: [
    ...nebularModules,
    CommonModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbThemeModule.forRoot({ name: 'default' }),
    NbToastrModule.forRoot(),
    DirectivesModule,
    RouterModule
  ],
  declarations: [
    BaseLayoutComponent,
    MainHeaderComponent,
    UserProfileMenuComponent,
    BaseLayoutSubheaderComponent
  ],
  providers: [
    {
      provide: UserProfileMenuAbstractService,
      useClass: UserProfileMenuStubService
    }
  ],
  exports: [
    ...nebularModules,
    DirectivesModule,
    BaseLayoutComponent,
    MainHeaderComponent,
    UserProfileMenuComponent
  ]
})
export class UiModule {
  public static forRoot(): ModuleWithProviders<UiModule> {
    return {
      ngModule: UiModule,
      providers: []
    };
  }

  /* make sure CoreModule is imported only by one NgModule the AppModule */
  public constructor(
    @Optional()
    @SkipSelf()
    parentModule: UiModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
