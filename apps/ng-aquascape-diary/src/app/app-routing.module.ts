import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'diary',
    loadChildren: () =>
      import('./pages/diary/diary.module').then(m => m.DiaryModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
