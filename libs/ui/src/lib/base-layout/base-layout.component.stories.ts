import { UiModule } from '../ui.module';
import { BaseLayoutComponent } from './base-layout.component';
import { NbThemeModule } from '@nebular/theme';
import { RouterTestingModule } from '@angular/router/testing';

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
