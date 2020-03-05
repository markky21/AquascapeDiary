import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { NbMenuItem } from '@nebular/theme';

import { NbAuthService } from '@nebular/auth';
import { MENU_ITEMS } from '../../../pages/pages-menu';

export interface UiState {
  layout_showSideBar: boolean;
  menu_items: NbMenuItem[];
}

export function createInitialState(): UiState {
  return {
    layout_showSideBar: false,
    menu_items: MENU_ITEMS
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'ui' })
export class UiStore extends Store<UiState> {
  public constructor(private nbAuthService: NbAuthService) {
    super(createInitialState());

    this.nbAuthService.onAuthenticationChange().subscribe(is => this.update({ layout_showSideBar: is }));
  }
}
