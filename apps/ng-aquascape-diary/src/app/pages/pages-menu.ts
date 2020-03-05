import { NbMenuItem } from '@nebular/theme';

export let MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home Page',
    icon: 'home-outline',
    link: '/pages/home',
    home: true,
    selected: false
  },
  {
    title: 'Tank List',
    icon: 'grid-outline',
    link: '/pages/tank-list',
    home: false,
    selected: false
  },
  {
    title: 'Diary',
    icon: 'edit-2-outline',
    link: '/pages/diary',
    home: false,
    selected: false
  }
];
