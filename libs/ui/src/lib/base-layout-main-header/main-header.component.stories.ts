import { RouterTestingModule } from '@angular/router/testing';
import { NbThemeModule } from '@nebular/theme';

import { UiModule } from '../ui.module';

import { MainHeaderComponent } from './main-header.component';

export default {
  title: 'MainHeaderComponent'
};

export const primary = () => ({
  moduleMetadata: {
    imports: [UiModule, RouterTestingModule]
  },
  component: MainHeaderComponent,
  props: {}
});
