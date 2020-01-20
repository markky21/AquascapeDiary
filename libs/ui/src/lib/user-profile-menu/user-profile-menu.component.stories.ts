
import { UiModule } from '../ui.module';
import { UserProfileMenuComponent } from './user-profile-menu.component';

export default {
  title: 'UserProfileMenuComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: UserProfileMenuComponent,
  props: {
  }
})
