import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from '@aquascape-diary/ui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { HomePageModule } from './pages/home-page/home-page.module';
import { UiServicesModule } from './services/ui-services/ui-services.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    UiModule,
    HomePageModule,
    UiServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
