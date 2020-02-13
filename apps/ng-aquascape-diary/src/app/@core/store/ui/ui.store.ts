import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface UiState {
  key: string;
}

export function createInitialState(): UiState {
  return {
    key: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'ui' })
export class UiStore extends Store<UiState> {
  public constructor() {
    super(createInitialState());
  }
}
