import { UiModule } from '../ui.module';
import { RouterTestingModule } from '@angular/router/testing';

export default {
  title: 'UserProfileMenuComponent'
};

export const primary = () => ({
  moduleMetadata: {
    imports: [UiModule, RouterTestingModule]
  },
  template: `
<nb-layout>
  <nb-layout-column>
    <aquascape-diary-user-profile-menu
        [menuItems]="menuItems"
        [size]="size"
        [name]="name"
        [title]="title"
        [badgeText]="badgeText"
        [badgePosition]="badgePosition"
        [badgeStatus]="badgeStatus"
        [picture]="picture"
        [color]="color"
    ></aquascape-diary-user-profile-menu>
  </nb-layout-column>
</nb-layout>
`,
  props: {
    menuItems: [{ title: 'Profile' }, { title: 'Logout' }],
    size: undefined,
    name: undefined,
    title: undefined,
    badgeText: undefined,
    badgePosition: undefined,
    badgeStatus: undefined,
    picture: undefined,
    color: undefined
  }
});
