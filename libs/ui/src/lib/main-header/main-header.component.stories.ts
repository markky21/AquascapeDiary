import { UiModule } from '../ui.module';
import { MainHeaderComponent } from './main-header.component';
import { RouterTestingModule } from '@angular/router/testing';

export default {
  title: 'MainHeaderComponent'
};

export const primary = () => ({
  moduleMetadata: {
    imports: [RouterTestingModule]
  },
  component: MainHeaderComponent,
  props: {}
});
