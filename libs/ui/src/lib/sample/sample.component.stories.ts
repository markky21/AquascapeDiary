
import { UiModule } from '../ui.module';
import { SampleComponent } from './sample.component';

export default {
  title: 'SampleComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: SampleComponent,
  props: {
  }
})
