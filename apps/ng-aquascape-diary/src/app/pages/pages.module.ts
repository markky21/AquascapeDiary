import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';

import { HomePageComponent } from './home-page/home-page.component';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

@NgModule({
  imports: [PagesRoutingModule, ThemeModule, NbMenuModule, MiscellaneousModule],
  declarations: [PagesComponent, HomePageComponent]
})
export class PagesModule {}
