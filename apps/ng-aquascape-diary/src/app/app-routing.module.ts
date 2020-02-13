import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbAuthComponent } from '@nebular/auth';

import { AuthGuardService } from './modules/auth/auth-guard.service';
import { authRoutes } from './modules/auth/auth.routing';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: authRoutes
  },
  {
    path: 'diary',
    loadChildren: () =>
      import('./pages/diary/diary.module').then(m => m.DiaryModule),
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
