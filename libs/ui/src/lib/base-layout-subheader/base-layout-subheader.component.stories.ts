import { UiModule } from '../ui.module';
import { BaseLayoutSubheaderComponent } from './base-layout-subheader.component';

export default {
  title: 'BaseLayoutSubheaderComponent'
};

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: BaseLayoutSubheaderComponent,
  props: {}
});
