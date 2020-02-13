import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from '../@core/auth/auth-guard.service';

import { DiaryComponent } from './diary/diary.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'home',
        component: HomePageComponent
      },
      {
        path: 'diary',
        component: DiaryComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
