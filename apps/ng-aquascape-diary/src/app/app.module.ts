import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from '@aquascape-diary/ui';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { HomePageModule } from './pages/home-page/home-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    UiModule,
    HomePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
