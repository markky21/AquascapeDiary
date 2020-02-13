import { Injectable } from '@angular/core';
import { NbOverlayContainerAdapter } from '@nebular/theme';

@Injectable()
export class NbOverlayContainerAdapterSub extends NbOverlayContainerAdapter {
  public setContainer(container: HTMLElement): void {
    this.container = container;
  }
  public clearContainer() {
    // this.container = null;
    // this._containerElement = null;
  }
}
