import { RouterTestingModule } from '@angular/router/testing';
import { NbThemeModule } from '@nebular/theme';

import { UiModule } from '../ui.module';

import { BaseLayoutComponent } from './base-layout.component';

export default {
  title: 'BaseLayoutComponent'
};

export const primary = () => ({
  moduleMetadata: {
    imports: [UiModule, NbThemeModule.forRoot({ name: 'default' }), RouterTestingModule]
  },
  component: BaseLayoutComponent,
  props: {}
});
